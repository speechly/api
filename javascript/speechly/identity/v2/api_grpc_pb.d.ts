// GENERATED CODE -- DO NOT EDIT!

// package: speechly.identity.v2
// file: speechly/identity/v2/api.proto

import * as speechly_identity_v2_api_pb from "../../../speechly/identity/v2/api_pb";
import * as grpc from "grpc";

interface IIdentityService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<speechly_identity_v2_api_pb.LoginRequest, speechly_identity_v2_api_pb.LoginResponse>;
}

export const IdentityService: IIdentityService;

export class IdentityClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: speechly_identity_v2_api_pb.LoginRequest, callback: grpc.requestCallback<speechly_identity_v2_api_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: speechly_identity_v2_api_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<speechly_identity_v2_api_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: speechly_identity_v2_api_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<speechly_identity_v2_api_pb.LoginResponse>): grpc.ClientUnaryCall;
}
