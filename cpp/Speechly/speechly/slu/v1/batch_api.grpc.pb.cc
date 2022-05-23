// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: speechly/slu/v1/batch_api.proto

#include "speechly/slu/v1/batch_api.pb.h"
#include "speechly/slu/v1/batch_api.grpc.pb.h"

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
namespace slu {
namespace v1 {

static const char* BatchAPI_method_names[] = {
  "/speechly.slu.v1.BatchAPI/ProcessAudio",
  "/speechly.slu.v1.BatchAPI/QueryStatus",
};

std::unique_ptr< BatchAPI::Stub> BatchAPI::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< BatchAPI::Stub> stub(new BatchAPI::Stub(channel));
  return stub;
}

BatchAPI::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_ProcessAudio_(BatchAPI_method_names[0], ::grpc::internal::RpcMethod::CLIENT_STREAMING, channel)
  , rpcmethod_QueryStatus_(BatchAPI_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::ClientWriter< ::speechly::slu::v1::ProcessAudioRequest>* BatchAPI::Stub::ProcessAudioRaw(::grpc::ClientContext* context, ::speechly::slu::v1::ProcessAudioResponse* response) {
  return ::grpc_impl::internal::ClientWriterFactory< ::speechly::slu::v1::ProcessAudioRequest>::Create(channel_.get(), rpcmethod_ProcessAudio_, context, response);
}

void BatchAPI::Stub::experimental_async::ProcessAudio(::grpc::ClientContext* context, ::speechly::slu::v1::ProcessAudioResponse* response, ::grpc::experimental::ClientWriteReactor< ::speechly::slu::v1::ProcessAudioRequest>* reactor) {
  ::grpc_impl::internal::ClientCallbackWriterFactory< ::speechly::slu::v1::ProcessAudioRequest>::Create(stub_->channel_.get(), stub_->rpcmethod_ProcessAudio_, context, response, reactor);
}

::grpc::ClientAsyncWriter< ::speechly::slu::v1::ProcessAudioRequest>* BatchAPI::Stub::AsyncProcessAudioRaw(::grpc::ClientContext* context, ::speechly::slu::v1::ProcessAudioResponse* response, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncWriterFactory< ::speechly::slu::v1::ProcessAudioRequest>::Create(channel_.get(), cq, rpcmethod_ProcessAudio_, context, response, true, tag);
}

::grpc::ClientAsyncWriter< ::speechly::slu::v1::ProcessAudioRequest>* BatchAPI::Stub::PrepareAsyncProcessAudioRaw(::grpc::ClientContext* context, ::speechly::slu::v1::ProcessAudioResponse* response, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncWriterFactory< ::speechly::slu::v1::ProcessAudioRequest>::Create(channel_.get(), cq, rpcmethod_ProcessAudio_, context, response, false, nullptr);
}

::grpc::Status BatchAPI::Stub::QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v1::QueryStatusRequest& request, ::speechly::slu::v1::QueryStatusResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_QueryStatus_, context, request, response);
}

void BatchAPI::Stub::experimental_async::QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v1::QueryStatusRequest* request, ::speechly::slu::v1::QueryStatusResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_QueryStatus_, context, request, response, std::move(f));
}

void BatchAPI::Stub::experimental_async::QueryStatus(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v1::QueryStatusResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_QueryStatus_, context, request, response, std::move(f));
}

void BatchAPI::Stub::experimental_async::QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v1::QueryStatusRequest* request, ::speechly::slu::v1::QueryStatusResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_QueryStatus_, context, request, response, reactor);
}

void BatchAPI::Stub::experimental_async::QueryStatus(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v1::QueryStatusResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_QueryStatus_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::speechly::slu::v1::QueryStatusResponse>* BatchAPI::Stub::AsyncQueryStatusRaw(::grpc::ClientContext* context, const ::speechly::slu::v1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::speechly::slu::v1::QueryStatusResponse>::Create(channel_.get(), cq, rpcmethod_QueryStatus_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::speechly::slu::v1::QueryStatusResponse>* BatchAPI::Stub::PrepareAsyncQueryStatusRaw(::grpc::ClientContext* context, const ::speechly::slu::v1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::speechly::slu::v1::QueryStatusResponse>::Create(channel_.get(), cq, rpcmethod_QueryStatus_, context, request, false);
}

BatchAPI::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BatchAPI_method_names[0],
      ::grpc::internal::RpcMethod::CLIENT_STREAMING,
      new ::grpc::internal::ClientStreamingHandler< BatchAPI::Service, ::speechly::slu::v1::ProcessAudioRequest, ::speechly::slu::v1::ProcessAudioResponse>(
          std::mem_fn(&BatchAPI::Service::ProcessAudio), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      BatchAPI_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< BatchAPI::Service, ::speechly::slu::v1::QueryStatusRequest, ::speechly::slu::v1::QueryStatusResponse>(
          std::mem_fn(&BatchAPI::Service::QueryStatus), this)));
}

BatchAPI::Service::~Service() {
}

::grpc::Status BatchAPI::Service::ProcessAudio(::grpc::ServerContext* context, ::grpc::ServerReader< ::speechly::slu::v1::ProcessAudioRequest>* reader, ::speechly::slu::v1::ProcessAudioResponse* response) {
  (void) context;
  (void) reader;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status BatchAPI::Service::QueryStatus(::grpc::ServerContext* context, const ::speechly::slu::v1::QueryStatusRequest* request, ::speechly::slu::v1::QueryStatusResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace speechly
}  // namespace slu
}  // namespace v1

