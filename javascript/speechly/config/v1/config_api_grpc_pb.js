// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var speechly_config_v1_config_api_pb = require('../../../speechly/config/v1/config_api_pb.js');

function serialize_speechly_config_v1_CreateAppRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.CreateAppRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.CreateAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_CreateAppRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.CreateAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_CreateAppResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.CreateAppResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.CreateAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_CreateAppResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.CreateAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_CreateProjectRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.CreateProjectRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.CreateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_CreateProjectRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.CreateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_CreateProjectResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.CreateProjectResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.CreateProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_CreateProjectResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.CreateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_DeleteAppRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.DeleteAppRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.DeleteAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_DeleteAppRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.DeleteAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_DeleteAppResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.DeleteAppResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.DeleteAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_DeleteAppResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.DeleteAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_DownloadCurrentTrainingDataRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.DownloadCurrentTrainingDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_DownloadCurrentTrainingDataRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_DownloadCurrentTrainingDataResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.DownloadCurrentTrainingDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_DownloadCurrentTrainingDataResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_GetAppRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.GetAppRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.GetAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_GetAppRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.GetAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_GetAppResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.GetAppResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.GetAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_GetAppResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.GetAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_GetProjectParticipantsRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.GetProjectParticipantsRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.GetProjectParticipantsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_GetProjectParticipantsRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.GetProjectParticipantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_GetProjectParticipantsResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.GetProjectParticipantsResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.GetProjectParticipantsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_GetProjectParticipantsResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.GetProjectParticipantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_GetProjectRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.GetProjectRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.GetProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_GetProjectRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.GetProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_GetProjectResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.GetProjectResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.GetProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_GetProjectResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.GetProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_InviteRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.InviteRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.InviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_InviteRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.InviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_InviteResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.InviteResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.InviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_InviteResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.InviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_JoinProjectRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.JoinProjectRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.JoinProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_JoinProjectRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.JoinProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_JoinProjectResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.JoinProjectResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.JoinProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_JoinProjectResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.JoinProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_ListAppsRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.ListAppsRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.ListAppsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_ListAppsRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.ListAppsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_ListAppsResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.ListAppsResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.ListAppsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_ListAppsResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.ListAppsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_UpdateAppRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.UpdateAppRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.UpdateAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_UpdateAppRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.UpdateAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_UpdateAppResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.UpdateAppResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.UpdateAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_UpdateAppResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.UpdateAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_UpdateProjectRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.UpdateProjectRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.UpdateProjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_UpdateProjectRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.UpdateProjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_UpdateProjectResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.UpdateProjectResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.UpdateProjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_UpdateProjectResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.UpdateProjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_UploadTrainingDataRequest(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.UploadTrainingDataRequest)) {
    throw new Error('Expected argument of type speechly.config.v1.UploadTrainingDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_UploadTrainingDataRequest(buffer_arg) {
  return speechly_config_v1_config_api_pb.UploadTrainingDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechly_config_v1_UploadTrainingDataResponse(arg) {
  if (!(arg instanceof speechly_config_v1_config_api_pb.UploadTrainingDataResponse)) {
    throw new Error('Expected argument of type speechly.config.v1.UploadTrainingDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechly_config_v1_UploadTrainingDataResponse(buffer_arg) {
  return speechly_config_v1_config_api_pb.UploadTrainingDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Speechly Configuration API (https://speechly.com/docs/api/configuration).
//
// The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).
//
// The token acts as a proxy for the user who has generated it,
// i.e. all operations are performed with that user as a subject.
var ConfigAPIService = exports.ConfigAPIService = {
  // Lists all current user projects.
getProject: {
    path: '/speechly.config.v1.ConfigAPI/GetProject',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.GetProjectRequest,
    responseType: speechly_config_v1_config_api_pb.GetProjectResponse,
    requestSerialize: serialize_speechly_config_v1_GetProjectRequest,
    requestDeserialize: deserialize_speechly_config_v1_GetProjectRequest,
    responseSerialize: serialize_speechly_config_v1_GetProjectResponse,
    responseDeserialize: deserialize_speechly_config_v1_GetProjectResponse,
  },
  // Creates a new project for current user.
createProject: {
    path: '/speechly.config.v1.ConfigAPI/CreateProject',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.CreateProjectRequest,
    responseType: speechly_config_v1_config_api_pb.CreateProjectResponse,
    requestSerialize: serialize_speechly_config_v1_CreateProjectRequest,
    requestDeserialize: deserialize_speechly_config_v1_CreateProjectRequest,
    responseSerialize: serialize_speechly_config_v1_CreateProjectResponse,
    responseDeserialize: deserialize_speechly_config_v1_CreateProjectResponse,
  },
  // Updates an existing project.
updateProject: {
    path: '/speechly.config.v1.ConfigAPI/UpdateProject',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.UpdateProjectRequest,
    responseType: speechly_config_v1_config_api_pb.UpdateProjectResponse,
    requestSerialize: serialize_speechly_config_v1_UpdateProjectRequest,
    requestDeserialize: deserialize_speechly_config_v1_UpdateProjectRequest,
    responseSerialize: serialize_speechly_config_v1_UpdateProjectResponse,
    responseDeserialize: deserialize_speechly_config_v1_UpdateProjectResponse,
  },
  // Lists all users with access to a project.
getProjectParticipants: {
    path: '/speechly.config.v1.ConfigAPI/GetProjectParticipants',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest,
    responseType: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse,
    requestSerialize: serialize_speechly_config_v1_GetProjectParticipantsRequest,
    requestDeserialize: deserialize_speechly_config_v1_GetProjectParticipantsRequest,
    responseSerialize: serialize_speechly_config_v1_GetProjectParticipantsResponse,
    responseDeserialize: deserialize_speechly_config_v1_GetProjectParticipantsResponse,
  },
  // Generates an invitation link for another user to join a project,
// which can be used to call JoinProject.
invite: {
    path: '/speechly.config.v1.ConfigAPI/Invite',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.InviteRequest,
    responseType: speechly_config_v1_config_api_pb.InviteResponse,
    requestSerialize: serialize_speechly_config_v1_InviteRequest,
    requestDeserialize: deserialize_speechly_config_v1_InviteRequest,
    responseSerialize: serialize_speechly_config_v1_InviteResponse,
    responseDeserialize: deserialize_speechly_config_v1_InviteResponse,
  },
  // Joins a project as a current user.
// Requires a link generated with `Invite`.
joinProject: {
    path: '/speechly.config.v1.ConfigAPI/JoinProject',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.JoinProjectRequest,
    responseType: speechly_config_v1_config_api_pb.JoinProjectResponse,
    requestSerialize: serialize_speechly_config_v1_JoinProjectRequest,
    requestDeserialize: deserialize_speechly_config_v1_JoinProjectRequest,
    responseSerialize: serialize_speechly_config_v1_JoinProjectResponse,
    responseDeserialize: deserialize_speechly_config_v1_JoinProjectResponse,
  },
  // Application API methods.
//
// Lists all applications in a project.
listApps: {
    path: '/speechly.config.v1.ConfigAPI/ListApps',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.ListAppsRequest,
    responseType: speechly_config_v1_config_api_pb.ListAppsResponse,
    requestSerialize: serialize_speechly_config_v1_ListAppsRequest,
    requestDeserialize: deserialize_speechly_config_v1_ListAppsRequest,
    responseSerialize: serialize_speechly_config_v1_ListAppsResponse,
    responseDeserialize: deserialize_speechly_config_v1_ListAppsResponse,
  },
  // Gets detailed information about an application.
getApp: {
    path: '/speechly.config.v1.ConfigAPI/GetApp',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.GetAppRequest,
    responseType: speechly_config_v1_config_api_pb.GetAppResponse,
    requestSerialize: serialize_speechly_config_v1_GetAppRequest,
    requestDeserialize: deserialize_speechly_config_v1_GetAppRequest,
    responseSerialize: serialize_speechly_config_v1_GetAppResponse,
    responseDeserialize: deserialize_speechly_config_v1_GetAppResponse,
  },
  // Creates a new application for current user.
createApp: {
    path: '/speechly.config.v1.ConfigAPI/CreateApp',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.CreateAppRequest,
    responseType: speechly_config_v1_config_api_pb.CreateAppResponse,
    requestSerialize: serialize_speechly_config_v1_CreateAppRequest,
    requestDeserialize: deserialize_speechly_config_v1_CreateAppRequest,
    responseSerialize: serialize_speechly_config_v1_CreateAppResponse,
    responseDeserialize: deserialize_speechly_config_v1_CreateAppResponse,
  },
  // Updates an existing application.
updateApp: {
    path: '/speechly.config.v1.ConfigAPI/UpdateApp',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.UpdateAppRequest,
    responseType: speechly_config_v1_config_api_pb.UpdateAppResponse,
    requestSerialize: serialize_speechly_config_v1_UpdateAppRequest,
    requestDeserialize: deserialize_speechly_config_v1_UpdateAppRequest,
    responseSerialize: serialize_speechly_config_v1_UpdateAppResponse,
    responseDeserialize: deserialize_speechly_config_v1_UpdateAppResponse,
  },
  // Deletes an existing application.
deleteApp: {
    path: '/speechly.config.v1.ConfigAPI/DeleteApp',
    requestStream: false,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.DeleteAppRequest,
    responseType: speechly_config_v1_config_api_pb.DeleteAppResponse,
    requestSerialize: serialize_speechly_config_v1_DeleteAppRequest,
    requestDeserialize: deserialize_speechly_config_v1_DeleteAppRequest,
    responseSerialize: serialize_speechly_config_v1_DeleteAppResponse,
    responseDeserialize: deserialize_speechly_config_v1_DeleteAppResponse,
  },
  // Training API methods.
//
// Uploads new training data for an application.
// This will create and queue a new training job for that application.
uploadTrainingData: {
    path: '/speechly.config.v1.ConfigAPI/UploadTrainingData',
    requestStream: true,
    responseStream: false,
    requestType: speechly_config_v1_config_api_pb.UploadTrainingDataRequest,
    responseType: speechly_config_v1_config_api_pb.UploadTrainingDataResponse,
    requestSerialize: serialize_speechly_config_v1_UploadTrainingDataRequest,
    requestDeserialize: deserialize_speechly_config_v1_UploadTrainingDataRequest,
    responseSerialize: serialize_speechly_config_v1_UploadTrainingDataResponse,
    responseDeserialize: deserialize_speechly_config_v1_UploadTrainingDataResponse,
  },
  // Downloads current training data for an application.
downloadCurrentTrainingData: {
    path: '/speechly.config.v1.ConfigAPI/DownloadCurrentTrainingData',
    requestStream: false,
    responseStream: true,
    requestType: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest,
    responseType: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse,
    requestSerialize: serialize_speechly_config_v1_DownloadCurrentTrainingDataRequest,
    requestDeserialize: deserialize_speechly_config_v1_DownloadCurrentTrainingDataRequest,
    responseSerialize: serialize_speechly_config_v1_DownloadCurrentTrainingDataResponse,
    responseDeserialize: deserialize_speechly_config_v1_DownloadCurrentTrainingDataResponse,
  },
};

exports.ConfigAPIClient = grpc.makeGenericClientConstructor(ConfigAPIService);
// Project API methods.
