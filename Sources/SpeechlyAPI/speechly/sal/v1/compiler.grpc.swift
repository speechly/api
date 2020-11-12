//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: speechly/sal/v1/compiler.proto
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


/// Usage: instantiate Speechly_Sal_V1_CompilerClient, then call methods of this protocol to make API calls.
public protocol Speechly_Sal_V1_CompilerClientProtocol: GRPCClient {
  func compile(
    callOptions: CallOptions?
  ) -> ClientStreamingCall<Speechly_Sal_V1_AppSource, Speechly_Sal_V1_CompileResult>

  func validate(
    callOptions: CallOptions?
  ) -> ClientStreamingCall<Speechly_Sal_V1_AppSource, Speechly_Sal_V1_ValidateResult>

}

extension Speechly_Sal_V1_CompilerClientProtocol {

  /// Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings.
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata, status and response.
  public func compile(
    callOptions: CallOptions? = nil
  ) -> ClientStreamingCall<Speechly_Sal_V1_AppSource, Speechly_Sal_V1_CompileResult> {
    return self.makeClientStreamingCall(
      path: "/speechly.sal.v1.Compiler/Compile",
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Validates the SAL source and returns compilation notices / warnings and errors, if any.
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata, status and response.
  public func validate(
    callOptions: CallOptions? = nil
  ) -> ClientStreamingCall<Speechly_Sal_V1_AppSource, Speechly_Sal_V1_ValidateResult> {
    return self.makeClientStreamingCall(
      path: "/speechly.sal.v1.Compiler/Validate",
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }
}

public final class Speechly_Sal_V1_CompilerClient: Speechly_Sal_V1_CompilerClientProtocol {
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions

  /// Creates a client for the speechly.sal.v1.Compiler service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  public init(channel: GRPCChannel, defaultCallOptions: CallOptions = CallOptions()) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
  }
}

/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Sal_V1_CompilerProvider: CallHandlerProvider {
  /// Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings.
  func compile(context: UnaryResponseCallContext<Speechly_Sal_V1_CompileResult>) -> EventLoopFuture<(StreamEvent<Speechly_Sal_V1_AppSource>) -> Void>
  /// Validates the SAL source and returns compilation notices / warnings and errors, if any.
  func validate(context: UnaryResponseCallContext<Speechly_Sal_V1_ValidateResult>) -> EventLoopFuture<(StreamEvent<Speechly_Sal_V1_AppSource>) -> Void>
}

extension Speechly_Sal_V1_CompilerProvider {
  public var serviceName: Substring { return "speechly.sal.v1.Compiler" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handleMethod(_ methodName: Substring, callHandlerContext: CallHandlerContext) -> GRPCCallHandler? {
    switch methodName {
    case "Compile":
      return CallHandlerFactory.makeClientStreaming(callHandlerContext: callHandlerContext) { context in
        return self.compile(context: context)
      }

    case "Validate":
      return CallHandlerFactory.makeClientStreaming(callHandlerContext: callHandlerContext) { context in
        return self.validate(context: context)
      }

    default: return nil
    }
  }
}
