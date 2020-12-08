// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0
// 	protoc        v3.14.0
// source: speechly/identity/v1/identity.proto

package identityv1

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// Top-level message sent by the client for the `Login` method.
type LoginRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A unique end-user device identifier.
	// Required.
	DeviceId string `protobuf:"bytes,1,opt,name=device_id,json=deviceId,proto3" json:"device_id,omitempty"`
	// Speechly application ID.
	// Required.
	AppId string `protobuf:"bytes,2,opt,name=app_id,json=appId,proto3" json:"app_id,omitempty"`
	// The language to use.
	// Must be a supported BCP-47 language code, eg. 'en-US'.
	// Defaults to the application's language.
	LanguageCode string `protobuf:"bytes,3,opt,name=language_code,json=languageCode,proto3" json:"language_code,omitempty"`
	// Define a specific model configuration to use.
	// Defaults to the application's latest configuration.
	ConfigId string `protobuf:"bytes,4,opt,name=config_id,json=configId,proto3" json:"config_id,omitempty"`
}

func (x *LoginRequest) Reset() {
	*x = LoginRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_identity_v1_identity_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginRequest) ProtoMessage() {}

func (x *LoginRequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_identity_v1_identity_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginRequest.ProtoReflect.Descriptor instead.
func (*LoginRequest) Descriptor() ([]byte, []int) {
	return file_speechly_identity_v1_identity_proto_rawDescGZIP(), []int{0}
}

func (x *LoginRequest) GetDeviceId() string {
	if x != nil {
		return x.DeviceId
	}
	return ""
}

func (x *LoginRequest) GetAppId() string {
	if x != nil {
		return x.AppId
	}
	return ""
}

func (x *LoginRequest) GetLanguageCode() string {
	if x != nil {
		return x.LanguageCode
	}
	return ""
}

func (x *LoginRequest) GetConfigId() string {
	if x != nil {
		return x.ConfigId
	}
	return ""
}

// Top-level message sent by the server for the `Login` method.
type LoginResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Access token which can used for Speechly SLU API.
	// The token is a JSON Web Token and includes all standard claims, as well as custom ones.
	// The token has expiration, so you should check whether it has expired before using it.
	// It is safe to cache the token for future use until its expiration date.
	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *LoginResponse) Reset() {
	*x = LoginResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_identity_v1_identity_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginResponse) ProtoMessage() {}

func (x *LoginResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_identity_v1_identity_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginResponse.ProtoReflect.Descriptor instead.
func (*LoginResponse) Descriptor() ([]byte, []int) {
	return file_speechly_identity_v1_identity_proto_rawDescGZIP(), []int{1}
}

func (x *LoginResponse) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

var File_speechly_identity_v1_identity_proto protoreflect.FileDescriptor

var file_speechly_identity_v1_identity_proto_rawDesc = []byte{
	0x0a, 0x23, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x31, 0x22, 0x84, 0x01, 0x0a, 0x0c,
	0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09,
	0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64, 0x12, 0x15, 0x0a, 0x06, 0x61, 0x70, 0x70,
	0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x70, 0x70, 0x49, 0x64,
	0x12, 0x23, 0x0a, 0x0d, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x5f, 0x63, 0x6f, 0x64,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67,
	0x65, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x5f,
	0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x49, 0x64, 0x22, 0x25, 0x0a, 0x0d, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x32, 0x5c, 0x0a, 0x08, 0x49, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x50, 0x0a, 0x05, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x12, 0x22,
	0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x23, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x21, 0x5a, 0x1f, 0x73, 0x70, 0x65, 0x65, 0x63,
	0x68, 0x6c, 0x79, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2f, 0x76, 0x31, 0x3b,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_speechly_identity_v1_identity_proto_rawDescOnce sync.Once
	file_speechly_identity_v1_identity_proto_rawDescData = file_speechly_identity_v1_identity_proto_rawDesc
)

func file_speechly_identity_v1_identity_proto_rawDescGZIP() []byte {
	file_speechly_identity_v1_identity_proto_rawDescOnce.Do(func() {
		file_speechly_identity_v1_identity_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_identity_v1_identity_proto_rawDescData)
	})
	return file_speechly_identity_v1_identity_proto_rawDescData
}

var file_speechly_identity_v1_identity_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_speechly_identity_v1_identity_proto_goTypes = []interface{}{
	(*LoginRequest)(nil),  // 0: speechly.identity.v1.LoginRequest
	(*LoginResponse)(nil), // 1: speechly.identity.v1.LoginResponse
}
var file_speechly_identity_v1_identity_proto_depIdxs = []int32{
	0, // 0: speechly.identity.v1.Identity.Login:input_type -> speechly.identity.v1.LoginRequest
	1, // 1: speechly.identity.v1.Identity.Login:output_type -> speechly.identity.v1.LoginResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_speechly_identity_v1_identity_proto_init() }
func file_speechly_identity_v1_identity_proto_init() {
	if File_speechly_identity_v1_identity_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_speechly_identity_v1_identity_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_speechly_identity_v1_identity_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LoginResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_speechly_identity_v1_identity_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_speechly_identity_v1_identity_proto_goTypes,
		DependencyIndexes: file_speechly_identity_v1_identity_proto_depIdxs,
		MessageInfos:      file_speechly_identity_v1_identity_proto_msgTypes,
	}.Build()
	File_speechly_identity_v1_identity_proto = out.File
	file_speechly_identity_v1_identity_proto_rawDesc = nil
	file_speechly_identity_v1_identity_proto_goTypes = nil
	file_speechly_identity_v1_identity_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// IdentityClient is the client API for Identity service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type IdentityClient interface {
	// Performs a login of specific Speechly application.
	// Returns an access token, that can be used to access Speechly SLU API.
	Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error)
}

type identityClient struct {
	cc grpc.ClientConnInterface
}

func NewIdentityClient(cc grpc.ClientConnInterface) IdentityClient {
	return &identityClient{cc}
}

func (c *identityClient) Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error) {
	out := new(LoginResponse)
	err := c.cc.Invoke(ctx, "/speechly.identity.v1.Identity/Login", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// IdentityServer is the server API for Identity service.
type IdentityServer interface {
	// Performs a login of specific Speechly application.
	// Returns an access token, that can be used to access Speechly SLU API.
	Login(context.Context, *LoginRequest) (*LoginResponse, error)
}

// UnimplementedIdentityServer can be embedded to have forward compatible implementations.
type UnimplementedIdentityServer struct {
}

func (*UnimplementedIdentityServer) Login(context.Context, *LoginRequest) (*LoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}

func RegisterIdentityServer(s *grpc.Server, srv IdentityServer) {
	s.RegisterService(&_Identity_serviceDesc, srv)
}

func _Identity_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(IdentityServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/speechly.identity.v1.Identity/Login",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(IdentityServer).Login(ctx, req.(*LoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Identity_serviceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.identity.v1.Identity",
	HandlerType: (*IdentityServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Login",
			Handler:    _Identity_Login_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "speechly/identity/v1/identity.proto",
}
