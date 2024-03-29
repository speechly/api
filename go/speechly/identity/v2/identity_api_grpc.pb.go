// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.1
// source: speechly/identity/v2/identity_api.proto

package identityv2

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
	IdentityAPI_Login_FullMethodName = "/speechly.identity.v2.IdentityAPI/Login"
)

// IdentityAPIClient is the client API for IdentityAPI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type IdentityAPIClient interface {
	// Performs a login of specific Speechly application.
	// Returns an access token which can be used to access the Speechly API.
	Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error)
}

type identityAPIClient struct {
	cc grpc.ClientConnInterface
}

func NewIdentityAPIClient(cc grpc.ClientConnInterface) IdentityAPIClient {
	return &identityAPIClient{cc}
}

func (c *identityAPIClient) Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error) {
	out := new(LoginResponse)
	err := c.cc.Invoke(ctx, IdentityAPI_Login_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// IdentityAPIServer is the server API for IdentityAPI service.
// All implementations must embed UnimplementedIdentityAPIServer
// for forward compatibility
type IdentityAPIServer interface {
	// Performs a login of specific Speechly application.
	// Returns an access token which can be used to access the Speechly API.
	Login(context.Context, *LoginRequest) (*LoginResponse, error)
	mustEmbedUnimplementedIdentityAPIServer()
}

// UnimplementedIdentityAPIServer must be embedded to have forward compatible implementations.
type UnimplementedIdentityAPIServer struct {
}

func (UnimplementedIdentityAPIServer) Login(context.Context, *LoginRequest) (*LoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}
func (UnimplementedIdentityAPIServer) mustEmbedUnimplementedIdentityAPIServer() {}

// UnsafeIdentityAPIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to IdentityAPIServer will
// result in compilation errors.
type UnsafeIdentityAPIServer interface {
	mustEmbedUnimplementedIdentityAPIServer()
}

func RegisterIdentityAPIServer(s grpc.ServiceRegistrar, srv IdentityAPIServer) {
	s.RegisterService(&IdentityAPI_ServiceDesc, srv)
}

func _IdentityAPI_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IdentityAPIServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: IdentityAPI_Login_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IdentityAPIServer).Login(ctx, req.(*LoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// IdentityAPI_ServiceDesc is the grpc.ServiceDesc for IdentityAPI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var IdentityAPI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.identity.v2.IdentityAPI",
	HandlerType: (*IdentityAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Login",
			Handler:    _IdentityAPI_Login_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "speechly/identity/v2/identity_api.proto",
}
