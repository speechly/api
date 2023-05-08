// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: speechly/slu/v2beta2/batch_api.proto

package sluv2beta2

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

// Describes a request to process audio from a pre-existing source.
type ProcessAudioSourceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// tasks describe the requested operations for the given audio.
	// Optional, defaults to `transcribe`.
	Tasks *BatchTasks `protobuf:"bytes,1,opt,name=tasks,proto3" json:"tasks,omitempty"`
	// The options shared by all of the source audios.
	// Optional.
	Config *BatchConfig `protobuf:"bytes,2,opt,name=config,proto3" json:"config,omitempty"`
	// Define the output formatting for text results.
	// Optional, defaults to `display`.
	Output *BatchOutput `protobuf:"bytes,3,opt,name=output,proto3" json:"output,omitempty"`
	// The source audios, and their unique options.
	Source []*ProcessAudioSourceRequestItem `protobuf:"bytes,4,rep,name=source,proto3" json:"source,omitempty"`
}

func (x *ProcessAudioSourceRequest) Reset() {
	*x = ProcessAudioSourceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProcessAudioSourceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessAudioSourceRequest) ProtoMessage() {}

func (x *ProcessAudioSourceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessAudioSourceRequest.ProtoReflect.Descriptor instead.
func (*ProcessAudioSourceRequest) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v2beta2_batch_api_proto_rawDescGZIP(), []int{0}
}

func (x *ProcessAudioSourceRequest) GetTasks() *BatchTasks {
	if x != nil {
		return x.Tasks
	}
	return nil
}

func (x *ProcessAudioSourceRequest) GetConfig() *BatchConfig {
	if x != nil {
		return x.Config
	}
	return nil
}

func (x *ProcessAudioSourceRequest) GetOutput() *BatchOutput {
	if x != nil {
		return x.Output
	}
	return nil
}

func (x *ProcessAudioSourceRequest) GetSource() []*ProcessAudioSourceRequestItem {
	if x != nil {
		return x.Source
	}
	return nil
}

// Describes a response to request to process audio from a pre-existing source.
type ProcessAudioSourceResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The details of the created operations.
	Operation []*Operation `protobuf:"bytes,1,rep,name=operation,proto3" json:"operation,omitempty"`
}

func (x *ProcessAudioSourceResponse) Reset() {
	*x = ProcessAudioSourceResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProcessAudioSourceResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessAudioSourceResponse) ProtoMessage() {}

func (x *ProcessAudioSourceResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessAudioSourceResponse.ProtoReflect.Descriptor instead.
func (*ProcessAudioSourceResponse) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v2beta2_batch_api_proto_rawDescGZIP(), []int{1}
}

func (x *ProcessAudioSourceResponse) GetOperation() []*Operation {
	if x != nil {
		return x.Operation
	}
	return nil
}

// Query the status of an operation. At least one of these must be given.
type QueryStatusRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// ID of an audio processing operation.
	OperationIds []string `protobuf:"bytes,1,rep,name=operation_ids,json=operationIds,proto3" json:"operation_ids,omitempty"`
	// Reference ID of an operation.
	// Optional.
	OperationReferences []string `protobuf:"bytes,2,rep,name=operation_references,json=operationReferences,proto3" json:"operation_references,omitempty"`
	// ID of an audio processing batch.
	// Optional.
	BatchId string `protobuf:"bytes,3,opt,name=batch_id,json=batchId,proto3" json:"batch_id,omitempty"`
	// Reference ID of a batch.
	// Optional.
	BatchReference string `protobuf:"bytes,4,opt,name=batch_reference,json=batchReference,proto3" json:"batch_reference,omitempty"`
}

func (x *QueryStatusRequest) Reset() {
	*x = QueryStatusRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryStatusRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryStatusRequest) ProtoMessage() {}

func (x *QueryStatusRequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueryStatusRequest.ProtoReflect.Descriptor instead.
func (*QueryStatusRequest) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v2beta2_batch_api_proto_rawDescGZIP(), []int{2}
}

func (x *QueryStatusRequest) GetOperationIds() []string {
	if x != nil {
		return x.OperationIds
	}
	return nil
}

func (x *QueryStatusRequest) GetOperationReferences() []string {
	if x != nil {
		return x.OperationReferences
	}
	return nil
}

func (x *QueryStatusRequest) GetBatchId() string {
	if x != nil {
		return x.BatchId
	}
	return ""
}

func (x *QueryStatusRequest) GetBatchReference() string {
	if x != nil {
		return x.BatchReference
	}
	return ""
}

// Describes the statuses of the queried operations.
type QueryStatusResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The details of the audio processing operation.
	Operation []*Operation `protobuf:"bytes,1,rep,name=operation,proto3" json:"operation,omitempty"`
}

func (x *QueryStatusResponse) Reset() {
	*x = QueryStatusResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryStatusResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryStatusResponse) ProtoMessage() {}

func (x *QueryStatusResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v2beta2_batch_api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueryStatusResponse.ProtoReflect.Descriptor instead.
func (*QueryStatusResponse) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v2beta2_batch_api_proto_rawDescGZIP(), []int{3}
}

func (x *QueryStatusResponse) GetOperation() []*Operation {
	if x != nil {
		return x.Operation
	}
	return nil
}

var File_speechly_slu_v2beta2_batch_api_proto protoreflect.FileDescriptor

var file_speechly_slu_v2beta2_batch_api_proto_rawDesc = []byte{
	0x0a, 0x24, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75, 0x2f, 0x76,
	0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x61, 0x70, 0x69,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79,
	0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x1a, 0x20, 0x73, 0x70,
	0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75, 0x2f, 0x76, 0x32, 0x62, 0x65, 0x74,
	0x61, 0x32, 0x2f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x96,
	0x02, 0x0a, 0x19, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x53,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x36, 0x0a, 0x05,
	0x74, 0x61, 0x73, 0x6b, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x73, 0x70,
	0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74,
	0x61, 0x32, 0x2e, 0x42, 0x61, 0x74, 0x63, 0x68, 0x54, 0x61, 0x73, 0x6b, 0x73, 0x52, 0x05, 0x74,
	0x61, 0x73, 0x6b, 0x73, 0x12, 0x39, 0x0a, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e,
	0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e, 0x42, 0x61, 0x74, 0x63,
	0x68, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12,
	0x39, 0x0a, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x21, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76,
	0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e, 0x42, 0x61, 0x74, 0x63, 0x68, 0x4f, 0x75, 0x74, 0x70,
	0x75, 0x74, 0x52, 0x06, 0x6f, 0x75, 0x74, 0x70, 0x75, 0x74, 0x12, 0x4b, 0x0a, 0x06, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x33, 0x2e, 0x73, 0x70, 0x65,
	0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61,
	0x32, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x53, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x49, 0x74, 0x65, 0x6d, 0x52,
	0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x22, 0x5b, 0x0a, 0x1a, 0x50, 0x72, 0x6f, 0x63, 0x65,
	0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3d, 0x0a, 0x09, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63,
	0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e,
	0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x09, 0x6f, 0x70, 0x65, 0x72, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x22, 0xb0, 0x01, 0x0a, 0x12, 0x51, 0x75, 0x65, 0x72, 0x79, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x6f,
	0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x0c, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x73,
	0x12, 0x31, 0x0a, 0x14, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x72, 0x65,
	0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x13,
	0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e,
	0x63, 0x65, 0x73, 0x12, 0x19, 0x0a, 0x08, 0x62, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x69, 0x64, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x62, 0x61, 0x74, 0x63, 0x68, 0x49, 0x64, 0x12, 0x27,
	0x0a, 0x0f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x62, 0x61, 0x74, 0x63, 0x68, 0x52, 0x65,
	0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x22, 0x54, 0x0a, 0x13, 0x51, 0x75, 0x65, 0x72, 0x79,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3d,
	0x0a, 0x09, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x1f, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75,
	0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x09, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x32, 0xe7, 0x01,
	0x0a, 0x08, 0x42, 0x61, 0x74, 0x63, 0x68, 0x41, 0x50, 0x49, 0x12, 0x77, 0x0a, 0x12, 0x50, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x12, 0x2f, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e,
	0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x41,
	0x75, 0x64, 0x69, 0x6f, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x30, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75,
	0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73,
	0x41, 0x75, 0x64, 0x69, 0x6f, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x62, 0x0a, 0x0b, 0x51, 0x75, 0x65, 0x72, 0x79, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x28, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c,
	0x75, 0x2e, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x73,
	0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62, 0x65,
	0x74, 0x61, 0x32, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x80, 0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e,
	0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x32, 0x62,
	0x65, 0x74, 0x61, 0x32, 0x42, 0x0d, 0x42, 0x61, 0x74, 0x63, 0x68, 0x41, 0x70, 0x69, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x1f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f,
	0x73, 0x6c, 0x75, 0x2f, 0x76, 0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0x3b, 0x73, 0x6c, 0x75, 0x76,
	0x32, 0x62, 0x65, 0x74, 0x61, 0x32, 0xa2, 0x02, 0x03, 0x53, 0x53, 0x42, 0xaa, 0x02, 0x14, 0x53,
	0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x53, 0x6c, 0x75, 0x2e, 0x56, 0x32, 0x42, 0x65,
	0x74, 0x61, 0x32, 0xca, 0x02, 0x14, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x5c, 0x53,
	0x6c, 0x75, 0x5c, 0x56, 0x32, 0x42, 0x65, 0x74, 0x61, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_speechly_slu_v2beta2_batch_api_proto_rawDescOnce sync.Once
	file_speechly_slu_v2beta2_batch_api_proto_rawDescData = file_speechly_slu_v2beta2_batch_api_proto_rawDesc
)

func file_speechly_slu_v2beta2_batch_api_proto_rawDescGZIP() []byte {
	file_speechly_slu_v2beta2_batch_api_proto_rawDescOnce.Do(func() {
		file_speechly_slu_v2beta2_batch_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_slu_v2beta2_batch_api_proto_rawDescData)
	})
	return file_speechly_slu_v2beta2_batch_api_proto_rawDescData
}

var file_speechly_slu_v2beta2_batch_api_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_speechly_slu_v2beta2_batch_api_proto_goTypes = []interface{}{
	(*ProcessAudioSourceRequest)(nil),     // 0: speechly.slu.v2beta2.ProcessAudioSourceRequest
	(*ProcessAudioSourceResponse)(nil),    // 1: speechly.slu.v2beta2.ProcessAudioSourceResponse
	(*QueryStatusRequest)(nil),            // 2: speechly.slu.v2beta2.QueryStatusRequest
	(*QueryStatusResponse)(nil),           // 3: speechly.slu.v2beta2.QueryStatusResponse
	(*BatchTasks)(nil),                    // 4: speechly.slu.v2beta2.BatchTasks
	(*BatchConfig)(nil),                   // 5: speechly.slu.v2beta2.BatchConfig
	(*BatchOutput)(nil),                   // 6: speechly.slu.v2beta2.BatchOutput
	(*ProcessAudioSourceRequestItem)(nil), // 7: speechly.slu.v2beta2.ProcessAudioSourceRequestItem
	(*Operation)(nil),                     // 8: speechly.slu.v2beta2.Operation
}
var file_speechly_slu_v2beta2_batch_api_proto_depIdxs = []int32{
	4, // 0: speechly.slu.v2beta2.ProcessAudioSourceRequest.tasks:type_name -> speechly.slu.v2beta2.BatchTasks
	5, // 1: speechly.slu.v2beta2.ProcessAudioSourceRequest.config:type_name -> speechly.slu.v2beta2.BatchConfig
	6, // 2: speechly.slu.v2beta2.ProcessAudioSourceRequest.output:type_name -> speechly.slu.v2beta2.BatchOutput
	7, // 3: speechly.slu.v2beta2.ProcessAudioSourceRequest.source:type_name -> speechly.slu.v2beta2.ProcessAudioSourceRequestItem
	8, // 4: speechly.slu.v2beta2.ProcessAudioSourceResponse.operation:type_name -> speechly.slu.v2beta2.Operation
	8, // 5: speechly.slu.v2beta2.QueryStatusResponse.operation:type_name -> speechly.slu.v2beta2.Operation
	0, // 6: speechly.slu.v2beta2.BatchAPI.ProcessAudioSource:input_type -> speechly.slu.v2beta2.ProcessAudioSourceRequest
	2, // 7: speechly.slu.v2beta2.BatchAPI.QueryStatus:input_type -> speechly.slu.v2beta2.QueryStatusRequest
	1, // 8: speechly.slu.v2beta2.BatchAPI.ProcessAudioSource:output_type -> speechly.slu.v2beta2.ProcessAudioSourceResponse
	3, // 9: speechly.slu.v2beta2.BatchAPI.QueryStatus:output_type -> speechly.slu.v2beta2.QueryStatusResponse
	8, // [8:10] is the sub-list for method output_type
	6, // [6:8] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_speechly_slu_v2beta2_batch_api_proto_init() }
func file_speechly_slu_v2beta2_batch_api_proto_init() {
	if File_speechly_slu_v2beta2_batch_api_proto != nil {
		return
	}
	file_speechly_slu_v2beta2_batch_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_speechly_slu_v2beta2_batch_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProcessAudioSourceRequest); i {
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
		file_speechly_slu_v2beta2_batch_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProcessAudioSourceResponse); i {
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
		file_speechly_slu_v2beta2_batch_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueryStatusRequest); i {
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
		file_speechly_slu_v2beta2_batch_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueryStatusResponse); i {
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
			RawDescriptor: file_speechly_slu_v2beta2_batch_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_speechly_slu_v2beta2_batch_api_proto_goTypes,
		DependencyIndexes: file_speechly_slu_v2beta2_batch_api_proto_depIdxs,
		MessageInfos:      file_speechly_slu_v2beta2_batch_api_proto_msgTypes,
	}.Build()
	File_speechly_slu_v2beta2_batch_api_proto = out.File
	file_speechly_slu_v2beta2_batch_api_proto_rawDesc = nil
	file_speechly_slu_v2beta2_batch_api_proto_goTypes = nil
	file_speechly_slu_v2beta2_batch_api_proto_depIdxs = nil
}
