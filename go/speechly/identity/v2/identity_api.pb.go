// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: speechly/identity/v2/identity_api.proto

package identityv2

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// Top-level message sent by the client for the `Login` method.
type LoginRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A unique end-user device identifier.
	// Must be a `UUID`.
	// Required.
	DeviceId string `protobuf:"bytes,1,opt,name=device_id,json=deviceId,proto3" json:"device_id,omitempty"`
	// Types that are assignable to Scope:
	//	*LoginRequest_Application
	//	*LoginRequest_Project
	Scope isLoginRequest_Scope `protobuf_oneof:"scope"`
}

func (x *LoginRequest) Reset() {
	*x = LoginRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_identity_v2_identity_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginRequest) ProtoMessage() {}

func (x *LoginRequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_identity_v2_identity_api_proto_msgTypes[0]
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
	return file_speechly_identity_v2_identity_api_proto_rawDescGZIP(), []int{0}
}

func (x *LoginRequest) GetDeviceId() string {
	if x != nil {
		return x.DeviceId
	}
	return ""
}

func (m *LoginRequest) GetScope() isLoginRequest_Scope {
	if m != nil {
		return m.Scope
	}
	return nil
}

func (x *LoginRequest) GetApplication() *ApplicationScope {
	if x, ok := x.GetScope().(*LoginRequest_Application); ok {
		return x.Application
	}
	return nil
}

func (x *LoginRequest) GetProject() *ProjectScope {
	if x, ok := x.GetScope().(*LoginRequest_Project); ok {
		return x.Project
	}
	return nil
}

type isLoginRequest_Scope interface {
	isLoginRequest_Scope()
}

type LoginRequest_Application struct {
	// Login scope application: use the given application context for all utterances.
	Application *ApplicationScope `protobuf:"bytes,2,opt,name=application,proto3,oneof"`
}

type LoginRequest_Project struct {
	// Login scope project: define the target application per utterance.
	// The target applications must be located in the same project.
	Project *ProjectScope `protobuf:"bytes,3,opt,name=project,proto3,oneof"`
}

func (*LoginRequest_Application) isLoginRequest_Scope() {}

func (*LoginRequest_Project) isLoginRequest_Scope() {}

// Top-level message returned by the server for the `Login` method.
type LoginResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Access token which can used for the Speechly API.
	// The token is a JSON Web Token and includes all standard claims, as well as custom ones.
	// The token has expiration, so you should check whether it has expired before using it.
	// It is safe to cache the token for future use until its expiration date.
	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	// Amount of seconds the returned token is valid.
	ValidForS uint32 `protobuf:"varint,2,opt,name=valid_for_s,json=validForS,proto3" json:"valid_for_s,omitempty"`
	// Token expiration time in seconds after 1970-01-01 ("unix time").
	ExpiresAtEpoch uint64 `protobuf:"varint,3,opt,name=expires_at_epoch,json=expiresAtEpoch,proto3" json:"expires_at_epoch,omitempty"`
	// ISO-formatted UTC timestamp of the expiration time of the returned token.
	ExpiresAt string `protobuf:"bytes,4,opt,name=expires_at,json=expiresAt,proto3" json:"expires_at,omitempty"`
}

func (x *LoginResponse) Reset() {
	*x = LoginResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_identity_v2_identity_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LoginResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginResponse) ProtoMessage() {}

func (x *LoginResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_identity_v2_identity_api_proto_msgTypes[1]
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
	return file_speechly_identity_v2_identity_api_proto_rawDescGZIP(), []int{1}
}

func (x *LoginResponse) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *LoginResponse) GetValidForS() uint32 {
	if x != nil {
		return x.ValidForS
	}
	return 0
}

func (x *LoginResponse) GetExpiresAtEpoch() uint64 {
	if x != nil {
		return x.ExpiresAtEpoch
	}
	return 0
}

func (x *LoginResponse) GetExpiresAt() string {
	if x != nil {
		return x.ExpiresAt
	}
	return ""
}

var File_speechly_identity_v2_identity_api_proto protoreflect.FileDescriptor

var file_speechly_identity_v2_identity_api_proto_rawDesc = []byte{
	0x0a, 0x27, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x2f, 0x76, 0x32, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x5f,
	0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x73, 0x70, 0x65, 0x65, 0x63,
	0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x32, 0x1a,
	0x23, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x2f, 0x76, 0x32, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xc0, 0x01, 0x0a, 0x0c, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64,
	0x12, 0x4a, 0x0a, 0x0b, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79,
	0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x32, 0x2e, 0x41, 0x70, 0x70,
	0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x48, 0x00, 0x52,
	0x0b, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3e, 0x0a, 0x07,
	0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e,
	0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x63, 0x6f, 0x70,
	0x65, 0x48, 0x00, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x42, 0x07, 0x0a, 0x05,
	0x73, 0x63, 0x6f, 0x70, 0x65, 0x22, 0x8e, 0x01, 0x0a, 0x0d, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1e, 0x0a,
	0x0b, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x5f, 0x66, 0x6f, 0x72, 0x5f, 0x73, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x09, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x46, 0x6f, 0x72, 0x53, 0x12, 0x28, 0x0a,
	0x10, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x5f, 0x61, 0x74, 0x5f, 0x65, 0x70, 0x6f, 0x63,
	0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0e, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73,
	0x41, 0x74, 0x45, 0x70, 0x6f, 0x63, 0x68, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x78, 0x70, 0x69, 0x72,
	0x65, 0x73, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x65, 0x78, 0x70,
	0x69, 0x72, 0x65, 0x73, 0x41, 0x74, 0x32, 0x7b, 0x0a, 0x0b, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x41, 0x50, 0x49, 0x12, 0x6c, 0x0a, 0x05, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x12, 0x22,
	0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x23, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1a, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x14, 0x12,
	0x12, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x6e,
	0x2f, 0x76, 0x32, 0x42, 0x83, 0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x32,
	0x42, 0x10, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x41, 0x70, 0x69, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x1f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x69,
	0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2f, 0x76, 0x32, 0x3b, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x76, 0x32, 0xa2, 0x02, 0x03, 0x53, 0x49, 0x58, 0xaa, 0x02, 0x14, 0x53, 0x70,
	0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e,
	0x56, 0x32, 0xca, 0x02, 0x14, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x5c, 0x49, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x5c, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_speechly_identity_v2_identity_api_proto_rawDescOnce sync.Once
	file_speechly_identity_v2_identity_api_proto_rawDescData = file_speechly_identity_v2_identity_api_proto_rawDesc
)

func file_speechly_identity_v2_identity_api_proto_rawDescGZIP() []byte {
	file_speechly_identity_v2_identity_api_proto_rawDescOnce.Do(func() {
		file_speechly_identity_v2_identity_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_identity_v2_identity_api_proto_rawDescData)
	})
	return file_speechly_identity_v2_identity_api_proto_rawDescData
}

var file_speechly_identity_v2_identity_api_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_speechly_identity_v2_identity_api_proto_goTypes = []interface{}{
	(*LoginRequest)(nil),     // 0: speechly.identity.v2.LoginRequest
	(*LoginResponse)(nil),    // 1: speechly.identity.v2.LoginResponse
	(*ApplicationScope)(nil), // 2: speechly.identity.v2.ApplicationScope
	(*ProjectScope)(nil),     // 3: speechly.identity.v2.ProjectScope
}
var file_speechly_identity_v2_identity_api_proto_depIdxs = []int32{
	2, // 0: speechly.identity.v2.LoginRequest.application:type_name -> speechly.identity.v2.ApplicationScope
	3, // 1: speechly.identity.v2.LoginRequest.project:type_name -> speechly.identity.v2.ProjectScope
	0, // 2: speechly.identity.v2.IdentityAPI.Login:input_type -> speechly.identity.v2.LoginRequest
	1, // 3: speechly.identity.v2.IdentityAPI.Login:output_type -> speechly.identity.v2.LoginResponse
	3, // [3:4] is the sub-list for method output_type
	2, // [2:3] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_speechly_identity_v2_identity_api_proto_init() }
func file_speechly_identity_v2_identity_api_proto_init() {
	if File_speechly_identity_v2_identity_api_proto != nil {
		return
	}
	file_speechly_identity_v2_identity_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_speechly_identity_v2_identity_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
		file_speechly_identity_v2_identity_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
	file_speechly_identity_v2_identity_api_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*LoginRequest_Application)(nil),
		(*LoginRequest_Project)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_speechly_identity_v2_identity_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_speechly_identity_v2_identity_api_proto_goTypes,
		DependencyIndexes: file_speechly_identity_v2_identity_api_proto_depIdxs,
		MessageInfos:      file_speechly_identity_v2_identity_api_proto_msgTypes,
	}.Build()
	File_speechly_identity_v2_identity_api_proto = out.File
	file_speechly_identity_v2_identity_api_proto_rawDesc = nil
	file_speechly_identity_v2_identity_api_proto_goTypes = nil
	file_speechly_identity_v2_identity_api_proto_depIdxs = nil
}
