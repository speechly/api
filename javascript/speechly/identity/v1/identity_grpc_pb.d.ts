// GENERATED CODE -- DO NOT EDIT!

// package: speechly.identity.v1
// file: speechly/identity/v1/identity.proto

import * as speechly_identity_v1_identity_pb from "../../../speechly/identity/v1/identity_pb";
import * as grpc from "grpc";

interface IIdentityService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<speechly_identity_v1_identity_pb.LoginRequest, speechly_identity_v1_identity_pb.LoginResponse>;
}

export const IdentityService: IIdentityService;

export class IdentityClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: speechly_identity_v1_identity_pb.LoginRequest, callback: grpc.requestCallback<speechly_identity_v1_identity_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: speechly_identity_v1_identity_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_identity_v1_identity_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: speechly_identity_v1_identity_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_identity_v1_identity_pb.LoginResponse>): grpc.ClientUnaryCall;
}
