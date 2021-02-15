// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AppSource extends jspb.Message { 
    getAppId(): string;
    setAppId(value: string): AppSource;

    getLanguage(): string;
    setLanguage(value: string): AppSource;

    getDataChunk(): Uint8Array | string;
    getDataChunk_asU8(): Uint8Array;
    getDataChunk_asB64(): string;
    setDataChunk(value: Uint8Array | string): AppSource;

    getContentType(): AppSource.ContentType;
    setContentType(value: AppSource.ContentType): AppSource;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppSource.AsObject;
    static toObject(includeInstance: boolean, msg: AppSource): AppSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppSource;
    static deserializeBinaryFromReader(message: AppSource, reader: jspb.BinaryReader): AppSource;
}

export namespace AppSource {
    export type AsObject = {
        appId: string,
        language: string,
        dataChunk: Uint8Array | string,
        contentType: AppSource.ContentType,
    }

    export enum ContentType {
    CONTENT_TYPE_UNSPECIFIED = 0,
    CONTENT_TYPE_YAML = 1,
    CONTENT_TYPE_TAR = 2,
    }

}

export class CompileRequest extends jspb.Message { 

    hasAppSource(): boolean;
    clearAppSource(): void;
    getAppSource(): AppSource | undefined;
    setAppSource(value?: AppSource): CompileRequest;

    getBatchSize(): number;
    setBatchSize(value: number): CompileRequest;

    getRandomSeed(): number;
    setRandomSeed(value: number): CompileRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompileRequest): CompileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompileRequest;
    static deserializeBinaryFromReader(message: CompileRequest, reader: jspb.BinaryReader): CompileRequest;
}

export namespace CompileRequest {
    export type AsObject = {
        appSource?: AppSource.AsObject,
        batchSize: number,
        randomSeed: number,
    }
}

export class CompileResult extends jspb.Message { 
    getResult(): CompileResult.Result;
    setResult(value: CompileResult.Result): CompileResult;

    clearTemplatesList(): void;
    getTemplatesList(): Array<string>;
    setTemplatesList(value: Array<string>): CompileResult;
    addTemplates(value: string, index?: number): string;

    clearMessagesList(): void;
    getMessagesList(): Array<LineReference>;
    setMessagesList(value: Array<LineReference>): CompileResult;
    addMessages(value?: LineReference, index?: number): LineReference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompileResult.AsObject;
    static toObject(includeInstance: boolean, msg: CompileResult): CompileResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompileResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompileResult;
    static deserializeBinaryFromReader(message: CompileResult, reader: jspb.BinaryReader): CompileResult;
}

export namespace CompileResult {
    export type AsObject = {
        result: CompileResult.Result,
        templatesList: Array<string>,
        messagesList: Array<LineReference.AsObject>,
    }

    export enum Result {
    COMPILE_SUCCESS = 0,
    COMPILE_FAILURE = 1,
    COMPILE_WARNING = 2,
    }

}

export class ValidateResult extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<LineReference>;
    setMessagesList(value: Array<LineReference>): ValidateResult;
    addMessages(value?: LineReference, index?: number): LineReference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateResult.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateResult): ValidateResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateResult;
    static deserializeBinaryFromReader(message: ValidateResult, reader: jspb.BinaryReader): ValidateResult;
}

export namespace ValidateResult {
    export type AsObject = {
        messagesList: Array<LineReference.AsObject>,
    }
}

export class LineReference extends jspb.Message { 
    getLine(): number;
    setLine(value: number): LineReference;

    getColumn(): number;
    setColumn(value: number): LineReference;

    getFile(): string;
    setFile(value: string): LineReference;

    getLevel(): LineReference.Level;
    setLevel(value: LineReference.Level): LineReference;

    getMessage(): string;
    setMessage(value: string): LineReference;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineReference.AsObject;
    static toObject(includeInstance: boolean, msg: LineReference): LineReference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineReference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineReference;
    static deserializeBinaryFromReader(message: LineReference, reader: jspb.BinaryReader): LineReference;
}

export namespace LineReference {
    export type AsObject = {
        line: number,
        column: number,
        file: string,
        level: LineReference.Level,
        message: string,
    }

    export enum Level {
    LEVEL_NOTE = 0,
    LEVEL_WARNING = 1,
    LEVEL_ERROR = 2,
    }

}

export class ExtractSALSourcesResult extends jspb.Message { 
    getDataChunk(): Uint8Array | string;
    getDataChunk_asU8(): Uint8Array;
    getDataChunk_asB64(): string;
    setDataChunk(value: Uint8Array | string): ExtractSALSourcesResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtractSALSourcesResult.AsObject;
    static toObject(includeInstance: boolean, msg: ExtractSALSourcesResult): ExtractSALSourcesResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtractSALSourcesResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtractSALSourcesResult;
    static deserializeBinaryFromReader(message: ExtractSALSourcesResult, reader: jspb.BinaryReader): ExtractSALSourcesResult;
}

export namespace ExtractSALSourcesResult {
    export type AsObject = {
        dataChunk: Uint8Array | string,
    }
}
