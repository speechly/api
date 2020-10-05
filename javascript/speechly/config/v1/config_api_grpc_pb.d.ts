// GENERATED CODE -- DO NOT EDIT!

// package: speechly.config.v1
// file: speechly/config/v1/config_api.proto

import * as speechly_config_v1_config_api_pb from "../../../speechly/config/v1/config_api_pb";
import * as grpc from "grpc";

interface IConfigAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getProject: grpc.MethodDefinition<speechly_config_v1_config_api_pb.GetProjectRequest, speechly_config_v1_config_api_pb.GetProjectResponse>;
  createProject: grpc.MethodDefinition<speechly_config_v1_config_api_pb.CreateProjectRequest, speechly_config_v1_config_api_pb.CreateProjectResponse>;
  updateProject: grpc.MethodDefinition<speechly_config_v1_config_api_pb.UpdateProjectRequest, speechly_config_v1_config_api_pb.UpdateProjectResponse>;
  getProjectParticipants: grpc.MethodDefinition<speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>;
  invite: grpc.MethodDefinition<speechly_config_v1_config_api_pb.InviteRequest, speechly_config_v1_config_api_pb.InviteResponse>;
  joinProject: grpc.MethodDefinition<speechly_config_v1_config_api_pb.JoinProjectRequest, speechly_config_v1_config_api_pb.JoinProjectResponse>;
  listApps: grpc.MethodDefinition<speechly_config_v1_config_api_pb.ListAppsRequest, speechly_config_v1_config_api_pb.ListAppsResponse>;
  getApp: grpc.MethodDefinition<speechly_config_v1_config_api_pb.GetAppRequest, speechly_config_v1_config_api_pb.GetAppResponse>;
  createApp: grpc.MethodDefinition<speechly_config_v1_config_api_pb.CreateAppRequest, speechly_config_v1_config_api_pb.CreateAppResponse>;
  updateApp: grpc.MethodDefinition<speechly_config_v1_config_api_pb.UpdateAppRequest, speechly_config_v1_config_api_pb.UpdateAppResponse>;
  deleteApp: grpc.MethodDefinition<speechly_config_v1_config_api_pb.DeleteAppRequest, speechly_config_v1_config_api_pb.DeleteAppResponse>;
  uploadTrainingData: grpc.MethodDefinition<speechly_config_v1_config_api_pb.UploadTrainingDataRequest, speechly_config_v1_config_api_pb.UploadTrainingDataResponse>;
  downloadCurrentTrainingData: grpc.MethodDefinition<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}

export const ConfigAPIService: IConfigAPIService;

export class ConfigAPIClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getProject(argument: speechly_config_v1_config_api_pb.GetProjectRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: speechly_config_v1_config_api_pb.GetProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  getProject(argument: speechly_config_v1_config_api_pb.GetProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetProjectResponse>): grpc.ClientUnaryCall;
  createProject(argument: speechly_config_v1_config_api_pb.CreateProjectRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.CreateProjectResponse>): grpc.ClientUnaryCall;
  createProject(argument: speechly_config_v1_config_api_pb.CreateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.CreateProjectResponse>): grpc.ClientUnaryCall;
  createProject(argument: speechly_config_v1_config_api_pb.CreateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.CreateProjectResponse>): grpc.ClientUnaryCall;
  updateProject(argument: speechly_config_v1_config_api_pb.UpdateProjectRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UpdateProjectResponse>): grpc.ClientUnaryCall;
  updateProject(argument: speechly_config_v1_config_api_pb.UpdateProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UpdateProjectResponse>): grpc.ClientUnaryCall;
  updateProject(argument: speechly_config_v1_config_api_pb.UpdateProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UpdateProjectResponse>): grpc.ClientUnaryCall;
  getProjectParticipants(argument: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>): grpc.ClientUnaryCall;
  getProjectParticipants(argument: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>): grpc.ClientUnaryCall;
  getProjectParticipants(argument: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>): grpc.ClientUnaryCall;
  invite(argument: speechly_config_v1_config_api_pb.InviteRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.InviteResponse>): grpc.ClientUnaryCall;
  invite(argument: speechly_config_v1_config_api_pb.InviteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.InviteResponse>): grpc.ClientUnaryCall;
  invite(argument: speechly_config_v1_config_api_pb.InviteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.InviteResponse>): grpc.ClientUnaryCall;
  joinProject(argument: speechly_config_v1_config_api_pb.JoinProjectRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.JoinProjectResponse>): grpc.ClientUnaryCall;
  joinProject(argument: speechly_config_v1_config_api_pb.JoinProjectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.JoinProjectResponse>): grpc.ClientUnaryCall;
  joinProject(argument: speechly_config_v1_config_api_pb.JoinProjectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.JoinProjectResponse>): grpc.ClientUnaryCall;
  listApps(argument: speechly_config_v1_config_api_pb.ListAppsRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.ListAppsResponse>): grpc.ClientUnaryCall;
  listApps(argument: speechly_config_v1_config_api_pb.ListAppsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.ListAppsResponse>): grpc.ClientUnaryCall;
  listApps(argument: speechly_config_v1_config_api_pb.ListAppsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.ListAppsResponse>): grpc.ClientUnaryCall;
  getApp(argument: speechly_config_v1_config_api_pb.GetAppRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetAppResponse>): grpc.ClientUnaryCall;
  getApp(argument: speechly_config_v1_config_api_pb.GetAppRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetAppResponse>): grpc.ClientUnaryCall;
  getApp(argument: speechly_config_v1_config_api_pb.GetAppRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.GetAppResponse>): grpc.ClientUnaryCall;
  createApp(argument: speechly_config_v1_config_api_pb.CreateAppRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.CreateAppResponse>): grpc.ClientUnaryCall;
  createApp(argument: speechly_config_v1_config_api_pb.CreateAppRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.CreateAppResponse>): grpc.ClientUnaryCall;
  createApp(argument: speechly_config_v1_config_api_pb.CreateAppRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.CreateAppResponse>): grpc.ClientUnaryCall;
  updateApp(argument: speechly_config_v1_config_api_pb.UpdateAppRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UpdateAppResponse>): grpc.ClientUnaryCall;
  updateApp(argument: speechly_config_v1_config_api_pb.UpdateAppRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UpdateAppResponse>): grpc.ClientUnaryCall;
  updateApp(argument: speechly_config_v1_config_api_pb.UpdateAppRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UpdateAppResponse>): grpc.ClientUnaryCall;
  deleteApp(argument: speechly_config_v1_config_api_pb.DeleteAppRequest, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.DeleteAppResponse>): grpc.ClientUnaryCall;
  deleteApp(argument: speechly_config_v1_config_api_pb.DeleteAppRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.DeleteAppResponse>): grpc.ClientUnaryCall;
  deleteApp(argument: speechly_config_v1_config_api_pb.DeleteAppRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.DeleteAppResponse>): grpc.ClientUnaryCall;
  uploadTrainingData(callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UploadTrainingDataResponse>): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
  uploadTrainingData(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UploadTrainingDataResponse>): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
  uploadTrainingData(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_config_v1_config_api_pb.UploadTrainingDataResponse>): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
  downloadCurrentTrainingData(argument: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
  downloadCurrentTrainingData(argument: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}
