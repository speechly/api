// package: speechly.config.v1
// file: speechly/config/v1/config_api.proto

import * as jspb from "google-protobuf";

export class GetProjectRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRequest): GetProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRequest;
  static deserializeBinaryFromReader(message: GetProjectRequest, reader: jspb.BinaryReader): GetProjectRequest;
}

export namespace GetProjectRequest {
  export type AsObject = {
  }
}

export class GetProjectResponse extends jspb.Message {
  clearProjectList(): void;
  getProjectList(): Array<string>;
  setProjectList(value: Array<string>): void;
  addProject(value: string, index?: number): string;

  clearProjectNamesList(): void;
  getProjectNamesList(): Array<string>;
  setProjectNamesList(value: Array<string>): void;
  addProjectNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectResponse): GetProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectResponse;
  static deserializeBinaryFromReader(message: GetProjectResponse, reader: jspb.BinaryReader): GetProjectResponse;
}

export namespace GetProjectResponse {
  export type AsObject = {
    projectList: Array<string>,
    projectNamesList: Array<string>,
  }
}

export class CreateProjectRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRequest): CreateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRequest;
  static deserializeBinaryFromReader(message: CreateProjectRequest, reader: jspb.BinaryReader): CreateProjectRequest;
}

export namespace CreateProjectRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateProjectResponse extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectResponse): CreateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectResponse;
  static deserializeBinaryFromReader(message: CreateProjectResponse, reader: jspb.BinaryReader): CreateProjectResponse;
}

export namespace CreateProjectResponse {
  export type AsObject = {
    project: string,
    name: string,
  }
}

export class UpdateProjectRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRequest): UpdateProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRequest, reader: jspb.BinaryReader): UpdateProjectRequest;
}

export namespace UpdateProjectRequest {
  export type AsObject = {
    project: string,
    name: string,
  }
}

export class UpdateProjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectResponse): UpdateProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectResponse;
  static deserializeBinaryFromReader(message: UpdateProjectResponse, reader: jspb.BinaryReader): UpdateProjectResponse;
}

export namespace UpdateProjectResponse {
  export type AsObject = {
  }
}

export class GetProjectParticipantsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectParticipantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectParticipantsRequest): GetProjectParticipantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectParticipantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectParticipantsRequest;
  static deserializeBinaryFromReader(message: GetProjectParticipantsRequest, reader: jspb.BinaryReader): GetProjectParticipantsRequest;
}

export namespace GetProjectParticipantsRequest {
  export type AsObject = {
    project: string,
  }
}

export class GetProjectParticipantsResponse extends jspb.Message {
  clearParticipantsList(): void;
  getParticipantsList(): Array<GetProjectParticipantsResponse.Participant>;
  setParticipantsList(value: Array<GetProjectParticipantsResponse.Participant>): void;
  addParticipants(value?: GetProjectParticipantsResponse.Participant, index?: number): GetProjectParticipantsResponse.Participant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectParticipantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectParticipantsResponse): GetProjectParticipantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProjectParticipantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectParticipantsResponse;
  static deserializeBinaryFromReader(message: GetProjectParticipantsResponse, reader: jspb.BinaryReader): GetProjectParticipantsResponse;
}

export namespace GetProjectParticipantsResponse {
  export type AsObject = {
    participantsList: Array<GetProjectParticipantsResponse.Participant.AsObject>,
  }

  export class Participant extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getId(): string;
    setId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Participant.AsObject;
    static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Participant;
    static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
  }

  export namespace Participant {
    export type AsObject = {
      name: string,
      email: string,
      id: string,
    }
  }
}

export class InviteRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteRequest): InviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteRequest;
  static deserializeBinaryFromReader(message: InviteRequest, reader: jspb.BinaryReader): InviteRequest;
}

export namespace InviteRequest {
  export type AsObject = {
    project: string,
  }
}

export class InviteResponse extends jspb.Message {
  getInvitationToken(): string;
  setInvitationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteResponse): InviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteResponse;
  static deserializeBinaryFromReader(message: InviteResponse, reader: jspb.BinaryReader): InviteResponse;
}

export namespace InviteResponse {
  export type AsObject = {
    invitationToken: string,
  }
}

export class JoinProjectRequest extends jspb.Message {
  getInvitationToken(): string;
  setInvitationToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinProjectRequest): JoinProjectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinProjectRequest;
  static deserializeBinaryFromReader(message: JoinProjectRequest, reader: jspb.BinaryReader): JoinProjectRequest;
}

export namespace JoinProjectRequest {
  export type AsObject = {
    invitationToken: string,
  }
}

export class JoinProjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinProjectResponse): JoinProjectResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinProjectResponse;
  static deserializeBinaryFromReader(message: JoinProjectResponse, reader: jspb.BinaryReader): JoinProjectResponse;
}

export namespace JoinProjectResponse {
  export type AsObject = {
  }
}

export class ListAppsRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppsRequest): ListAppsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppsRequest;
  static deserializeBinaryFromReader(message: ListAppsRequest, reader: jspb.BinaryReader): ListAppsRequest;
}

export namespace ListAppsRequest {
  export type AsObject = {
    project: string,
  }
}

export class ListAppsResponse extends jspb.Message {
  clearAppsList(): void;
  getAppsList(): Array<App>;
  setAppsList(value: Array<App>): void;
  addApps(value?: App, index?: number): App;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppsResponse): ListAppsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAppsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppsResponse;
  static deserializeBinaryFromReader(message: ListAppsResponse, reader: jspb.BinaryReader): ListAppsResponse;
}

export namespace ListAppsResponse {
  export type AsObject = {
    appsList: Array<App.AsObject>,
  }
}

export class GetAppRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppRequest): GetAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppRequest;
  static deserializeBinaryFromReader(message: GetAppRequest, reader: jspb.BinaryReader): GetAppRequest;
}

export namespace GetAppRequest {
  export type AsObject = {
    appId: string,
  }
}

export class GetAppResponse extends jspb.Message {
  hasApp(): boolean;
  clearApp(): void;
  getApp(): App | undefined;
  setApp(value?: App): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppResponse): GetAppResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppResponse;
  static deserializeBinaryFromReader(message: GetAppResponse, reader: jspb.BinaryReader): GetAppResponse;
}

export namespace GetAppResponse {
  export type AsObject = {
    app?: App.AsObject,
  }
}

export class CreateAppRequest extends jspb.Message {
  getProject(): string;
  setProject(value: string): void;

  hasApp(): boolean;
  clearApp(): void;
  getApp(): App | undefined;
  setApp(value?: App): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppRequest): CreateAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppRequest;
  static deserializeBinaryFromReader(message: CreateAppRequest, reader: jspb.BinaryReader): CreateAppRequest;
}

export namespace CreateAppRequest {
  export type AsObject = {
    project: string,
    app?: App.AsObject,
  }
}

export class CreateAppResponse extends jspb.Message {
  hasApp(): boolean;
  clearApp(): void;
  getApp(): App | undefined;
  setApp(value?: App): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAppResponse): CreateAppResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAppResponse;
  static deserializeBinaryFromReader(message: CreateAppResponse, reader: jspb.BinaryReader): CreateAppResponse;
}

export namespace CreateAppResponse {
  export type AsObject = {
    app?: App.AsObject,
  }
}

export class UpdateAppRequest extends jspb.Message {
  hasApp(): boolean;
  clearApp(): void;
  getApp(): App | undefined;
  setApp(value?: App): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAppRequest): UpdateAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAppRequest;
  static deserializeBinaryFromReader(message: UpdateAppRequest, reader: jspb.BinaryReader): UpdateAppRequest;
}

export namespace UpdateAppRequest {
  export type AsObject = {
    app?: App.AsObject,
  }
}

export class UpdateAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAppResponse): UpdateAppResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAppResponse;
  static deserializeBinaryFromReader(message: UpdateAppResponse, reader: jspb.BinaryReader): UpdateAppResponse;
}

export namespace UpdateAppResponse {
  export type AsObject = {
  }
}

export class DeleteAppRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppRequest): DeleteAppRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppRequest;
  static deserializeBinaryFromReader(message: DeleteAppRequest, reader: jspb.BinaryReader): DeleteAppRequest;
}

export namespace DeleteAppRequest {
  export type AsObject = {
    appId: string,
  }
}

export class DeleteAppResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAppResponse): DeleteAppResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAppResponse;
  static deserializeBinaryFromReader(message: DeleteAppResponse, reader: jspb.BinaryReader): DeleteAppResponse;
}

export namespace DeleteAppResponse {
  export type AsObject = {
  }
}

export class UploadTrainingDataRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  getDataChunk(): Uint8Array | string;
  getDataChunk_asU8(): Uint8Array;
  getDataChunk_asB64(): string;
  setDataChunk(value: Uint8Array | string): void;

  getContentType(): UploadTrainingDataRequest.ContentTypeMap[keyof UploadTrainingDataRequest.ContentTypeMap];
  setContentType(value: UploadTrainingDataRequest.ContentTypeMap[keyof UploadTrainingDataRequest.ContentTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadTrainingDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadTrainingDataRequest): UploadTrainingDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadTrainingDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadTrainingDataRequest;
  static deserializeBinaryFromReader(message: UploadTrainingDataRequest, reader: jspb.BinaryReader): UploadTrainingDataRequest;
}

export namespace UploadTrainingDataRequest {
  export type AsObject = {
    appId: string,
    dataChunk: Uint8Array | string,
    contentType: UploadTrainingDataRequest.ContentTypeMap[keyof UploadTrainingDataRequest.ContentTypeMap],
  }

  export interface ContentTypeMap {
    CONTENT_TYPE_UNSPECIFIED: 0;
    CONTENT_TYPE_YAML: 1;
    CONTENT_TYPE_TAR: 2;
  }

  export const ContentType: ContentTypeMap;
}

export class UploadTrainingDataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadTrainingDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadTrainingDataResponse): UploadTrainingDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadTrainingDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadTrainingDataResponse;
  static deserializeBinaryFromReader(message: UploadTrainingDataResponse, reader: jspb.BinaryReader): UploadTrainingDataResponse;
}

export namespace UploadTrainingDataResponse {
  export type AsObject = {
  }
}

export class DownloadCurrentTrainingDataRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadCurrentTrainingDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadCurrentTrainingDataRequest): DownloadCurrentTrainingDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadCurrentTrainingDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadCurrentTrainingDataRequest;
  static deserializeBinaryFromReader(message: DownloadCurrentTrainingDataRequest, reader: jspb.BinaryReader): DownloadCurrentTrainingDataRequest;
}

export namespace DownloadCurrentTrainingDataRequest {
  export type AsObject = {
    appId: string,
  }
}

export class DownloadCurrentTrainingDataResponse extends jspb.Message {
  getDataChunk(): Uint8Array | string;
  getDataChunk_asU8(): Uint8Array;
  getDataChunk_asB64(): string;
  setDataChunk(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownloadCurrentTrainingDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DownloadCurrentTrainingDataResponse): DownloadCurrentTrainingDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownloadCurrentTrainingDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownloadCurrentTrainingDataResponse;
  static deserializeBinaryFromReader(message: DownloadCurrentTrainingDataResponse, reader: jspb.BinaryReader): DownloadCurrentTrainingDataResponse;
}

export namespace DownloadCurrentTrainingDataResponse {
  export type AsObject = {
    dataChunk: Uint8Array | string,
  }
}

export class App extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getStatus(): App.StatusMap[keyof App.StatusMap];
  setStatus(value: App.StatusMap[keyof App.StatusMap]): void;

  getName(): string;
  setName(value: string): void;

  getQueueSize(): number;
  setQueueSize(value: number): void;

  getErrorMsg(): string;
  setErrorMsg(value: string): void;

  getEstimatedRemainingSec(): number;
  setEstimatedRemainingSec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): App.AsObject;
  static toObject(includeInstance: boolean, msg: App): App.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: App, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): App;
  static deserializeBinaryFromReader(message: App, reader: jspb.BinaryReader): App;
}

export namespace App {
  export type AsObject = {
    id: string,
    language: string,
    status: App.StatusMap[keyof App.StatusMap],
    name: string,
    queueSize: number,
    errorMsg: string,
    estimatedRemainingSec: number,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    STATUS_NEW: 1;
    STATUS_TRAINING: 2;
    STATUS_TRAINED: 3;
    STATUS_FAILED: 4;
  }

  export const Status: StatusMap;
}

