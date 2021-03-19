//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: speechly/slu/v1/wlu.proto
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


/// Service that implements Speechly WLU (Written Language Understanding).
///
/// To use this service you MUST use an access token from Speechly Identity API.
/// The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer $ACCESS_TOKEN` as value, e.g. in Go:
///
/// ```
/// ctx := context.Background()
/// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
/// res, err := speechlyWLUClient.Text(ctx, req)
/// ```
///
/// Usage: instantiate `Speechly_Slu_V1_WLUClient`, then call methods of this protocol to make API calls.
public protocol Speechly_Slu_V1_WLUClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Speechly_Slu_V1_WLUClientInterceptorFactoryProtocol? { get }

  func text(
    _ request: Speechly_Slu_V1_WLURequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Slu_V1_WLURequest, Speechly_Slu_V1_WLUResponse>
}

extension Speechly_Slu_V1_WLUClientProtocol {
  public var serviceName: String {
    return "speechly.slu.v1.WLU"
  }

  /// Performs recognition of a text with specified language.
  ///
  /// - Parameters:
  ///   - request: Request to send to Text.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func text(
    _ request: Speechly_Slu_V1_WLURequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Slu_V1_WLURequest, Speechly_Slu_V1_WLUResponse> {
    return self.makeUnaryCall(
      path: "/speechly.slu.v1.WLU/Text",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeTextInterceptors() ?? []
    )
  }
}

public protocol Speechly_Slu_V1_WLUClientInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when invoking 'text'.
  func makeTextInterceptors() -> [ClientInterceptor<Speechly_Slu_V1_WLURequest, Speechly_Slu_V1_WLUResponse>]
}

public final class Speechly_Slu_V1_WLUClient: Speechly_Slu_V1_WLUClientProtocol {
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Slu_V1_WLUClientInterceptorFactoryProtocol?

  /// Creates a client for the speechly.slu.v1.WLU service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Slu_V1_WLUClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

/// Service that implements Speechly WLU (Written Language Understanding).
///
/// To use this service you MUST use an access token from Speechly Identity API.
/// The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer $ACCESS_TOKEN` as value, e.g. in Go:
///
/// ```
/// ctx := context.Background()
/// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
/// res, err := speechlyWLUClient.Text(ctx, req)
/// ```
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Slu_V1_WLUProvider: CallHandlerProvider {
  var interceptors: Speechly_Slu_V1_WLUServerInterceptorFactoryProtocol? { get }

  /// Performs recognition of a text with specified language.
  func text(request: Speechly_Slu_V1_WLURequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Slu_V1_WLUResponse>
}

extension Speechly_Slu_V1_WLUProvider {
  public var serviceName: Substring { return "speechly.slu.v1.WLU" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Text":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Slu_V1_WLURequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Slu_V1_WLUResponse>(),
        interceptors: self.interceptors?.makeTextInterceptors() ?? [],
        userFunction: self.text(request:context:)
      )

    default:
      return nil
    }
  }
}

public protocol Speechly_Slu_V1_WLUServerInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when handling 'text'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeTextInterceptors() -> [ServerInterceptor<Speechly_Slu_V1_WLURequest, Speechly_Slu_V1_WLUResponse>]
}