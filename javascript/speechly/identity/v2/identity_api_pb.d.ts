// package: speechly.identity.v2
// file: speechly/identity/v2/identity_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as speechly_identity_v2_identity_pb from "../../../speechly/identity/v2/identity_pb";

export class LoginRequest extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): LoginRequest;


    hasApplication(): boolean;
    clearApplication(): void;
    getApplication(): speechly_identity_v2_identity_pb.ApplicationScope | undefined;
    setApplication(value?: speechly_identity_v2_identity_pb.ApplicationScope): LoginRequest;


    hasProject(): boolean;
    clearProject(): void;
    getProject(): speechly_identity_v2_identity_pb.ProjectScope | undefined;
    setProject(value?: speechly_identity_v2_identity_pb.ProjectScope): LoginRequest;


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
        application?: speechly_identity_v2_identity_pb.ApplicationScope.AsObject,
        project?: speechly_identity_v2_identity_pb.ProjectScope.AsObject,
    }

    export enum ScopeCase {
        SCOPE_NOT_SET = 0,
    
    APPLICATION = 2,

    PROJECT = 3,

    }

}

export class LoginResponse extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LoginResponse;

    getValidForS(): number;
    setValidForS(value: number): LoginResponse;

    getExpiresAtEpoch(): number;
    setExpiresAtEpoch(value: number): LoginResponse;

    getExpiresAt(): string;
    setExpiresAt(value: string): LoginResponse;


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
