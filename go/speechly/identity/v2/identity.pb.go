// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.17.3
// source: speechly/identity/v2/identity.proto

package identityv2

import (
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

// Used as the scope in `LoginRequest` when the access is for a single Speechly application.
type ApplicationScope struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Speechly application ID. The defined application can be accessed with the returned token.
	// Required.
	AppId string `protobuf:"bytes,1,opt,name=app_id,json=appId,proto3" json:"app_id,omitempty"`
	// Define a specific model configuration to use.
	// Defaults to the application's latest configuration.
	ConfigId string `protobuf:"bytes,3,opt,name=config_id,json=configId,proto3" json:"config_id,omitempty"`
}

func (x *ApplicationScope) Reset() {
	*x = ApplicationScope{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_identity_v2_identity_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApplicationScope) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApplicationScope) ProtoMessage() {}

func (x *ApplicationScope) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_identity_v2_identity_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApplicationScope.ProtoReflect.Descriptor instead.
func (*ApplicationScope) Descriptor() ([]byte, []int) {
	return file_speechly_identity_v2_identity_proto_rawDescGZIP(), []int{0}
}

func (x *ApplicationScope) GetAppId() string {
	if x != nil {
		return x.AppId
	}
	return ""
}

func (x *ApplicationScope) GetConfigId() string {
	if x != nil {
		return x.ConfigId
	}
	return ""
}

// Used as the scope in `LoginRequest` when access is required for every application in a Speechly project.
type ProjectScope struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Speechly project ID. Every application in the same project is accessible with the same token.
	// Required.
	ProjectId string `protobuf:"bytes,1,opt,name=project_id,json=projectId,proto3" json:"project_id,omitempty"`
}

func (x *ProjectScope) Reset() {
	*x = ProjectScope{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_identity_v2_identity_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectScope) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectScope) ProtoMessage() {}

func (x *ProjectScope) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_identity_v2_identity_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectScope.ProtoReflect.Descriptor instead.
func (*ProjectScope) Descriptor() ([]byte, []int) {
	return file_speechly_identity_v2_identity_proto_rawDescGZIP(), []int{1}
}

func (x *ProjectScope) GetProjectId() string {
	if x != nil {
		return x.ProjectId
	}
	return ""
}

var File_speechly_identity_v2_identity_proto protoreflect.FileDescriptor

var file_speechly_identity_v2_identity_proto_rawDesc = []byte{
	0x0a, 0x23, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x2f, 0x76, 0x32, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x32, 0x22, 0x46, 0x0a, 0x10, 0x41,
	0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x63, 0x6f, 0x70, 0x65, 0x12,
	0x15, 0x0a, 0x06, 0x61, 0x70, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x61, 0x70, 0x70, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x49, 0x64, 0x22, 0x2d, 0x0a, 0x0c, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x53, 0x63,
	0x6f, 0x70, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x49, 0x64, 0x42, 0x80, 0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63,
	0x68, 0x6c, 0x79, 0x2e, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x76, 0x32, 0x42,
	0x0d, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x1f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x2f, 0x76, 0x32, 0x3b, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x76,
	0x32, 0xa2, 0x02, 0x03, 0x53, 0x49, 0x58, 0xaa, 0x02, 0x14, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68,
	0x6c, 0x79, 0x2e, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x56, 0x32, 0xca, 0x02,
	0x14, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x5c, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x5c, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_speechly_identity_v2_identity_proto_rawDescOnce sync.Once
	file_speechly_identity_v2_identity_proto_rawDescData = file_speechly_identity_v2_identity_proto_rawDesc
)

func file_speechly_identity_v2_identity_proto_rawDescGZIP() []byte {
	file_speechly_identity_v2_identity_proto_rawDescOnce.Do(func() {
		file_speechly_identity_v2_identity_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_identity_v2_identity_proto_rawDescData)
	})
	return file_speechly_identity_v2_identity_proto_rawDescData
}

var file_speechly_identity_v2_identity_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_speechly_identity_v2_identity_proto_goTypes = []interface{}{
	(*ApplicationScope)(nil), // 0: speechly.identity.v2.ApplicationScope
	(*ProjectScope)(nil),     // 1: speechly.identity.v2.ProjectScope
}
var file_speechly_identity_v2_identity_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_speechly_identity_v2_identity_proto_init() }
func file_speechly_identity_v2_identity_proto_init() {
	if File_speechly_identity_v2_identity_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_speechly_identity_v2_identity_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApplicationScope); i {
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
		file_speechly_identity_v2_identity_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectScope); i {
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
			RawDescriptor: file_speechly_identity_v2_identity_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_speechly_identity_v2_identity_proto_goTypes,
		DependencyIndexes: file_speechly_identity_v2_identity_proto_depIdxs,
		MessageInfos:      file_speechly_identity_v2_identity_proto_msgTypes,
	}.Build()
	File_speechly_identity_v2_identity_proto = out.File
	file_speechly_identity_v2_identity_proto_rawDesc = nil
	file_speechly_identity_v2_identity_proto_goTypes = nil
	file_speechly_identity_v2_identity_proto_depIdxs = nil
}
