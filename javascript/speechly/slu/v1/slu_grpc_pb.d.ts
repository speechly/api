// GENERATED CODE -- DO NOT EDIT!

// package: speechly.slu.v1
// file: speechly/slu/v1/slu.proto

import * as speechly_slu_v1_slu_pb from "../../../speechly/slu/v1/slu_pb";
import * as grpc from "grpc";

interface ISLUService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  stream: grpc.MethodDefinition<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
}

export const SLUService: ISLUService;

export class SLUClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  stream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
  stream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
}
