// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var speechly_slu_v1_wlu_pb = require('../../../speechly/slu/v1/wlu_pb.js');

function serialize_speechly_slu_v1_WLURequest(arg) {
  if (!(arg instanceof speechly_slu_v1_wlu_pb.WLURequest)) {
    throw new Error('Expected argument of type speechly.slu.v1.WLURequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_slu_v1_WLURequest(buffer_arg) {
  return speechly_slu_v1_wlu_pb.WLURequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_slu_v1_WLUResponse(arg) {
  if (!(arg instanceof speechly_slu_v1_wlu_pb.WLUResponse)) {
    throw new Error('Expected argument of type speechly.slu.v1.WLUResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_slu_v1_WLUResponse(buffer_arg) {
  return speechly_slu_v1_wlu_pb.WLUResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Speechly WLU (Written Language Understanding) API (https://speechly.com/docs/api/wlu).
//
// To use this service you MUST use an access token from Speechly Identity API (https://speechly.com/docs/api/identity).
// The token MUST be passed in gRPC metadata with "Authorization" key and Bearer $ACCESS_TOKEN" as value, e.g. in Go:
//
// ctx := context.Background()
// ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken) 
// res, err := speechlyWLUClient.Text(ctx, req)
var WLUService = exports.WLUService = {
  // Performs recognition of a text with specified language.
text: {
    path: '/speechly.slu.v1.WLU/Text',
    requestStream: false,
    responseStream: false,
    requestType: speechly_slu_v1_wlu_pb.WLURequest,
    responseType: speechly_slu_v1_wlu_pb.WLUResponse,
    requestSerialize: serialize_speechly_slu_v1_WLURequest,
    requestDeserialize: deserialize_speechly_slu_v1_WLURequest,
    responseSerialize: serialize_speechly_slu_v1_WLUResponse,
    responseDeserialize: deserialize_speechly_slu_v1_WLUResponse,
  },
};

exports.WLUClient = grpc.makeGenericClientConstructor(WLUService);
