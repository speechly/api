# Javascript Speechly API

See the generic [Speechly gRPC stubs documentation](https://github.com/speechly/api) for more information about using the API. This package is meant and tested for node.js server side implementations.

## Installation

The gRPC libraries (`grpc` and `google-protobuf`) are declared as peer dependencies, meaning that they need to be installed separately in the main package. This is to prevent multiple versions of `grpc` existing in the module tree, as this is not supported by the module.

```sh
npm install --save grpc google-protobuf
npm install --save @speechly/api
```

## Usage

The generated code can be used with Javascript or TypeScript code, but it only works on platforms that support ES or CommonJS modules. Messages and services are located within their specific packages and in separate files.

### Creating a Client

Every gRPC service definition is bundled with a generic client that can be used to access the service. To call `IdentityAPI`, create a client like this:

```javascript
const { credentials } = require("grpc");
const { IdentityAPIClient } = require("@speechly/api/speechly/identity/v2/identity_api_grpc_pb");
const identityClient = new IdentityAPIClient("api.speechly.com", credentials.createSsl());
const { SLUClient } = require("@speechly/api/speechly/slu/v1/slu_grpc_pb");
```

The clients will use protobuf messages, which are packaged in separate modules:

```javascript
const { LoginRequest, ApplicationScope, ProjectScope } = require("@speechly/api/speechly/identity/v2/identity_api_pb");
const { SLURequest, SLUConfig, SLUEvent } = require("@speechly/api/sspeechly/slu/v1/slu_pb");
```

### IdentityAPI

Logging in with IdentityAPI is a single RPC call, wrapped here in a `Promise`. The `login` function takes either an `appId` or a `projectId`, and returns the resulting token with the expiry time.

```javascript
async function login(deviceId, appId, projectId) {
  return new Promise((resolve, reject) => {
    const req = new LoginRequest();
    req.setDeviceId(deviceId);
    if (appId !== undefined) {
      const app = new ApplicationScope();
      app.setAppId(appId);
      req.setApplication(app);
    } else {
      const project = new ProjectScope();
      project.setProjectId(projectId);
      req.setProject(project);
    }
    identityClient.login(req, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve({
        token: res.getToken(),
        expires: new Date(res.getExpiresAt())
      });
    });
  });
}
```

### SLU

Streaming SLU is a bidirectional RPC call to the API, which means that it is not no simple as the login example above. The `data` parameter is a nodejs stream, providing the audio data in `Buffer` data events. The `appId` is required if the token is project scoped.

```javascript
async function stream_speech(data, appId, token) {
  return new Promise((resolve, reject) => {
    // Set up metadata with authorization token, and start the stream
    const md = new Metadata();
    md.add("Authorization", `Bearer ${token}`);
    const call = sluClient.stream(md);

    // expect to get transcript, entities and intent
    const transcript = [];
    const entities = [];
    let intent = "";

    // set up event handlers for incoming data
    call.on("data", d => {
      if (d.hasStarted()) {
        console.log("Started audio context", d.getAudioContext());
      } else if (d.hasFinished()) {
        console.log("Stopped audio context", d.getAudioContext());
      } else if (d.hasTranscript()) {
        transcript.push(d.getTranscript().getWord());
      } else if (d.hasEntity()) {
        entities.push(d.getEntity().getEntity());
      } else if (d.hasIntent()) {
        intent = d.getIntent().getIntent();
      }
    });
    // on server error, reject promise
    call.on("error", err => {
      reject(err);
    });
    // when API ends, every result is ready
    call.on("end", () => {
      resolve({
        intent,
        entities: entities.join(", "),
        transcript: transcript.join(" ")
      });
    });

    // send audio configuration
    const config = new SLUConfig();
    config.setEncoding(SLUConfig.Encoding.LINEAR16);
    config.setChannels(1);
    config.setSampleRateHertz(16000);
    const configReq = new SLURequest();
    configReq.setConfig(config);
    call.write(configReq);

    // start new audio context
    const startContextReq = new SLURequest();
    const startEvent = new SLUEvent();
    startEvent.setEvent(SLUEvent.Event.START);
    startEvent.setAppId(appId);
    startContextReq.setEvent(startEvent);
    call.write(startContextReq);

    // for every chunk in data, send it to API
    data.on("data", chunk => {
      const req = new SLURequest();
      req.setAudio(chunk);
      call.write(req);
    });

    // send stop context and end call (half-close stream)
    data.on("end", () => {
      const stopContextReq = new SLURequest();
      const stopEvent = new SLUEvent();
      stopEvent.setEvent(SLUEvent.Event.STOP);
      stopContextReq.setEvent(stopEvent);
      call.write(stopContextReq);
      call.end();
    });
  });
}
```

### Combine and run!

```javascript
(async () => {
  try {
    const projectId = "your_project_id";
    const deviceId = "generated_UUID_for_device";
    const appId = "your_app_id";
    const loginRes = await login(deviceId, undefined, projectId);
    const data = readAudioSource();
    const res = await stream_speech(data, appId, loginRes.token);

    console.log("Intent: ", res.intent);
    console.log("Entities: ", res.entities);
    console.log("Transcript: ", res.transcript);
  } catch (err) {
    console.error(err);
  }
})();
```
