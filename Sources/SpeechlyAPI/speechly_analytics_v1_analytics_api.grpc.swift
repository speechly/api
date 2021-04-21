//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: speechly/analytics/v1/analytics_api.proto
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


/// Speechly Analytics API contains methods to get accumulated access data
/// for given apps and/or projects.
///
/// Usage: instantiate `Speechly_Analytics_V1_AnalyticsAPIClient`, then call methods of this protocol to make API calls.
public protocol Speechly_Analytics_V1_AnalyticsAPIClientProtocol: GRPCClient {
  var serviceName: String { get }
  var interceptors: Speechly_Analytics_V1_AnalyticsAPIClientInterceptorFactoryProtocol? { get }

  func utteranceStatistics(
    _ request: Speechly_Analytics_V1_UtteranceStatisticsRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Analytics_V1_UtteranceStatisticsRequest, Speechly_Analytics_V1_UtteranceStatisticsResponse>
}

extension Speechly_Analytics_V1_AnalyticsAPIClientProtocol {
  public var serviceName: String {
    return "speechly.analytics.v1.AnalyticsAPI"
  }

  /// Get a summary of utterances for a given time period.
  ///
  /// - Parameters:
  ///   - request: Request to send to UtteranceStatistics.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func utteranceStatistics(
    _ request: Speechly_Analytics_V1_UtteranceStatisticsRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Analytics_V1_UtteranceStatisticsRequest, Speechly_Analytics_V1_UtteranceStatisticsResponse> {
    return self.makeUnaryCall(
      path: "/speechly.analytics.v1.AnalyticsAPI/UtteranceStatistics",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      interceptors: self.interceptors?.makeUtteranceStatisticsInterceptors() ?? []
    )
  }
}

public protocol Speechly_Analytics_V1_AnalyticsAPIClientInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when invoking 'utteranceStatistics'.
  func makeUtteranceStatisticsInterceptors() -> [ClientInterceptor<Speechly_Analytics_V1_UtteranceStatisticsRequest, Speechly_Analytics_V1_UtteranceStatisticsResponse>]
}

public final class Speechly_Analytics_V1_AnalyticsAPIClient: Speechly_Analytics_V1_AnalyticsAPIClientProtocol {
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions
  public var interceptors: Speechly_Analytics_V1_AnalyticsAPIClientInterceptorFactoryProtocol?

  /// Creates a client for the speechly.analytics.v1.AnalyticsAPI service.
  ///
  /// - Parameters:
  ///   - channel: `GRPCChannel` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  ///   - interceptors: A factory providing interceptors for each RPC.
  public init(
    channel: GRPCChannel,
    defaultCallOptions: CallOptions = CallOptions(),
    interceptors: Speechly_Analytics_V1_AnalyticsAPIClientInterceptorFactoryProtocol? = nil
  ) {
    self.channel = channel
    self.defaultCallOptions = defaultCallOptions
    self.interceptors = interceptors
  }
}

/// Speechly Analytics API contains methods to get accumulated access data
/// for given apps and/or projects.
///
/// To build a server, implement a class that conforms to this protocol.
public protocol Speechly_Analytics_V1_AnalyticsAPIProvider: CallHandlerProvider {
  var interceptors: Speechly_Analytics_V1_AnalyticsAPIServerInterceptorFactoryProtocol? { get }

  /// Get a summary of utterances for a given time period.
  func utteranceStatistics(request: Speechly_Analytics_V1_UtteranceStatisticsRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Analytics_V1_UtteranceStatisticsResponse>
}

extension Speechly_Analytics_V1_AnalyticsAPIProvider {
  public var serviceName: Substring { return "speechly.analytics.v1.AnalyticsAPI" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handle(
    method name: Substring,
    context: CallHandlerContext
  ) -> GRPCServerHandlerProtocol? {
    switch name {
    case "UtteranceStatistics":
      return UnaryServerHandler(
        context: context,
        requestDeserializer: ProtobufDeserializer<Speechly_Analytics_V1_UtteranceStatisticsRequest>(),
        responseSerializer: ProtobufSerializer<Speechly_Analytics_V1_UtteranceStatisticsResponse>(),
        interceptors: self.interceptors?.makeUtteranceStatisticsInterceptors() ?? [],
        userFunction: self.utteranceStatistics(request:context:)
      )

    default:
      return nil
    }
  }
}

public protocol Speechly_Analytics_V1_AnalyticsAPIServerInterceptorFactoryProtocol {

  /// - Returns: Interceptors to use when handling 'utteranceStatistics'.
  ///   Defaults to calling `self.makeInterceptors()`.
  func makeUtteranceStatisticsInterceptors() -> [ServerInterceptor<Speechly_Analytics_V1_UtteranceStatisticsRequest, Speechly_Analytics_V1_UtteranceStatisticsResponse>]
}
