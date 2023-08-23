// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: speechly/moderation/v1beta1/moderation_api.proto

#include "speechly/moderation/v1beta1/moderation_api.pb.h"
#include "speechly/moderation/v1beta1/moderation_api.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace speechly {
namespace moderation {
namespace v1beta1 {

static const char* ModerationAPI_method_names[] = {
  "/speechly.moderation.v1beta1.ModerationAPI/AudioModeration",
  "/speechly.moderation.v1beta1.ModerationAPI/StreamingAudioModeration",
  "/speechly.moderation.v1beta1.ModerationAPI/TextModeration",
};

std::unique_ptr< ModerationAPI::Stub> ModerationAPI::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< ModerationAPI::Stub> stub(new ModerationAPI::Stub(channel));
  return stub;
}

ModerationAPI::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_AudioModeration_(ModerationAPI_method_names[0], ::grpc::internal::RpcMethod::CLIENT_STREAMING, channel)
  , rpcmethod_StreamingAudioModeration_(ModerationAPI_method_names[1], ::grpc::internal::RpcMethod::BIDI_STREAMING, channel)
  , rpcmethod_TextModeration_(ModerationAPI_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::ClientWriter< ::speechly::moderation::v1beta1::AudioModerationRequest>* ModerationAPI::Stub::AudioModerationRaw(::grpc::ClientContext* context, ::speechly::moderation::v1beta1::AudioModerationResponse* response) {
  return ::grpc_impl::internal::ClientWriterFactory< ::speechly::moderation::v1beta1::AudioModerationRequest>::Create(channel_.get(), rpcmethod_AudioModeration_, context, response);
}

void ModerationAPI::Stub::experimental_async::AudioModeration(::grpc::ClientContext* context, ::speechly::moderation::v1beta1::AudioModerationResponse* response, ::grpc::experimental::ClientWriteReactor< ::speechly::moderation::v1beta1::AudioModerationRequest>* reactor) {
  ::grpc_impl::internal::ClientCallbackWriterFactory< ::speechly::moderation::v1beta1::AudioModerationRequest>::Create(stub_->channel_.get(), stub_->rpcmethod_AudioModeration_, context, response, reactor);
}

::grpc::ClientAsyncWriter< ::speechly::moderation::v1beta1::AudioModerationRequest>* ModerationAPI::Stub::AsyncAudioModerationRaw(::grpc::ClientContext* context, ::speechly::moderation::v1beta1::AudioModerationResponse* response, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncWriterFactory< ::speechly::moderation::v1beta1::AudioModerationRequest>::Create(channel_.get(), cq, rpcmethod_AudioModeration_, context, response, true, tag);
}

::grpc::ClientAsyncWriter< ::speechly::moderation::v1beta1::AudioModerationRequest>* ModerationAPI::Stub::PrepareAsyncAudioModerationRaw(::grpc::ClientContext* context, ::speechly::moderation::v1beta1::AudioModerationResponse* response, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncWriterFactory< ::speechly::moderation::v1beta1::AudioModerationRequest>::Create(channel_.get(), cq, rpcmethod_AudioModeration_, context, response, false, nullptr);
}

::grpc::ClientReaderWriter< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>* ModerationAPI::Stub::StreamingAudioModerationRaw(::grpc::ClientContext* context) {
  return ::grpc_impl::internal::ClientReaderWriterFactory< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>::Create(channel_.get(), rpcmethod_StreamingAudioModeration_, context);
}

void ModerationAPI::Stub::experimental_async::StreamingAudioModeration(::grpc::ClientContext* context, ::grpc::experimental::ClientBidiReactor< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest,::speechly::moderation::v1beta1::StreamingAudioModerationResponse>* reactor) {
  ::grpc_impl::internal::ClientCallbackReaderWriterFactory< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest,::speechly::moderation::v1beta1::StreamingAudioModerationResponse>::Create(stub_->channel_.get(), stub_->rpcmethod_StreamingAudioModeration_, context, reactor);
}

::grpc::ClientAsyncReaderWriter< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>* ModerationAPI::Stub::AsyncStreamingAudioModerationRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncReaderWriterFactory< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>::Create(channel_.get(), cq, rpcmethod_StreamingAudioModeration_, context, true, tag);
}

::grpc::ClientAsyncReaderWriter< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>* ModerationAPI::Stub::PrepareAsyncStreamingAudioModerationRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncReaderWriterFactory< ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>::Create(channel_.get(), cq, rpcmethod_StreamingAudioModeration_, context, false, nullptr);
}

::grpc::Status ModerationAPI::Stub::TextModeration(::grpc::ClientContext* context, const ::speechly::moderation::v1beta1::TextModerationRequest& request, ::speechly::moderation::v1beta1::TextModerationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_TextModeration_, context, request, response);
}

void ModerationAPI::Stub::experimental_async::TextModeration(::grpc::ClientContext* context, const ::speechly::moderation::v1beta1::TextModerationRequest* request, ::speechly::moderation::v1beta1::TextModerationResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TextModeration_, context, request, response, std::move(f));
}

void ModerationAPI::Stub::experimental_async::TextModeration(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::moderation::v1beta1::TextModerationResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TextModeration_, context, request, response, std::move(f));
}

void ModerationAPI::Stub::experimental_async::TextModeration(::grpc::ClientContext* context, const ::speechly::moderation::v1beta1::TextModerationRequest* request, ::speechly::moderation::v1beta1::TextModerationResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_TextModeration_, context, request, response, reactor);
}

void ModerationAPI::Stub::experimental_async::TextModeration(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::moderation::v1beta1::TextModerationResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_TextModeration_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::speechly::moderation::v1beta1::TextModerationResponse>* ModerationAPI::Stub::AsyncTextModerationRaw(::grpc::ClientContext* context, const ::speechly::moderation::v1beta1::TextModerationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::speechly::moderation::v1beta1::TextModerationResponse>::Create(channel_.get(), cq, rpcmethod_TextModeration_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::speechly::moderation::v1beta1::TextModerationResponse>* ModerationAPI::Stub::PrepareAsyncTextModerationRaw(::grpc::ClientContext* context, const ::speechly::moderation::v1beta1::TextModerationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::speechly::moderation::v1beta1::TextModerationResponse>::Create(channel_.get(), cq, rpcmethod_TextModeration_, context, request, false);
}

ModerationAPI::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ModerationAPI_method_names[0],
      ::grpc::internal::RpcMethod::CLIENT_STREAMING,
      new ::grpc::internal::ClientStreamingHandler< ModerationAPI::Service, ::speechly::moderation::v1beta1::AudioModerationRequest, ::speechly::moderation::v1beta1::AudioModerationResponse>(
          std::mem_fn(&ModerationAPI::Service::AudioModeration), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ModerationAPI_method_names[1],
      ::grpc::internal::RpcMethod::BIDI_STREAMING,
      new ::grpc::internal::BidiStreamingHandler< ModerationAPI::Service, ::speechly::moderation::v1beta1::StreamingAudioModerationRequest, ::speechly::moderation::v1beta1::StreamingAudioModerationResponse>(
          std::mem_fn(&ModerationAPI::Service::StreamingAudioModeration), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      ModerationAPI_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< ModerationAPI::Service, ::speechly::moderation::v1beta1::TextModerationRequest, ::speechly::moderation::v1beta1::TextModerationResponse>(
          std::mem_fn(&ModerationAPI::Service::TextModeration), this)));
}

ModerationAPI::Service::~Service() {
}

::grpc::Status ModerationAPI::Service::AudioModeration(::grpc::ServerContext* context, ::grpc::ServerReader< ::speechly::moderation::v1beta1::AudioModerationRequest>* reader, ::speechly::moderation::v1beta1::AudioModerationResponse* response) {
  (void) context;
  (void) reader;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status ModerationAPI::Service::StreamingAudioModeration(::grpc::ServerContext* context, ::grpc::ServerReaderWriter< ::speechly::moderation::v1beta1::StreamingAudioModerationResponse, ::speechly::moderation::v1beta1::StreamingAudioModerationRequest>* stream) {
  (void) context;
  (void) stream;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status ModerationAPI::Service::TextModeration(::grpc::ServerContext* context, const ::speechly::moderation::v1beta1::TextModerationRequest* request, ::speechly::moderation::v1beta1::TextModerationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace speechly
}  // namespace moderation
}  // namespace v1beta1

