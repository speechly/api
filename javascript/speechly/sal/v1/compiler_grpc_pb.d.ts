// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as speechly_sal_v1_compiler_pb from "../../../speechly/sal/v1/compiler_pb";

interface ICompilerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    compile: ICompilerService_ICompile;
    validate: ICompilerService_IValidate;
    extractSALSources: ICompilerService_IExtractSALSources;
}

interface ICompilerService_ICompile extends grpc.MethodDefinition<speechly_sal_v1_compiler_pb.CompileRequest, speechly_sal_v1_compiler_pb.CompileResult> {
    path: "/speechly.sal.v1.Compiler/Compile";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_sal_v1_compiler_pb.CompileRequest>;
    requestDeserialize: grpc.deserialize<speechly_sal_v1_compiler_pb.CompileRequest>;
    responseSerialize: grpc.serialize<speechly_sal_v1_compiler_pb.CompileResult>;
    responseDeserialize: grpc.deserialize<speechly_sal_v1_compiler_pb.CompileResult>;
}
interface ICompilerService_IValidate extends grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ValidateResult> {
    path: "/speechly.sal.v1.Compiler/Validate";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_sal_v1_compiler_pb.AppSource>;
    requestDeserialize: grpc.deserialize<speechly_sal_v1_compiler_pb.AppSource>;
    responseSerialize: grpc.serialize<speechly_sal_v1_compiler_pb.ValidateResult>;
    responseDeserialize: grpc.deserialize<speechly_sal_v1_compiler_pb.ValidateResult>;
}
interface ICompilerService_IExtractSALSources extends grpc.MethodDefinition<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult> {
    path: "/speechly.sal.v1.Compiler/ExtractSALSources";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<speechly_sal_v1_compiler_pb.AppSource>;
    requestDeserialize: grpc.deserialize<speechly_sal_v1_compiler_pb.AppSource>;
    responseSerialize: grpc.serialize<speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
    responseDeserialize: grpc.deserialize<speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
}

export const CompilerService: ICompilerService;

export interface ICompilerServer {
    compile: grpc.handleClientStreamingCall<speechly_sal_v1_compiler_pb.CompileRequest, speechly_sal_v1_compiler_pb.CompileResult>;
    validate: grpc.handleClientStreamingCall<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ValidateResult>;
    extractSALSources: grpc.handleBidiStreamingCall<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
}

export interface ICompilerClient {
    compile(callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    compile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    compile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    compile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    validate(callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    validate(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    validate(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    validate(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    extractSALSources(): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
    extractSALSources(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
    extractSALSources(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
}

export class CompilerClient extends grpc.Client implements ICompilerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public compile(callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    public compile(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    public compile(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    public compile(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.CompileResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.CompileRequest>;
    public validate(callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    public validate(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    public validate(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    public validate(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_sal_v1_compiler_pb.ValidateResult) => void): grpc.ClientWritableStream<speechly_sal_v1_compiler_pb.AppSource>;
    public extractSALSources(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
    public extractSALSources(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_sal_v1_compiler_pb.AppSource, speechly_sal_v1_compiler_pb.ExtractSALSourcesResult>;
}
