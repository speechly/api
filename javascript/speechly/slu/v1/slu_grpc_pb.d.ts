// package: speechly.slu.v1
// file: speechly/slu/v1/slu.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as speechly_slu_v1_slu_pb from "../../../speechly/slu/v1/slu_pb";

interface ISLUService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    stream: ISLUService_IStream;
}

interface ISLUService_IStream extends grpc.MethodDefinition<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse> {
    path: "/speechly.slu.v1.SLU/Stream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<speechly_slu_v1_slu_pb.SLURequest>;
    requestDeserialize: grpc.deserialize<speechly_slu_v1_slu_pb.SLURequest>;
    responseSerialize: grpc.serialize<speechly_slu_v1_slu_pb.SLUResponse>;
    responseDeserialize: grpc.deserialize<speechly_slu_v1_slu_pb.SLUResponse>;
}

export const SLUService: ISLUService;

export interface ISLUServer {
    stream: grpc.handleBidiStreamingCall<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
}

export interface ISLUClient {
    stream(): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
    stream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
    stream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
}

export class SLUClient extends grpc.Client implements ISLUClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public stream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
    public stream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
}
