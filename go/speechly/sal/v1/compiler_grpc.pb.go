// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.1
// source: speechly/sal/v1/compiler.proto

package salv1

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
	Compiler_Compile_FullMethodName           = "/speechly.sal.v1.Compiler/Compile"
	Compiler_Validate_FullMethodName          = "/speechly.sal.v1.Compiler/Validate"
	Compiler_ExtractSALSources_FullMethodName = "/speechly.sal.v1.Compiler/ExtractSALSources"
	Compiler_Convert_FullMethodName           = "/speechly.sal.v1.Compiler/Convert"
)

// CompilerClient is the client API for Compiler service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CompilerClient interface {
	// Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings.
	Compile(ctx context.Context, opts ...grpc.CallOption) (Compiler_CompileClient, error)
	// Validates the SAL source and returns compilation notices / warnings and errors, if any.
	Validate(ctx context.Context, opts ...grpc.CallOption) (Compiler_ValidateClient, error)
	// Extracts raw, not compiled SAL templates from the SAL source.
	ExtractSALSources(ctx context.Context, opts ...grpc.CallOption) (Compiler_ExtractSALSourcesClient, error)
	// Converts an input configuration (e.g. Alexa) to SAL format
	Convert(ctx context.Context, opts ...grpc.CallOption) (Compiler_ConvertClient, error)
}

type compilerClient struct {
	cc grpc.ClientConnInterface
}

func NewCompilerClient(cc grpc.ClientConnInterface) CompilerClient {
	return &compilerClient{cc}
}

func (c *compilerClient) Compile(ctx context.Context, opts ...grpc.CallOption) (Compiler_CompileClient, error) {
	stream, err := c.cc.NewStream(ctx, &Compiler_ServiceDesc.Streams[0], Compiler_Compile_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &compilerCompileClient{stream}
	return x, nil
}

type Compiler_CompileClient interface {
	Send(*CompileRequest) error
	CloseAndRecv() (*CompileResult, error)
	grpc.ClientStream
}

type compilerCompileClient struct {
	grpc.ClientStream
}

func (x *compilerCompileClient) Send(m *CompileRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *compilerCompileClient) CloseAndRecv() (*CompileResult, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(CompileResult)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *compilerClient) Validate(ctx context.Context, opts ...grpc.CallOption) (Compiler_ValidateClient, error) {
	stream, err := c.cc.NewStream(ctx, &Compiler_ServiceDesc.Streams[1], Compiler_Validate_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &compilerValidateClient{stream}
	return x, nil
}

type Compiler_ValidateClient interface {
	Send(*AppSource) error
	CloseAndRecv() (*ValidateResult, error)
	grpc.ClientStream
}

type compilerValidateClient struct {
	grpc.ClientStream
}

func (x *compilerValidateClient) Send(m *AppSource) error {
	return x.ClientStream.SendMsg(m)
}

func (x *compilerValidateClient) CloseAndRecv() (*ValidateResult, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(ValidateResult)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *compilerClient) ExtractSALSources(ctx context.Context, opts ...grpc.CallOption) (Compiler_ExtractSALSourcesClient, error) {
	stream, err := c.cc.NewStream(ctx, &Compiler_ServiceDesc.Streams[2], Compiler_ExtractSALSources_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &compilerExtractSALSourcesClient{stream}
	return x, nil
}

type Compiler_ExtractSALSourcesClient interface {
	Send(*AppSource) error
	Recv() (*ExtractSALSourcesResult, error)
	grpc.ClientStream
}

type compilerExtractSALSourcesClient struct {
	grpc.ClientStream
}

func (x *compilerExtractSALSourcesClient) Send(m *AppSource) error {
	return x.ClientStream.SendMsg(m)
}

func (x *compilerExtractSALSourcesClient) Recv() (*ExtractSALSourcesResult, error) {
	m := new(ExtractSALSourcesResult)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *compilerClient) Convert(ctx context.Context, opts ...grpc.CallOption) (Compiler_ConvertClient, error) {
	stream, err := c.cc.NewStream(ctx, &Compiler_ServiceDesc.Streams[3], Compiler_Convert_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &compilerConvertClient{stream}
	return x, nil
}

type Compiler_ConvertClient interface {
	Send(*ConvertRequest) error
	CloseAndRecv() (*ConvertResult, error)
	grpc.ClientStream
}

type compilerConvertClient struct {
	grpc.ClientStream
}

func (x *compilerConvertClient) Send(m *ConvertRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *compilerConvertClient) CloseAndRecv() (*ConvertResult, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(ConvertResult)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// CompilerServer is the server API for Compiler service.
// All implementations must embed UnimplementedCompilerServer
// for forward compatibility
type CompilerServer interface {
	// Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings.
	Compile(Compiler_CompileServer) error
	// Validates the SAL source and returns compilation notices / warnings and errors, if any.
	Validate(Compiler_ValidateServer) error
	// Extracts raw, not compiled SAL templates from the SAL source.
	ExtractSALSources(Compiler_ExtractSALSourcesServer) error
	// Converts an input configuration (e.g. Alexa) to SAL format
	Convert(Compiler_ConvertServer) error
	mustEmbedUnimplementedCompilerServer()
}

// UnimplementedCompilerServer must be embedded to have forward compatible implementations.
type UnimplementedCompilerServer struct {
}

func (UnimplementedCompilerServer) Compile(Compiler_CompileServer) error {
	return status.Errorf(codes.Unimplemented, "method Compile not implemented")
}
func (UnimplementedCompilerServer) Validate(Compiler_ValidateServer) error {
	return status.Errorf(codes.Unimplemented, "method Validate not implemented")
}
func (UnimplementedCompilerServer) ExtractSALSources(Compiler_ExtractSALSourcesServer) error {
	return status.Errorf(codes.Unimplemented, "method ExtractSALSources not implemented")
}
func (UnimplementedCompilerServer) Convert(Compiler_ConvertServer) error {
	return status.Errorf(codes.Unimplemented, "method Convert not implemented")
}
func (UnimplementedCompilerServer) mustEmbedUnimplementedCompilerServer() {}

// UnsafeCompilerServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CompilerServer will
// result in compilation errors.
type UnsafeCompilerServer interface {
	mustEmbedUnimplementedCompilerServer()
}

func RegisterCompilerServer(s grpc.ServiceRegistrar, srv CompilerServer) {
	s.RegisterService(&Compiler_ServiceDesc, srv)
}

func _Compiler_Compile_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(CompilerServer).Compile(&compilerCompileServer{stream})
}

type Compiler_CompileServer interface {
	SendAndClose(*CompileResult) error
	Recv() (*CompileRequest, error)
	grpc.ServerStream
}

type compilerCompileServer struct {
	grpc.ServerStream
}

func (x *compilerCompileServer) SendAndClose(m *CompileResult) error {
	return x.ServerStream.SendMsg(m)
}

func (x *compilerCompileServer) Recv() (*CompileRequest, error) {
	m := new(CompileRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Compiler_Validate_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(CompilerServer).Validate(&compilerValidateServer{stream})
}

type Compiler_ValidateServer interface {
	SendAndClose(*ValidateResult) error
	Recv() (*AppSource, error)
	grpc.ServerStream
}

type compilerValidateServer struct {
	grpc.ServerStream
}

func (x *compilerValidateServer) SendAndClose(m *ValidateResult) error {
	return x.ServerStream.SendMsg(m)
}

func (x *compilerValidateServer) Recv() (*AppSource, error) {
	m := new(AppSource)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Compiler_ExtractSALSources_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(CompilerServer).ExtractSALSources(&compilerExtractSALSourcesServer{stream})
}

type Compiler_ExtractSALSourcesServer interface {
	Send(*ExtractSALSourcesResult) error
	Recv() (*AppSource, error)
	grpc.ServerStream
}

type compilerExtractSALSourcesServer struct {
	grpc.ServerStream
}

func (x *compilerExtractSALSourcesServer) Send(m *ExtractSALSourcesResult) error {
	return x.ServerStream.SendMsg(m)
}

func (x *compilerExtractSALSourcesServer) Recv() (*AppSource, error) {
	m := new(AppSource)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Compiler_Convert_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(CompilerServer).Convert(&compilerConvertServer{stream})
}

type Compiler_ConvertServer interface {
	SendAndClose(*ConvertResult) error
	Recv() (*ConvertRequest, error)
	grpc.ServerStream
}

type compilerConvertServer struct {
	grpc.ServerStream
}

func (x *compilerConvertServer) SendAndClose(m *ConvertResult) error {
	return x.ServerStream.SendMsg(m)
}

func (x *compilerConvertServer) Recv() (*ConvertRequest, error) {
	m := new(ConvertRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// Compiler_ServiceDesc is the grpc.ServiceDesc for Compiler service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Compiler_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.sal.v1.Compiler",
	HandlerType: (*CompilerServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Compile",
			Handler:       _Compiler_Compile_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "Validate",
			Handler:       _Compiler_Validate_Handler,
			ClientStreams: true,
		},
		{
			StreamName:    "ExtractSALSources",
			Handler:       _Compiler_ExtractSALSources_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "Convert",
			Handler:       _Compiler_Convert_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "speechly/sal/v1/compiler.proto",
}
