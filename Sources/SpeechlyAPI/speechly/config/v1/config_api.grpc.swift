//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: speechly/config/v1/config_api.proto
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


/// Usage: instantiate Speechly_Config_V1_ConfigAPIClient, then call methods of this protocol to make API calls.
public protocol Speechly_Config_V1_ConfigAPIClientProtocol: GRPCClient {
  func getProject(
    _ request: Speechly_Config_V1_GetProjectRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_GetProjectRequest, Speechly_Config_V1_GetProjectResponse>

  func createProject(
    _ request: Speechly_Config_V1_CreateProjectRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_CreateProjectRequest, Speechly_Config_V1_CreateProjectResponse>

  func updateProject(
    _ request: Speechly_Config_V1_UpdateProjectRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_UpdateProjectRequest, Speechly_Config_V1_UpdateProjectResponse>

  func getProjectParticipants(
    _ request: Speechly_Config_V1_GetProjectParticipantsRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_GetProjectParticipantsRequest, Speechly_Config_V1_GetProjectParticipantsResponse>

  func invite(
    _ request: Speechly_Config_V1_InviteRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_InviteRequest, Speechly_Config_V1_InviteResponse>

  func joinProject(
    _ request: Speechly_Config_V1_JoinProjectRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_JoinProjectRequest, Speechly_Config_V1_JoinProjectResponse>

  func listApps(
    _ request: Speechly_Config_V1_ListAppsRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_ListAppsRequest, Speechly_Config_V1_ListAppsResponse>

  func getApp(
    _ request: Speechly_Config_V1_GetAppRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_GetAppRequest, Speechly_Config_V1_GetAppResponse>

  func createApp(
    _ request: Speechly_Config_V1_CreateAppRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_CreateAppRequest, Speechly_Config_V1_CreateAppResponse>

  func updateApp(
    _ request: Speechly_Config_V1_UpdateAppRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_UpdateAppRequest, Speechly_Config_V1_UpdateAppResponse>

  func deleteApp(
    _ request: Speechly_Config_V1_DeleteAppRequest,
    callOptions: CallOptions?
  ) -> UnaryCall<Speechly_Config_V1_DeleteAppRequest, Speechly_Config_V1_DeleteAppResponse>

  func uploadTrainingData(
    callOptions: CallOptions?
  ) -> ClientStreamingCall<Speechly_Config_V1_UploadTrainingDataRequest, Speechly_Config_V1_UploadTrainingDataResponse>

  func downloadCurrentTrainingData(
    _ request: Speechly_Config_V1_DownloadCurrentTrainingDataRequest,
    callOptions: CallOptions?,
    handler: @escaping (Speechly_Config_V1_DownloadCurrentTrainingDataResponse) -> Void
  ) -> ServerStreamingCall<Speechly_Config_V1_DownloadCurrentTrainingDataRequest, Speechly_Config_V1_DownloadCurrentTrainingDataResponse>

}

extension Speechly_Config_V1_ConfigAPIClientProtocol {

  /// Lists all current user projects.
  ///
  /// - Parameters:
  ///   - request: Request to send to GetProject.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func getProject(
    _ request: Speechly_Config_V1_GetProjectRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_GetProjectRequest, Speechly_Config_V1_GetProjectResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/GetProject",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Creates a new project for current user.
  ///
  /// - Parameters:
  ///   - request: Request to send to CreateProject.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func createProject(
    _ request: Speechly_Config_V1_CreateProjectRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_CreateProjectRequest, Speechly_Config_V1_CreateProjectResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/CreateProject",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Updates an existing project.
  ///
  /// - Parameters:
  ///   - request: Request to send to UpdateProject.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func updateProject(
    _ request: Speechly_Config_V1_UpdateProjectRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_UpdateProjectRequest, Speechly_Config_V1_UpdateProjectResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/UpdateProject",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Lists all users with access to a project.
  ///
  /// - Parameters:
  ///   - request: Request to send to GetProjectParticipants.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func getProjectParticipants(
    _ request: Speechly_Config_V1_GetProjectParticipantsRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_GetProjectParticipantsRequest, Speechly_Config_V1_GetProjectParticipantsResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/GetProjectParticipants",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Generates an invitation link for another user to join a project,
  /// which can be used to call JoinProject.
  ///
  /// - Parameters:
  ///   - request: Request to send to Invite.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func invite(
    _ request: Speechly_Config_V1_InviteRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_InviteRequest, Speechly_Config_V1_InviteResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/Invite",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Joins a project as a current user.
  /// Requires a link generated with `Invite`.
  ///
  /// - Parameters:
  ///   - request: Request to send to JoinProject.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func joinProject(
    _ request: Speechly_Config_V1_JoinProjectRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_JoinProjectRequest, Speechly_Config_V1_JoinProjectResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/JoinProject",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Lists all applications in a project.
  ///
  /// - Parameters:
  ///   - request: Request to send to ListApps.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func listApps(
    _ request: Speechly_Config_V1_ListAppsRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_ListAppsRequest, Speechly_Config_V1_ListAppsResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/ListApps",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Gets detailed information about an application.
  ///
  /// - Parameters:
  ///   - request: Request to send to GetApp.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func getApp(
    _ request: Speechly_Config_V1_GetAppRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_GetAppRequest, Speechly_Config_V1_GetAppResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/GetApp",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Creates a new application for current user.
  ///
  /// - Parameters:
  ///   - request: Request to send to CreateApp.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func createApp(
    _ request: Speechly_Config_V1_CreateAppRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_CreateAppRequest, Speechly_Config_V1_CreateAppResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/CreateApp",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Updates an existing application.
  ///
  /// - Parameters:
  ///   - request: Request to send to UpdateApp.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func updateApp(
    _ request: Speechly_Config_V1_UpdateAppRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_UpdateAppRequest, Speechly_Config_V1_UpdateAppResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/UpdateApp",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Deletes an existing application.
  ///
  /// - Parameters:
  ///   - request: Request to send to DeleteApp.
  ///   - callOptions: Call options.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func deleteApp(
    _ request: Speechly_Config_V1_DeleteAppRequest,
    callOptions: CallOptions? = nil
  ) -> UnaryCall<Speechly_Config_V1_DeleteAppRequest, Speechly_Config_V1_DeleteAppResponse> {
    return self.makeUnaryCall(
      path: "/speechly.config.v1.ConfigAPI/DeleteApp",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Uploads new training data for an application.
  /// This will create and queue a new training job for that application.
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata, status and response.
  public func uploadTrainingData(
    callOptions: CallOptions? = nil
  ) -> ClientStreamingCall<Speechly_Config_V1_UploadTrainingDataRequest, Speechly_Config_V1_UploadTrainingDataResponse> {
    return self.makeClientStreamingCall(
      path: "/speechly.config.v1.ConfigAPI/UploadTrainingData",
      callOptions: callOptions ?? self.defaultCallOptions
    )
  }

  /// Downloads current training data for an application.
  ///
  /// - Parameters:
  ///   - request: Request to send to DownloadCurrentTrainingData.
  ///   - callOptions: Call options.
  ///   - handler: A closure called when each response is received from the server.
  /// - Returns: A `ServerStreamingCall` with futures for the metadata and status.
  public func downloadCurrentTrainingData(
    _ request: Speechly_Config_V1_DownloadCurrentTrainingDataRequest,
    callOptions: CallOptions? = nil,
    handler: @escaping (Speechly_Config_V1_DownloadCurrentTrainingDataResponse) -> Void
  ) -> ServerStreamingCall<Speechly_Config_V1_DownloadCurrentTrainingDataRequest, Speechly_Config_V1_DownloadCurrentTrainingDataResponse> {
    return self.makeServerStreamingCall(
      path: "/speechly.config.v1.ConfigAPI/DownloadCurrentTrainingData",
      request: request,
      callOptions: callOptions ?? self.defaultCallOptions,
      handler: handler
    )
  }
}

public final class Speechly_Config_V1_ConfigAPIClient: Speechly_Config_V1_ConfigAPIClientProtocol {
  public let channel: GRPCChannel
  public var defaultCallOptions: CallOptions

  /// Creates a client for the speechly.config.v1.ConfigAPI service.
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
public protocol Speechly_Config_V1_ConfigAPIProvider: CallHandlerProvider {
  /// Lists all current user projects.
  func getProject(request: Speechly_Config_V1_GetProjectRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_GetProjectResponse>
  /// Creates a new project for current user.
  func createProject(request: Speechly_Config_V1_CreateProjectRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_CreateProjectResponse>
  /// Updates an existing project.
  func updateProject(request: Speechly_Config_V1_UpdateProjectRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_UpdateProjectResponse>
  /// Lists all users with access to a project.
  func getProjectParticipants(request: Speechly_Config_V1_GetProjectParticipantsRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_GetProjectParticipantsResponse>
  /// Generates an invitation link for another user to join a project,
  /// which can be used to call JoinProject.
  func invite(request: Speechly_Config_V1_InviteRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_InviteResponse>
  /// Joins a project as a current user.
  /// Requires a link generated with `Invite`.
  func joinProject(request: Speechly_Config_V1_JoinProjectRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_JoinProjectResponse>
  /// Lists all applications in a project.
  func listApps(request: Speechly_Config_V1_ListAppsRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_ListAppsResponse>
  /// Gets detailed information about an application.
  func getApp(request: Speechly_Config_V1_GetAppRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_GetAppResponse>
  /// Creates a new application for current user.
  func createApp(request: Speechly_Config_V1_CreateAppRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_CreateAppResponse>
  /// Updates an existing application.
  func updateApp(request: Speechly_Config_V1_UpdateAppRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_UpdateAppResponse>
  /// Deletes an existing application.
  func deleteApp(request: Speechly_Config_V1_DeleteAppRequest, context: StatusOnlyCallContext) -> EventLoopFuture<Speechly_Config_V1_DeleteAppResponse>
  /// Uploads new training data for an application.
  /// This will create and queue a new training job for that application.
  func uploadTrainingData(context: UnaryResponseCallContext<Speechly_Config_V1_UploadTrainingDataResponse>) -> EventLoopFuture<(StreamEvent<Speechly_Config_V1_UploadTrainingDataRequest>) -> Void>
  /// Downloads current training data for an application.
  func downloadCurrentTrainingData(request: Speechly_Config_V1_DownloadCurrentTrainingDataRequest, context: StreamingResponseCallContext<Speechly_Config_V1_DownloadCurrentTrainingDataResponse>) -> EventLoopFuture<GRPCStatus>
}

extension Speechly_Config_V1_ConfigAPIProvider {
  public var serviceName: Substring { return "speechly.config.v1.ConfigAPI" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handleMethod(_ methodName: Substring, callHandlerContext: CallHandlerContext) -> GRPCCallHandler? {
    switch methodName {
    case "GetProject":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.getProject(request: request, context: context)
        }
      }

    case "CreateProject":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.createProject(request: request, context: context)
        }
      }

    case "UpdateProject":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.updateProject(request: request, context: context)
        }
      }

    case "GetProjectParticipants":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.getProjectParticipants(request: request, context: context)
        }
      }

    case "Invite":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.invite(request: request, context: context)
        }
      }

    case "JoinProject":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.joinProject(request: request, context: context)
        }
      }

    case "ListApps":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.listApps(request: request, context: context)
        }
      }

    case "GetApp":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.getApp(request: request, context: context)
        }
      }

    case "CreateApp":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.createApp(request: request, context: context)
        }
      }

    case "UpdateApp":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.updateApp(request: request, context: context)
        }
      }

    case "DeleteApp":
      return CallHandlerFactory.makeUnary(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.deleteApp(request: request, context: context)
        }
      }

    case "UploadTrainingData":
      return CallHandlerFactory.makeClientStreaming(callHandlerContext: callHandlerContext) { context in
        return self.uploadTrainingData(context: context)
      }

    case "DownloadCurrentTrainingData":
      return CallHandlerFactory.makeServerStreaming(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.downloadCurrentTrainingData(request: request, context: context)
        }
      }

    default: return nil
    }
  }
}
