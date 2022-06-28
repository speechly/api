// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.17.3
// source: speechly/slu/v1/batch_api.proto

package sluv1

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

// If sending a stream of `ProcessAudioRequest` messages, the first one must
// contain the `AudioConfiguration` for the audio data. The `config` is ignored
// in the following messages.
type ProcessAudioRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The processing context, Speechly application ID.
	// Required.
	AppId string `protobuf:"bytes,1,opt,name=app_id,json=appId,proto3" json:"app_id,omitempty"`
	// The device ID of the audio source, for example a microphone
	// identifier as UUID.
	// Optional.
	DeviceId string `protobuf:"bytes,8,opt,name=device_id,json=deviceId,proto3" json:"device_id,omitempty"`
	// Audio configuration.
	// Required.
	Config *AudioConfiguration `protobuf:"bytes,2,opt,name=config,proto3" json:"config,omitempty"`
	// The data (audio) source for the operation.
	// Required.
	//
	// Types that are assignable to Source:
	//	*ProcessAudioRequest_Audio
	//	*ProcessAudioRequest_Uri
	//	*ProcessAudioRequest_HttpSource
	Source isProcessAudioRequest_Source `protobuf_oneof:"source"`
	// The target for the results of the operation. If not given, the results
	// must be fetched using `QueryStatus`.
	// Optional.
	//
	// Types that are assignable to Destination:
	//	*ProcessAudioRequest_ResultsUri
	//	*ProcessAudioRequest_HttpResult
	Destination isProcessAudioRequest_Destination `protobuf_oneof:"destination"`
	// Reference id for the operation. For example an identifier of the source
	// system.
	// Optional.
	Reference string `protobuf:"bytes,6,opt,name=reference,proto3" json:"reference,omitempty"`
	// Additional operation specific options.
	// Optional.
	Options []*Option `protobuf:"bytes,7,rep,name=options,proto3" json:"options,omitempty"`
}

func (x *ProcessAudioRequest) Reset() {
	*x = ProcessAudioRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProcessAudioRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessAudioRequest) ProtoMessage() {}

func (x *ProcessAudioRequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessAudioRequest.ProtoReflect.Descriptor instead.
func (*ProcessAudioRequest) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_batch_api_proto_rawDescGZIP(), []int{0}
}

func (x *ProcessAudioRequest) GetAppId() string {
	if x != nil {
		return x.AppId
	}
	return ""
}

func (x *ProcessAudioRequest) GetDeviceId() string {
	if x != nil {
		return x.DeviceId
	}
	return ""
}

func (x *ProcessAudioRequest) GetConfig() *AudioConfiguration {
	if x != nil {
		return x.Config
	}
	return nil
}

func (m *ProcessAudioRequest) GetSource() isProcessAudioRequest_Source {
	if m != nil {
		return m.Source
	}
	return nil
}

func (x *ProcessAudioRequest) GetAudio() []byte {
	if x, ok := x.GetSource().(*ProcessAudioRequest_Audio); ok {
		return x.Audio
	}
	return nil
}

func (x *ProcessAudioRequest) GetUri() string {
	if x, ok := x.GetSource().(*ProcessAudioRequest_Uri); ok {
		return x.Uri
	}
	return ""
}

func (x *ProcessAudioRequest) GetHttpSource() *HttpResource {
	if x, ok := x.GetSource().(*ProcessAudioRequest_HttpSource); ok {
		return x.HttpSource
	}
	return nil
}

func (m *ProcessAudioRequest) GetDestination() isProcessAudioRequest_Destination {
	if m != nil {
		return m.Destination
	}
	return nil
}

func (x *ProcessAudioRequest) GetResultsUri() string {
	if x, ok := x.GetDestination().(*ProcessAudioRequest_ResultsUri); ok {
		return x.ResultsUri
	}
	return ""
}

func (x *ProcessAudioRequest) GetHttpResult() *HttpResource {
	if x, ok := x.GetDestination().(*ProcessAudioRequest_HttpResult); ok {
		return x.HttpResult
	}
	return nil
}

func (x *ProcessAudioRequest) GetReference() string {
	if x != nil {
		return x.Reference
	}
	return ""
}

func (x *ProcessAudioRequest) GetOptions() []*Option {
	if x != nil {
		return x.Options
	}
	return nil
}

type isProcessAudioRequest_Source interface {
	isProcessAudioRequest_Source()
}

type ProcessAudioRequest_Audio struct {
	// Raw audio data.
	Audio []byte `protobuf:"bytes,3,opt,name=audio,proto3,oneof"`
}

type ProcessAudioRequest_Uri struct {
	// URI of audio data. Can be http or GCS.
	Uri string `protobuf:"bytes,4,opt,name=uri,proto3,oneof"`
}

type ProcessAudioRequest_HttpSource struct {
	// Detailed HTTP source data.
	HttpSource *HttpResource `protobuf:"bytes,9,opt,name=http_source,json=httpSource,proto3,oneof"`
}

func (*ProcessAudioRequest_Audio) isProcessAudioRequest_Source() {}

func (*ProcessAudioRequest_Uri) isProcessAudioRequest_Source() {}

func (*ProcessAudioRequest_HttpSource) isProcessAudioRequest_Source() {}

type isProcessAudioRequest_Destination interface {
	isProcessAudioRequest_Destination()
}

type ProcessAudioRequest_ResultsUri struct {
	// Basic HTTP POST destination.
	// The payload will be `Operation` as JSON.
	ResultsUri string `protobuf:"bytes,5,opt,name=results_uri,json=resultsUri,proto3,oneof"`
}

type ProcessAudioRequest_HttpResult struct {
	// A more fine-grained result target, supporting HTTP method and HTTP headers.
	// The payload will be `Operation` as JSON.
	HttpResult *HttpResource `protobuf:"bytes,10,opt,name=http_result,json=httpResult,proto3,oneof"`
}

func (*ProcessAudioRequest_ResultsUri) isProcessAudioRequest_Destination() {}

func (*ProcessAudioRequest_HttpResult) isProcessAudioRequest_Destination() {}

type ProcessAudioResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The details of the created operation.
	Operation *Operation `protobuf:"bytes,1,opt,name=operation,proto3" json:"operation,omitempty"`
}

func (x *ProcessAudioResponse) Reset() {
	*x = ProcessAudioResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProcessAudioResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProcessAudioResponse) ProtoMessage() {}

func (x *ProcessAudioResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProcessAudioResponse.ProtoReflect.Descriptor instead.
func (*ProcessAudioResponse) Descriptor() ([]byte, []int) {
	return file_speechly_slu_v1_batch_api_proto_rawDescGZIP(), []int{1}
}

func (x *ProcessAudioResponse) GetOperation() *Operation {
	if x != nil {
		return x.Operation
	}
	return nil
}

// Query the status of an operation. Either `id` or `reference` must be given.
type QueryStatusRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// ID of an audio processing operation.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Reference ID of an operation.
	Reference string `protobuf:"bytes,2,opt,name=reference,proto3" json:"reference,omitempty"`
}

func (x *QueryStatusRequest) Reset() {
	*x = QueryStatusRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryStatusRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryStatusRequest) ProtoMessage() {}

func (x *QueryStatusRequest) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[2]
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
	return file_speechly_slu_v1_batch_api_proto_rawDescGZIP(), []int{2}
}

func (x *QueryStatusRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *QueryStatusRequest) GetReference() string {
	if x != nil {
		return x.Reference
	}
	return ""
}

type QueryStatusResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The details of the audio processing operation.
	Operation *Operation `protobuf:"bytes,1,opt,name=operation,proto3" json:"operation,omitempty"`
}

func (x *QueryStatusResponse) Reset() {
	*x = QueryStatusResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryStatusResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryStatusResponse) ProtoMessage() {}

func (x *QueryStatusResponse) ProtoReflect() protoreflect.Message {
	mi := &file_speechly_slu_v1_batch_api_proto_msgTypes[3]
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
	return file_speechly_slu_v1_batch_api_proto_rawDescGZIP(), []int{3}
}

func (x *QueryStatusResponse) GetOperation() *Operation {
	if x != nil {
		return x.Operation
	}
	return nil
}

var File_speechly_slu_v1_batch_api_proto protoreflect.FileDescriptor

var file_speechly_slu_v1_batch_api_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75, 0x2f, 0x76,
	0x31, 0x2f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x5f, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0f, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e,
	0x76, 0x31, 0x1a, 0x1b, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75,
	0x2f, 0x76, 0x31, 0x2f, 0x62, 0x61, 0x74, 0x63, 0x68, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xc3, 0x03, 0x0a, 0x13, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x61, 0x70, 0x70, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x70, 0x70, 0x49, 0x64, 0x12, 0x1b,
	0x0a, 0x09, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x49, 0x64, 0x12, 0x3b, 0x0a, 0x06, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x73, 0x70,
	0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x75,
	0x64, 0x69, 0x6f, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x06, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x12, 0x16, 0x0a, 0x05, 0x61, 0x75, 0x64, 0x69,
	0x6f, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x05, 0x61, 0x75, 0x64, 0x69, 0x6f,
	0x12, 0x12, 0x0a, 0x03, 0x75, 0x72, 0x69, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52,
	0x03, 0x75, 0x72, 0x69, 0x12, 0x40, 0x0a, 0x0b, 0x68, 0x74, 0x74, 0x70, 0x5f, 0x73, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x73, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x74, 0x74, 0x70,
	0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x48, 0x00, 0x52, 0x0a, 0x68, 0x74, 0x74, 0x70,
	0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x21, 0x0a, 0x0b, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x73, 0x5f, 0x75, 0x72, 0x69, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x0a, 0x72,
	0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x55, 0x72, 0x69, 0x12, 0x40, 0x0a, 0x0b, 0x68, 0x74, 0x74,
	0x70, 0x5f, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d,
	0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31,
	0x2e, 0x48, 0x74, 0x74, 0x70, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x48, 0x01, 0x52,
	0x0a, 0x68, 0x74, 0x74, 0x70, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x72,
	0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x31, 0x0a, 0x07, 0x6f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x73, 0x70, 0x65,
	0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x07, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x42, 0x08, 0x0a, 0x06,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x42, 0x0d, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x50, 0x0a, 0x14, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73,
	0x41, 0x75, 0x64, 0x69, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x38, 0x0a,
	0x09, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e,
	0x76, 0x31, 0x2e, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x09, 0x6f, 0x70,
	0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x42, 0x0a, 0x12, 0x51, 0x75, 0x65, 0x72, 0x79,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1c, 0x0a,
	0x09, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x22, 0x4f, 0x0a, 0x13, 0x51,
	0x75, 0x65, 0x72, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x38, 0x0a, 0x09, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79,
	0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x09, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x32, 0xc3, 0x01, 0x0a,
	0x08, 0x42, 0x61, 0x74, 0x63, 0x68, 0x41, 0x50, 0x49, 0x12, 0x5d, 0x0a, 0x0c, 0x50, 0x72, 0x6f,
	0x63, 0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x12, 0x24, 0x2e, 0x73, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x63,
	0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x25, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76,
	0x31, 0x2e, 0x50, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x41, 0x75, 0x64, 0x69, 0x6f, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x28, 0x01, 0x12, 0x58, 0x0a, 0x0b, 0x51, 0x75, 0x65, 0x72,
	0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x23, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68,
	0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x73,
	0x70, 0x65, 0x65, 0x63, 0x68, 0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x2e, 0x51,
	0x75, 0x65, 0x72, 0x79, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x42, 0x67, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x73, 0x70, 0x65, 0x65, 0x63, 0x68,
	0x6c, 0x79, 0x2e, 0x73, 0x6c, 0x75, 0x2e, 0x76, 0x31, 0x42, 0x0d, 0x42, 0x61, 0x74, 0x63, 0x68,
	0x41, 0x70, 0x69, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x15, 0x73, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x2f, 0x73, 0x6c, 0x75, 0x2f, 0x76, 0x31, 0x3b, 0x73, 0x6c, 0x75, 0x76,
	0x31, 0xa2, 0x02, 0x03, 0x53, 0x53, 0x58, 0xaa, 0x02, 0x0f, 0x53, 0x70, 0x65, 0x65, 0x63, 0x68,
	0x6c, 0x79, 0x2e, 0x53, 0x6c, 0x75, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0f, 0x53, 0x70, 0x65, 0x65,
	0x63, 0x68, 0x6c, 0x79, 0x5c, 0x53, 0x6c, 0x75, 0x5c, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_speechly_slu_v1_batch_api_proto_rawDescOnce sync.Once
	file_speechly_slu_v1_batch_api_proto_rawDescData = file_speechly_slu_v1_batch_api_proto_rawDesc
)

func file_speechly_slu_v1_batch_api_proto_rawDescGZIP() []byte {
	file_speechly_slu_v1_batch_api_proto_rawDescOnce.Do(func() {
		file_speechly_slu_v1_batch_api_proto_rawDescData = protoimpl.X.CompressGZIP(file_speechly_slu_v1_batch_api_proto_rawDescData)
	})
	return file_speechly_slu_v1_batch_api_proto_rawDescData
}

var file_speechly_slu_v1_batch_api_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_speechly_slu_v1_batch_api_proto_goTypes = []interface{}{
	(*ProcessAudioRequest)(nil),  // 0: speechly.slu.v1.ProcessAudioRequest
	(*ProcessAudioResponse)(nil), // 1: speechly.slu.v1.ProcessAudioResponse
	(*QueryStatusRequest)(nil),   // 2: speechly.slu.v1.QueryStatusRequest
	(*QueryStatusResponse)(nil),  // 3: speechly.slu.v1.QueryStatusResponse
	(*AudioConfiguration)(nil),   // 4: speechly.slu.v1.AudioConfiguration
	(*HttpResource)(nil),         // 5: speechly.slu.v1.HttpResource
	(*Option)(nil),               // 6: speechly.slu.v1.Option
	(*Operation)(nil),            // 7: speechly.slu.v1.Operation
}
var file_speechly_slu_v1_batch_api_proto_depIdxs = []int32{
	4, // 0: speechly.slu.v1.ProcessAudioRequest.config:type_name -> speechly.slu.v1.AudioConfiguration
	5, // 1: speechly.slu.v1.ProcessAudioRequest.http_source:type_name -> speechly.slu.v1.HttpResource
	5, // 2: speechly.slu.v1.ProcessAudioRequest.http_result:type_name -> speechly.slu.v1.HttpResource
	6, // 3: speechly.slu.v1.ProcessAudioRequest.options:type_name -> speechly.slu.v1.Option
	7, // 4: speechly.slu.v1.ProcessAudioResponse.operation:type_name -> speechly.slu.v1.Operation
	7, // 5: speechly.slu.v1.QueryStatusResponse.operation:type_name -> speechly.slu.v1.Operation
	0, // 6: speechly.slu.v1.BatchAPI.ProcessAudio:input_type -> speechly.slu.v1.ProcessAudioRequest
	2, // 7: speechly.slu.v1.BatchAPI.QueryStatus:input_type -> speechly.slu.v1.QueryStatusRequest
	1, // 8: speechly.slu.v1.BatchAPI.ProcessAudio:output_type -> speechly.slu.v1.ProcessAudioResponse
	3, // 9: speechly.slu.v1.BatchAPI.QueryStatus:output_type -> speechly.slu.v1.QueryStatusResponse
	8, // [8:10] is the sub-list for method output_type
	6, // [6:8] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_speechly_slu_v1_batch_api_proto_init() }
func file_speechly_slu_v1_batch_api_proto_init() {
	if File_speechly_slu_v1_batch_api_proto != nil {
		return
	}
	file_speechly_slu_v1_batch_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_speechly_slu_v1_batch_api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProcessAudioRequest); i {
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
		file_speechly_slu_v1_batch_api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProcessAudioResponse); i {
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
		file_speechly_slu_v1_batch_api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
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
		file_speechly_slu_v1_batch_api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
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
	file_speechly_slu_v1_batch_api_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*ProcessAudioRequest_Audio)(nil),
		(*ProcessAudioRequest_Uri)(nil),
		(*ProcessAudioRequest_HttpSource)(nil),
		(*ProcessAudioRequest_ResultsUri)(nil),
		(*ProcessAudioRequest_HttpResult)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_speechly_slu_v1_batch_api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_speechly_slu_v1_batch_api_proto_goTypes,
		DependencyIndexes: file_speechly_slu_v1_batch_api_proto_depIdxs,
		MessageInfos:      file_speechly_slu_v1_batch_api_proto_msgTypes,
	}.Build()
	File_speechly_slu_v1_batch_api_proto = out.File
	file_speechly_slu_v1_batch_api_proto_rawDesc = nil
	file_speechly_slu_v1_batch_api_proto_goTypes = nil
	file_speechly_slu_v1_batch_api_proto_depIdxs = nil
}
