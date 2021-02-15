// package: speechly.identity.v2
// file: speechly/identity/v2/api.proto

import * as jspb from "google-protobuf";

export class LoginRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): void;

  hasApplication(): boolean;
  clearApplication(): void;
  getApplication(): LoginRequest.ApplicationScope | undefined;
  setApplication(value?: LoginRequest.ApplicationScope): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): LoginRequest.ProjectScope | undefined;
  setProject(value?: LoginRequest.ProjectScope): void;

  getScopeCase(): LoginRequest.ScopeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    deviceId: string,
    application?: LoginRequest.ApplicationScope.AsObject,
    project?: LoginRequest.ProjectScope.AsObject,
  }

  export class ApplicationScope extends jspb.Message {
    getAppId(): string;
    setAppId(value: string): void;

    getConfigId(): string;
    setConfigId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApplicationScope.AsObject;
    static toObject(includeInstance: boolean, msg: ApplicationScope): ApplicationScope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApplicationScope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApplicationScope;
    static deserializeBinaryFromReader(message: ApplicationScope, reader: jspb.BinaryReader): ApplicationScope;
  }

  export namespace ApplicationScope {
    export type AsObject = {
      appId: string,
      configId: string,
    }
  }

  export class ProjectScope extends jspb.Message {
    getProjectId(): string;
    setProjectId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProjectScope.AsObject;
    static toObject(includeInstance: boolean, msg: ProjectScope): ProjectScope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProjectScope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProjectScope;
    static deserializeBinaryFromReader(message: ProjectScope, reader: jspb.BinaryReader): ProjectScope;
  }

  export namespace ProjectScope {
    export type AsObject = {
      projectId: string,
    }
  }

  export enum ScopeCase {
    SCOPE_NOT_SET = 0,
    APPLICATION = 2,
    PROJECT = 3,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getValidForS(): number;
  setValidForS(value: number): void;

  getExpiresAtEpoch(): number;
  setExpiresAtEpoch(value: number): void;

  getExpiresAt(): string;
  setExpiresAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
    validForS: number,
    expiresAtEpoch: number,
    expiresAt: string,
  }
}

