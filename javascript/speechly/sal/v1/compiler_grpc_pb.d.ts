// GENERATED CODE -- DO NOT EDIT!

// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

import * as speechly_sal_v1_compiler_pb from "../../../speechly/sal/v1/compiler_pb";
import * as grpc from "grpc";

interface ICompilerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  compile: grpc.MethodDefinition<speechly_sal_v1_compiler_pb.CompileRequest, speechly_sal_v1_compiler_pb.CompileResult>;
  validate: grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ValidateResult>;
  extractSALSources: grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
}

export const CompilerService: ICompilerService;

export class CompilerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  compile(callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.CompileResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
  compile(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.CompileResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
  compile(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.CompileResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
  validate(callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ValidateResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  validate(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ValidateResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  validate(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_sal_v1_compiler_pb.ValidateResult>): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
  extractSALSources(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
  extractSALSources(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
}
