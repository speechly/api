// GENERATED CODE -- DO NOT EDIT!

// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

import * as speechly_sal_v1_compiler_pb from "../../../speechly/sal/v1/compiler_pb";
import * as grpc from "grpc";

interface ICompilerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  compile: grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.CompileResult>;
  validate: grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ValidateResult>;
  extractSAL: grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALResult>;
}

export const CompilerService: ICompilerService;

export class CompilerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  compile(callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.CompileResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  compile(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.CompileResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  compile(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.CompileResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  validate(callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ValidateResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  validate(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ValidateResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  validate(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ValidateResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  extractSAL(callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ExtractSALResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  extractSAL(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ExtractSALResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  extractSAL(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ExtractSALResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
}
