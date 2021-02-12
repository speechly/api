// package: speechly.slu.v1
// file: speechly/slu/v1/wlu.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class WLURequest extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): WLURequest;

    getText(): string;
    setText(value: string): WLURequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WLURequest.AsObject;
    static toObject(includeInstance: boolean, msg: WLURequest): WLURequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WLURequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WLURequest;
    static deserializeBinaryFromReader(message: WLURequest, reader: jspb.BinaryReader): WLURequest;
}

export namespace WLURequest {
    export type AsObject = {
        languageCode: string,
        text: string,
    }
}

export class WLUResponse extends jspb.Message { 
    clearSegmentsList(): void;
    getSegmentsList(): Array<WLUSegment>;
    setSegmentsList(value: Array<WLUSegment>): WLUResponse;
    addSegments(value?: WLUSegment, index?: number): WLUSegment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WLUResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WLUResponse): WLUResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WLUResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WLUResponse;
    static deserializeBinaryFromReader(message: WLUResponse, reader: jspb.BinaryReader): WLUResponse;
}

export namespace WLUResponse {
    export type AsObject = {
        segmentsList: Array<WLUSegment.AsObject>,
    }
}

export class WLUSegment extends jspb.Message { 
    getText(): string;
    setText(value: string): WLUSegment;

    clearTokensList(): void;
    getTokensList(): Array<WLUToken>;
    setTokensList(value: Array<WLUToken>): WLUSegment;
    addTokens(value?: WLUToken, index?: number): WLUToken;

    clearEntitiesList(): void;
    getEntitiesList(): Array<WLUEntity>;
    setEntitiesList(value: Array<WLUEntity>): WLUSegment;
    addEntities(value?: WLUEntity, index?: number): WLUEntity;


    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): WLUIntent | undefined;
    setIntent(value?: WLUIntent): WLUSegment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WLUSegment.AsObject;
    static toObject(includeInstance: boolean, msg: WLUSegment): WLUSegment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WLUSegment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WLUSegment;
    static deserializeBinaryFromReader(message: WLUSegment, reader: jspb.BinaryReader): WLUSegment;
}

export namespace WLUSegment {
    export type AsObject = {
        text: string,
        tokensList: Array<WLUToken.AsObject>,
        entitiesList: Array<WLUEntity.AsObject>,
        intent?: WLUIntent.AsObject,
    }
}

export class WLUToken extends jspb.Message { 
    getWord(): string;
    setWord(value: string): WLUToken;

    getIndex(): number;
    setIndex(value: number): WLUToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WLUToken.AsObject;
    static toObject(includeInstance: boolean, msg: WLUToken): WLUToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WLUToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WLUToken;
    static deserializeBinaryFromReader(message: WLUToken, reader: jspb.BinaryReader): WLUToken;
}

export namespace WLUToken {
    export type AsObject = {
        word: string,
        index: number,
    }
}

export class WLUEntity extends jspb.Message { 
    getEntity(): string;
    setEntity(value: string): WLUEntity;

    getValue(): string;
    setValue(value: string): WLUEntity;

    getStartPosition(): number;
    setStartPosition(value: number): WLUEntity;

    getEndPosition(): number;
    setEndPosition(value: number): WLUEntity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WLUEntity.AsObject;
    static toObject(includeInstance: boolean, msg: WLUEntity): WLUEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WLUEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WLUEntity;
    static deserializeBinaryFromReader(message: WLUEntity, reader: jspb.BinaryReader): WLUEntity;
}

export namespace WLUEntity {
    export type AsObject = {
        entity: string,
        value: string,
        startPosition: number,
        endPosition: number,
    }
}

export class WLUIntent extends jspb.Message { 
    getIntent(): string;
    setIntent(value: string): WLUIntent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WLUIntent.AsObject;
    static toObject(includeInstance: boolean, msg: WLUIntent): WLUIntent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WLUIntent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WLUIntent;
    static deserializeBinaryFromReader(message: WLUIntent, reader: jspb.BinaryReader): WLUIntent;
}

export namespace WLUIntent {
    export type AsObject = {
        intent: string,
    }
}
