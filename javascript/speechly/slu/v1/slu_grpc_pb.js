// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var speechly_slu_v1_slu_pb = require('../../../speechly/slu/v1/slu_pb.js');

function serialize_speechly_slu_v1_SLURequest(arg) {
  if (!(arg instanceof speechly_slu_v1_slu_pb.SLURequest)) {
    throw new Error('Expected argument of type speechly.slu.v1.SLURequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_slu_v1_SLURequest(buffer_arg) {
  return speechly_slu_v1_slu_pb.SLURequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_slu_v1_SLUResponse(arg) {
  if (!(arg instanceof speechly_slu_v1_slu_pb.SLUResponse)) {
    throw new Error('Expected argument of type speechly.slu.v1.SLUResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_slu_v1_SLUResponse(buffer_arg) {
  return speechly_slu_v1_slu_pb.SLUResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Speechly SLU (Spoken Language Understanding) API (https://speechly.com/docs/api/slu).
//
// To use this service you MUST use an access token from Speechly Identity API (https://speechly.com/docs/api/identity).
// The token MUST be passed in gRPC metadata with "Authorization" key and Bearer $ACCESS_TOKEN" as value, e.g. in Go:
//
// ctx := context.Background()
// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken) 
// stream, err := speechlySLUClient.Stream(ctx)
var SLUService = exports.SLUService = {
  // Performs bidirectional streaming speech recognition: receive results while sending audio.
//
// First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.
//
// This RPC can handle multiple logical audio segments with the use of SLUEvent_START and SLUEvent_STOP messages,
// which are used to indicate the beginning and the end of a segment.
//
// A typical call timeline will look like this:
//
// 1. Client starts the RPC.
// 2. Client sends SLUConfig message with audio configuration.
// 3. Client sends SLUEvent_START.
// 4. Client sends audio and receives responses from the server.
// 5. Client sends SLUEvent_STOP.
// 6. Client sends SLUEvent_START.
// 7. Client sends audio and receives responses from the server.
// 8. Client sends SLUEvent_STOP.
// 9. Client closes the stream and receives responses from the server until EOF is received.
//
// NB: the client does not have to wait until the server acknowledges the start / stop events,
// this is done asynchronously. The client can deduplicate responses based on the audio context ID,
// which will be present in every response message.
stream: {
    path: '/speechly.slu.v1.SLU/Stream',
    requestStream: true,
    responseStream: true,
    requestType: speechly_slu_v1_slu_pb.SLURequest,
    responseType: speechly_slu_v1_slu_pb.SLUResponse,
    requestSerialize: serialize_speechly_slu_v1_SLURequest,
    requestDeserialize: deserialize_speechly_slu_v1_SLURequest,
    responseSerialize: serialize_speechly_slu_v1_SLUResponse,
    responseDeserialize: deserialize_speechly_slu_v1_SLUResponse,
  },
};

exports.SLUClient = grpc.makeGenericClientConstructor(SLUService);
