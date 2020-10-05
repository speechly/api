// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var speechly_identity_v1_identity_pb = require('../../../speechly/identity/v1/identity_pb.js');

function serialize_speechly_identity_v1_LoginRequest(arg) {
  if (!(arg instanceof speechly_identity_v1_identity_pb.LoginRequest)) {
    throw new Error('Expected argument of type speechly.identity.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_identity_v1_LoginRequest(buffer_arg) {
  return speechly_identity_v1_identity_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_identity_v1_LoginResponse(arg) {
  if (!(arg instanceof speechly_identity_v1_identity_pb.LoginResponse)) {
    throw new Error('Expected argument of type speechly.identity.v1.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_identity_v1_LoginResponse(buffer_arg) {
  return speechly_identity_v1_identity_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Speechly Identity API (https://speechly.com/docs/api/identity).
//
// This service is used for generating access token for Speechly SLU API.
var IdentityService = exports.IdentityService = {
  // Performs a login of specific Speechly application.
// Returns an access token, that can be used to access Speechly SLU API.
login: {
    path: '/speechly.identity.v1.Identity/Login',
    requestStream: false,
    responseStream: false,
    requestType: speechly_identity_v1_identity_pb.LoginRequest,
    responseType: speechly_identity_v1_identity_pb.LoginResponse,
    requestSerialize: serialize_speechly_identity_v1_LoginRequest,
    requestDeserialize: deserialize_speechly_identity_v1_LoginRequest,
    responseSerialize: serialize_speechly_identity_v1_LoginResponse,
    responseDeserialize: deserialize_speechly_identity_v1_LoginResponse,
  },
};

exports.IdentityClient = grpc.makeGenericClientConstructor(IdentityService);
