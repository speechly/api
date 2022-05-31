package main

import (
	"context"
	"crypto/x509"
	"fmt"
	"io"
	"os"

	"github.com/speechly/api/go/speechly/identity/v2"
	"github.com/speechly/api/go/speechly/slu/v1"
	"github.com/youpy/go-wav"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
)

type SpeechlyClient struct {
	// open and valid network connection
	conn *grpc.ClientConn
	// reusable instance of the gRPC client, using the conn instance above
	sluClient sluv1.SLUClient
	// gRPC metadata with a valid Authorization pair
	authMD metadata.MD
}

func NewSpeechlyClient(ctx context.Context, appID, deviceID string) (*SpeechlyClient, error) {
	// get system TLS cert pool and create transport credentials to open a gRCP channel
	cp, err := x509.SystemCertPool()
	if err != nil {
		return nil, fmt.Errorf("failed to use system certpool: %w", err)
	}
	creds := credentials.NewClientTLSFromCert(cp, "")
	conn, err := grpc.Dial("api.speechly.com:443", grpc.WithTransportCredentials(creds))
	if err != nil {
		return nil, fmt.Errorf("could not create connection to api: %w", err)
	}

	// login to SpeechlyAPI to get a token
	c := identityv2.NewIdentityAPIClient(conn)
	req := &identityv2.LoginRequest{
		DeviceId: deviceID,
		Scope: &identityv2.LoginRequest_Application{
			Application: &identityv2.ApplicationScope{AppId: appID},
		},
	}
	res, err := c.Login(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("failed to login: %w", err)
	}
	// NOTE: the token expiration timestamp is returned in `res.ExpiresAt`.
	// To refresh the token, call `Login` again.

	authMD := metadata.Pairs("Authorization", fmt.Sprintf("Bearer %s", res.Token))
	sluClient := sluv1.NewSLUClient(conn)
	return &SpeechlyClient{conn, sluClient, authMD}, nil
}

// StreamSLU reads the given reader for raw audio, and sends it to the API. It will
// then print out the received results.
// NOTE: the audio needs to be PCM 16-bit 16kHz mono for the results to make sense.
func (c *SpeechlyClient) StreamSLU(ctx context.Context, audio io.Reader) error {
	authCtx := metadata.NewOutgoingContext(ctx, c.authMD)
	stream, err := c.sluClient.Stream(authCtx)
	if err != nil {
		return err
	}
	done := make(chan error)

	// start a goroutine to read the responses from the connection
	go func() {
		for {
			res, err := stream.Recv()
			if err != nil {
				// signal that we are done, EOF is the expected result.
				if err == io.EOF {
					done <- nil
				} else {
					done <- err
				}
				return
			}
			switch r := res.StreamingResponse.(type) {
			case *sluv1.SLUResponse_Started:
				fmt.Printf("audioContext started: %s\n", res.AudioContext)
			case *sluv1.SLUResponse_Finished:
				fmt.Printf("audioContext finished: %s\n", res.AudioContext)
			case *sluv1.SLUResponse_Transcript:
				fmt.Printf("word: %s\n", r.Transcript.Word)
			case *sluv1.SLUResponse_Entity:
				fmt.Printf("entity: %s (%s)\n", r.Entity.Entity, r.Entity.Value)
			case *sluv1.SLUResponse_Intent:
				fmt.Printf("intent: %s\n", r.Intent.Intent)
			}
		}
	}()

	// send audio configuration
	_ = stream.Send(&sluv1.SLURequest{StreamingRequest: &sluv1.SLURequest_Config{
		Config: &sluv1.SLUConfig{
			Encoding:        sluv1.SLUConfig_LINEAR16,
			Channels:        1,
			SampleRateHertz: 16000,
			LanguageCode:    "en-US",
		},
	}})

	// start a new audio context
	_ = stream.Send(&sluv1.SLURequest{StreamingRequest: &sluv1.SLURequest_Start{}})

	// read the given audio
	b := make([]byte, 1024)
	for {
		n, err := audio.Read(b)
		if err == io.EOF {
			// stop the audio context
			_ = stream.Send(&sluv1.SLURequest{StreamingRequest: &sluv1.SLURequest_Stop{}})
			break
		}
		_ = stream.Send(&sluv1.SLURequest{
			StreamingRequest: &sluv1.SLURequest_Audio{
				Audio: b[:n],
			},
		})
	}
	// signal that the client will not send anything more (half-close)
	_ = stream.CloseSend()

	// wait for the response reader
	return <-done
}

func main() {
	if len(os.Args) != 3 {
		panic("mandatory parameters missing: [appId] [wav]")
	}
	appID := os.Args[1]
	wavFile := os.Args[2]

	deviceID := "f443dea4-3d97-439d-bbe8-d91d734ef1f0"
	ctx := context.Background()

	// create a new API client
	c, err := NewSpeechlyClient(ctx, appID, deviceID)
	if err != nil {
		panic(fmt.Errorf("could not create a SpeechlyClient: %w", err))
	}

	// open a wav file for testing
	infile, err := os.Open(wavFile)
	if err != nil {
		panic(fmt.Errorf("could not open wav file: %w", err))
	}
	defer infile.Close()
	reader := wav.NewReader(infile)

	// call SLU with wav reader
	err = c.StreamSLU(ctx, reader)
	if err != nil {
		panic(fmt.Errorf("stream failed: %w", err))
	}
	fmt.Println("stream done!")
}
