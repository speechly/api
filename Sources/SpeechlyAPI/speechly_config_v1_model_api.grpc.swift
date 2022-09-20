//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: speechly/config/v1/model_api.proto
//

//
// Copyright 2018, gRPC Authors All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import GRPC
import NIO
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
      path: "/speechly.config.v1.ModelAPI/DownloadModel",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeDownloadModelInterceptors() ?? [],
      handler: handler
    )
  }
}

public protocol Speechly_Config_V1_ModelAPIClientInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when invoking 'downloadModel'.
  func makeDownloadModelInterceptors() -> [ClientInterceptor<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse>]
}

public final class Speechly_Config_V1_ModelAPIClient: Speechly_Config_V1_ModelAPIClientProtocol {
  public let channel: GRPCChannel
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
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Config_V1_ModelAPIProvider: CallHandlerProvider {
  var interceptors: Speechly_Config_V1_ModelAPIServerInterceptorFactoryProtocol? { get }

  /// Downloads a model bundle for on-device use.
  func downloadModel(request: Speechly_Config_V1_DownloadModelRequest, context: StreamingResponseCallContext<Speechly_Config_V1_DownloadModelResponse>) -> EventLoopFuture<GRPCStatus>
}

extension Speechly_Config_V1_ModelAPIProvider {
  public var serviceName: Substring { return "speechly.config.v1.ModelAPI" }

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

    default:
      return nil
    }
  }
}

public protocol Speechly_Config_V1_ModelAPIServerInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when handling 'downloadModel'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeDownloadModelInterceptors() -> [ServerInterceptor<Speechly_Config_V1_DownloadModelRequest, Speechly_Config_V1_DownloadModelResponse>]
}