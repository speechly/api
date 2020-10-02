// package: speechly.sal.v1
// file: speechly/sal/v1/compiler.proto

var speechly_sal_v1_compiler_pb = require("../../../speechly/sal/v1/compiler_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Compiler = (function () {
  function Compiler() {}
  Compiler.serviceName = "speechly.sal.v1.Compiler";
  return Compiler;
}());

Compiler.Compile = {
  methodName: "Compile",
  service: Compiler,
  requestStream: true,
  responseStream: false,
  requestType: speechly_sal_v1_compiler_pb.AppSource,
  responseType: speechly_sal_v1_compiler_pb.CompileResult
};

Compiler.Validate = {
  methodName: "Validate",
  service: Compiler,
  requestStream: true,
  responseStream: false,
  requestType: speechly_sal_v1_compiler_pb.AppSource,
  responseType: speechly_sal_v1_compiler_pb.ValidateResult
};

exports.Compiler = Compiler;

function CompilerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CompilerClient.prototype.compile = function compile(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(Compiler.Compile, {
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

CompilerClient.prototype.validate = function validate(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(Compiler.Validate, {
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

exports.CompilerClient = CompilerClient;

