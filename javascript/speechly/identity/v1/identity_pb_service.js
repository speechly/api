// package: speechly.identity.v1
// file: speechly/identity/v1/identity.proto

var speechly_identity_v1_identity_pb = require("../../../speechly/identity/v1/identity_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Identity = (function () {
  function Identity() {}
  Identity.serviceName = "speechly.identity.v1.Identity";
  return Identity;
}());

Identity.Login = {
  methodName: "Login",
  service: Identity,
  requestStream: false,
  responseStream: false,
  requestType: speechly_identity_v1_identity_pb.LoginRequest,
  responseType: speechly_identity_v1_identity_pb.LoginResponse
};

exports.Identity = Identity;

function IdentityClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IdentityClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Identity.Login, {
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

exports.IdentityClient = IdentityClient;

