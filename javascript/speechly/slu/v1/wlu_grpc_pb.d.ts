// package: speechly.slu.v1
// file: speechly/slu/v1/wlu.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as speechly_slu_v1_wlu_pb from "../../../speechly/slu/v1/wlu_pb";

interface IWLUService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    text: IWLUService_IText;
}

interface IWLUService_IText extends grpc.MethodDefinition<speechly_slu_v1_wlu_pb.WLURequest, speechly_slu_v1_wlu_pb.WLUResponse> {
    path: "/speechly.slu.v1.WLU/Text";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_slu_v1_wlu_pb.WLURequest>;
    requestDeserialize: grpc.deserialize<speechly_slu_v1_wlu_pb.WLURequest>;
    responseSerialize: grpc.serialize<speechly_slu_v1_wlu_pb.WLUResponse>;
    responseDeserialize: grpc.deserialize<speechly_slu_v1_wlu_pb.WLUResponse>;
}

export const WLUService: IWLUService;

export interface IWLUServer {
    text: grpc.handleUnaryCall<speechly_slu_v1_wlu_pb.WLURequest, speechly_slu_v1_wlu_pb.WLUResponse>;
}

export interface IWLUClient {
    text(request: speechly_slu_v1_wlu_pb.WLURequest, callback: (error: grpc.ServiceError | null, response: speechly_slu_v1_wlu_pb.WLUResponse) => void): grpc.ClientUnaryCall;
    text(request: speechly_slu_v1_wlu_pb.WLURequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_slu_v1_wlu_pb.WLUResponse) => void): grpc.ClientUnaryCall;
    text(request: speechly_slu_v1_wlu_pb.WLURequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_slu_v1_wlu_pb.WLUResponse) => void): grpc.ClientUnaryCall;
}

export class WLUClient extends grpc.Client implements IWLUClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public text(request: speechly_slu_v1_wlu_pb.WLURequest, callback: (error: grpc.ServiceError | null, response: speechly_slu_v1_wlu_pb.WLUResponse) => void): grpc.ClientUnaryCall;
    public text(request: speechly_slu_v1_wlu_pb.WLURequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_slu_v1_wlu_pb.WLUResponse) => void): grpc.ClientUnaryCall;
    public text(request: speechly_slu_v1_wlu_pb.WLURequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_slu_v1_wlu_pb.WLUResponse) => void): grpc.ClientUnaryCall;
}
