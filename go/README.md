# Go module for Speechly gRPC API

Ready-made Speechly API stubs for easy creation of clients in Go.

## Installation

Requires Go modules to be used. Install the module with:

```sh
go get github.com/speechly/api/go
```

## Usage

There is no ready made API client, but it is fairly easy to create one. See the full example in [example/main.go](https://github.com/speechly/api/blob/master/go/example/main.go).

### Creating a Channel (grpc.ClientConn)

Get the system cert pool and open a TLS connection to the API:

``` go
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
```

### IdentityAPI

Login by giving an `appId` (get one from Speechly dashboard) and a `deviceId`. The device ID identifies the audio source, to make the results more accurate.

The end result is an `authMD` instance, which can be used to create authenticated contexts for following API calls.


``` go
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
authMD := metadata.Pairs("Authorization", fmt.Sprintf("Bearer %s", res.Token))
```

### SLU

Open a bidirectional stream and send audio. Note the audio format!

``` go
sluClient := sluv1.NewSLUClient(conn)
authCtx := metadata.NewOutgoingContext(ctx, authMD)
stream, err := sluClient.Stream(authCtx)
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

```
