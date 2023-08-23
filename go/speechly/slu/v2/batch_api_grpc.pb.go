// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.1
// source: speechly/slu/v2/batch_api.proto

package sluv2

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
	BatchAPI_ProcessAudioSource_FullMethodName = "/speechly.slu.v2.BatchAPI/ProcessAudioSource"
	BatchAPI_QueryStatus_FullMethodName        = "/speechly.slu.v2.BatchAPI/QueryStatus"
)

// BatchAPIClient is the client API for BatchAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BatchAPIClient interface {
	// Create a new background Speechly Batch API operation for a one or more
	// audio sources. Audio sources must be URIs of a files, reachable from the
	// API The response includes an `id` that is used to match the operation to
	// the results. A `reference` identifier can also be set. Also a
	// `batch_reference` can be set to mark that multiple audio sources form a
	// logical batch. In that case, the response will include a `batch_id`.
	ProcessAudioSource(ctx context.Context, in *ProcessAudioSourceRequest, opts ...grpc.CallOption) (*ProcessAudioSourceResponse, error)
	// Query the status of given operations.
	// If the `ProcessAudioSourceRequest` did not define a `destination` or
	// `completion_webhook` as a destination, the results are returned in the
	// `QueryStatusResponse`.
	QueryStatus(ctx context.Context, in *QueryStatusRequest, opts ...grpc.CallOption) (*QueryStatusResponse, error)
}

type batchAPIClient struct {
	cc grpc.ClientConnInterface
}

func NewBatchAPIClient(cc grpc.ClientConnInterface) BatchAPIClient {
	return &batchAPIClient{cc}
}

func (c *batchAPIClient) ProcessAudioSource(ctx context.Context, in *ProcessAudioSourceRequest, opts ...grpc.CallOption) (*ProcessAudioSourceResponse, error) {
	out := new(ProcessAudioSourceResponse)
	err := c.cc.Invoke(ctx, BatchAPI_ProcessAudioSource_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *batchAPIClient) QueryStatus(ctx context.Context, in *QueryStatusRequest, opts ...grpc.CallOption) (*QueryStatusResponse, error) {
	out := new(QueryStatusResponse)
	err := c.cc.Invoke(ctx, BatchAPI_QueryStatus_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BatchAPIServer is the server API for BatchAPI service.
// All implementations must embed UnimplementedBatchAPIServer
// for forward compatibility
type BatchAPIServer interface {
	// Create a new background Speechly Batch API operation for a one or more
	// audio sources. Audio sources must be URIs of a files, reachable from the
	// API The response includes an `id` that is used to match the operation to
	// the results. A `reference` identifier can also be set. Also a
	// `batch_reference` can be set to mark that multiple audio sources form a
	// logical batch. In that case, the response will include a `batch_id`.
	ProcessAudioSource(context.Context, *ProcessAudioSourceRequest) (*ProcessAudioSourceResponse, error)
	// Query the status of given operations.
	// If the `ProcessAudioSourceRequest` did not define a `destination` or
	// `completion_webhook` as a destination, the results are returned in the
	// `QueryStatusResponse`.
	QueryStatus(context.Context, *QueryStatusRequest) (*QueryStatusResponse, error)
	mustEmbedUnimplementedBatchAPIServer()
}

// UnimplementedBatchAPIServer must be embedded to have forward compatible implementations.
type UnimplementedBatchAPIServer struct {
}

func (UnimplementedBatchAPIServer) ProcessAudioSource(context.Context, *ProcessAudioSourceRequest) (*ProcessAudioSourceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ProcessAudioSource not implemented")
}
func (UnimplementedBatchAPIServer) QueryStatus(context.Context, *QueryStatusRequest) (*QueryStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueryStatus not implemented")
}
func (UnimplementedBatchAPIServer) mustEmbedUnimplementedBatchAPIServer() {}

// UnsafeBatchAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BatchAPIServer will
// result in compilation errors.
type UnsafeBatchAPIServer interface {
	mustEmbedUnimplementedBatchAPIServer()
}

func RegisterBatchAPIServer(s grpc.ServiceRegistrar, srv BatchAPIServer) {
	s.RegisterService(&BatchAPI_ServiceDesc, srv)
}

func _BatchAPI_ProcessAudioSource_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProcessAudioSourceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BatchAPIServer).ProcessAudioSource(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BatchAPI_ProcessAudioSource_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BatchAPIServer).ProcessAudioSource(ctx, req.(*ProcessAudioSourceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BatchAPI_QueryStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BatchAPIServer).QueryStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BatchAPI_QueryStatus_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BatchAPIServer).QueryStatus(ctx, req.(*QueryStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BatchAPI_ServiceDesc is the grpc.ServiceDesc for BatchAPI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BatchAPI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.slu.v2.BatchAPI",
	HandlerType: (*BatchAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ProcessAudioSource",
			Handler:    _BatchAPI_ProcessAudioSource_Handler,
		},
		{
			MethodName: "QueryStatus",
			Handler:    _BatchAPI_QueryStatus_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "speechly/slu/v2/batch_api.proto",
}
