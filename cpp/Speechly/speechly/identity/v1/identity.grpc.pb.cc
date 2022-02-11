// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: speechly/identity/v1/identity.proto

#include "speechly/identity/v1/identity.pb.h"
#include "speechly/identity/v1/identity.grpc.pb.h"

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
namespace identity {
namespace v1 {

static const char* Identity_method_names[] = {
  "/speechly.identity.v1.Identity/Login",
};

std::unique_ptr< Identity::Stub> Identity::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Identity::Stub> stub(new Identity::Stub(channel));
  return stub;
}

Identity::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_Login_(Identity_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Identity::Stub::Login(::grpc::ClientContext* context, const ::speechly::identity::v1::LoginRequest& request, ::speechly::identity::v1::LoginResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_Login_, context, request, response);
}

void Identity::Stub::experimental_async::Login(::grpc::ClientContext* context, const ::speechly::identity::v1::LoginRequest* request, ::speechly::identity::v1::LoginResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Login_, context, request, response, std::move(f));
}

void Identity::Stub::experimental_async::Login(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::identity::v1::LoginResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Login_, context, request, response, std::move(f));
}

void Identity::Stub::experimental_async::Login(::grpc::ClientContext* context, const ::speechly::identity::v1::LoginRequest* request, ::speechly::identity::v1::LoginResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_Login_, context, request, response, reactor);
}

void Identity::Stub::experimental_async::Login(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::identity::v1::LoginResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_Login_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::speechly::identity::v1::LoginResponse>* Identity::Stub::AsyncLoginRaw(::grpc::ClientContext* context, const ::speechly::identity::v1::LoginRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::speechly::identity::v1::LoginResponse>::Create(channel_.get(), cq, rpcmethod_Login_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::speechly::identity::v1::LoginResponse>* Identity::Stub::PrepareAsyncLoginRaw(::grpc::ClientContext* context, const ::speechly::identity::v1::LoginRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::speechly::identity::v1::LoginResponse>::Create(channel_.get(), cq, rpcmethod_Login_, context, request, false);
}

Identity::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Identity_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Identity::Service, ::speechly::identity::v1::LoginRequest, ::speechly::identity::v1::LoginResponse>(
          std::mem_fn(&Identity::Service::Login), this)));
}

Identity::Service::~Service() {
}

::grpc::Status Identity::Service::Login(::grpc::ServerContext* context, const ::speechly::identity::v1::LoginRequest* request, ::speechly::identity::v1::LoginResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace speechly
}  // namespace identity
}  // namespace v1
