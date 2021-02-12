// package: speechly.identity.v1
// file: speechly/identity/v1/identity.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as speechly_identity_v1_identity_pb from "../../../speechly/identity/v1/identity_pb";

interface IIdentityService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IIdentityService_ILogin;
}

interface IIdentityService_ILogin extends grpc.MethodDefinition<speechly_identity_v1_identity_pb.LoginRequest, speechly_identity_v1_identity_pb.LoginResponse> {
    path: "/speechly.identity.v1.Identity/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<speechly_identity_v1_identity_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<speechly_identity_v1_identity_pb.LoginRequest>;
    responseSerialize: grpc.serialize<speechly_identity_v1_identity_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<speechly_identity_v1_identity_pb.LoginResponse>;
}

export const IdentityService: IIdentityService;

export interface IIdentityServer {
    login: grpc.handleUnaryCall<speechly_identity_v1_identity_pb.LoginRequest, speechly_identity_v1_identity_pb.LoginResponse>;
}

export interface IIdentityClient {
    login(request: speechly_identity_v1_identity_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: speechly_identity_v1_identity_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: speechly_identity_v1_identity_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_identity_v1_identity_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: speechly_identity_v1_identity_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_identity_v1_identity_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class IdentityClient extends grpc.Client implements IIdentityClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: speechly_identity_v1_identity_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: speechly_identity_v1_identity_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: speechly_identity_v1_identity_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: speechly_identity_v1_identity_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: speechly_identity_v1_identity_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: speechly_identity_v1_identity_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
