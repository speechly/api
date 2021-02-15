// package: speechly.identity.v2
// file: speechly/identity/v2/identity.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ApplicationScope extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): ApplicationScope;

    getConfigId(): string;
    setConfigId(value: string): ApplicationScope;


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
    setProjectId(value: string): ProjectScope;


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
