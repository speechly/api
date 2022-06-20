// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: speechly/analytics/v1/analytics.proto

package analyticsv1

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

// Aggregation granularity.
type Aggregation int32

const (
	Aggregation_AGGREGATION_INVALID Aggregation = 0
	Aggregation_AGGREGATION_MONTHLY Aggregation = 1
	Aggregation_AGGREGATION_DAILY   Aggregation = 2
	Aggregation_AGGREGATION_HOURLY  Aggregation = 3
)

// Enum value maps for Aggregation.
var (
	Aggregation_name = map[int32]string{
		0: "AGGREGATION_INVALID",
		1: "AGGREGATION_MONTHLY",
		2: "AGGREGATION_DAILY",
		3: "AGGREGATION_HOURLY",
	}
	Aggregation_value = map[string]int32{
		"AGGREGATION_INVALID": 0,
		"AGGREGATION_MONTHLY": 1,
		"AGGREGATION_DAILY":   2,
		"AGGREGATION_HOURLY":  3,
	}
)

func (x Aggregation) Enum() *Aggregation {
	p := new(Aggregation)
	*p = x
	return p
}

func (x Aggregation) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Aggregation) Descriptor() protoreflect.EnumDescriptor {
	return file_speechly_analytics_v1_analytics_proto_enumTypes[0].Descriptor()
}

func (Aggregation) Type() protoreflect.EnumType {
	return &file_speechly_analytics_v1_analytics_proto_enumTypes[0]
}

func (x Aggregation) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Aggregation.Descriptor instead.
func (Aggregation) EnumDescriptor() ([]byte, []int) {
	return file_speechly_analytics_v1_analytics_proto_rawDescGZIP(), []int{0}
}

// Single row of statistics response.
type UtteranceStatisticsPeriod struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// app_id or empty, if aggregating over project.
	AppId string `protobuf:"bytes,2,opt,name=app_id,json=appId,proto3" json:"app_id,omitempty"`
	// ISO-formatted UTC timestamp of the start time of the period.
	StartTime string `protobuf:"bytes,3,opt,name=start_time,json=startTime,proto3" json:"start_time,omitempty"`
	// Count (sum) of utterances in the current period.
	Count int32 `protobuf:"varint,4,opt,name=count,proto3" json:"count,omitempty"`
	// Total duration of the utterances in the current period.
	UtterancesSeconds int32 `protobuf:"varint,5,opt,name=utterances_seconds,json=utterancesSeconds,proto3" json:"utterances_seconds,omitempty"`
	// Total duration of annotated utterances in the current period.
	AnnotatedSeconds int32 `protobuf:"varint,6,opt,name=annotated_seconds,json=annotatedSeconds,proto3" json:"annotated_seconds,omitempty"`
}

func (x *UtteranceStatisticsPeriod) Reset() {
	*x = UtteranceStatisticsPeriod{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_analytics_v1_analytics_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UtteranceStatisticsPeriod) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UtteranceStatisticsPeriod) ProtoMessage() {}

func (x *UtteranceStatisticsPeriod) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_analytics_v1_analytics_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UtteranceStatisticsPeriod.ProtoReflect.Descriptor instead.
func (*UtteranceStatisticsPeriod) Descriptor() ([]byte, []int) {
	return file_speechly_analytics_v1_analytics_proto_rawDescGZIP(), []int{0}
}

func (x *UtteranceStatisticsPeriod) GetAppId() string {
	if x != nil {
		return x.AppId
	}
	return ""
}

func (x *UtteranceStatisticsPeriod) GetStartTime() string {
	if x != nil {
		return x.StartTime
	}
	return ""
}

func (x *UtteranceStatisticsPeriod) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *UtteranceStatisticsPeriod) GetUtterancesSeconds() int32 {
	if x != nil {
		return x.UtterancesSeconds
	}
	return 0
}

func (x *UtteranceStatisticsPeriod) GetAnnotatedSeconds() int32 {
	if x != nil {
		return x.AnnotatedSeconds
	}
	return 0
}

// A single utterances recognized by Speechly API.
type Utterance struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The ASR transcript of the utterance.
	Transcript string `protobuf:"bytes,1,opt,name=transcript,proto3" json:"transcript,omitempty"`
	// The SAL-annotated transcript of the utterance.
	Annotated string `protobuf:"bytes,2,opt,name=annotated,proto3" json:"annotated,omitempty"`
	// ISO-formatted UTC date of the utterance.
	Date string `protobuf:"bytes,3,opt,name=date,proto3" json:"date,omitempty"`
}

func (x *Utterance) Reset() {
	*x = Utterance{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_analytics_v1_analytics_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Utterance) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Utterance) ProtoMessage() {}

func (x *Utterance) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_analytics_v1_analytics_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Utterance.ProtoReflect.Descriptor instead.
func (*Utterance) Descriptor() ([]byte, []int) {
	return file_speechly_analytics_v1_analytics_proto_rawDescGZIP(), []int{1}
}

func (x *Utterance) GetTranscript() string {
	if x != nil {
		return x.Transcript
	}
	return ""
}

func (x *Utterance) GetAnnotated() string {
	if x != nil {
		return x.Annotated
	}
	return ""
}

func (x *Utterance) GetDate() string {
	if x != nil {
		return x.Date
	}
	return ""
}

// Information about the on-device decoder.
type DecoderInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Version of the Speechly on-device decoder.
	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
	// Number of utterances the decoder has transcribed.
	UtteranceCount int32 `protobuf:"varint,2,opt,name=utterance_count,json=utteranceCount,proto3" json:"utterance_count,omitempty"`
	// Cumulative sum of the utterance length in seconds for the decoder.
	TotalSecondsTranscribed int32 `protobuf:"varint,3,opt,name=total_seconds_transcribed,json=totalSecondsTranscribed,proto3" json:"total_seconds_transcribed,omitempty"`
}

func (x *DecoderInfo) Reset() {
	*x = DecoderInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_analytics_v1_analytics_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DecoderInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DecoderInfo) ProtoMessage() {}

func (x *DecoderInfo) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_analytics_v1_analytics_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DecoderInfo.ProtoReflect.Descriptor instead.
func (*DecoderInfo) Descriptor() ([]byte, []int) {
	return file_speechly_analytics_v1_analytics_proto_rawDescGZIP(), []int{2}
}

func (x *DecoderInfo) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *DecoderInfo) GetUtteranceCount() int32 {
	if x != nil {
		return x.UtteranceCount
	}
	return 0
}

func (x *DecoderInfo) GetTotalSecondsTranscribed() int32 {
	if x != nil {
		return x.TotalSecondsTranscribed
	}
	return 0
}

var File_speechly_analytics_v1_analytics_proto protoreflect.FileDescriptor

var file_speechly_analytics_v1_analytics_proto_rawDesc = []byte{
	0x0a, 0x25, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x61, 0x6e, 0x61, 0x6c, 0x79,
	0x74, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c,
	0x79, 0x2e, 0x61, 0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31, 0x22, 0xc3,
	0x01, 0x0a, 0x19, 0x55, 0x74, 0x74, 0x65, 0x72, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x50, 0x65, 0x72, 0x69, 0x6f, 0x64, 0x12, 0x15, 0x0a, 0x06,
	0x61, 0x70, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x70,
	0x70, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x73, 0x74, 0x61, 0x72, 0x74, 0x54, 0x69,
	0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x2d, 0x0a, 0x12, 0x75, 0x74, 0x74, 0x65,
	0x72, 0x61, 0x6e, 0x63, 0x65, 0x73, 0x5f, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x11, 0x75, 0x74, 0x74, 0x65, 0x72, 0x61, 0x6e, 0x63, 0x65, 0x73,
	0x53, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x12, 0x2b, 0x0a, 0x11, 0x61, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x10, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x65, 0x64, 0x53, 0x65, 0x63,
	0x6f, 0x6e, 0x64, 0x73, 0x22, 0x5d, 0x0a, 0x09, 0x55, 0x74, 0x74, 0x65, 0x72, 0x61, 0x6e, 0x63,
	0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x12, 0x1c, 0x0a, 0x09, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x65, 0x64, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x65, 0x64, 0x12,
	0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x64,
	0x61, 0x74, 0x65, 0x22, 0x8c, 0x01, 0x0a, 0x0b, 0x44, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x72, 0x49,
	0x6e, 0x66, 0x6f, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x27, 0x0a,
	0x0f, 0x75, 0x74, 0x74, 0x65, 0x72, 0x61, 0x6e, 0x63, 0x65, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x75, 0x74, 0x74, 0x65, 0x72, 0x61, 0x6e, 0x63,
	0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x3a, 0x0a, 0x19, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f,
	0x73, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x5f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x63, 0x72, 0x69,
	0x62, 0x65, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x17, 0x74, 0x6f, 0x74, 0x61, 0x6c,
	0x53, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x73, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x63, 0x72, 0x69, 0x62,
	0x65, 0x64, 0x2a, 0x6e, 0x0a, 0x0b, 0x41, 0x67, 0x67, 0x72, 0x65, 0x67, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x17, 0x0a, 0x13, 0x41, 0x47, 0x47, 0x52, 0x45, 0x47, 0x41, 0x54, 0x49, 0x4f, 0x4e,
	0x5f, 0x49, 0x4e, 0x56, 0x41, 0x4c, 0x49, 0x44, 0x10, 0x00, 0x12, 0x17, 0x0a, 0x13, 0x41, 0x47,
	0x47, 0x52, 0x45, 0x47, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x4d, 0x4f, 0x4e, 0x54, 0x48, 0x4c,
	0x59, 0x10, 0x01, 0x12, 0x15, 0x0a, 0x11, 0x41, 0x47, 0x47, 0x52, 0x45, 0x47, 0x41, 0x54, 0x49,
	0x4f, 0x4e, 0x5f, 0x44, 0x41, 0x49, 0x4c, 0x59, 0x10, 0x02, 0x12, 0x16, 0x0a, 0x12, 0x41, 0x47,
	0x47, 0x52, 0x45, 0x47, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x48, 0x4f, 0x55, 0x52, 0x4c, 0x59,
	0x10, 0x03, 0x42, 0x86, 0x01, 0x0a, 0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63,
	0x68, 0x6c, 0x79, 0x2e, 0x61, 0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63, 0x73, 0x2e, 0x76, 0x31,
	0x42, 0x0e, 0x41, 0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x21, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x61, 0x6e, 0x61,
	0x6c, 0x79, 0x74, 0x69, 0x63, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x6e, 0x61, 0x6c, 0x79, 0x74,
	0x69, 0x63, 0x73, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x53, 0x41, 0x58, 0xaa, 0x02, 0x15, 0x53, 0x70,
	0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x41, 0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63, 0x73,
	0x2e, 0x56, 0x31, 0xca, 0x02, 0x15, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x5c, 0x41,
	0x6e, 0x61, 0x6c, 0x79, 0x74, 0x69, 0x63, 0x73, 0x5c, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_speechly_analytics_v1_analytics_proto_rawDescOnce sync.Once
	file_speechly_analytics_v1_analytics_proto_rawDescData = file_speechly_analytics_v1_analytics_proto_rawDesc
)

func file_speechly_analytics_v1_analytics_proto_rawDescGZIP() []byte {
	file_speechly_analytics_v1_analytics_proto_rawDescOnce.Do(func() {
		file_speechly_analytics_v1_analytics_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_analytics_v1_analytics_proto_rawDescData)
	})
	return file_speechly_analytics_v1_analytics_proto_rawDescData
}

var file_speechly_analytics_v1_analytics_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_speechly_analytics_v1_analytics_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_speechly_analytics_v1_analytics_proto_goTypes = []interface{}{
	(Aggregation)(0),                  // 0: speechly.analytics.v1.Aggregation
	(*UtteranceStatisticsPeriod)(nil), // 1: speechly.analytics.v1.UtteranceStatisticsPeriod
	(*Utterance)(nil),                 // 2: speechly.analytics.v1.Utterance
	(*DecoderInfo)(nil),               // 3: speechly.analytics.v1.DecoderInfo
}
var file_speechly_analytics_v1_analytics_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_speechly_analytics_v1_analytics_proto_init() }
func file_speechly_analytics_v1_analytics_proto_init() {
	if File_speechly_analytics_v1_analytics_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_speechly_analytics_v1_analytics_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UtteranceStatisticsPeriod); i {
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
		file_speechly_analytics_v1_analytics_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Utterance); i {
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
		file_speechly_analytics_v1_analytics_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DecoderInfo); i {
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
			RawDescriptor: file_speechly_analytics_v1_analytics_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_speechly_analytics_v1_analytics_proto_goTypes,
		DependencyIndexes: file_speechly_analytics_v1_analytics_proto_depIdxs,
		EnumInfos:         file_speechly_analytics_v1_analytics_proto_enumTypes,
		MessageInfos:      file_speechly_analytics_v1_analytics_proto_msgTypes,
	}.Build()
	File_speechly_analytics_v1_analytics_proto = out.File
	file_speechly_analytics_v1_analytics_proto_rawDesc = nil
	file_speechly_analytics_v1_analytics_proto_goTypes = nil
	file_speechly_analytics_v1_analytics_proto_depIdxs = nil
}
