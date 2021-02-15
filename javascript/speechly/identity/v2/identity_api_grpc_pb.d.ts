// package: speechly.identity.v2
// file: speechly/identity/v2/identity_api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as speechly_identity_v2_identity_api_pb from "../../../speechly/identity/v2/identity_api_pb";
import * as speechly_identity_v2_identity_pb from "../../../speechly/identity/v2/identity_pb";

interface IIdentityAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IIdentityAPIService_ILogin;
}

interface IIdentityAPIService_ILogin extends grpc.MethodDefinition<speechly_identity_v2_identity_api_pb.LoginRequest, speechly_identity_v2_identity_api_pb.LoginResponse> {
    path: "/speechly.identity.v2.IdentityAPI/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_identity_v2_identity_api_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<speechly_identity_v2_identity_api_pb.LoginRequest>;
    responseSerialize: grpc.serialize<speechly_identity_v2_identity_api_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<speechly_identity_v2_identity_api_pb.LoginResponse>;
}

export const IdentityAPIService: IIdentityAPIService;

export interface IIdentityAPIServer {
    login: grpc.handleUnaryCall<speechly_identity_v2_identity_api_pb.LoginRequest, speechly_identity_v2_identity_api_pb.LoginResponse>;
}

export interface IIdentityAPIClient {
    login(request: speechly_identity_v2_identity_api_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: speechly_identity_v2_identity_api_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: speechly_identity_v2_identity_api_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_identity_v2_identity_api_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: speechly_identity_v2_identity_api_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_identity_v2_identity_api_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class IdentityAPIClient extends grpc.Client implements IIdentityAPIClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: speechly_identity_v2_identity_api_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: speechly_identity_v2_identity_api_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: speechly_identity_v2_identity_api_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_identity_v2_identity_api_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: speechly_identity_v2_identity_api_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_identity_v2_identity_api_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
