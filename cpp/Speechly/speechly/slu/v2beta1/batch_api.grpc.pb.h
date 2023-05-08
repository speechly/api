// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: speechly/slu/v2beta1/batch_api.proto
#ifndef GRPC_speechly_2fslu_2fv2beta1_2fbatch_5fapi_2eproto__INCLUDED
#define GRPC_speechly_2fslu_2fv2beta1_2fbatch_5fapi_2eproto__INCLUDED

#include "speechly/slu/v2beta1/batch_api.pb.h"

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
namespace slu {
namespace v2beta1 {

// Run Speechly Batch API operations on audio sources without actively waiting
// the results.
class BatchAPI final {
 public:
  static constexpr char const* service_full_name() {
    return "speechly.slu.v2beta1.BatchAPI";
  }
  class StubInterface {
   public:
    virtual ~StubInterface() {}
    // Create a new background Speechly Batch API operation for a one or more
    // audio sources. Audio sources must be URIs of a files, reachable from the
    // API The response includes an `id` that is used to match the operation to
    // the results. A `reference` identifier can also be set. Also a
    // `batch_reference` can be set to mark that multiple audio sources form a
    // logical batch. In that case, the response will include a `batch_id`.
    virtual ::grpc::Status ProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>> AsyncProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>>(AsyncProcessAudioSourceRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>> PrepareAsyncProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>>(PrepareAsyncProcessAudioSourceRaw(context, request, cq));
    }
    // Query the status of given operations.
    // If the `ProcessAudioSourceRequest` did not define a `destination` or
    // `completion_webhook` as a destination, the results are returned in the
    // `QueryStatusResponse`.
    virtual ::grpc::Status QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::speechly::slu::v2beta1::QueryStatusResponse* response) = 0;
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::QueryStatusResponse>> AsyncQueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::QueryStatusResponse>>(AsyncQueryStatusRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::QueryStatusResponse>> PrepareAsyncQueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::QueryStatusResponse>>(PrepareAsyncQueryStatusRaw(context, request, cq));
    }
    class experimental_async_interface {
     public:
      virtual ~experimental_async_interface() {}
      // Create a new background Speechly Batch API operation for a one or more
      // audio sources. Audio sources must be URIs of a files, reachable from the
      // API The response includes an `id` that is used to match the operation to
      // the results. A `reference` identifier can also be set. Also a
      // `batch_reference` can be set to mark that multiple audio sources form a
      // logical batch. In that case, the response will include a `batch_id`.
      virtual void ProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void ProcessAudioSource(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void ProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) = 0;
      virtual void ProcessAudioSource(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) = 0;
      // Query the status of given operations.
      // If the `ProcessAudioSourceRequest` did not define a `destination` or
      // `completion_webhook` as a destination, the results are returned in the
      // `QueryStatusResponse`.
      virtual void QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void QueryStatus(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, std::function<void(::grpc::Status)>) = 0;
      virtual void QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) = 0;
      virtual void QueryStatus(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) = 0;
    };
    virtual class experimental_async_interface* experimental_async() { return nullptr; }
  private:
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>* AsyncProcessAudioSourceRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>* PrepareAsyncProcessAudioSourceRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::QueryStatusResponse>* AsyncQueryStatusRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) = 0;
    virtual ::grpc::ClientAsyncResponseReaderInterface< ::speechly::slu::v2beta1::QueryStatusResponse>* PrepareAsyncQueryStatusRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) = 0;
  };
  class Stub final : public StubInterface {
   public:
    Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel);
    ::grpc::Status ProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>> AsyncProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>>(AsyncProcessAudioSourceRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>> PrepareAsyncProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>>(PrepareAsyncProcessAudioSourceRaw(context, request, cq));
    }
    ::grpc::Status QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::speechly::slu::v2beta1::QueryStatusResponse* response) override;
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::QueryStatusResponse>> AsyncQueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::QueryStatusResponse>>(AsyncQueryStatusRaw(context, request, cq));
    }
    std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::QueryStatusResponse>> PrepareAsyncQueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) {
      return std::unique_ptr< ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::QueryStatusResponse>>(PrepareAsyncQueryStatusRaw(context, request, cq));
    }
    class experimental_async final :
      public StubInterface::experimental_async_interface {
     public:
      void ProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, std::function<void(::grpc::Status)>) override;
      void ProcessAudioSource(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, std::function<void(::grpc::Status)>) override;
      void ProcessAudioSource(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) override;
      void ProcessAudioSource(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) override;
      void QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, std::function<void(::grpc::Status)>) override;
      void QueryStatus(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, std::function<void(::grpc::Status)>) override;
      void QueryStatus(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) override;
      void QueryStatus(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::speechly::slu::v2beta1::QueryStatusResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) override;
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
    ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>* AsyncProcessAudioSourceRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>* PrepareAsyncProcessAudioSourceRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::QueryStatusResponse>* AsyncQueryStatusRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) override;
    ::grpc::ClientAsyncResponseReader< ::speechly::slu::v2beta1::QueryStatusResponse>* PrepareAsyncQueryStatusRaw(::grpc::ClientContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest& request, ::grpc::CompletionQueue* cq) override;
    const ::grpc::internal::RpcMethod rpcmethod_ProcessAudioSource_;
    const ::grpc::internal::RpcMethod rpcmethod_QueryStatus_;
  };
  static std::unique_ptr<Stub> NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options = ::grpc::StubOptions());

  class Service : public ::grpc::Service {
   public:
    Service();
    virtual ~Service();
    // Create a new background Speechly Batch API operation for a one or more
    // audio sources. Audio sources must be URIs of a files, reachable from the
    // API The response includes an `id` that is used to match the operation to
    // the results. A `reference` identifier can also be set. Also a
    // `batch_reference` can be set to mark that multiple audio sources form a
    // logical batch. In that case, the response will include a `batch_id`.
    virtual ::grpc::Status ProcessAudioSource(::grpc::ServerContext* context, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response);
    // Query the status of given operations.
    // If the `ProcessAudioSourceRequest` did not define a `destination` or
    // `completion_webhook` as a destination, the results are returned in the
    // `QueryStatusResponse`.
    virtual ::grpc::Status QueryStatus(::grpc::ServerContext* context, const ::speechly::slu::v2beta1::QueryStatusRequest* request, ::speechly::slu::v2beta1::QueryStatusResponse* response);
  };
  template <class BaseClass>
  class WithAsyncMethod_ProcessAudioSource : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithAsyncMethod_ProcessAudioSource() {
      ::grpc::Service::MarkMethodAsync(0);
    }
    ~WithAsyncMethod_ProcessAudioSource() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestProcessAudioSource(::grpc::ServerContext* context, ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request, ::grpc::ServerAsyncResponseWriter< ::speechly::slu::v2beta1::ProcessAudioSourceResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithAsyncMethod_QueryStatus : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithAsyncMethod_QueryStatus() {
      ::grpc::Service::MarkMethodAsync(1);
    }
    ~WithAsyncMethod_QueryStatus() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestQueryStatus(::grpc::ServerContext* context, ::speechly::slu::v2beta1::QueryStatusRequest* request, ::grpc::ServerAsyncResponseWriter< ::speechly::slu::v2beta1::QueryStatusResponse>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  typedef WithAsyncMethod_ProcessAudioSource<WithAsyncMethod_QueryStatus<Service > > AsyncService;
  template <class BaseClass>
  class ExperimentalWithCallbackMethod_ProcessAudioSource : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithCallbackMethod_ProcessAudioSource() {
      ::grpc::Service::experimental().MarkMethodCallback(0,
        new ::grpc_impl::internal::CallbackUnaryHandler< ::speechly::slu::v2beta1::ProcessAudioSourceRequest, ::speechly::slu::v2beta1::ProcessAudioSourceResponse>(
          [this](::grpc::ServerContext* context,
                 const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* request,
                 ::speechly::slu::v2beta1::ProcessAudioSourceResponse* response,
                 ::grpc::experimental::ServerCallbackRpcController* controller) {
                   return this->ProcessAudioSource(context, request, response, controller);
                 }));
    }
    void SetMessageAllocatorFor_ProcessAudioSource(
        ::grpc::experimental::MessageAllocator< ::speechly::slu::v2beta1::ProcessAudioSourceRequest, ::speechly::slu::v2beta1::ProcessAudioSourceResponse>* allocator) {
      static_cast<::grpc_impl::internal::CallbackUnaryHandler< ::speechly::slu::v2beta1::ProcessAudioSourceRequest, ::speechly::slu::v2beta1::ProcessAudioSourceResponse>*>(
          ::grpc::Service::experimental().GetHandler(0))
              ->SetMessageAllocator(allocator);
    }
    ~ExperimentalWithCallbackMethod_ProcessAudioSource() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    virtual void ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/, ::grpc::experimental::ServerCallbackRpcController* controller) { controller->Finish(::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "")); }
  };
  template <class BaseClass>
  class ExperimentalWithCallbackMethod_QueryStatus : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithCallbackMethod_QueryStatus() {
      ::grpc::Service::experimental().MarkMethodCallback(1,
        new ::grpc_impl::internal::CallbackUnaryHandler< ::speechly::slu::v2beta1::QueryStatusRequest, ::speechly::slu::v2beta1::QueryStatusResponse>(
          [this](::grpc::ServerContext* context,
                 const ::speechly::slu::v2beta1::QueryStatusRequest* request,
                 ::speechly::slu::v2beta1::QueryStatusResponse* response,
                 ::grpc::experimental::ServerCallbackRpcController* controller) {
                   return this->QueryStatus(context, request, response, controller);
                 }));
    }
    void SetMessageAllocatorFor_QueryStatus(
        ::grpc::experimental::MessageAllocator< ::speechly::slu::v2beta1::QueryStatusRequest, ::speechly::slu::v2beta1::QueryStatusResponse>* allocator) {
      static_cast<::grpc_impl::internal::CallbackUnaryHandler< ::speechly::slu::v2beta1::QueryStatusRequest, ::speechly::slu::v2beta1::QueryStatusResponse>*>(
          ::grpc::Service::experimental().GetHandler(1))
              ->SetMessageAllocator(allocator);
    }
    ~ExperimentalWithCallbackMethod_QueryStatus() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    virtual void QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/, ::grpc::experimental::ServerCallbackRpcController* controller) { controller->Finish(::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "")); }
  };
  typedef ExperimentalWithCallbackMethod_ProcessAudioSource<ExperimentalWithCallbackMethod_QueryStatus<Service > > ExperimentalCallbackService;
  template <class BaseClass>
  class WithGenericMethod_ProcessAudioSource : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithGenericMethod_ProcessAudioSource() {
      ::grpc::Service::MarkMethodGeneric(0);
    }
    ~WithGenericMethod_ProcessAudioSource() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithGenericMethod_QueryStatus : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithGenericMethod_QueryStatus() {
      ::grpc::Service::MarkMethodGeneric(1);
    }
    ~WithGenericMethod_QueryStatus() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
  };
  template <class BaseClass>
  class WithRawMethod_ProcessAudioSource : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithRawMethod_ProcessAudioSource() {
      ::grpc::Service::MarkMethodRaw(0);
    }
    ~WithRawMethod_ProcessAudioSource() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestProcessAudioSource(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(0, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class WithRawMethod_QueryStatus : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithRawMethod_QueryStatus() {
      ::grpc::Service::MarkMethodRaw(1);
    }
    ~WithRawMethod_QueryStatus() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    void RequestQueryStatus(::grpc::ServerContext* context, ::grpc::ByteBuffer* request, ::grpc::ServerAsyncResponseWriter< ::grpc::ByteBuffer>* response, ::grpc::CompletionQueue* new_call_cq, ::grpc::ServerCompletionQueue* notification_cq, void *tag) {
      ::grpc::Service::RequestAsyncUnary(1, context, request, response, new_call_cq, notification_cq, tag);
    }
  };
  template <class BaseClass>
  class ExperimentalWithRawCallbackMethod_ProcessAudioSource : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithRawCallbackMethod_ProcessAudioSource() {
      ::grpc::Service::experimental().MarkMethodRawCallback(0,
        new ::grpc_impl::internal::CallbackUnaryHandler< ::grpc::ByteBuffer, ::grpc::ByteBuffer>(
          [this](::grpc::ServerContext* context,
                 const ::grpc::ByteBuffer* request,
                 ::grpc::ByteBuffer* response,
                 ::grpc::experimental::ServerCallbackRpcController* controller) {
                   this->ProcessAudioSource(context, request, response, controller);
                 }));
    }
    ~ExperimentalWithRawCallbackMethod_ProcessAudioSource() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    virtual void ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::grpc::ByteBuffer* /*request*/, ::grpc::ByteBuffer* /*response*/, ::grpc::experimental::ServerCallbackRpcController* controller) { controller->Finish(::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "")); }
  };
  template <class BaseClass>
  class ExperimentalWithRawCallbackMethod_QueryStatus : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    ExperimentalWithRawCallbackMethod_QueryStatus() {
      ::grpc::Service::experimental().MarkMethodRawCallback(1,
        new ::grpc_impl::internal::CallbackUnaryHandler< ::grpc::ByteBuffer, ::grpc::ByteBuffer>(
          [this](::grpc::ServerContext* context,
                 const ::grpc::ByteBuffer* request,
                 ::grpc::ByteBuffer* response,
                 ::grpc::experimental::ServerCallbackRpcController* controller) {
                   this->QueryStatus(context, request, response, controller);
                 }));
    }
    ~ExperimentalWithRawCallbackMethod_QueryStatus() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable synchronous version of this method
    ::grpc::Status QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    virtual void QueryStatus(::grpc::ServerContext* /*context*/, const ::grpc::ByteBuffer* /*request*/, ::grpc::ByteBuffer* /*response*/, ::grpc::experimental::ServerCallbackRpcController* controller) { controller->Finish(::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "")); }
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_ProcessAudioSource : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithStreamedUnaryMethod_ProcessAudioSource() {
      ::grpc::Service::MarkMethodStreamed(0,
        new ::grpc::internal::StreamedUnaryHandler< ::speechly::slu::v2beta1::ProcessAudioSourceRequest, ::speechly::slu::v2beta1::ProcessAudioSourceResponse>(std::bind(&WithStreamedUnaryMethod_ProcessAudioSource<BaseClass>::StreamedProcessAudioSource, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_ProcessAudioSource() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status ProcessAudioSource(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::ProcessAudioSourceRequest* /*request*/, ::speechly::slu::v2beta1::ProcessAudioSourceResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedProcessAudioSource(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::speechly::slu::v2beta1::ProcessAudioSourceRequest,::speechly::slu::v2beta1::ProcessAudioSourceResponse>* server_unary_streamer) = 0;
  };
  template <class BaseClass>
  class WithStreamedUnaryMethod_QueryStatus : public BaseClass {
   private:
    void BaseClassMustBeDerivedFromService(const Service* /*service*/) {}
   public:
    WithStreamedUnaryMethod_QueryStatus() {
      ::grpc::Service::MarkMethodStreamed(1,
        new ::grpc::internal::StreamedUnaryHandler< ::speechly::slu::v2beta1::QueryStatusRequest, ::speechly::slu::v2beta1::QueryStatusResponse>(std::bind(&WithStreamedUnaryMethod_QueryStatus<BaseClass>::StreamedQueryStatus, this, std::placeholders::_1, std::placeholders::_2)));
    }
    ~WithStreamedUnaryMethod_QueryStatus() override {
      BaseClassMustBeDerivedFromService(this);
    }
    // disable regular version of this method
    ::grpc::Status QueryStatus(::grpc::ServerContext* /*context*/, const ::speechly::slu::v2beta1::QueryStatusRequest* /*request*/, ::speechly::slu::v2beta1::QueryStatusResponse* /*response*/) override {
      abort();
      return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
    }
    // replace default version of method with streamed unary
    virtual ::grpc::Status StreamedQueryStatus(::grpc::ServerContext* context, ::grpc::ServerUnaryStreamer< ::speechly::slu::v2beta1::QueryStatusRequest,::speechly::slu::v2beta1::QueryStatusResponse>* server_unary_streamer) = 0;
  };
  typedef WithStreamedUnaryMethod_ProcessAudioSource<WithStreamedUnaryMethod_QueryStatus<Service > > StreamedUnaryService;
  typedef Service SplitStreamedService;
  typedef WithStreamedUnaryMethod_ProcessAudioSource<WithStreamedUnaryMethod_QueryStatus<Service > > StreamedService;
};

}  // namespace v2beta1
}  // namespace slu
}  // namespace speechly


#endif  // GRPC_speechly_2fslu_2fv2beta1_2fbatch_5fapi_2eproto__INCLUDED
