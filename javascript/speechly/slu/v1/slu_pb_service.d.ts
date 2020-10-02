// package: speechly.slu.v1
// file: speechly/slu/v1/slu.proto

import * as speechly_slu_v1_slu_pb from "../../../speechly/slu/v1/slu_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SLUStream = {
  readonly methodName: string;
  readonly service: typeof SLU;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof speechly_slu_v1_slu_pb.SLURequest;
  readonly responseType: typeof speechly_slu_v1_slu_pb.SLUResponse;
};

export class SLU {
  static readonly serviceName: string;
  static readonly Stream: SLUStream;
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

export class SLUClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  stream(metadata?: grpc.Metadata): BidirectionalStream<speechly_slu_v1_slu_pb.SLURequest, speechly_slu_v1_slu_pb.SLUResponse>;
}

