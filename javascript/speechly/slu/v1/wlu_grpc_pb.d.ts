// GENERATED CODE -- DO NOT EDIT!

// package: speechly.slu.v1
// file: speechly/slu/v1/wlu.proto

import * as speechly_slu_v1_wlu_pb from "../../../speechly/slu/v1/wlu_pb";
import * as grpc from "grpc";

interface IWLUService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  text: grpc.MethodDefinition<speechly_slu_v1_wlu_pb.WLURequest, speechly_slu_v1_wlu_pb.WLUResponse>;
}

export const WLUService: IWLUService;

export class WLUClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  text(argument: speechly_slu_v1_wlu_pb.WLURequest, callback: grpc.requestCallback<speechly_slu_v1_wlu_pb.WLUResponse>): grpc.ClientUnaryCall;
  text(argument: speechly_slu_v1_wlu_pb.WLURequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_slu_v1_wlu_pb.WLUResponse>): grpc.ClientUnaryCall;
  text(argument: speechly_slu_v1_wlu_pb.WLURequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_slu_v1_wlu_pb.WLUResponse>): grpc.ClientUnaryCall;
}
