// package: speechly.slu.v1
// file: speechly/slu/v1/slu.proto

var speechly_slu_v1_slu_pb = require("../../../speechly/slu/v1/slu_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SLU = (function () {
  function SLU() {}
  SLU.serviceName = "speechly.slu.v1.SLU";
  return SLU;
}());

SLU.Stream = {
  methodName: "Stream",
  service: SLU,
  requestStream: true,
  responseStream: true,
  requestType: speechly_slu_v1_slu_pb.SLURequest,
  responseType: speechly_slu_v1_slu_pb.SLUResponse
};

exports.SLU = SLU;

function SLUClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SLUClient.prototype.stream = function stream(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(SLU.Stream, {
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
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
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

exports.SLUClient = SLUClient;

