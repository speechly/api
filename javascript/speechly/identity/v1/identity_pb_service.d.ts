// package: speechly.identity.v1
// file: speechly/identity/v1/identity.proto

import * as speechly_identity_v1_identity_pb from "../../../speechly/identity/v1/identity_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IdentityLogin = {
  readonly methodName: string;
  readonly service: typeof Identity;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_identity_v1_identity_pb.LoginRequest;
  readonly responseType: typeof speechly_identity_v1_identity_pb.LoginResponse;
};

export class Identity {
  static readonly serviceName: string;
  static readonly Login: IdentityLogin;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class IdentityClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: speechly_identity_v1_identity_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_identity_v1_identity_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: speechly_identity_v1_identity_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: speechly_identity_v1_identity_pb.LoginResponse|null) => void
  ): UnaryResponse;
}

