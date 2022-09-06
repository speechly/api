// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: speechly/identity/v2/identity_api.proto
#ifndef GRPC_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto__INCLUDED
#define GRPC_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto__INCLUDED

#include "speechly/identity/v2/identity_api.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_generic_service.h>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/client_context.h>
#include <grpcpp/impl/codegen/completion_queue.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/proto_utils.h>
#include <grpcpp/impl/codegen/rpc_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/server_context.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/status.h>
#include <grpcpp/impl/codegen/stub_options.h>
#include <grpcpp/impl/codegen/sync_stream.h>

namespace grpc_impl {
class CompletionQueue;
class ServerCompletionQueue;
class ServerContext;
}  // namespace grpc_impl

namespace grpc {
namespace experimental {
template <typename RequestT, typename ResponseT>
class MessageAllocator;
}  // namespace experimental
}  // namespace grpc

namespace speechly {
namespace identity {
namespace v2 {

// Speechly Identity API is used for creating access tokens for the Speechly
// APIs.
class IdentityAPI final {
 public:
  static constexpr char const* service_full_name() {
    return "speechly.identity.v2.IdentityAPI";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    // Performs a login of specific Speechly application.
    // Returns an access token which can be used to access the Speechly API.
    virtual ::grpc::Status Login(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::speechly::identity::v2::LoginResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::identity::v2::LoginResponse>> AsyncLogin(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::identity::v2::LoginResponse>>(AsyncLoginRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::identity::v2::LoginResponse>> PrepareAsyncLogin(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::identity::v2::LoginResponse>>(PrepareAsyncLoginRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      // Performs a login of specific Speechly application.
      // Returns an access token which can be used to access the Speechly API.
      virtual void Login(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest* request, ::speechly::identity::v2::LoginResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void Login(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::identity::v2::LoginResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void Login(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest* request, ::speechly::identity::v2::LoginResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) = 0;
      virtual void Login(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::identity::v2::LoginResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::speechly::identity::v2::LoginResponse>* AsyncLoginRaw(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::speechly::identity::v2::LoginResponse>* PrepareAsyncLoginRaw(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status Login(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::speechly::identity::v2::LoginResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::identity::v2::LoginResponse>> AsyncLogin(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::identity::v2::LoginResponse>>(AsyncLoginRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::identity::v2::LoginResponse>> PrepareAsyncLogin(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::identity::v2::LoginResponse>>(PrepareAsyncLoginRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void Login(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest* request, ::speechly::identity::v2::LoginResponse* response, std::function<void(::grpc::Status)>) override;
      void Login(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::identity::v2::LoginResponse* response, std::function<void(::grpc::Status)>) override;
      void Login(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest* request, ::speechly::identity::v2::LoginResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) override;
      void Login(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::identity::v2::LoginResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) override;
     private:
      friend class Stub;
      explicit experimental_async(Stub* stub): stub_(stub) { }
      Stub* stub() { return stub_; }
      Stub* stub_;
    };
    class experimental_async_interface* experimental_async() override { return &async_stub_; }

   private:
    std::shared_ptr< ::grpc::ChannelInterface> channel_;
    class experimental_async async_stub_{this};
    ::grpc::ClientAsyncResponseReader< ::speechly::identity::v2::LoginResponse>* AsyncLoginRaw(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::speechly::identity::v2::LoginResponse>* PrepareAsyncLoginRaw(::grpc::ClientContext* context, const ::speechly::identity::v2::LoginRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_Login_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    // Performs a login of specific Speechly application.
    // Returns an access token which can be used to access the Speechly API.
    virtual ::grpc::Status Login(::grpc::ServerContext* context, const ::speechly::identity::v2::LoginRequest* request, ::speechly::identity::v2::LoginResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_Login : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithAsyncMethod_Login() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_Login() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestLogin(::grpc::ServerContext* context, ::speechly::identity::v2::LoginRequest* request, ::grpc::ServerAsyncResponseWriter< ::speechly::identity::v2::LoginResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_Login<Service > AsyncService;
  template <class BaseClass>
  class ExperimentalWithCallbackMethod_Login : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithCallbackMethod_Login() {
      ::grpc::Service::experimental().MarkMethodCallback(0,
        new ::grpc_impl::internal::CallbackUnaryHandler< ::speechly::identity::v2::LoginRequest, ::speechly::identity::v2::LoginResponse>(
          [this](::grpc::ServerContext* context,
                 const ::speechly::identity::v2::LoginRequest* request,
                 ::speechly::identity::v2::LoginResponse* response,
                 ::grpc::experimental::ServerCallbackRpcController* controller) {
                   return this->Login(context, request, response, controller);
                 }));
    }
    void SetMessageAllocatorFor_Login(
        ::grpc::experimental::MessageAllocator< ::speechly::identity::v2::LoginRequest, ::speechly::identity::v2::LoginResponse>* allocator) {
      static_cast<::grpc_impl::internal::CallbackUnaryHandler< ::speechly::identity::v2::LoginRequest, ::speechly::identity::v2::LoginResponse>*>(
          ::grpc::Service::experimental().GetHandler(0))
              ->SetMessageAllocator(allocator);
    }
    ~ExperimentalWithCallbackMethod_Login() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    virtual void Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/, ::grpc::experimental::ServerCallbackRpcController* controller) { controller->Finish(::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "")); }
  };
  typedef ExperimentalWithCallbackMethod_Login<Service > ExperimentalCallbackService;
  template <class BaseClass>
  class WithGenericMethod_Login : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithGenericMethod_Login() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_Login() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_Login : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithRawMethod_Login() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_Login() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestLogin(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class ExperimentalWithRawCallbackMethod_Login : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithRawCallbackMethod_Login() {
      ::grpc::Service::experimental().MarkMethodRawCallback(0,
        new ::grpc_impl::internal::CallbackUnaryHandler< ::grpc::ByteBuffer, ::grpc::ByteBuffer>(
          [this](::grpc::ServerContext* context,
                 const ::grpc::ByteBuffer* request,
                 ::grpc::ByteBuffer* response,
                 ::grpc::experimental::ServerCallbackRpcController* controller) {
                   this->Login(context, request, response, controller);
                 }));
    }
    ~ExperimentalWithRawCallbackMethod_Login() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    virtual void Login(::grpc::ServerContext* /*context*/, const ::grpc::ByteBuffer* /*request*/, ::grpc::ByteBuffer* /*response*/, ::grpc::experimental::ServerCallbackRpcController* controller) { controller->Finish(::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "")); }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_Login : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithStreamedUnaryMethod_Login() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::speechly::identity::v2::LoginRequest, ::speechly::identity::v2::LoginResponse>(std::bind(&WithStreamedUnaryMethod_Login<BaseClass>::StreamedLogin, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_Login() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status Login(::grpc::ServerContext* /*context*/, const ::speechly::identity::v2::LoginRequest* /*request*/, ::speechly::identity::v2::LoginResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedLogin(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::speechly::identity::v2::LoginRequest,::speechly::identity::v2::LoginResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_Login<Service > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_Login<Service > StreamedService;
};

}  // namespace v2
}  // namespace identity
}  // namespace speechly


#endif  // GRPC_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto__INCLUDED
