//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: speechly/identity/v1/identity.proto
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


/// Speechly Identity API is used for creating access tokens for the Speechly APIs.
///
/// Usage: instantiate `Speechly_Identity_V1_IdentityClient`, then call methods of this protocol to make API calls.
public protocol Speechly_Identity_V1_IdentityClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Speechly_Identity_V1_IdentityClientInterceptorFactoryProtocol? { get }

  func login(
    _ request: Speechly_Identity_V1_LoginRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Identity_V1_LoginRequest, Speechly_Identity_V1_LoginResponse>
}

extension Speechly_Identity_V1_IdentityClientProtocol {
  public var serviceName: String {
    return "speechly.identity.v1.Identity"
  }

  /// Performs a login of specific Speechly application.
  /// Returns an access token, that can be used to access Speechly SLU API.
  ///
  /// - Parameters:
  ///   - request: Request to send to Login.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func login(
    _ request: Speechly_Identity_V1_LoginRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Identity_V1_LoginRequest, Speechly_Identity_V1_LoginResponse> {
    return self.makeUnaryCall(
      path: "/speechly.identity.v1.Identity/Login",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeLoginInterceptors() ?? []
    )
  }
}

public protocol Speechly_Identity_V1_IdentityClientInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when invoking 'login'.
  func makeLoginInterceptors() -> [ClientInterceptor<Speechly_Identity_V1_LoginRequest, Speechly_Identity_V1_LoginResponse>]
}

public final class Speechly_Identity_V1_IdentityClient: Speechly_Identity_V1_IdentityClientProtocol {
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Identity_V1_IdentityClientInterceptorFactoryProtocol?

  /// Creates a client for the speechly.identity.v1.Identity service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Identity_V1_IdentityClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

/// Speechly Identity API is used for creating access tokens for the Speechly APIs.
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Identity_V1_IdentityProvider: CallHandlerProvider {
  var interceptors: Speechly_Identity_V1_IdentityServerInterceptorFactoryProtocol? { get }

  /// Performs a login of specific Speechly application.
  /// Returns an access token, that can be used to access Speechly SLU API.
  func login(request: Speechly_Identity_V1_LoginRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Identity_V1_LoginResponse>
}

extension Speechly_Identity_V1_IdentityProvider {
  public var serviceName: Substring { return "speechly.identity.v1.Identity" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "Login":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Identity_V1_LoginRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Identity_V1_LoginResponse>(),
        interceptors: self.interceptors?.makeLoginInterceptors() ?? [],
        userFunction: self.login(request:context:)
      )

    default:
      return nil
    }
  }
}

public protocol Speechly_Identity_V1_IdentityServerInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when handling 'login'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeLoginInterceptors() -> [ServerInterceptor<Speechly_Identity_V1_LoginRequest, Speechly_Identity_V1_LoginResponse>]
}
