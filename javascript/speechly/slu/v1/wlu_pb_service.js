// package: speechly.slu.v1
// file: speechly/slu/v1/wlu.proto

var speechly_slu_v1_wlu_pb = require("../../../speechly/slu/v1/wlu_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WLU = (function () {
  function WLU() {}
  WLU.serviceName = "speechly.slu.v1.WLU";
  return WLU;
}());

WLU.Text = {
  methodName: "Text",
  service: WLU,
  requestStream: false,
  responseStream: false,
  requestType: speechly_slu_v1_wlu_pb.WLURequest,
  responseType: speechly_slu_v1_wlu_pb.WLUResponse
};

exports.WLU = WLU;

function WLUClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WLUClient.prototype.text = function text(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WLU.Text, {
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

exports.WLUClient = WLUClient;

