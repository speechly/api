// package: speechly.config.v1
// file: speechly/config/v1/config_api.proto

var speechly_config_v1_config_api_pb = require("../../../speechly/config/v1/config_api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConfigAPI = (function () {
  function ConfigAPI() {}
  ConfigAPI.serviceName = "speechly.config.v1.ConfigAPI";
  return ConfigAPI;
}());

ConfigAPI.GetProject = {
  methodName: "GetProject",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.GetProjectRequest,
  responseType: speechly_config_v1_config_api_pb.GetProjectResponse
};

ConfigAPI.CreateProject = {
  methodName: "CreateProject",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.CreateProjectRequest,
  responseType: speechly_config_v1_config_api_pb.CreateProjectResponse
};

ConfigAPI.UpdateProject = {
  methodName: "UpdateProject",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.UpdateProjectRequest,
  responseType: speechly_config_v1_config_api_pb.UpdateProjectResponse
};

ConfigAPI.GetProjectParticipants = {
  methodName: "GetProjectParticipants",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.GetProjectParticipantsRequest,
  responseType: speechly_config_v1_config_api_pb.GetProjectParticipantsResponse
};

ConfigAPI.Invite = {
  methodName: "Invite",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.InviteRequest,
  responseType: speechly_config_v1_config_api_pb.InviteResponse
};

ConfigAPI.JoinProject = {
  methodName: "JoinProject",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.JoinProjectRequest,
  responseType: speechly_config_v1_config_api_pb.JoinProjectResponse
};

ConfigAPI.ListApps = {
  methodName: "ListApps",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.ListAppsRequest,
  responseType: speechly_config_v1_config_api_pb.ListAppsResponse
};

ConfigAPI.GetApp = {
  methodName: "GetApp",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.GetAppRequest,
  responseType: speechly_config_v1_config_api_pb.GetAppResponse
};

ConfigAPI.CreateApp = {
  methodName: "CreateApp",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.CreateAppRequest,
  responseType: speechly_config_v1_config_api_pb.CreateAppResponse
};

ConfigAPI.UpdateApp = {
  methodName: "UpdateApp",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.UpdateAppRequest,
  responseType: speechly_config_v1_config_api_pb.UpdateAppResponse
};

ConfigAPI.DeleteApp = {
  methodName: "DeleteApp",
  service: ConfigAPI,
  requestStream: false,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.DeleteAppRequest,
  responseType: speechly_config_v1_config_api_pb.DeleteAppResponse
};

ConfigAPI.UploadTrainingData = {
  methodName: "UploadTrainingData",
  service: ConfigAPI,
  requestStream: true,
  responseStream: false,
  requestType: speechly_config_v1_config_api_pb.UploadTrainingDataRequest,
  responseType: speechly_config_v1_config_api_pb.UploadTrainingDataResponse
};

ConfigAPI.DownloadCurrentTrainingData = {
  methodName: "DownloadCurrentTrainingData",
  service: ConfigAPI,
  requestStream: false,
  responseStream: true,
  requestType: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataRequest,
  responseType: speechly_config_v1_config_api_pb.DownloadCurrentTrainingDataResponse
};

exports.ConfigAPI = ConfigAPI;

function ConfigAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConfigAPIClient.prototype.getProject = function getProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.GetProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.createProject = function createProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.CreateProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.updateProject = function updateProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.UpdateProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.getProjectParticipants = function getProjectParticipants(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.GetProjectParticipants, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.invite = function invite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.Invite, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.joinProject = function joinProject(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.JoinProject, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.listApps = function listApps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.ListApps, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.getApp = function getApp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.GetApp, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.createApp = function createApp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.CreateApp, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.updateApp = function updateApp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.UpdateApp, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.deleteApp = function deleteApp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigAPI.DeleteApp, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.uploadTrainingData = function uploadTrainingData(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(ConfigAPI.UploadTrainingData, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

ConfigAPIClient.prototype.downloadCurrentTrainingData = function downloadCurrentTrainingData(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ConfigAPI.DownloadCurrentTrainingData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ConfigAPIClient = ConfigAPIClient;

