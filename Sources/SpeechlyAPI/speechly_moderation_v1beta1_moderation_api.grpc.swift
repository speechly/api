//
// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the protocol buffer compiler.
// Source: speechly/moderation/v1beta1/moderation_api.proto
//
import GRPC
import NIO
import NIOConcurrencyHelpers
import SwiftProtobuf


/// Run Speechly Moderation API with streamable audio content or text content.
///
/// Usage: instantiate `Speechly_Moderation_V1beta1_ModerationAPIClient`, then call methods of this protocol to make API calls.
public protocol Speechly_Moderation_V1beta1_ModerationAPIClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? { get }

  func audioModeration(
    callOptions: CallOptions?
  ) -> ClientStreamingCall<Speechly_Moderation_V1beta1_AudioModerationRequest, Speechly_Moderation_V1beta1_AudioModerationResponse>

  func streamingAudioModeration(
    callOptions: CallOptions?,
    handler: @escaping (Speechly_Moderation_V1beta1_StreamingAudioModerationResponse) -> Void
  ) -> BidirectionalStreamingCall<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest, Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>

  func textModeration(
    _ request: Speechly_Moderation_V1beta1_TextModerationRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Moderation_V1beta1_TextModerationRequest, Speechly_Moderation_V1beta1_TextModerationResponse>
}

extension Speechly_Moderation_V1beta1_ModerationAPIClientProtocol {
  public var serviceName: String {
    return "speechly.moderation.v1beta1.ModerationAPI"
  }

  /// Stream audio to be moderated and receive all results once whole audio has been processed.
  /// The discourse context may be described for improved performance.
  /// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata, status and response.
  public func audioModeration(
    callOptions: CallOptions? = nil
  ) -> ClientStreamingCall<Speechly_Moderation_V1beta1_AudioModerationRequest, Speechly_Moderation_V1beta1_AudioModerationResponse> {
    return self.makeClientStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.audioModeration.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeAudioModerationInterceptors() ?? []
    )
  }

  /// Stream audio to be moderated and receive results for identified segments as soon results as possible.
  /// The discourse context may be described for improved performance.
  /// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  ///   - handler: A closure called when each response is received from the server.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata and status.
  public func streamingAudioModeration(
    callOptions: CallOptions? = nil,
    handler: @escaping (Speechly_Moderation_V1beta1_StreamingAudioModerationResponse) -> Void
  ) -> BidirectionalStreamingCall<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest, Speechly_Moderation_V1beta1_StreamingAudioModerationResponse> {
    return self.makeBidirectionalStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.streamingAudioModeration.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamingAudioModerationInterceptors() ?? [],
      handler: handler
    )
  }

  /// Moderate a text utterance.
  /// The discourse context may be described for improved performance.
  /// The related audio may be identified using `audio_context_id`.
  ///
  /// - Parameters:
  ///   - request: Request to send to TextModeration.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func textModeration(
    _ request: Speechly_Moderation_V1beta1_TextModerationRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Moderation_V1beta1_TextModerationRequest, Speechly_Moderation_V1beta1_TextModerationResponse> {
    return self.makeUnaryCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.textModeration.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeTextModerationInterceptors() ?? []
    )
  }
}

@available(*, deprecated)
extension Speechly_Moderation_V1beta1_ModerationAPIClient: @unchecked Sendable {}

@available(*, deprecated, renamed: "Speechly_Moderation_V1beta1_ModerationAPINIOClient")
public final class Speechly_Moderation_V1beta1_ModerationAPIClient: Speechly_Moderation_V1beta1_ModerationAPIClientProtocol {
  private let lock = Lock()
  private var _defaultCallOptions: CallOptions
  private var _interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol?
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions {
    get { self.lock.withLock { return self._defaultCallOptions } }
    set { self.lock.withLockVoid { self._defaultCallOptions = newValue } }
  }
  public var interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? {
    get { self.lock.withLock { return self._interceptors } }
    set { self.lock.withLockVoid { self._interceptors = newValue } }
  }

  /// Creates a client for the speechly.moderation.v1beta1.ModerationAPI service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self._defaultCallOptions = defaultCallOptions
    self._interceptors = interceptors
  }
}

public struct Speechly_Moderation_V1beta1_ModerationAPINIOClient: Speechly_Moderation_V1beta1_ModerationAPIClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol?

  /// Creates a client for the speechly.moderation.v1beta1.ModerationAPI service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

/// Run Speechly Moderation API with streamable audio content or text content.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Speechly_Moderation_V1beta1_ModerationAPIAsyncClientProtocol: GRPCClient {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? { get }

  func makeAudioModerationCall(
    callOptions: CallOptions?
  ) -> GRPCAsyncClientStreamingCall<Speechly_Moderation_V1beta1_AudioModerationRequest, Speechly_Moderation_V1beta1_AudioModerationResponse>

  func makeStreamingAudioModerationCall(
    callOptions: CallOptions?
  ) -> GRPCAsyncBidirectionalStreamingCall<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest, Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>

  func makeTextModerationCall(
    _ request: Speechly_Moderation_V1beta1_TextModerationRequest,
    callOptions: CallOptions?
  ) -> GRPCAsyncUnaryCall<Speechly_Moderation_V1beta1_TextModerationRequest, Speechly_Moderation_V1beta1_TextModerationResponse>
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Moderation_V1beta1_ModerationAPIAsyncClientProtocol {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.serviceDescriptor
  }

  public var interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? {
    return nil
  }

  public func makeAudioModerationCall(
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncClientStreamingCall<Speechly_Moderation_V1beta1_AudioModerationRequest, Speechly_Moderation_V1beta1_AudioModerationResponse> {
    return self.makeAsyncClientStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.audioModeration.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeAudioModerationInterceptors() ?? []
    )
  }

  public func makeStreamingAudioModerationCall(
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncBidirectionalStreamingCall<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest, Speechly_Moderation_V1beta1_StreamingAudioModerationResponse> {
    return self.makeAsyncBidirectionalStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.streamingAudioModeration.path,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamingAudioModerationInterceptors() ?? []
    )
  }

  public func makeTextModerationCall(
    _ request: Speechly_Moderation_V1beta1_TextModerationRequest,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncUnaryCall<Speechly_Moderation_V1beta1_TextModerationRequest, Speechly_Moderation_V1beta1_TextModerationResponse> {
    return self.makeAsyncUnaryCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.textModeration.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeTextModerationInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Moderation_V1beta1_ModerationAPIAsyncClientProtocol {
  public func audioModeration<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) async throws -> Speechly_Moderation_V1beta1_AudioModerationResponse where RequestStream: Sequence, RequestStream.Element == Speechly_Moderation_V1beta1_AudioModerationRequest {
    return try await self.performAsyncClientStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.audioModeration.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeAudioModerationInterceptors() ?? []
    )
  }

  public func audioModeration<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) async throws -> Speechly_Moderation_V1beta1_AudioModerationResponse where RequestStream: AsyncSequence & Sendable, RequestStream.Element == Speechly_Moderation_V1beta1_AudioModerationRequest {
    return try await self.performAsyncClientStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.audioModeration.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeAudioModerationInterceptors() ?? []
    )
  }

  public func streamingAudioModeration<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Speechly_Moderation_V1beta1_StreamingAudioModerationResponse> where RequestStream: Sequence, RequestStream.Element == Speechly_Moderation_V1beta1_StreamingAudioModerationRequest {
    return self.performAsyncBidirectionalStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.streamingAudioModeration.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamingAudioModerationInterceptors() ?? []
    )
  }

  public func streamingAudioModeration<RequestStream>(
    _ requests: RequestStream,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Speechly_Moderation_V1beta1_StreamingAudioModerationResponse> where RequestStream: AsyncSequence & Sendable, RequestStream.Element == Speechly_Moderation_V1beta1_StreamingAudioModerationRequest {
    return self.performAsyncBidirectionalStreamingCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.streamingAudioModeration.path,
      requests: requests,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeStreamingAudioModerationInterceptors() ?? []
    )
  }

  public func textModeration(
    _ request: Speechly_Moderation_V1beta1_TextModerationRequest,
    callOptions: CallOptions? = nil
  ) async throws -> Speechly_Moderation_V1beta1_TextModerationResponse {
    return try await self.performAsyncUnaryCall(
      path: Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.textModeration.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeTextModerationInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public struct Speechly_Moderation_V1beta1_ModerationAPIAsyncClient: Speechly_Moderation_V1beta1_ModerationAPIAsyncClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol?

  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

public protocol Speechly_Moderation_V1beta1_ModerationAPIClientInterceptorFactoryProtocol: Sendable {

  /// - Returns: Interceptors to use when invoking 'audioModeration'.
  func makeAudioModerationInterceptors() -> [ClientInterceptor<Speechly_Moderation_V1beta1_AudioModerationRequest, Speechly_Moderation_V1beta1_AudioModerationResponse>]

  /// - Returns: Interceptors to use when invoking 'streamingAudioModeration'.
  func makeStreamingAudioModerationInterceptors() -> [ClientInterceptor<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest, Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>]

  /// - Returns: Interceptors to use when invoking 'textModeration'.
  func makeTextModerationInterceptors() -> [ClientInterceptor<Speechly_Moderation_V1beta1_TextModerationRequest, Speechly_Moderation_V1beta1_TextModerationResponse>]
}

public enum Speechly_Moderation_V1beta1_ModerationAPIClientMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "ModerationAPI",
    fullName: "speechly.moderation.v1beta1.ModerationAPI",
    methods: [
      Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.audioModeration,
      Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.streamingAudioModeration,
      Speechly_Moderation_V1beta1_ModerationAPIClientMetadata.Methods.textModeration,
    ]
  )

  public enum Methods {
    public static let audioModeration = GRPCMethodDescriptor(
      name: "AudioModeration",
      path: "/speechly.moderation.v1beta1.ModerationAPI/AudioModeration",
      type: GRPCCallType.clientStreaming
    )

    public static let streamingAudioModeration = GRPCMethodDescriptor(
      name: "StreamingAudioModeration",
      path: "/speechly.moderation.v1beta1.ModerationAPI/StreamingAudioModeration",
      type: GRPCCallType.bidirectionalStreaming
    )

    public static let textModeration = GRPCMethodDescriptor(
      name: "TextModeration",
      path: "/speechly.moderation.v1beta1.ModerationAPI/TextModeration",
      type: GRPCCallType.unary
    )
  }
}

/// Run Speechly Moderation API with streamable audio content or text content.
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Moderation_V1beta1_ModerationAPIProvider: CallHandlerProvider {
  var interceptors: Speechly_Moderation_V1beta1_ModerationAPIServerInterceptorFactoryProtocol? { get }

  /// Stream audio to be moderated and receive all results once whole audio has been processed.
  /// The discourse context may be described for improved performance.
  /// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
  func audioModeration(context: UnaryResponseCallContext<Speechly_Moderation_V1beta1_AudioModerationResponse>) -> EventLoopFuture<(StreamEvent<Speechly_Moderation_V1beta1_AudioModerationRequest>) -> Void>

  /// Stream audio to be moderated and receive results for identified segments as soon results as possible.
  /// The discourse context may be described for improved performance.
  /// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
  func streamingAudioModeration(context: StreamingResponseCallContext<Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>) -> EventLoopFuture<(StreamEvent<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest>) -> Void>

  /// Moderate a text utterance.
  /// The discourse context may be described for improved performance.
  /// The related audio may be identified using `audio_context_id`.
  func textModeration(request: Speechly_Moderation_V1beta1_TextModerationRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Moderation_V1beta1_TextModerationResponse>
}

extension Speechly_Moderation_V1beta1_ModerationAPIProvider {
  public var serviceName: Substring {
    return Speechly_Moderation_V1beta1_ModerationAPIServerMetadata.serviceDescriptor.fullName[...]
  }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "AudioModeration":
      return ClientStreamingServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Moderation_V1beta1_AudioModerationRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Moderation_V1beta1_AudioModerationResponse>(),
        interceptors: self.interceptors?.makeAudioModerationInterceptors() ?? [],
        observerFactory: self.audioModeration(context:)
      )

    case "StreamingAudioModeration":
      return BidirectionalStreamingServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>(),
        interceptors: self.interceptors?.makeStreamingAudioModerationInterceptors() ?? [],
        observerFactory: self.streamingAudioModeration(context:)
      )

    case "TextModeration":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Moderation_V1beta1_TextModerationRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Moderation_V1beta1_TextModerationResponse>(),
        interceptors: self.interceptors?.makeTextModerationInterceptors() ?? [],
        userFunction: self.textModeration(request:context:)
      )

    default:
      return nil
    }
  }
}

/// Run Speechly Moderation API with streamable audio content or text content.
///
/// To implement a server, implement an object which conforms to this protocol.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Speechly_Moderation_V1beta1_ModerationAPIAsyncProvider: CallHandlerProvider, Sendable {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Speechly_Moderation_V1beta1_ModerationAPIServerInterceptorFactoryProtocol? { get }

  /// Stream audio to be moderated and receive all results once whole audio has been processed.
  /// The discourse context may be described for improved performance.
  /// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
  func audioModeration(
    requestStream: GRPCAsyncRequestStream<Speechly_Moderation_V1beta1_AudioModerationRequest>,
    context: GRPCAsyncServerCallContext
  ) async throws -> Speechly_Moderation_V1beta1_AudioModerationResponse

  /// Stream audio to be moderated and receive results for identified segments as soon results as possible.
  /// The discourse context may be described for improved performance.
  /// Audio must be in a format supported for Live Streaming, see https://docs.speechly.com/features/audio-formats
  func streamingAudioModeration(
    requestStream: GRPCAsyncRequestStream<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest>,
    responseStream: GRPCAsyncResponseStreamWriter<Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>,
    context: GRPCAsyncServerCallContext
  ) async throws

  /// Moderate a text utterance.
  /// The discourse context may be described for improved performance.
  /// The related audio may be identified using `audio_context_id`.
  func textModeration(
    request: Speechly_Moderation_V1beta1_TextModerationRequest,
    context: GRPCAsyncServerCallContext
  ) async throws -> Speechly_Moderation_V1beta1_TextModerationResponse
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Moderation_V1beta1_ModerationAPIAsyncProvider {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Speechly_Moderation_V1beta1_ModerationAPIServerMetadata.serviceDescriptor
  }

  public var serviceName: Substring {
    return Speechly_Moderation_V1beta1_ModerationAPIServerMetadata.serviceDescriptor.fullName[...]
  }

  public var interceptors: Speechly_Moderation_V1beta1_ModerationAPIServerInterceptorFactoryProtocol? {
    return nil
  }

  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "AudioModeration":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Moderation_V1beta1_AudioModerationRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Moderation_V1beta1_AudioModerationResponse>(),
        interceptors: self.interceptors?.makeAudioModerationInterceptors() ?? [],
        wrapping: { try await self.audioModeration(requestStream: $0, context: $1) }
      )

    case "StreamingAudioModeration":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>(),
        interceptors: self.interceptors?.makeStreamingAudioModerationInterceptors() ?? [],
        wrapping: { try await self.streamingAudioModeration(requestStream: $0, responseStream: $1, context: $2) }
      )

    case "TextModeration":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Moderation_V1beta1_TextModerationRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Moderation_V1beta1_TextModerationResponse>(),
        interceptors: self.interceptors?.makeTextModerationInterceptors() ?? [],
        wrapping: { try await self.textModeration(request: $0, context: $1) }
      )

    default:
      return nil
    }
  }
}

public protocol Speechly_Moderation_V1beta1_ModerationAPIServerInterceptorFactoryProtocol: Sendable {

  /// - Returns: Interceptors to use when handling 'audioModeration'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeAudioModerationInterceptors() -> [ServerInterceptor<Speechly_Moderation_V1beta1_AudioModerationRequest, Speechly_Moderation_V1beta1_AudioModerationResponse>]

  /// - Returns: Interceptors to use when handling 'streamingAudioModeration'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeStreamingAudioModerationInterceptors() -> [ServerInterceptor<Speechly_Moderation_V1beta1_StreamingAudioModerationRequest, Speechly_Moderation_V1beta1_StreamingAudioModerationResponse>]

  /// - Returns: Interceptors to use when handling 'textModeration'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeTextModerationInterceptors() -> [ServerInterceptor<Speechly_Moderation_V1beta1_TextModerationRequest, Speechly_Moderation_V1beta1_TextModerationResponse>]
}

public enum Speechly_Moderation_V1beta1_ModerationAPIServerMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "ModerationAPI",
    fullName: "speechly.moderation.v1beta1.ModerationAPI",
    methods: [
      Speechly_Moderation_V1beta1_ModerationAPIServerMetadata.Methods.audioModeration,
      Speechly_Moderation_V1beta1_ModerationAPIServerMetadata.Methods.streamingAudioModeration,
      Speechly_Moderation_V1beta1_ModerationAPIServerMetadata.Methods.textModeration,
    ]
  )

  public enum Methods {
    public static let audioModeration = GRPCMethodDescriptor(
      name: "AudioModeration",
      path: "/speechly.moderation.v1beta1.ModerationAPI/AudioModeration",
      type: GRPCCallType.clientStreaming
    )

    public static let streamingAudioModeration = GRPCMethodDescriptor(
      name: "StreamingAudioModeration",
      path: "/speechly.moderation.v1beta1.ModerationAPI/StreamingAudioModeration",
      type: GRPCCallType.bidirectionalStreaming
    )

    public static let textModeration = GRPCMethodDescriptor(
      name: "TextModeration",
      path: "/speechly.moderation.v1beta1.ModerationAPI/TextModeration",
      type: GRPCCallType.unary
    )
  }
}
