//
// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the protocol buffer compiler.
// Source: speechly/config/v1/model_api.proto
//
import GRPC
import NIO
import NIOConcurrencyHelpers
import SwiftProtobuf


/// Speechly Model API provides operations related to the on-device models.
///
/// The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).
///
/// The token acts as a proxy for the user who has generated it,
/// i.e. all operations are performed with that user as a subject.
///
/// Usage: instantiate `Speechly_Config_V1_ModelAPIClient`, then call methods of this protocol to make API calls.
public protocol Speechly_Config_V1_ModelAPIClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? { get }

  func downloadModel(
    _ request: Speechly_Config_V1_DownloadModelRequest,
    callOptions: CallOptions?,
    handler: @escaping (Speechly_Config_V1_DownloadModelResponse) -> Void
  ) -> ServerStreamingCall<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse>

  func listBaseModels(
    _ request: Speechly_Config_V1_ListBaseModelsRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_ListBaseModelsRequest, Speechly_Config_V1_ListBaseModelsResponse>

  func listLanguages(
    _ request: Speechly_Config_V1_ListLanguagesRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_ListLanguagesRequest, Speechly_Config_V1_ListLanguagesResponse>
}

extension Speechly_Config_V1_ModelAPIClientProtocol {
  public var serviceName: String {
    return "speechly.config.v1.ModelAPI"
  }

  /// Downloads a model bundle for on-device use.
  ///
  /// - Parameters:
  ///   - request: Request to send to DownloadModel.
  ///   - callOptions: Call options.
  ///   - handler: A closure called when each response is received from the server.
  /// - Returns: A `ServerStreamingCall` with futures for the metadata and status.
  public func downloadModel(
    _ request: Speechly_Config_V1_DownloadModelRequest,
    callOptions: CallOptions? = nil,
    handler: @escaping (Speechly_Config_V1_DownloadModelResponse) -> Void
  ) -> ServerStreamingCall<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse> {
    return self.makeServerStreamingCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.downloadModel.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeDownloadModelInterceptors() ?? [],
      handler: handler
    )
  }

  /// List the base models available for use as basis in training.
  ///
  /// - Parameters:
  ///   - request: Request to send to ListBaseModels.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func listBaseModels(
    _ request: Speechly_Config_V1_ListBaseModelsRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_ListBaseModelsRequest, Speechly_Config_V1_ListBaseModelsResponse> {
    return self.makeUnaryCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.listBaseModels.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeListBaseModelsInterceptors() ?? []
    )
  }

  /// List supported languages.
  ///
  /// - Parameters:
  ///   - request: Request to send to ListLanguages.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func listLanguages(
    _ request: Speechly_Config_V1_ListLanguagesRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_ListLanguagesRequest, Speechly_Config_V1_ListLanguagesResponse> {
    return self.makeUnaryCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.listLanguages.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeListLanguagesInterceptors() ?? []
    )
  }
}

@available(*, deprecated)
extension Speechly_Config_V1_ModelAPIClient: @unchecked Sendable {}

@available(*, deprecated, renamed: "Speechly_Config_V1_ModelAPINIOClient")
public final class Speechly_Config_V1_ModelAPIClient: Speechly_Config_V1_ModelAPIClientProtocol {
  private let lock = Lock()
  private var _defaultCallOptions: CallOptions
  private var _interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol?
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions {
    get { self.lock.withLock { return self._defaultCallOptions } }
    set { self.lock.withLockVoid { self._defaultCallOptions = newValue } }
  }
  public var interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? {
    get { self.lock.withLock { return self._interceptors } }
    set { self.lock.withLockVoid { self._interceptors = newValue } }
  }

  /// Creates a client for the speechly.config.v1.ModelAPI service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self._defaultCallOptions = defaultCallOptions
    self._interceptors = interceptors
  }
}

public struct Speechly_Config_V1_ModelAPINIOClient: Speechly_Config_V1_ModelAPIClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol?

  /// Creates a client for the speechly.config.v1.ModelAPI service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

/// Speechly Model API provides operations related to the on-device models.
///
/// The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).
///
/// The token acts as a proxy for the user who has generated it,
/// i.e. all operations are performed with that user as a subject.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Speechly_Config_V1_ModelAPIAsyncClientProtocol: GRPCClient {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? { get }

  func makeDownloadModelCall(
    _ request: Speechly_Config_V1_DownloadModelRequest,
    callOptions: CallOptions?
  ) -> GRPCAsyncServerStreamingCall<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse>

  func makeListBaseModelsCall(
    _ request: Speechly_Config_V1_ListBaseModelsRequest,
    callOptions: CallOptions?
  ) -> GRPCAsyncUnaryCall<Speechly_Config_V1_ListBaseModelsRequest, Speechly_Config_V1_ListBaseModelsResponse>

  func makeListLanguagesCall(
    _ request: Speechly_Config_V1_ListLanguagesRequest,
    callOptions: CallOptions?
  ) -> GRPCAsyncUnaryCall<Speechly_Config_V1_ListLanguagesRequest, Speechly_Config_V1_ListLanguagesResponse>
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Config_V1_ModelAPIAsyncClientProtocol {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Speechly_Config_V1_ModelAPIClientMetadata.serviceDescriptor
  }

  public var interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? {
    return nil
  }

  public func makeDownloadModelCall(
    _ request: Speechly_Config_V1_DownloadModelRequest,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncServerStreamingCall<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse> {
    return self.makeAsyncServerStreamingCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.downloadModel.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeDownloadModelInterceptors() ?? []
    )
  }

  public func makeListBaseModelsCall(
    _ request: Speechly_Config_V1_ListBaseModelsRequest,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncUnaryCall<Speechly_Config_V1_ListBaseModelsRequest, Speechly_Config_V1_ListBaseModelsResponse> {
    return self.makeAsyncUnaryCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.listBaseModels.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeListBaseModelsInterceptors() ?? []
    )
  }

  public func makeListLanguagesCall(
    _ request: Speechly_Config_V1_ListLanguagesRequest,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncUnaryCall<Speechly_Config_V1_ListLanguagesRequest, Speechly_Config_V1_ListLanguagesResponse> {
    return self.makeAsyncUnaryCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.listLanguages.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeListLanguagesInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Config_V1_ModelAPIAsyncClientProtocol {
  public func downloadModel(
    _ request: Speechly_Config_V1_DownloadModelRequest,
    callOptions: CallOptions? = nil
  ) -> GRPCAsyncResponseStream<Speechly_Config_V1_DownloadModelResponse> {
    return self.performAsyncServerStreamingCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.downloadModel.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeDownloadModelInterceptors() ?? []
    )
  }

  public func listBaseModels(
    _ request: Speechly_Config_V1_ListBaseModelsRequest,
    callOptions: CallOptions? = nil
  ) async throws -> Speechly_Config_V1_ListBaseModelsResponse {
    return try await self.performAsyncUnaryCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.listBaseModels.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeListBaseModelsInterceptors() ?? []
    )
  }

  public func listLanguages(
    _ request: Speechly_Config_V1_ListLanguagesRequest,
    callOptions: CallOptions? = nil
  ) async throws -> Speechly_Config_V1_ListLanguagesResponse {
    return try await self.performAsyncUnaryCall(
      path: Speechly_Config_V1_ModelAPIClientMetadata.Methods.listLanguages.path,
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeListLanguagesInterceptors() ?? []
    )
  }
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public struct Speechly_Config_V1_ModelAPIAsyncClient: Speechly_Config_V1_ModelAPIAsyncClientProtocol {
  public var channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol?

  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

public protocol Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol: Sendable {

  /// - Returns: Interceptors to use when invoking 'downloadModel'.
  func makeDownloadModelInterceptors() -> [ClientInterceptor<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse>]

  /// - Returns: Interceptors to use when invoking 'listBaseModels'.
  func makeListBaseModelsInterceptors() -> [ClientInterceptor<Speechly_Config_V1_ListBaseModelsRequest, Speechly_Config_V1_ListBaseModelsResponse>]

  /// - Returns: Interceptors to use when invoking 'listLanguages'.
  func makeListLanguagesInterceptors() -> [ClientInterceptor<Speechly_Config_V1_ListLanguagesRequest, Speechly_Config_V1_ListLanguagesResponse>]
}

public enum Speechly_Config_V1_ModelAPIClientMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "ModelAPI",
    fullName: "speechly.config.v1.ModelAPI",
    methods: [
      Speechly_Config_V1_ModelAPIClientMetadata.Methods.downloadModel,
      Speechly_Config_V1_ModelAPIClientMetadata.Methods.listBaseModels,
      Speechly_Config_V1_ModelAPIClientMetadata.Methods.listLanguages,
    ]
  )

  public enum Methods {
    public static let downloadModel = GRPCMethodDescriptor(
      name: "DownloadModel",
      path: "/speechly.config.v1.ModelAPI/DownloadModel",
      type: GRPCCallType.serverStreaming
    )

    public static let listBaseModels = GRPCMethodDescriptor(
      name: "ListBaseModels",
      path: "/speechly.config.v1.ModelAPI/ListBaseModels",
      type: GRPCCallType.unary
    )

    public static let listLanguages = GRPCMethodDescriptor(
      name: "ListLanguages",
      path: "/speechly.config.v1.ModelAPI/ListLanguages",
      type: GRPCCallType.unary
    )
  }
}

/// Speechly Model API provides operations related to the on-device models.
///
/// The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).
///
/// The token acts as a proxy for the user who has generated it,
/// i.e. all operations are performed with that user as a subject.
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Config_V1_ModelAPIProvider: CallHandlerProvider {
  var interceptors: Speechly_Config_V1_ModelAPIServerInterceptorFactoryProtocol? { get }

  /// Downloads a model bundle for on-device use.
  func downloadModel(request: Speechly_Config_V1_DownloadModelRequest, context: StreamingResponseCallContext<Speechly_Config_V1_DownloadModelResponse>) -> EventLoopFuture<GRPCStatus>

  /// List the base models available for use as basis in training.
  func listBaseModels(request: Speechly_Config_V1_ListBaseModelsRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_ListBaseModelsResponse>

  /// List supported languages.
  func listLanguages(request: Speechly_Config_V1_ListLanguagesRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_ListLanguagesResponse>
}

extension Speechly_Config_V1_ModelAPIProvider {
  public var serviceName: Substring {
    return Speechly_Config_V1_ModelAPIServerMetadata.serviceDescriptor.fullName[...]
  }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "DownloadModel":
      return ServerStreamingServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Config_V1_DownloadModelRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Config_V1_DownloadModelResponse>(),
        interceptors: self.interceptors?.makeDownloadModelInterceptors() ?? [],
        userFunction: self.downloadModel(request:context:)
      )

    case "ListBaseModels":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Config_V1_ListBaseModelsRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Config_V1_ListBaseModelsResponse>(),
        interceptors: self.interceptors?.makeListBaseModelsInterceptors() ?? [],
        userFunction: self.listBaseModels(request:context:)
      )

    case "ListLanguages":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Config_V1_ListLanguagesRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Config_V1_ListLanguagesResponse>(),
        interceptors: self.interceptors?.makeListLanguagesInterceptors() ?? [],
        userFunction: self.listLanguages(request:context:)
      )

    default:
      return nil
    }
  }
}

/// Speechly Model API provides operations related to the on-device models.
///
/// The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).
///
/// The token acts as a proxy for the user who has generated it,
/// i.e. all operations are performed with that user as a subject.
///
/// To implement a server, implement an object which conforms to this protocol.
@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
public protocol Speechly_Config_V1_ModelAPIAsyncProvider: CallHandlerProvider, Sendable {
  static var serviceDescriptor: GRPCServiceDescriptor { get }
  var interceptors: Speechly_Config_V1_ModelAPIServerInterceptorFactoryProtocol? { get }

  /// Downloads a model bundle for on-device use.
  func downloadModel(
    request: Speechly_Config_V1_DownloadModelRequest,
    responseStream: GRPCAsyncResponseStreamWriter<Speechly_Config_V1_DownloadModelResponse>,
    context: GRPCAsyncServerCallContext
  ) async throws

  /// List the base models available for use as basis in training.
  func listBaseModels(
    request: Speechly_Config_V1_ListBaseModelsRequest,
    context: GRPCAsyncServerCallContext
  ) async throws -> Speechly_Config_V1_ListBaseModelsResponse

  /// List supported languages.
  func listLanguages(
    request: Speechly_Config_V1_ListLanguagesRequest,
    context: GRPCAsyncServerCallContext
  ) async throws -> Speechly_Config_V1_ListLanguagesResponse
}

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
extension Speechly_Config_V1_ModelAPIAsyncProvider {
  public static var serviceDescriptor: GRPCServiceDescriptor {
    return Speechly_Config_V1_ModelAPIServerMetadata.serviceDescriptor
  }

  public var serviceName: Substring {
    return Speechly_Config_V1_ModelAPIServerMetadata.serviceDescriptor.fullName[...]
  }

  public var interceptors: Speechly_Config_V1_ModelAPIServerInterceptorFactoryProtocol? {
    return nil
  }

  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "DownloadModel":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Config_V1_DownloadModelRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Config_V1_DownloadModelResponse>(),
        interceptors: self.interceptors?.makeDownloadModelInterceptors() ?? [],
        wrapping: { try await self.downloadModel(request: $0, responseStream: $1, context: $2) }
      )

    case "ListBaseModels":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Config_V1_ListBaseModelsRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Config_V1_ListBaseModelsResponse>(),
        interceptors: self.interceptors?.makeListBaseModelsInterceptors() ?? [],
        wrapping: { try await self.listBaseModels(request: $0, context: $1) }
      )

    case "ListLanguages":
      return GRPCAsyncServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Config_V1_ListLanguagesRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Config_V1_ListLanguagesResponse>(),
        interceptors: self.interceptors?.makeListLanguagesInterceptors() ?? [],
        wrapping: { try await self.listLanguages(request: $0, context: $1) }
      )

    default:
      return nil
    }
  }
}

public protocol Speechly_Config_V1_ModelAPIServerInterceptorFactoryProtocol: Sendable {

  /// - Returns: Interceptors to use when handling 'downloadModel'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeDownloadModelInterceptors() -> [ServerInterceptor<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse>]

  /// - Returns: Interceptors to use when handling 'listBaseModels'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeListBaseModelsInterceptors() -> [ServerInterceptor<Speechly_Config_V1_ListBaseModelsRequest, Speechly_Config_V1_ListBaseModelsResponse>]

  /// - Returns: Interceptors to use when handling 'listLanguages'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeListLanguagesInterceptors() -> [ServerInterceptor<Speechly_Config_V1_ListLanguagesRequest, Speechly_Config_V1_ListLanguagesResponse>]
}

public enum Speechly_Config_V1_ModelAPIServerMetadata {
  public static let serviceDescriptor = GRPCServiceDescriptor(
    name: "ModelAPI",
    fullName: "speechly.config.v1.ModelAPI",
    methods: [
      Speechly_Config_V1_ModelAPIServerMetadata.Methods.downloadModel,
      Speechly_Config_V1_ModelAPIServerMetadata.Methods.listBaseModels,
      Speechly_Config_V1_ModelAPIServerMetadata.Methods.listLanguages,
    ]
  )

  public enum Methods {
    public static let downloadModel = GRPCMethodDescriptor(
      name: "DownloadModel",
      path: "/speechly.config.v1.ModelAPI/DownloadModel",
      type: GRPCCallType.serverStreaming
    )

    public static let listBaseModels = GRPCMethodDescriptor(
      name: "ListBaseModels",
      path: "/speechly.config.v1.ModelAPI/ListBaseModels",
      type: GRPCCallType.unary
    )

    public static let listLanguages = GRPCMethodDescriptor(
      name: "ListLanguages",
      path: "/speechly.config.v1.ModelAPI/ListLanguages",
      type: GRPCCallType.unary
    )
  }
}
