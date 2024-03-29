//
// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the protocol buffer compiler.
// Source: speechly/slu/v1/slu.proto
//
import GRPC
import NIO
import NIOConcurrencyHelpers
import SwiftProtobuf


/// Service that implements Speechly SLU (Spoken Language Understanding) API.
///
/// To use this service you MUST use an access token from Speechly Identity API.
/// The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer ACCESS_TOKEN` as value, e.g. in Go:
///
/// ```
/// ctx := context.Background()
/// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
/// stream, err := speechlySLUClient.Stream(ctx)
/// ```
///
/// Usage: instantiate `Speechly_Slu_V1_SLUClient`, then call methods of this protocol to make API calls.
public protocol Speechly_Slu_V1_SLUClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? { get }

  func stream(
    callOptions: CallOptions?,
    handler: @escaping (Speechly_Slu_V1_SLUResponse) -> Void
  ) -> BidirectionalStreamingCall<Speechly_Slu_V1_SLURequest, Speechly_Slu_V1_SLUResponse>
}

extension Speechly_Slu_V1_SLUClientProtocol {
  public var serviceName: String {
    return "speechly.slu.v1.SLU"
  }

  /// Performs bidirectional streaming speech recognition: receive results while sending audio.
  ///
  /// First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.
  ///
  /// This RPC can handle multiple logical audio segments with the use of `SLUEvent_START` and `SLUEvent_STOP` messages,
  /// which are used to indicate the beginning and the end of a segment.
  ///
  /// A typical call timeline will look like this:
  ///
  /// 1. Client starts the RPC.
  /// 2. Client sends `SLUConfig` message with audio configuration.
  /// 3. Client sends `SLUEvent.START`.
  /// 4. Client sends audio and receives responses from the server.
  /// 5. Client sends `SLUEvent.STOP`.
  /// 6. Client sends `SLUEvent.START`.
  /// 7. Client sends audio and receives responses from the server.
  /// 8. Client sends `SLUEvent.STOP`.
  /// 9. Client closes the stream and receives responses from the server until EOF is received.
  ///
  /// NB: the client does not have to wait until the server acknowledges the start / stop events,
  /// this is done asynchronously. The client can deduplicate responses based on the audio context ID,
  /// which will be present in every response message.
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  ///   - handler: A closure called when each response is received from the server.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata and status.
  public func stream(
    callOptions: CallOptions? = nil,
    handler: @escaping (Speechly_Slu_V1_SLUResponse) -> Void
  ) -> BidirectionalStreamingCall<Speechly_Slu_V1_SLURequest, Speechly_Slu_V1_SLUResponse> {
    return self.makeBidirectionalStreamingCall(
      path: Speechly_Slu_V1_SLUClientMetadata.Methods.stream.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamInterceptors() ?? [],
      handler: handler
    )
  }
}

@available(*, deprecated)
extension Speechly_Slu_V1_SLUClient: @unchecked Sendable {}

@available(*, deprecated, renamed: "Speechly_Slu_V1_SLUNIOClient")
public final class Speechly_Slu_V1_SLUClient: Speechly_Slu_V1_SLUClientProtocol {
  private let lock = Lock()
  private var _defaultCallOptions: CallOptions
  private var _interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol?
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions {
    get { self.lock.withLock { return self._defaultCallOptions } }
    set { self.lock.withLockVoid { self._defaultCallOptions = newValue } }
  }
  public var interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? {
    get { self.lock.withLock { return self._interceptors } }
    set { self.lock.withLockVoid { self._interceptors = newValue } }
  }

  /// Creates a client for the speechly.slu.v1.SLU service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self._defaultCallOptions = defaultCallOptions
    self._interceptors = interceptors
  }
}

public struct Speechly_Slu_V1_SLUNIOClient: Speechly_Slu_V1_SLUClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol?

  /// Creates a client for the speechly.slu.v1.SLU service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

/// Service that implements Speechly SLU (Spoken Language Understanding) API.
///
/// To use this service you MUST use an access token from Speechly Identity API.
/// The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer ACCESS_TOKEN` as value, e.g. in Go:
///
/// ```
/// ctx := context.Background()
/// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
/// stream, err := speechlySLUClient.Stream(ctx)
/// ```
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Speechly_Slu_V1_SLUAsyncClientProtocol: GRPCClient {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? { get }

  func makeStreamCall(
    callOptions: CallOptions?
  ) -> GRPCAsyncBidirectionalStreamingCall<Speechly_Slu_V1_SLURequest, Speechly_Slu_V1_SLUResponse>
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Slu_V1_SLUAsyncClientProtocol {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Speechly_Slu_V1_SLUClientMetadata.serviceDescriptor
  }

  public var interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? {
    return nil
  }

  public func makeStreamCall(
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncBidirectionalStreamingCall<Speechly_Slu_V1_SLURequest, Speechly_Slu_V1_SLUResponse> {
    return self.makeAsyncBidirectionalStreamingCall(
      path: Speechly_Slu_V1_SLUClientMetadata.Methods.stream.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Slu_V1_SLUAsyncClientProtocol {
  public func stream<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Speechly_Slu_V1_SLUResponse> where RequestStream: Sequence, RequestStream.Element == Speechly_Slu_V1_SLURequest {
    return self.performAsyncBidirectionalStreamingCall(
      path: Speechly_Slu_V1_SLUClientMetadata.Methods.stream.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamInterceptors() ?? []
    )
  }

  public func stream<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Speechly_Slu_V1_SLUResponse> where RequestStream: AsyncSequence & Sendable, RequestStream.Element == Speechly_Slu_V1_SLURequest {
    return self.performAsyncBidirectionalStreamingCall(
      path: Speechly_Slu_V1_SLUClientMetadata.Methods.stream.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public struct Speechly_Slu_V1_SLUAsyncClient: Speechly_Slu_V1_SLUAsyncClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol?

  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

public protocol Speechly_Slu_V1_SLUClientInterceptorFactoryProtocol: Sendable {

  /// - Returns: Interceptors to use when invoking 'stream'.
  func makeStreamInterceptors() -> [ClientInterceptor<Speechly_Slu_V1_SLURequest, Speechly_Slu_V1_SLUResponse>]
}

public enum Speechly_Slu_V1_SLUClientMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "SLU",
    fullName: "speechly.slu.v1.SLU",
    methods: [
      Speechly_Slu_V1_SLUClientMetadata.Methods.stream,
    ]
  )

  public enum Methods {
    public static let stream = GRPCMethodDescriptor(
      name: "Stream",
      path: "/speechly.slu.v1.SLU/Stream",
      type: GRPCCallType.bidirectionalStreaming
    )
  }
}

/// Service that implements Speechly SLU (Spoken Language Understanding) API.
///
/// To use this service you MUST use an access token from Speechly Identity API.
/// The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer ACCESS_TOKEN` as value, e.g. in Go:
///
/// ```
/// ctx := context.Background()
/// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
/// stream, err := speechlySLUClient.Stream(ctx)
/// ```
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Slu_V1_SLUProvider: CallHandlerProvider {
  var interceptors: Speechly_Slu_V1_SLUServerInterceptorFactoryProtocol? { get }

  /// Performs bidirectional streaming speech recognition: receive results while sending audio.
  ///
  /// First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.
  ///
  /// This RPC can handle multiple logical audio segments with the use of `SLUEvent_START` and `SLUEvent_STOP` messages,
  /// which are used to indicate the beginning and the end of a segment.
  ///
  /// A typical call timeline will look like this:
  ///
  /// 1. Client starts the RPC.
  /// 2. Client sends `SLUConfig` message with audio configuration.
  /// 3. Client sends `SLUEvent.START`.
  /// 4. Client sends audio and receives responses from the server.
  /// 5. Client sends `SLUEvent.STOP`.
  /// 6. Client sends `SLUEvent.START`.
  /// 7. Client sends audio and receives responses from the server.
  /// 8. Client sends `SLUEvent.STOP`.
  /// 9. Client closes the stream and receives responses from the server until EOF is received.
  ///
  /// NB: the client does not have to wait until the server acknowledges the start / stop events,
  /// this is done asynchronously. The client can deduplicate responses based on the audio context ID,
  /// which will be present in every response message.
  func stream(context: StreamingResponseCallContext<Speechly_Slu_V1_SLUResponse>) -> EventLoopFuture<(StreamEvent<Speechly_Slu_V1_SLURequest>) -> Void>
}

extension Speechly_Slu_V1_SLUProvider {
  public var serviceName: Substring {
    return Speechly_Slu_V1_SLUServerMetadata.serviceDescriptor.fullName[...]
  }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Stream":
      return BidirectionalStreamingServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Slu_V1_SLURequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Slu_V1_SLUResponse>(),
        interceptors: self.interceptors?.makeStreamInterceptors() ?? [],
        observerFactory: self.stream(context:)
      )

    default:
      return nil
    }
  }
}

/// Service that implements Speechly SLU (Spoken Language Understanding) API.
///
/// To use this service you MUST use an access token from Speechly Identity API.
/// The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer ACCESS_TOKEN` as value, e.g. in Go:
///
/// ```
/// ctx := context.Background()
/// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
/// stream, err := speechlySLUClient.Stream(ctx)
/// ```
///
/// To implement a server, implement an object which conforms to this protocol.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Speechly_Slu_V1_SLUAsyncProvider: CallHandlerProvider, Sendable {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Speechly_Slu_V1_SLUServerInterceptorFactoryProtocol? { get }

  /// Performs bidirectional streaming speech recognition: receive results while sending audio.
  ///
  /// First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.
  ///
  /// This RPC can handle multiple logical audio segments with the use of `SLUEvent_START` and `SLUEvent_STOP` messages,
  /// which are used to indicate the beginning and the end of a segment.
  ///
  /// A typical call timeline will look like this:
  ///
  /// 1. Client starts the RPC.
  /// 2. Client sends `SLUConfig` message with audio configuration.
  /// 3. Client sends `SLUEvent.START`.
  /// 4. Client sends audio and receives responses from the server.
  /// 5. Client sends `SLUEvent.STOP`.
  /// 6. Client sends `SLUEvent.START`.
  /// 7. Client sends audio and receives responses from the server.
  /// 8. Client sends `SLUEvent.STOP`.
  /// 9. Client closes the stream and receives responses from the server until EOF is received.
  ///
  /// NB: the client does not have to wait until the server acknowledges the start / stop events,
  /// this is done asynchronously. The client can deduplicate responses based on the audio context ID,
  /// which will be present in every response message.
  func stream(
    requestStream: GRPCAsyncRequestStream<Speechly_Slu_V1_SLURequest>,
    responseStream: GRPCAsyncResponseStreamWriter<Speechly_Slu_V1_SLUResponse>,
    context: GRPCAsyncServerCallContext
  ) async throws
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Slu_V1_SLUAsyncProvider {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Speechly_Slu_V1_SLUServerMetadata.serviceDescriptor
  }

  public var serviceName: Substring {
    return Speechly_Slu_V1_SLUServerMetadata.serviceDescriptor.fullName[...]
  }

  public var interceptors: Speechly_Slu_V1_SLUServerInterceptorFactoryProtocol? {
    return nil
  }

  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Stream":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Slu_V1_SLURequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Slu_V1_SLUResponse>(),
        interceptors: self.interceptors?.makeStreamInterceptors() ?? [],
        wrapping: { try await self.stream(requestStream: $0, responseStream: $1, context: $2) }
      )

    default:
      return nil
    }
  }
}

public protocol Speechly_Slu_V1_SLUServerInterceptorFactoryProtocol: Sendable {

  /// - Returns: Interceptors to use when handling 'stream'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeStreamInterceptors() -> [ServerInterceptor<Speechly_Slu_V1_SLURequest, Speechly_Slu_V1_SLUResponse>]
}

public enum Speechly_Slu_V1_SLUServerMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "SLU",
    fullName: "speechly.slu.v1.SLU",
    methods: [
      Speechly_Slu_V1_SLUServerMetadata.Methods.stream,
    ]
  )

  public enum Methods {
    public static let stream = GRPCMethodDescriptor(
      name: "Stream",
      path: "/speechly.slu.v1.SLU/Stream",
      type: GRPCCallType.bidirectionalStreaming
    )
  }
}
