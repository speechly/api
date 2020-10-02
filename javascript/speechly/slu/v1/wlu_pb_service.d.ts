// package: speechly.slu.v1
// file: speechly/slu/v1/wlu.proto

import * as speechly_slu_v1_wlu_pb from "../../../speechly/slu/v1/wlu_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WLUText = {
  readonly methodName: string;
  readonly service: typeof WLU;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof speechly_slu_v1_wlu_pb.WLURequest;
  readonly responseType: typeof speechly_slu_v1_wlu_pb.WLUResponse;
};

export class WLU {
  static readonly serviceName: string;
  static readonly Text: WLUText;
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

export class WLUClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  text(
    requestMessage: speechly_slu_v1_wlu_pb.WLURequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: speechly_slu_v1_wlu_pb.WLUResponse|null) => void
  ): UnaryResponse;
  text(
    requestMessage: speechly_slu_v1_wlu_pb.WLURequest,
    callback: (error: ServiceError|null, responseMessage: speechly_slu_v1_wlu_pb.WLUResponse|null) => void
  ): UnaryResponse;
}

