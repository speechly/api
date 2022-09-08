// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.17.3
// source: speechly/config/v1/model_api.proto

package configv1

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

// ModelAPIClient is the client API for ModelAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ModelAPIClient interface {
	// Downloads a model bundle for on-device use.
	DownloadModel(ctx context.Context, in *DownloadModelRequest, opts ...grpc.CallOption) (ModelAPI_DownloadModelClient, error)
}

type modelAPIClient struct {
	cc grpc.ClientConnInterface
}

func NewModelAPIClient(cc grpc.ClientConnInterface) ModelAPIClient {
	return &modelAPIClient{cc}
}

func (c *modelAPIClient) DownloadModel(ctx context.Context, in *DownloadModelRequest, opts ...grpc.CallOption) (ModelAPI_DownloadModelClient, error) {
	stream, err := c.cc.NewStream(ctx, &ModelAPI_ServiceDesc.Streams[0], "/speechly.config.v1.ModelAPI/DownloadModel", opts...)
	if err != nil {
		return nil, err
	}
	x := &modelAPIDownloadModelClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ModelAPI_DownloadModelClient interface {
	Recv() (*DownloadModelResponse, error)
	grpc.ClientStream
}

type modelAPIDownloadModelClient struct {
	grpc.ClientStream
}

func (x *modelAPIDownloadModelClient) Recv() (*DownloadModelResponse, error) {
	m := new(DownloadModelResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// ModelAPIServer is the server API for ModelAPI service.
// All implementations must embed UnimplementedModelAPIServer
// for forward compatibility
type ModelAPIServer interface {
	// Downloads a model bundle for on-device use.
	DownloadModel(*DownloadModelRequest, ModelAPI_DownloadModelServer) error
	mustEmbedUnimplementedModelAPIServer()
}

// UnimplementedModelAPIServer must be embedded to have forward compatible implementations.
type UnimplementedModelAPIServer struct {
}

func (UnimplementedModelAPIServer) DownloadModel(*DownloadModelRequest, ModelAPI_DownloadModelServer) error {
	return status.Errorf(codes.Unimplemented, "method DownloadModel not implemented")
}
func (UnimplementedModelAPIServer) mustEmbedUnimplementedModelAPIServer() {}

// UnsafeModelAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ModelAPIServer will
// result in compilation errors.
type UnsafeModelAPIServer interface {
	mustEmbedUnimplementedModelAPIServer()
}

func RegisterModelAPIServer(s grpc.ServiceRegistrar, srv ModelAPIServer) {
	s.RegisterService(&ModelAPI_ServiceDesc, srv)
}

func _ModelAPI_DownloadModel_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(DownloadModelRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ModelAPIServer).DownloadModel(m, &modelAPIDownloadModelServer{stream})
}

type ModelAPI_DownloadModelServer interface {
	Send(*DownloadModelResponse) error
	grpc.ServerStream
}

type modelAPIDownloadModelServer struct {
	grpc.ServerStream
}

func (x *modelAPIDownloadModelServer) Send(m *DownloadModelResponse) error {
	return x.ServerStream.SendMsg(m)
}

// ModelAPI_ServiceDesc is the grpc.ServiceDesc for ModelAPI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ModelAPI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.config.v1.ModelAPI",
	HandlerType: (*ModelAPIServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "DownloadModel",
			Handler:       _ModelAPI_DownloadModel_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "speechly/config/v1/model_api.proto",
}
