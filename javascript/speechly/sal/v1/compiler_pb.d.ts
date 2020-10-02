// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

import * as jspb from "google-protobuf";

export class AppSource extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getDataChunk(): Uint8Array | string;
  getDataChunk_asU8(): Uint8Array;
  getDataChunk_asB64(): string;
  setDataChunk(value: Uint8Array | string): void;

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
  }
}

export class CompileResult extends jspb.Message {
  getResult(): CompileResult.ResultMap[keyof CompileResult.ResultMap];
  setResult(value: CompileResult.ResultMap[keyof CompileResult.ResultMap]): void;

  clearTemplatesList(): void;
  getTemplatesList(): Array<string>;
  setTemplatesList(value: Array<string>): void;
  addTemplates(value: string, index?: number): string;

  clearMessagesList(): void;
  getMessagesList(): Array<LineReference>;
  setMessagesList(value: Array<LineReference>): void;
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
    result: CompileResult.ResultMap[keyof CompileResult.ResultMap],
    templatesList: Array<string>,
    messagesList: Array<LineReference.AsObject>,
  }

  export interface ResultMap {
    COMPILE_SUCCESS: 0;
    COMPILE_FAILURE: 1;
    COMPILE_WARNING: 2;
  }

  export const Result: ResultMap;
}

export class ValidateResult extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<LineReference>;
  setMessagesList(value: Array<LineReference>): void;
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
  setLine(value: number): void;

  getColumn(): number;
  setColumn(value: number): void;

  getFile(): string;
  setFile(value: string): void;

  getLevel(): LineReference.LevelMap[keyof LineReference.LevelMap];
  setLevel(value: LineReference.LevelMap[keyof LineReference.LevelMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

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
    level: LineReference.LevelMap[keyof LineReference.LevelMap],
    message: string,
  }

  export interface LevelMap {
    LEVEL_NOTE: 0;
    LEVEL_WARNING: 1;
    LEVEL_ERROR: 2;
  }

  export const Level: LevelMap;
}

