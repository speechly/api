// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var speechly_sal_v1_compiler_pb = require('../../../speechly/sal/v1/compiler_pb.js');

function serialize_speechly_sal_v1_AppSource(arg) {
  if (!(arg instanceof speechly_sal_v1_compiler_pb.AppSource)) {
    throw new Error('Expected argument of type speechly.sal.v1.AppSource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_sal_v1_AppSource(buffer_arg) {
  return speechly_sal_v1_compiler_pb.AppSource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_sal_v1_CompileRequest(arg) {
  if (!(arg instanceof speechly_sal_v1_compiler_pb.CompileRequest)) {
    throw new Error('Expected argument of type speechly.sal.v1.CompileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_sal_v1_CompileRequest(buffer_arg) {
  return speechly_sal_v1_compiler_pb.CompileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_sal_v1_CompileResult(arg) {
  if (!(arg instanceof speechly_sal_v1_compiler_pb.CompileResult)) {
    throw new Error('Expected argument of type speechly.sal.v1.CompileResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_sal_v1_CompileResult(buffer_arg) {
  return speechly_sal_v1_compiler_pb.CompileResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_sal_v1_ExtractSALSourcesResult(arg) {
  if (!(arg instanceof speechly_sal_v1_compiler_pb.ExtractSALSourcesResult)) {
    throw new Error('Expected argument of type speechly.sal.v1.ExtractSALSourcesResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_sal_v1_ExtractSALSourcesResult(buffer_arg) {
  return speechly_sal_v1_compiler_pb.ExtractSALSourcesResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_sal_v1_ValidateResult(arg) {
  if (!(arg instanceof speechly_sal_v1_compiler_pb.ValidateResult)) {
    throw new Error('Expected argument of type speechly.sal.v1.ValidateResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_sal_v1_ValidateResult(buffer_arg) {
  return speechly_sal_v1_compiler_pb.ValidateResult.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Speechly SAL API (https://speechly.com/docs/api/sal).
//
// This service is used for validating and compiling Speechly Annotation Language source files.
//
// The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).
//
// The token acts as a proxy for the user who has generated it,
// i.e. all operations are performed with that user as a subject.
var CompilerService = exports.CompilerService = {
  // Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings.
compile: {
    path: '/speechly.sal.v1.Compiler/Compile',
    requestStream: true,
    responseStream: false,
    requestType: speechly_sal_v1_compiler_pb.CompileRequest,
    responseType: speechly_sal_v1_compiler_pb.CompileResult,
    requestSerialize: serialize_speechly_sal_v1_CompileRequest,
    requestDeserialize: deserialize_speechly_sal_v1_CompileRequest,
    responseSerialize: serialize_speechly_sal_v1_CompileResult,
    responseDeserialize: deserialize_speechly_sal_v1_CompileResult,
  },
  // Validates the SAL source and returns compilation notices / warnings and errors, if any.
validate: {
    path: '/speechly.sal.v1.Compiler/Validate',
    requestStream: true,
    responseStream: false,
    requestType: speechly_sal_v1_compiler_pb.AppSource,
    responseType: speechly_sal_v1_compiler_pb.ValidateResult,
    requestSerialize: serialize_speechly_sal_v1_AppSource,
    requestDeserialize: deserialize_speechly_sal_v1_AppSource,
    responseSerialize: serialize_speechly_sal_v1_ValidateResult,
    responseDeserialize: deserialize_speechly_sal_v1_ValidateResult,
  },
  // Extracts raw, not compiled SAL templates from the SAL source.
extractSALSources: {
    path: '/speechly.sal.v1.Compiler/ExtractSALSources',
    requestStream: true,
    responseStream: true,
    requestType: speechly_sal_v1_compiler_pb.AppSource,
    responseType: speechly_sal_v1_compiler_pb.ExtractSALSourcesResult,
    requestSerialize: serialize_speechly_sal_v1_AppSource,
    requestDeserialize: deserialize_speechly_sal_v1_AppSource,
    responseSerialize: serialize_speechly_sal_v1_ExtractSALSourcesResult,
    responseDeserialize: deserialize_speechly_sal_v1_ExtractSALSourcesResult,
  },
};

exports.CompilerClient = grpc.makeGenericClientConstructor(CompilerService);
