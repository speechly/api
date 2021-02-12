// package: speechly.config.v1
// file: speechly/config/v1/config_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as speechly_config_v1_config_api_pb from "../../../speechly/config/v1/config_api_pb";

interface IConfigAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProject: IConfigAPIService_IGetProject;
    createProject: IConfigAPIService_ICreateProject;
    updateProject: IConfigAPIService_IUpdateProject;
    getProjectParticipants: IConfigAPIService_IGetProjectParticipants;
    invite: IConfigAPIService_IInvite;
    joinProject: IConfigAPIService_IJoinProject;
    listApps: IConfigAPIService_IListApps;
    getApp: IConfigAPIService_IGetApp;
    createApp: IConfigAPIService_ICreateApp;
    updateApp: IConfigAPIService_IUpdateApp;
    deleteApp: IConfigAPIService_IDeleteApp;
    uploadTrainingData: IConfigAPIService_IUploadTrainingData;
    downloadCurrentTrainingData: IConfigAPIService_IDownloadCurrentTrainingData;
}

interface IConfigAPIService_IGetProject extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.GetProjectRequest, speechly_config_v1_config_api_pb.GetProjectResponse> {
    path: "/speechly.config.v1.ConfigAPI/GetProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.GetProjectRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.GetProjectRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.GetProjectResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.GetProjectResponse>;
}
interface IConfigAPIService_ICreateProject extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.CreateProjectRequest, speechly_config_v1_config_api_pb.CreateProjectResponse> {
    path: "/speechly.config.v1.ConfigAPI/CreateProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.CreateProjectRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.CreateProjectRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.CreateProjectResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.CreateProjectResponse>;
}
interface IConfigAPIService_IUpdateProject extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.UpdateProjectRequest, speechly_config_v1_config_api_pb.UpdateProjectResponse> {
    path: "/speechly.config.v1.ConfigAPI/UpdateProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.UpdateProjectRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.UpdateProjectRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.UpdateProjectResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.UpdateProjectResponse>;
}
interface IConfigAPIService_IGetProjectParticipants extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, speechly_config_v1_config_api_pb.GetProjectParticipantsResponse> {
    path: "/speechly.config.v1.ConfigAPI/GetProjectParticipants";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.GetProjectParticipantsRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.GetProjectParticipantsRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>;
}
interface IConfigAPIService_IInvite extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.InviteRequest, speechly_config_v1_config_api_pb.InviteResponse> {
    path: "/speechly.config.v1.ConfigAPI/Invite";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.InviteRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.InviteRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.InviteResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.InviteResponse>;
}
interface IConfigAPIService_IJoinProject extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.JoinProjectRequest, speechly_config_v1_config_api_pb.JoinProjectResponse> {
    path: "/speechly.config.v1.ConfigAPI/JoinProject";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.JoinProjectRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.JoinProjectRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.JoinProjectResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.JoinProjectResponse>;
}
interface IConfigAPIService_IListApps extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.ListAppsRequest, speechly_config_v1_config_api_pb.ListAppsResponse> {
    path: "/speechly.config.v1.ConfigAPI/ListApps";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.ListAppsRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.ListAppsRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.ListAppsResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.ListAppsResponse>;
}
interface IConfigAPIService_IGetApp extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.GetAppRequest, speechly_config_v1_config_api_pb.GetAppResponse> {
    path: "/speechly.config.v1.ConfigAPI/GetApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.GetAppRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.GetAppRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.GetAppResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.GetAppResponse>;
}
interface IConfigAPIService_ICreateApp extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.CreateAppRequest, speechly_config_v1_config_api_pb.CreateAppResponse> {
    path: "/speechly.config.v1.ConfigAPI/CreateApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.CreateAppRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.CreateAppRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.CreateAppResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.CreateAppResponse>;
}
interface IConfigAPIService_IUpdateApp extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.UpdateAppRequest, speechly_config_v1_config_api_pb.UpdateAppResponse> {
    path: "/speechly.config.v1.ConfigAPI/UpdateApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.UpdateAppRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.UpdateAppRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.UpdateAppResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.UpdateAppResponse>;
}
interface IConfigAPIService_IDeleteApp extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.DeleteAppRequest, speechly_config_v1_config_api_pb.DeleteAppResponse> {
    path: "/speechly.config.v1.ConfigAPI/DeleteApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.DeleteAppRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.DeleteAppRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.DeleteAppResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.DeleteAppResponse>;
}
interface IConfigAPIService_IUploadTrainingData extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.UploadTrainingDataRequest, speechly_config_v1_config_api_pb.UploadTrainingDataResponse> {
    path: "/speechly.config.v1.ConfigAPI/UploadTrainingData";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.UploadTrainingDataResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.UploadTrainingDataResponse>;
}
interface IConfigAPIService_IDownloadCurrentTrainingData extends grpc.MethodDefinition<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse> {
    path: "/speechly.config.v1.ConfigAPI/DownloadCurrentTrainingData";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest>;
    requestDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest>;
    responseSerialize: grpc.serialize<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
    responseDeserialize: grpc.deserialize<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}

export const ConfigAPIService: IConfigAPIService;

export interface IConfigAPIServer {
    getProject: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.GetProjectRequest, speechly_config_v1_config_api_pb.GetProjectResponse>;
    createProject: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.CreateProjectRequest, speechly_config_v1_config_api_pb.CreateProjectResponse>;
    updateProject: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.UpdateProjectRequest, speechly_config_v1_config_api_pb.UpdateProjectResponse>;
    getProjectParticipants: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, speechly_config_v1_config_api_pb.GetProjectParticipantsResponse>;
    invite: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.InviteRequest, speechly_config_v1_config_api_pb.InviteResponse>;
    joinProject: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.JoinProjectRequest, speechly_config_v1_config_api_pb.JoinProjectResponse>;
    listApps: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.ListAppsRequest, speechly_config_v1_config_api_pb.ListAppsResponse>;
    getApp: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.GetAppRequest, speechly_config_v1_config_api_pb.GetAppResponse>;
    createApp: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.CreateAppRequest, speechly_config_v1_config_api_pb.CreateAppResponse>;
    updateApp: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.UpdateAppRequest, speechly_config_v1_config_api_pb.UpdateAppResponse>;
    deleteApp: grpc.handleUnaryCall<speechly_config_v1_config_api_pb.DeleteAppRequest, speechly_config_v1_config_api_pb.DeleteAppResponse>;
    uploadTrainingData: grpc.handleClientStreamingCall<speechly_config_v1_config_api_pb.UploadTrainingDataRequest, speechly_config_v1_config_api_pb.UploadTrainingDataResponse>;
    downloadCurrentTrainingData: grpc.handleServerStreamingCall<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}

export interface IConfigAPIClient {
    getProject(request: speechly_config_v1_config_api_pb.GetProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectResponse) => void): grpc.ClientUnaryCall;
    getProject(request: speechly_config_v1_config_api_pb.GetProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectResponse) => void): grpc.ClientUnaryCall;
    getProject(request: speechly_config_v1_config_api_pb.GetProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectResponse) => void): grpc.ClientUnaryCall;
    createProject(request: speechly_config_v1_config_api_pb.CreateProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateProjectResponse) => void): grpc.ClientUnaryCall;
    createProject(request: speechly_config_v1_config_api_pb.CreateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateProjectResponse) => void): grpc.ClientUnaryCall;
    createProject(request: speechly_config_v1_config_api_pb.CreateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: speechly_config_v1_config_api_pb.UpdateProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: speechly_config_v1_config_api_pb.UpdateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateProjectResponse) => void): grpc.ClientUnaryCall;
    updateProject(request: speechly_config_v1_config_api_pb.UpdateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateProjectResponse) => void): grpc.ClientUnaryCall;
    getProjectParticipants(request: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse) => void): grpc.ClientUnaryCall;
    getProjectParticipants(request: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse) => void): grpc.ClientUnaryCall;
    getProjectParticipants(request: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse) => void): grpc.ClientUnaryCall;
    invite(request: speechly_config_v1_config_api_pb.InviteRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    invite(request: speechly_config_v1_config_api_pb.InviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    invite(request: speechly_config_v1_config_api_pb.InviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    joinProject(request: speechly_config_v1_config_api_pb.JoinProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.JoinProjectResponse) => void): grpc.ClientUnaryCall;
    joinProject(request: speechly_config_v1_config_api_pb.JoinProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.JoinProjectResponse) => void): grpc.ClientUnaryCall;
    joinProject(request: speechly_config_v1_config_api_pb.JoinProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.JoinProjectResponse) => void): grpc.ClientUnaryCall;
    listApps(request: speechly_config_v1_config_api_pb.ListAppsRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    listApps(request: speechly_config_v1_config_api_pb.ListAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    listApps(request: speechly_config_v1_config_api_pb.ListAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    getApp(request: speechly_config_v1_config_api_pb.GetAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetAppResponse) => void): grpc.ClientUnaryCall;
    getApp(request: speechly_config_v1_config_api_pb.GetAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetAppResponse) => void): grpc.ClientUnaryCall;
    getApp(request: speechly_config_v1_config_api_pb.GetAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetAppResponse) => void): grpc.ClientUnaryCall;
    createApp(request: speechly_config_v1_config_api_pb.CreateAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    createApp(request: speechly_config_v1_config_api_pb.CreateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    createApp(request: speechly_config_v1_config_api_pb.CreateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    updateApp(request: speechly_config_v1_config_api_pb.UpdateAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    updateApp(request: speechly_config_v1_config_api_pb.UpdateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    updateApp(request: speechly_config_v1_config_api_pb.UpdateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: speechly_config_v1_config_api_pb.DeleteAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: speechly_config_v1_config_api_pb.DeleteAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    deleteApp(request: speechly_config_v1_config_api_pb.DeleteAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    uploadTrainingData(callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    uploadTrainingData(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    uploadTrainingData(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    uploadTrainingData(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    downloadCurrentTrainingData(request: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
    downloadCurrentTrainingData(request: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}

export class ConfigAPIClient extends grpc.Client implements IConfigAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProject(request: speechly_config_v1_config_api_pb.GetProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectResponse) => void): grpc.ClientUnaryCall;
    public getProject(request: speechly_config_v1_config_api_pb.GetProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectResponse) => void): grpc.ClientUnaryCall;
    public getProject(request: speechly_config_v1_config_api_pb.GetProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectResponse) => void): grpc.ClientUnaryCall;
    public createProject(request: speechly_config_v1_config_api_pb.CreateProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateProjectResponse) => void): grpc.ClientUnaryCall;
    public createProject(request: speechly_config_v1_config_api_pb.CreateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateProjectResponse) => void): grpc.ClientUnaryCall;
    public createProject(request: speechly_config_v1_config_api_pb.CreateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: speechly_config_v1_config_api_pb.UpdateProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: speechly_config_v1_config_api_pb.UpdateProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateProjectResponse) => void): grpc.ClientUnaryCall;
    public updateProject(request: speechly_config_v1_config_api_pb.UpdateProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateProjectResponse) => void): grpc.ClientUnaryCall;
    public getProjectParticipants(request: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse) => void): grpc.ClientUnaryCall;
    public getProjectParticipants(request: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse) => void): grpc.ClientUnaryCall;
    public getProjectParticipants(request: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse) => void): grpc.ClientUnaryCall;
    public invite(request: speechly_config_v1_config_api_pb.InviteRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    public invite(request: speechly_config_v1_config_api_pb.InviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    public invite(request: speechly_config_v1_config_api_pb.InviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.InviteResponse) => void): grpc.ClientUnaryCall;
    public joinProject(request: speechly_config_v1_config_api_pb.JoinProjectRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.JoinProjectResponse) => void): grpc.ClientUnaryCall;
    public joinProject(request: speechly_config_v1_config_api_pb.JoinProjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.JoinProjectResponse) => void): grpc.ClientUnaryCall;
    public joinProject(request: speechly_config_v1_config_api_pb.JoinProjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.JoinProjectResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: speechly_config_v1_config_api_pb.ListAppsRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: speechly_config_v1_config_api_pb.ListAppsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    public listApps(request: speechly_config_v1_config_api_pb.ListAppsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.ListAppsResponse) => void): grpc.ClientUnaryCall;
    public getApp(request: speechly_config_v1_config_api_pb.GetAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetAppResponse) => void): grpc.ClientUnaryCall;
    public getApp(request: speechly_config_v1_config_api_pb.GetAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetAppResponse) => void): grpc.ClientUnaryCall;
    public getApp(request: speechly_config_v1_config_api_pb.GetAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.GetAppResponse) => void): grpc.ClientUnaryCall;
    public createApp(request: speechly_config_v1_config_api_pb.CreateAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    public createApp(request: speechly_config_v1_config_api_pb.CreateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    public createApp(request: speechly_config_v1_config_api_pb.CreateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.CreateAppResponse) => void): grpc.ClientUnaryCall;
    public updateApp(request: speechly_config_v1_config_api_pb.UpdateAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    public updateApp(request: speechly_config_v1_config_api_pb.UpdateAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    public updateApp(request: speechly_config_v1_config_api_pb.UpdateAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UpdateAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: speechly_config_v1_config_api_pb.DeleteAppRequest, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: speechly_config_v1_config_api_pb.DeleteAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    public deleteApp(request: speechly_config_v1_config_api_pb.DeleteAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.DeleteAppResponse) => void): grpc.ClientUnaryCall;
    public uploadTrainingData(callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    public uploadTrainingData(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    public uploadTrainingData(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    public uploadTrainingData(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_config_v1_config_api_pb.UploadTrainingDataResponse) => void): grpc.ClientWritableStream<speechly_config_v1_config_api_pb.UploadTrainingDataRequest>;
    public downloadCurrentTrainingData(request: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
    public downloadCurrentTrainingData(request: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse>;
}
