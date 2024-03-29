// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.1
// source: speechly/slu/v1/slu.proto

package sluv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	SLU_Stream_FullMethodName = "/speechly.slu.v1.SLU/Stream"
)

// SLUClient is the client API for SLU service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SLUClient interface {
	// Performs bidirectional streaming speech recognition: receive results while sending audio.
	//
	// First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.
	//
	// This RPC can handle multiple logical audio segments with the use of `SLUEvent_START` and `SLUEvent_STOP` messages,
	// which are used to indicate the beginning and the end of a segment.
	//
	// A typical call timeline will look like this:
	//
	// 1. Client starts the RPC.
	// 2. Client sends `SLUConfig` message with audio configuration.
	// 3. Client sends `SLUEvent.START`.
	// 4. Client sends audio and receives responses from the server.
	// 5. Client sends `SLUEvent.STOP`.
	// 6. Client sends `SLUEvent.START`.
	// 7. Client sends audio and receives responses from the server.
	// 8. Client sends `SLUEvent.STOP`.
	// 9. Client closes the stream and receives responses from the server until EOF is received.
	//
	// NB: the client does not have to wait until the server acknowledges the start / stop events,
	// this is done asynchronously. The client can deduplicate responses based on the audio context ID,
	// which will be present in every response message.
	Stream(ctx context.Context, opts ...grpc.CallOption) (SLU_StreamClient, error)
}

type sLUClient struct {
	cc grpc.ClientConnInterface
}

func NewSLUClient(cc grpc.ClientConnInterface) SLUClient {
	return &sLUClient{cc}
}

func (c *sLUClient) Stream(ctx context.Context, opts ...grpc.CallOption) (SLU_StreamClient, error) {
	stream, err := c.cc.NewStream(ctx, &SLU_ServiceDesc.Streams[0], SLU_Stream_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &sLUStreamClient{stream}
	return x, nil
}

type SLU_StreamClient interface {
	Send(*SLURequest) error
	Recv() (*SLUResponse, error)
	grpc.ClientStream
}

type sLUStreamClient struct {
	grpc.ClientStream
}

func (x *sLUStreamClient) Send(m *SLURequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *sLUStreamClient) Recv() (*SLUResponse, error) {
	m := new(SLUResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// SLUServer is the server API for SLU service.
// All implementations must embed UnimplementedSLUServer
// for forward compatibility
type SLUServer interface {
	// Performs bidirectional streaming speech recognition: receive results while sending audio.
	//
	// First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.
	//
	// This RPC can handle multiple logical audio segments with the use of `SLUEvent_START` and `SLUEvent_STOP` messages,
	// which are used to indicate the beginning and the end of a segment.
	//
	// A typical call timeline will look like this:
	//
	// 1. Client starts the RPC.
	// 2. Client sends `SLUConfig` message with audio configuration.
	// 3. Client sends `SLUEvent.START`.
	// 4. Client sends audio and receives responses from the server.
	// 5. Client sends `SLUEvent.STOP`.
	// 6. Client sends `SLUEvent.START`.
	// 7. Client sends audio and receives responses from the server.
	// 8. Client sends `SLUEvent.STOP`.
	// 9. Client closes the stream and receives responses from the server until EOF is received.
	//
	// NB: the client does not have to wait until the server acknowledges the start / stop events,
	// this is done asynchronously. The client can deduplicate responses based on the audio context ID,
	// which will be present in every response message.
	Stream(SLU_StreamServer) error
	mustEmbedUnimplementedSLUServer()
}

// UnimplementedSLUServer must be embedded to have forward compatible implementations.
type UnimplementedSLUServer struct {
}

func (UnimplementedSLUServer) Stream(SLU_StreamServer) error {
	return status.Errorf(codes.Unimplemented, "method Stream not implemented")
}
func (UnimplementedSLUServer) mustEmbedUnimplementedSLUServer() {}

// UnsafeSLUServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SLUServer will
// result in compilation errors.
type UnsafeSLUServer interface {
	mustEmbedUnimplementedSLUServer()
}

func RegisterSLUServer(s grpc.ServiceRegistrar, srv SLUServer) {
	s.RegisterService(&SLU_ServiceDesc, srv)
}

func _SLU_Stream_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(SLUServer).Stream(&sLUStreamServer{stream})
}

type SLU_StreamServer interface {
	Send(*SLUResponse) error
	Recv() (*SLURequest, error)
	grpc.ServerStream
}

type sLUStreamServer struct {
	grpc.ServerStream
}

func (x *sLUStreamServer) Send(m *SLUResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *sLUStreamServer) Recv() (*SLURequest, error) {
	m := new(SLURequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// SLU_ServiceDesc is the grpc.ServiceDesc for SLU service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SLU_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.slu.v1.SLU",
	HandlerType: (*SLUServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Stream",
			Handler:       _SLU_Stream_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "speechly/slu/v1/slu.proto",
}
