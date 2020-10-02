// package: speechly.config.v1
// file: speechly/config/v1/config_api.proto

import * as speechly_config_v1_config_api_pb from "../../../speechly/config/v1/config_api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConfigAPIGetProject = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.GetProjectRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.GetProjectResponse;
};

type ConfigAPICreateProject = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.CreateProjectRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.CreateProjectResponse;
};

type ConfigAPIUpdateProject = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.UpdateProjectRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.UpdateProjectResponse;
};

type ConfigAPIGetProjectParticipants = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.GetProjectParticipantsRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.GetProjectParticipantsResponse;
};

type ConfigAPIInvite = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.InviteRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.InviteResponse;
};

type ConfigAPIJoinProject = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.JoinProjectRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.JoinProjectResponse;
};

type ConfigAPIListApps = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.ListAppsRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.ListAppsResponse;
};

type ConfigAPIGetApp = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.GetAppRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.GetAppResponse;
};

type ConfigAPICreateApp = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.CreateAppRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.CreateAppResponse;
};

type ConfigAPIUpdateApp = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.UpdateAppRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.UpdateAppResponse;
};

type ConfigAPIDeleteApp = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.DeleteAppRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.DeleteAppResponse;
};

type ConfigAPIUploadTrainingData = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof speechly_config_v1_config_api_pb.UploadTrainingDataRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.UploadTrainingDataResponse;
};

type ConfigAPIDownloadCurrentTrainingData = {
  readonly methodName: string;
  readonly service: typeof ConfigAPI;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest;
  readonly responseType: typeof speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse;
};

export class ConfigAPI {
  static readonly serviceName: string;
  static readonly GetProject: ConfigAPIGetProject;
  static readonly CreateProject: ConfigAPICreateProject;
  static readonly UpdateProject: ConfigAPIUpdateProject;
  static readonly GetProjectParticipants: ConfigAPIGetProjectParticipants;
  static readonly Invite: ConfigAPIInvite;
  static readonly JoinProject: ConfigAPIJoinProject;
  static readonly ListApps: ConfigAPIListApps;
  static readonly GetApp: ConfigAPIGetApp;
  static readonly CreateApp: ConfigAPICreateApp;
  static readonly UpdateApp: ConfigAPIUpdateApp;
  static readonly DeleteApp: ConfigAPIDeleteApp;
  static readonly UploadTrainingData: ConfigAPIUploadTrainingData;
  static readonly DownloadCurrentTrainingData: ConfigAPIDownloadCurrentTrainingData;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ConfigAPIClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getProject(
    requestMessage: speechly_config_v1_config_api_pb.GetProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.GetProjectResponse|null) => void
  ): UnaryResponse;
  getProject(
    requestMessage: speechly_config_v1_config_api_pb.GetProjectRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.GetProjectResponse|null) => void
  ): UnaryResponse;
  createProject(
    requestMessage: speechly_config_v1_config_api_pb.CreateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.CreateProjectResponse|null) => void
  ): UnaryResponse;
  createProject(
    requestMessage: speechly_config_v1_config_api_pb.CreateProjectRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.CreateProjectResponse|null) => void
  ): UnaryResponse;
  updateProject(
    requestMessage: speechly_config_v1_config_api_pb.UpdateProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.UpdateProjectResponse|null) => void
  ): UnaryResponse;
  updateProject(
    requestMessage: speechly_config_v1_config_api_pb.UpdateProjectRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.UpdateProjectResponse|null) => void
  ): UnaryResponse;
  getProjectParticipants(
    requestMessage: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse|null) => void
  ): UnaryResponse;
  getProjectParticipants(
    requestMessage: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse|null) => void
  ): UnaryResponse;
  invite(
    requestMessage: speechly_config_v1_config_api_pb.InviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.InviteResponse|null) => void
  ): UnaryResponse;
  invite(
    requestMessage: speechly_config_v1_config_api_pb.InviteRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.InviteResponse|null) => void
  ): UnaryResponse;
  joinProject(
    requestMessage: speechly_config_v1_config_api_pb.JoinProjectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.JoinProjectResponse|null) => void
  ): UnaryResponse;
  joinProject(
    requestMessage: speechly_config_v1_config_api_pb.JoinProjectRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.JoinProjectResponse|null) => void
  ): UnaryResponse;
  listApps(
    requestMessage: speechly_config_v1_config_api_pb.ListAppsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.ListAppsResponse|null) => void
  ): UnaryResponse;
  listApps(
    requestMessage: speechly_config_v1_config_api_pb.ListAppsRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.ListAppsResponse|null) => void
  ): UnaryResponse;
  getApp(
    requestMessage: speechly_config_v1_config_api_pb.GetAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.GetAppResponse|null) => void
  ): UnaryResponse;
  getApp(
    requestMessage: speechly_config_v1_config_api_pb.GetAppRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.GetAppResponse|null) => void
  ): UnaryResponse;
  createApp(
    requestMessage: speechly_config_v1_config_api_pb.CreateAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.CreateAppResponse|null) => void
  ): UnaryResponse;
  createApp(
    requestMessage: speechly_config_v1_config_api_pb.CreateAppRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.CreateAppResponse|null) => void
  ): UnaryResponse;
  updateApp(
    requestMessage: speechly_config_v1_config_api_pb.UpdateAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.UpdateAppResponse|null) => void
  ): UnaryResponse;
  updateApp(
    requestMessage: speechly_config_v1_config_api_pb.UpdateAppRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.UpdateAppResponse|null) => void
  ): UnaryResponse;
  deleteApp(
    requestMessage: speechly_config_v1_config_api_pb.DeleteAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.DeleteAppResponse|null) => void
  ): UnaryResponse;
  deleteApp(
    requestMessage: speechly_config_v1_config_api_pb.DeleteAppRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_config_v1_config_api_pb.DeleteAppResponse|null) => void
  ): UnaryResponse;
  uploadTrainingData(metadata?: grpc.Metadata): RequestStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
  downloadCurrentTrainingData(requestMessage: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, metadata?: grpc.Metadata): ResponseStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}

