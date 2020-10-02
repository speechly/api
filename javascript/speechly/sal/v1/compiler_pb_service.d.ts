// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

import * as speechly_sal_v1_compiler_pb from "../../../speechly/sal/v1/compiler_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CompilerCompile = {
  readonly methodName: string;
  readonly service: typeof Compiler;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof speechly_sal_v1_compiler_pb.AppSource;
  readonly responseType: typeof speechly_sal_v1_compiler_pb.CompileResult;
};

type CompilerValidate = {
  readonly methodName: string;
  readonly service: typeof Compiler;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof speechly_sal_v1_compiler_pb.AppSource;
  readonly responseType: typeof speechly_sal_v1_compiler_pb.ValidateResult;
};

export class Compiler {
  static readonly serviceName: string;
  static readonly Compile: CompilerCompile;
  static readonly Validate: CompilerValidate;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CompilerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  compile(metadata?: grpc.Metadata): RequestStream<speechly_sal_v1_compiler_pb.AppSource>;
  validate(metadata?: grpc.Metadata): RequestStream<speechly_sal_v1_compiler_pb.AppSource>;
}

