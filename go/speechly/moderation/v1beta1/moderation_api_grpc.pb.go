// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.1
// source: speechly/moderation/v1beta1/moderation_api.proto

package sluv1beta1

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
	ModerationAPI_AudioModeration_FullMethodName          = "/speechly.moderation.v1beta1.ModerationAPI/AudioModeration"
	ModerationAPI_StreamingAudioModeration_FullMethodName = "/speechly.moderation.v1beta1.ModerationAPI/StreamingAudioModeration"
	ModerationAPI_TextModeration_FullMethodName           = "/speechly.moderation.v1beta1.ModerationAPI/TextModeration"
)

// ModerationAPIClient is the client API for ModerationAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ModerationAPIClient interface {
	// Stream audio to be moderated and receive all results once whole audio has been processed.
	// The discourse context may be described for improved performance.
	// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
	AudioModeration(ctx context.Context, opts ...grpc.CallOption) (ModerationAPI_AudioModerationClient, error)
	// Stream audio to be moderated and receive results for identified segments as soon results as possible.
	// The discourse context may be described for improved performance.
	// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
	StreamingAudioModeration(ctx context.Context, opts ...grpc.CallOption) (ModerationAPI_StreamingAudioModerationClient, error)
	// Moderate a text utterance.
	// The discourse context may be described for improved performance.
	// The related audio may be identified using `audio_context_id`.
	TextModeration(ctx context.Context, in *TextModerationRequest, opts ...grpc.CallOption) (*TextModerationResponse, error)
}

type moderationAPIClient struct {
	cc grpc.ClientConnInterface
}

func NewModerationAPIClient(cc grpc.ClientConnInterface) ModerationAPIClient {
	return &moderationAPIClient{cc}
}

func (c *moderationAPIClient) AudioModeration(ctx context.Context, opts ...grpc.CallOption) (ModerationAPI_AudioModerationClient, error) {
	stream, err := c.cc.NewStream(ctx, &ModerationAPI_ServiceDesc.Streams[0], ModerationAPI_AudioModeration_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &moderationAPIAudioModerationClient{stream}
	return x, nil
}

type ModerationAPI_AudioModerationClient interface {
	Send(*AudioModerationRequest) error
	CloseAndRecv() (*AudioModerationResponse, error)
	grpc.ClientStream
}

type moderationAPIAudioModerationClient struct {
	grpc.ClientStream
}

func (x *moderationAPIAudioModerationClient) Send(m *AudioModerationRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *moderationAPIAudioModerationClient) CloseAndRecv() (*AudioModerationResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(AudioModerationResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *moderationAPIClient) StreamingAudioModeration(ctx context.Context, opts ...grpc.CallOption) (ModerationAPI_StreamingAudioModerationClient, error) {
	stream, err := c.cc.NewStream(ctx, &ModerationAPI_ServiceDesc.Streams[1], ModerationAPI_StreamingAudioModeration_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &moderationAPIStreamingAudioModerationClient{stream}
	return x, nil
}

type ModerationAPI_StreamingAudioModerationClient interface {
	Send(*StreamingAudioModerationRequest) error
	Recv() (*StreamingAudioModerationResponse, error)
	grpc.ClientStream
}

type moderationAPIStreamingAudioModerationClient struct {
	grpc.ClientStream
}

func (x *moderationAPIStreamingAudioModerationClient) Send(m *StreamingAudioModerationRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *moderationAPIStreamingAudioModerationClient) Recv() (*StreamingAudioModerationResponse, error) {
	m := new(StreamingAudioModerationResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *moderationAPIClient) TextModeration(ctx context.Context, in *TextModerationRequest, opts ...grpc.CallOption) (*TextModerationResponse, error) {
	out := new(TextModerationResponse)
	err := c.cc.Invoke(ctx, ModerationAPI_TextModeration_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModerationAPIServer is the server API for ModerationAPI service.
// All implementations must embed UnimplementedModerationAPIServer
// for forward compatibility
type ModerationAPIServer interface {
	// Stream audio to be moderated and receive all results once whole audio has been processed.
	// The discourse context may be described for improved performance.
	// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
	AudioModeration(ModerationAPI_AudioModerationServer) error
	// Stream audio to be moderated and receive results for identified segments as soon results as possible.
	// The discourse context may be described for improved performance.
	// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
	StreamingAudioModeration(ModerationAPI_StreamingAudioModerationServer) error
	// Moderate a text utterance.
	// The discourse context may be described for improved performance.
	// The related audio may be identified using `audio_context_id`.
	TextModeration(context.Context, *TextModerationRequest) (*TextModerationResponse, error)
	mustEmbedUnimplementedModerationAPIServer()
}

// UnimplementedModerationAPIServer must be embedded to have forward compatible implementations.
type UnimplementedModerationAPIServer struct {
}

func (UnimplementedModerationAPIServer) AudioModeration(ModerationAPI_AudioModerationServer) error {
	return status.Errorf(codes.Unimplemented, "method AudioModeration not implemented")
}
func (UnimplementedModerationAPIServer) StreamingAudioModeration(ModerationAPI_StreamingAudioModerationServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamingAudioModeration not implemented")
}
func (UnimplementedModerationAPIServer) TextModeration(context.Context, *TextModerationRequest) (*TextModerationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TextModeration not implemented")
}
func (UnimplementedModerationAPIServer) mustEmbedUnimplementedModerationAPIServer() {}

// UnsafeModerationAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ModerationAPIServer will
// result in compilation errors.
type UnsafeModerationAPIServer interface {
	mustEmbedUnimplementedModerationAPIServer()
}

func RegisterModerationAPIServer(s grpc.ServiceRegistrar, srv ModerationAPIServer) {
	s.RegisterService(&ModerationAPI_ServiceDesc, srv)
}

func _ModerationAPI_AudioModeration_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ModerationAPIServer).AudioModeration(&moderationAPIAudioModerationServer{stream})
}

type ModerationAPI_AudioModerationServer interface {
	SendAndClose(*AudioModerationResponse) error
	Recv() (*AudioModerationRequest, error)
	grpc.ServerStream
}

type moderationAPIAudioModerationServer struct {
	grpc.ServerStream
}

func (x *moderationAPIAudioModerationServer) SendAndClose(m *AudioModerationResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *moderationAPIAudioModerationServer) Recv() (*AudioModerationRequest, error) {
	m := new(AudioModerationRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _ModerationAPI_StreamingAudioModeration_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ModerationAPIServer).StreamingAudioModeration(&moderationAPIStreamingAudioModerationServer{stream})
}

type ModerationAPI_StreamingAudioModerationServer interface {
	Send(*StreamingAudioModerationResponse) error
	Recv() (*StreamingAudioModerationRequest, error)
	grpc.ServerStream
}

type moderationAPIStreamingAudioModerationServer struct {
	grpc.ServerStream
}

func (x *moderationAPIStreamingAudioModerationServer) Send(m *StreamingAudioModerationResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *moderationAPIStreamingAudioModerationServer) Recv() (*StreamingAudioModerationRequest, error) {
	m := new(StreamingAudioModerationRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _ModerationAPI_TextModeration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TextModerationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModerationAPIServer).TextModeration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ModerationAPI_TextModeration_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModerationAPIServer).TextModeration(ctx, req.(*TextModerationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ModerationAPI_ServiceDesc is the grpc.ServiceDesc for ModerationAPI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ModerationAPI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.moderation.v1beta1.ModerationAPI",
	HandlerType: (*ModerationAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TextModeration",
			Handler:    _ModerationAPI_TextModeration_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "AudioModeration",
			Handler:       _ModerationAPI_AudioModeration_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "StreamingAudioModeration",
			Handler:       _ModerationAPI_StreamingAudioModeration_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "speechly/moderation/v1beta1/moderation_api.proto",
}