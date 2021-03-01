// package: speechly.slu.v1
// file: speechly/slu/v1/slu.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SLURequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): SLUConfig | undefined;
    setConfig(value?: SLUConfig): SLURequest;


    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): SLUEvent | undefined;
    setEvent(value?: SLUEvent): SLURequest;


    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): Uint8Array | string;
    getAudio_asU8(): Uint8Array;
    getAudio_asB64(): string;
    setAudio(value: Uint8Array | string): SLURequest;


    getStreamingRequestCase(): SLURequest.StreamingRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLURequest.AsObject;
    static toObject(includeInstance: boolean, msg: SLURequest): SLURequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLURequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLURequest;
    static deserializeBinaryFromReader(message: SLURequest, reader: jspb.BinaryReader): SLURequest;
}

export namespace SLURequest {
    export type AsObject = {
        config?: SLUConfig.AsObject,
        event?: SLUEvent.AsObject,
        audio: Uint8Array | string,
    }

    export enum StreamingRequestCase {
        STREAMING_REQUEST_NOT_SET = 0,
    
    CONFIG = 1,

    EVENT = 2,

    AUDIO = 3,

    }

}

export class SLUConfig extends jspb.Message { 
    getEncoding(): SLUConfig.Encoding;
    setEncoding(value: SLUConfig.Encoding): SLUConfig;

    getChannels(): number;
    setChannels(value: number): SLUConfig;

    getSampleRateHertz(): number;
    setSampleRateHertz(value: number): SLUConfig;

    getLanguageCode(): string;
    setLanguageCode(value: string): SLUConfig;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SLUConfig): SLUConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUConfig;
    static deserializeBinaryFromReader(message: SLUConfig, reader: jspb.BinaryReader): SLUConfig;
}

export namespace SLUConfig {
    export type AsObject = {
        encoding: SLUConfig.Encoding,
        channels: number,
        sampleRateHertz: number,
        languageCode: string,
    }

    export enum Encoding {
    LINEAR16 = 0,
    }

}

export class SLUEvent extends jspb.Message { 
    getEvent(): SLUEvent.Event;
    setEvent(value: SLUEvent.Event): SLUEvent;

    getAppId(): string;
    setAppId(value: string): SLUEvent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SLUEvent): SLUEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUEvent;
    static deserializeBinaryFromReader(message: SLUEvent, reader: jspb.BinaryReader): SLUEvent;
}

export namespace SLUEvent {
    export type AsObject = {
        event: SLUEvent.Event,
        appId: string,
    }

    export enum Event {
    START = 0,
    STOP = 1,
    }

}

export class SLUResponse extends jspb.Message { 
    getAudioContext(): string;
    setAudioContext(value: string): SLUResponse;

    getSegmentId(): number;
    setSegmentId(value: number): SLUResponse;


    hasTranscript(): boolean;
    clearTranscript(): void;
    getTranscript(): SLUTranscript | undefined;
    setTranscript(value?: SLUTranscript): SLUResponse;


    hasEntity(): boolean;
    clearEntity(): void;
    getEntity(): SLUEntity | undefined;
    setEntity(value?: SLUEntity): SLUResponse;


    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): SLUIntent | undefined;
    setIntent(value?: SLUIntent): SLUResponse;


    hasSegmentEnd(): boolean;
    clearSegmentEnd(): void;
    getSegmentEnd(): SLUSegmentEnd | undefined;
    setSegmentEnd(value?: SLUSegmentEnd): SLUResponse;


    hasTentativeTranscript(): boolean;
    clearTentativeTranscript(): void;
    getTentativeTranscript(): SLUTentativeTranscript | undefined;
    setTentativeTranscript(value?: SLUTentativeTranscript): SLUResponse;


    hasTentativeEntities(): boolean;
    clearTentativeEntities(): void;
    getTentativeEntities(): SLUTentativeEntities | undefined;
    setTentativeEntities(value?: SLUTentativeEntities): SLUResponse;


    hasTentativeIntent(): boolean;
    clearTentativeIntent(): void;
    getTentativeIntent(): SLUIntent | undefined;
    setTentativeIntent(value?: SLUIntent): SLUResponse;


    hasStarted(): boolean;
    clearStarted(): void;
    getStarted(): SLUStarted | undefined;
    setStarted(value?: SLUStarted): SLUResponse;


    hasFinished(): boolean;
    clearFinished(): void;
    getFinished(): SLUFinished | undefined;
    setFinished(value?: SLUFinished): SLUResponse;


    getStreamingResponseCase(): SLUResponse.StreamingResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SLUResponse): SLUResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUResponse;
    static deserializeBinaryFromReader(message: SLUResponse, reader: jspb.BinaryReader): SLUResponse;
}

export namespace SLUResponse {
    export type AsObject = {
        audioContext: string,
        segmentId: number,
        transcript?: SLUTranscript.AsObject,
        entity?: SLUEntity.AsObject,
        intent?: SLUIntent.AsObject,
        segmentEnd?: SLUSegmentEnd.AsObject,
        tentativeTranscript?: SLUTentativeTranscript.AsObject,
        tentativeEntities?: SLUTentativeEntities.AsObject,
        tentativeIntent?: SLUIntent.AsObject,
        started?: SLUStarted.AsObject,
        finished?: SLUFinished.AsObject,
    }

    export enum StreamingResponseCase {
        STREAMING_RESPONSE_NOT_SET = 0,
    
    TRANSCRIPT = 3,

    ENTITY = 4,

    INTENT = 5,

    SEGMENT_END = 6,

    TENTATIVE_TRANSCRIPT = 7,

    TENTATIVE_ENTITIES = 8,

    TENTATIVE_INTENT = 9,

    STARTED = 10,

    FINISHED = 11,

    }

}

export class SLUTranscript extends jspb.Message { 
    getWord(): string;
    setWord(value: string): SLUTranscript;

    getIndex(): number;
    setIndex(value: number): SLUTranscript;

    getStartTime(): number;
    setStartTime(value: number): SLUTranscript;

    getEndTime(): number;
    setEndTime(value: number): SLUTranscript;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUTranscript.AsObject;
    static toObject(includeInstance: boolean, msg: SLUTranscript): SLUTranscript.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUTranscript, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUTranscript;
    static deserializeBinaryFromReader(message: SLUTranscript, reader: jspb.BinaryReader): SLUTranscript;
}

export namespace SLUTranscript {
    export type AsObject = {
        word: string,
        index: number,
        startTime: number,
        endTime: number,
    }
}

export class SLUEntity extends jspb.Message { 
    getEntity(): string;
    setEntity(value: string): SLUEntity;

    getValue(): string;
    setValue(value: string): SLUEntity;

    getStartPosition(): number;
    setStartPosition(value: number): SLUEntity;

    getEndPosition(): number;
    setEndPosition(value: number): SLUEntity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUEntity.AsObject;
    static toObject(includeInstance: boolean, msg: SLUEntity): SLUEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUEntity;
    static deserializeBinaryFromReader(message: SLUEntity, reader: jspb.BinaryReader): SLUEntity;
}

export namespace SLUEntity {
    export type AsObject = {
        entity: string,
        value: string,
        startPosition: number,
        endPosition: number,
    }
}

export class SLUIntent extends jspb.Message { 
    getIntent(): string;
    setIntent(value: string): SLUIntent;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUIntent.AsObject;
    static toObject(includeInstance: boolean, msg: SLUIntent): SLUIntent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUIntent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUIntent;
    static deserializeBinaryFromReader(message: SLUIntent, reader: jspb.BinaryReader): SLUIntent;
}

export namespace SLUIntent {
    export type AsObject = {
        intent: string,
    }
}

export class SLUSegmentEnd extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUSegmentEnd.AsObject;
    static toObject(includeInstance: boolean, msg: SLUSegmentEnd): SLUSegmentEnd.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUSegmentEnd, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUSegmentEnd;
    static deserializeBinaryFromReader(message: SLUSegmentEnd, reader: jspb.BinaryReader): SLUSegmentEnd;
}

export namespace SLUSegmentEnd {
    export type AsObject = {
    }
}

export class SLUTentativeTranscript extends jspb.Message { 
    getTentativeTranscript(): string;
    setTentativeTranscript(value: string): SLUTentativeTranscript;

    clearTentativeWordsList(): void;
    getTentativeWordsList(): Array<SLUTranscript>;
    setTentativeWordsList(value: Array<SLUTranscript>): SLUTentativeTranscript;
    addTentativeWords(value?: SLUTranscript, index?: number): SLUTranscript;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUTentativeTranscript.AsObject;
    static toObject(includeInstance: boolean, msg: SLUTentativeTranscript): SLUTentativeTranscript.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUTentativeTranscript, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUTentativeTranscript;
    static deserializeBinaryFromReader(message: SLUTentativeTranscript, reader: jspb.BinaryReader): SLUTentativeTranscript;
}

export namespace SLUTentativeTranscript {
    export type AsObject = {
        tentativeTranscript: string,
        tentativeWordsList: Array<SLUTranscript.AsObject>,
    }
}

export class SLUTentativeEntities extends jspb.Message { 
    clearTentativeEntitiesList(): void;
    getTentativeEntitiesList(): Array<SLUEntity>;
    setTentativeEntitiesList(value: Array<SLUEntity>): SLUTentativeEntities;
    addTentativeEntities(value?: SLUEntity, index?: number): SLUEntity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUTentativeEntities.AsObject;
    static toObject(includeInstance: boolean, msg: SLUTentativeEntities): SLUTentativeEntities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUTentativeEntities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUTentativeEntities;
    static deserializeBinaryFromReader(message: SLUTentativeEntities, reader: jspb.BinaryReader): SLUTentativeEntities;
}

export namespace SLUTentativeEntities {
    export type AsObject = {
        tentativeEntitiesList: Array<SLUEntity.AsObject>,
    }
}

export class SLUStarted extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUStarted.AsObject;
    static toObject(includeInstance: boolean, msg: SLUStarted): SLUStarted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUStarted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUStarted;
    static deserializeBinaryFromReader(message: SLUStarted, reader: jspb.BinaryReader): SLUStarted;
}

export namespace SLUStarted {
    export type AsObject = {
    }
}

export class SLUFinished extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): SLUError | undefined;
    setError(value?: SLUError): SLUFinished;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUFinished.AsObject;
    static toObject(includeInstance: boolean, msg: SLUFinished): SLUFinished.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUFinished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUFinished;
    static deserializeBinaryFromReader(message: SLUFinished, reader: jspb.BinaryReader): SLUFinished;
}

export namespace SLUFinished {
    export type AsObject = {
        error?: SLUError.AsObject,
    }
}

export class SLUError extends jspb.Message { 
    getCode(): string;
    setCode(value: string): SLUError;

    getMessage(): string;
    setMessage(value: string): SLUError;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SLUError.AsObject;
    static toObject(includeInstance: boolean, msg: SLUError): SLUError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SLUError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SLUError;
    static deserializeBinaryFromReader(message: SLUError, reader: jspb.BinaryReader): SLUError;
}

export namespace SLUError {
    export type AsObject = {
        code: string,
        message: string,
    }
}
