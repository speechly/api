// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.13.0
// source: speechly/slu/v1/wlu.proto

package sluv1

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

// Top-level message sent by the client for the `Text` method.
type WLURequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The language of the text sent in the request as a BCP-47 language tag (e.g. "en-US").
	// Required.
	LanguageCode string `protobuf:"bytes,1,opt,name=language_code,json=languageCode,proto3" json:"language_code,omitempty"`
	// The text to recognise.
	// Required.
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *WLURequest) Reset() {
	*x = WLURequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_wlu_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WLURequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WLURequest) ProtoMessage() {}

func (x *WLURequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_wlu_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WLURequest.ProtoReflect.Descriptor instead.
func (*WLURequest) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_wlu_proto_rawDescGZIP(), []int{0}
}

func (x *WLURequest) GetLanguageCode() string {
	if x != nil {
		return x.LanguageCode
	}
	return ""
}

func (x *WLURequest) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

// Top-level message sent by the server for the `Text` method.
type WLUResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A list of WLU segments.
	Segments []*WLUSegment `protobuf:"bytes,1,rep,name=segments,proto3" json:"segments,omitempty"`
}

func (x *WLUResponse) Reset() {
	*x = WLUResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_wlu_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WLUResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WLUResponse) ProtoMessage() {}

func (x *WLUResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_wlu_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WLUResponse.ProtoReflect.Descriptor instead.
func (*WLUResponse) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_wlu_proto_rawDescGZIP(), []int{1}
}

func (x *WLUResponse) GetSegments() []*WLUSegment {
	if x != nil {
		return x.Segments
	}
	return nil
}

// Describes a WLU segment.
// A segment is a logical portion of text denoted by its intent,
// e.g. in a phrase "book me a flight and rent a car"
// there would be a segment for "book me a flight" and another for "rent a car".
type WLUSegment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The portion of text that contains this segment.
	Text string `protobuf:"bytes,1,opt,name=text,proto3" json:"text,omitempty"`
	// The list of word tokens which are contained in this segment.
	Tokens []*WLUToken `protobuf:"bytes,2,rep,name=tokens,proto3" json:"tokens,omitempty"`
	// The list of entities which are contained in this segment.
	Entities []*WLUEntity `protobuf:"bytes,3,rep,name=entities,proto3" json:"entities,omitempty"`
	// The intent that defines this segment.
	Intent *WLUIntent `protobuf:"bytes,4,opt,name=intent,proto3" json:"intent,omitempty"`
}

func (x *WLUSegment) Reset() {
	*x = WLUSegment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_wlu_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WLUSegment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WLUSegment) ProtoMessage() {}

func (x *WLUSegment) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_wlu_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WLUSegment.ProtoReflect.Descriptor instead.
func (*WLUSegment) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_wlu_proto_rawDescGZIP(), []int{2}
}

func (x *WLUSegment) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

func (x *WLUSegment) GetTokens() []*WLUToken {
	if x != nil {
		return x.Tokens
	}
	return nil
}

func (x *WLUSegment) GetEntities() []*WLUEntity {
	if x != nil {
		return x.Entities
	}
	return nil
}

func (x *WLUSegment) GetIntent() *WLUIntent {
	if x != nil {
		return x.Intent
	}
	return nil
}

// Describes a single word token in a segment.
type WLUToken struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The value of the word.
	Word string `protobuf:"bytes,1,opt,name=word,proto3" json:"word,omitempty"`
	// Position of the token in the text.
	Index int32 `protobuf:"varint,2,opt,name=index,proto3" json:"index,omitempty"`
}

func (x *WLUToken) Reset() {
	*x = WLUToken{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_wlu_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WLUToken) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WLUToken) ProtoMessage() {}

func (x *WLUToken) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_wlu_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WLUToken.ProtoReflect.Descriptor instead.
func (*WLUToken) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_wlu_proto_rawDescGZIP(), []int{3}
}

func (x *WLUToken) GetWord() string {
	if x != nil {
		return x.Word
	}
	return ""
}

func (x *WLUToken) GetIndex() int32 {
	if x != nil {
		return x.Index
	}
	return 0
}

// Describes a single entity in a segment.
//
// An entity is a specific object in the phrase that falls into some kind of category,
// e.g. in a SAL example "*book book a [burger restaurant](restaurant_type) for [tomorrow](date)"
// "burger restaurant" would be an entity of type `restaurant_type`,
// and "tomorrow" would be an entity of type `date`.
//
// An entity has a start and end indices which map to the indices of words in WLUToken messages,
// e.g. in the example "book a [burger restaurant](restaurant_type) for [tomorrow](date)" it would be:
//
// * Entity "burger restaurant" - `start_position = 2, end_position = 3`
// * Entity "tomorrow" - `start_position = 5, end_position = 5`
//
// The start index is inclusive, but the end index is exclusive, i.e. the interval is `[start_position, end_position)`.
type WLUEntity struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The type of the entity, e.g. `restaurant_type` or `date`.
	Entity string `protobuf:"bytes,1,opt,name=entity,proto3" json:"entity,omitempty"`
	// The value of the entity, e.g. `burger restaurant` or `tomorrow`.
	Value string `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	// The starting index of the entity in the phrase, maps to the `index` field in `SLUTranscript`.
	// Inclusive.
	StartPosition int32 `protobuf:"varint,3,opt,name=start_position,json=startPosition,proto3" json:"start_position,omitempty"`
	// The finishing index of the entity in the phrase, maps to the `index` field in `SLUTranscript`.
	// Exclusive.
	EndPosition int32 `protobuf:"varint,4,opt,name=end_position,json=endPosition,proto3" json:"end_position,omitempty"`
}

func (x *WLUEntity) Reset() {
	*x = WLUEntity{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_wlu_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WLUEntity) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WLUEntity) ProtoMessage() {}

func (x *WLUEntity) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_wlu_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WLUEntity.ProtoReflect.Descriptor instead.
func (*WLUEntity) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_wlu_proto_rawDescGZIP(), []int{4}
}

func (x *WLUEntity) GetEntity() string {
	if x != nil {
		return x.Entity
	}
	return ""
}

func (x *WLUEntity) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

func (x *WLUEntity) GetStartPosition() int32 {
	if x != nil {
		return x.StartPosition
	}
	return 0
}

func (x *WLUEntity) GetEndPosition() int32 {
	if x != nil {
		return x.EndPosition
	}
	return 0
}

// Describes the intent of a segment.
// There can only be one intent per segment.
type WLUIntent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The value of the intent, as defined in SAL.
	Intent string `protobuf:"bytes,1,opt,name=intent,proto3" json:"intent,omitempty"`
}

func (x *WLUIntent) Reset() {
	*x = WLUIntent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_wlu_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WLUIntent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WLUIntent) ProtoMessage() {}

func (x *WLUIntent) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_wlu_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WLUIntent.ProtoReflect.Descriptor instead.
func (*WLUIntent) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_wlu_proto_rawDescGZIP(), []int{5}
}

func (x *WLUIntent) GetIntent() string {
	if x != nil {
		return x.Intent
	}
	return ""
}

var File_speechly_slu_v1_wlu_proto protoreflect.FileDescriptor

var file_speechly_slu_v1_wlu_proto_rawDesc = []byte{
	0x0a, 0x19, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75, 0x2f, 0x76,
	0x31, 0x2f, 0x77, 0x6c, 0x75, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x73, 0x70, 0x65,
	0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x22, 0x45, 0x0a, 0x0a,
	0x57, 0x4c, 0x55, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x6c, 0x61,
	0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0c, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x43, 0x6f, 0x64, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74,
	0x65, 0x78, 0x74, 0x22, 0x46, 0x0a, 0x0b, 0x57, 0x4c, 0x55, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x37, 0x0a, 0x08, 0x73, 0x65, 0x67, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e,
	0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x57, 0x4c, 0x55, 0x53, 0x65, 0x67, 0x6d, 0x65, 0x6e,
	0x74, 0x52, 0x08, 0x73, 0x65, 0x67, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x22, 0xbf, 0x01, 0x0a, 0x0a,
	0x57, 0x4c, 0x55, 0x53, 0x65, 0x67, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65,
	0x78, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x12, 0x31,
	0x0a, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19,
	0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31,
	0x2e, 0x57, 0x4c, 0x55, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x06, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x73, 0x12, 0x36, 0x0a, 0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x18, 0x03, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73,
	0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x57, 0x4c, 0x55, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x52,
	0x08, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x69, 0x65, 0x73, 0x12, 0x32, 0x0a, 0x06, 0x69, 0x6e, 0x74,
	0x65, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x73, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x57, 0x4c, 0x55, 0x49,
	0x6e, 0x74, 0x65, 0x6e, 0x74, 0x52, 0x06, 0x69, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x22, 0x34, 0x0a,
	0x08, 0x57, 0x4c, 0x55, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x77, 0x6f, 0x72,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x14, 0x0a,
	0x05, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x69, 0x6e,
	0x64, 0x65, 0x78, 0x22, 0x83, 0x01, 0x0a, 0x09, 0x57, 0x4c, 0x55, 0x45, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12,
	0x25, 0x0a, 0x0e, 0x73, 0x74, 0x61, 0x72, 0x74, 0x5f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x73, 0x74, 0x61, 0x72, 0x74, 0x50, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x21, 0x0a, 0x0c, 0x65, 0x6e, 0x64, 0x5f, 0x70, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x65, 0x6e,
	0x64, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x23, 0x0a, 0x09, 0x57, 0x4c, 0x55,
	0x49, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x69, 0x6e, 0x74, 0x65, 0x6e, 0x74,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x69, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x32, 0x48,
	0x0a, 0x03, 0x57, 0x4c, 0x55, 0x12, 0x41, 0x0a, 0x04, 0x54, 0x65, 0x78, 0x74, 0x12, 0x1b, 0x2e,
	0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e,
	0x57, 0x4c, 0x55, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x73, 0x70, 0x65,
	0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x57, 0x4c, 0x55,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x17, 0x5a, 0x15, 0x73, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75, 0x2f, 0x76, 0x31, 0x3b, 0x73, 0x6c, 0x75, 0x76,
	0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_speechly_slu_v1_wlu_proto_rawDescOnce sync.Once
	file_speechly_slu_v1_wlu_proto_rawDescData = file_speechly_slu_v1_wlu_proto_rawDesc
)

func file_speechly_slu_v1_wlu_proto_rawDescGZIP() []byte {
	file_speechly_slu_v1_wlu_proto_rawDescOnce.Do(func() {
		file_speechly_slu_v1_wlu_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_slu_v1_wlu_proto_rawDescData)
	})
	return file_speechly_slu_v1_wlu_proto_rawDescData
}

var file_speechly_slu_v1_wlu_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_speechly_slu_v1_wlu_proto_goTypes = []interface{}{
	(*WLURequest)(nil),  // 0: speechly.slu.v1.WLURequest
	(*WLUResponse)(nil), // 1: speechly.slu.v1.WLUResponse
	(*WLUSegment)(nil),  // 2: speechly.slu.v1.WLUSegment
	(*WLUToken)(nil),    // 3: speechly.slu.v1.WLUToken
	(*WLUEntity)(nil),   // 4: speechly.slu.v1.WLUEntity
	(*WLUIntent)(nil),   // 5: speechly.slu.v1.WLUIntent
}
var file_speechly_slu_v1_wlu_proto_depIdxs = []int32{
	2, // 0: speechly.slu.v1.WLUResponse.segments:type_name -> speechly.slu.v1.WLUSegment
	3, // 1: speechly.slu.v1.WLUSegment.tokens:type_name -> speechly.slu.v1.WLUToken
	4, // 2: speechly.slu.v1.WLUSegment.entities:type_name -> speechly.slu.v1.WLUEntity
	5, // 3: speechly.slu.v1.WLUSegment.intent:type_name -> speechly.slu.v1.WLUIntent
	0, // 4: speechly.slu.v1.WLU.Text:input_type -> speechly.slu.v1.WLURequest
	1, // 5: speechly.slu.v1.WLU.Text:output_type -> speechly.slu.v1.WLUResponse
	5, // [5:6] is the sub-list for method output_type
	4, // [4:5] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_speechly_slu_v1_wlu_proto_init() }
func file_speechly_slu_v1_wlu_proto_init() {
	if File_speechly_slu_v1_wlu_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_speechly_slu_v1_wlu_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WLURequest); i {
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
		file_speechly_slu_v1_wlu_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WLUResponse); i {
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
		file_speechly_slu_v1_wlu_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WLUSegment); i {
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
		file_speechly_slu_v1_wlu_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WLUToken); i {
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
		file_speechly_slu_v1_wlu_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WLUEntity); i {
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
		file_speechly_slu_v1_wlu_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WLUIntent); i {
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
			RawDescriptor: file_speechly_slu_v1_wlu_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_speechly_slu_v1_wlu_proto_goTypes,
		DependencyIndexes: file_speechly_slu_v1_wlu_proto_depIdxs,
		MessageInfos:      file_speechly_slu_v1_wlu_proto_msgTypes,
	}.Build()
	File_speechly_slu_v1_wlu_proto = out.File
	file_speechly_slu_v1_wlu_proto_rawDesc = nil
	file_speechly_slu_v1_wlu_proto_goTypes = nil
	file_speechly_slu_v1_wlu_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// WLUClient is the client API for WLU service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type WLUClient interface {
	// Performs recognition of a text with specified language.
	Text(ctx context.Context, in *WLURequest, opts ...grpc.CallOption) (*WLUResponse, error)
}

type wLUClient struct {
	cc grpc.ClientConnInterface
}

func NewWLUClient(cc grpc.ClientConnInterface) WLUClient {
	return &wLUClient{cc}
}

func (c *wLUClient) Text(ctx context.Context, in *WLURequest, opts ...grpc.CallOption) (*WLUResponse, error) {
	out := new(WLUResponse)
	err := c.cc.Invoke(ctx, "/speechly.slu.v1.WLU/Text", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WLUServer is the server API for WLU service.
type WLUServer interface {
	// Performs recognition of a text with specified language.
	Text(context.Context, *WLURequest) (*WLUResponse, error)
}

// UnimplementedWLUServer can be embedded to have forward compatible implementations.
type UnimplementedWLUServer struct {
}

func (*UnimplementedWLUServer) Text(context.Context, *WLURequest) (*WLUResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Text not implemented")
}

func RegisterWLUServer(s *grpc.Server, srv WLUServer) {
	s.RegisterService(&_WLU_serviceDesc, srv)
}

func _WLU_Text_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WLURequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WLUServer).Text(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/speechly.slu.v1.WLU/Text",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WLUServer).Text(ctx, req.(*WLURequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _WLU_serviceDesc = grpc.ServiceDesc{
	ServiceName: "speechly.slu.v1.WLU",
	HandlerType: (*WLUServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Text",
			Handler:    _WLU_Text_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "speechly/slu/v1/wlu.proto",
}
