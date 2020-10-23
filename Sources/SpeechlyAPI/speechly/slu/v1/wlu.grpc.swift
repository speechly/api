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


/// Usage: instantiate Speechly_Slu_V1_WLUClient, then call methods of this protocol to make API calls.
public protocol Speechly_Slu_V1_WLUClientProtocol: GRPCClient {
  func text(
    _ request: Speechly_Slu_V1_WLURequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Slu_V1_WLURequest, Speechly_Slu_V1_WLUResponse>

}

extension Speechly_Slu_V1_WLUClientProtocol {

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
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }
}

public final class Speechly_Slu_V1_WLUClient: Speechly_Slu_V1_WLUClientProtocol {
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions

  /// Creates a client for the speechly.slu.v1.WLU service.
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
public protocol Speechly_Slu_V1_WLUProvider: CallHandlerProvider {
  /// Performs recognition of a text with specified language.
  func text(request: Speechly_Slu_V1_WLURequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Slu_V1_WLUResponse>
}

extension Speechly_Slu_V1_WLUProvider {
  public var serviceName: Substring { return "speechly.slu.v1.WLU" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handleMethod(_ methodName: Substring, callHandlerContext: CallHandlerContext) -> GRPCCallHandler? {
    switch methodName {
    case "Text":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.text(request: request, context: context)
        }
      }

    default: return nil
    }
  }
}

