<div align="center" markdown="1">
<a href="https://www.speechly.com">
   <img src="https://d33wubrfki0l68.cloudfront.net/f15fc952956e1952d6bd23661b7a7ee6b775faaa/c1b30/img/speechly-logo-duo-black.svg" height="48" />
</a>

### Real-time automatic speech recognition and natural language understanding tools in one flexible API

[Website](https://www.speechly.com/)
&ensp;|&ensp;
[Docs](https://docs.speechly.com/)
&ensp;|&ensp;
[Discussions](https://github.com/speechly/speechly/discussions)
&ensp;|&ensp;
[Blog](https://www.speechly.com/blog/)
&ensp;|&ensp;
[Podcast](https://anchor.fm/the-speechly-podcast)

---
</div>

# Speechly API

This repository stores the definitions and generated code for Speechly public APIs.

There are also higher-level client libraries available for selected platforms, which contain microphone and audio management functions, as well as the connection state management that otherwise would be needed separately on top of these definitions. See [Speechly Client Libraries](https://docs.speechly.com/client-libraries/) for more information about these.

## Language Support

Protocol buffers definitions are located in [proto/](proto/README.md). The actual code generation is done with [prototool](https://github.com/uber/prototool). The supported languages are:

- [Go](go/README.md)
- [Javascript / TypeScript](javascript/README.md)
- [Python](python/README.md)
- [Swift](swift/README.md)
- [Java / Kotlin](java/README.md)
- [.NET](dotnet/README.md)
- [C++](cpp/README.md)

Protobuf stub generation is pretty easy, so if you need support for a language not in the list, you can always generate the stubs separately.

Make sure to check language-specific READMEs.

## Using Speechly API

See the language specific examples in the respective subdirectories for more detailed description about using the generated code. The following describes the basic API flow of a Speechly client, which sends speech to the API and receives results at the same time.

An [API Reference](docs/README.md) is generated from the protobuf source files, which contains detailed documentation about the APIs.

All gRPC connections to Speechly APIs must use secure channels, meaning that the connection is done using TLS encryption. The secure channel should be opened to `api.speechly.com:443`. This channel can then be used to access all of the APIs.

### Login

The first step in connecting to the Speechly API is to call `speechly.identity.v2.IdentityAPI` and create an access token to use for the future calls.

- Create a `LoginRequest` and add:
  - `device_id`, a device identifier that the API can use to match the microphone acoustic profile
  - either:
    - `app_id` to select a specific Speechly application to use, or
    - `project_id` to use a project, containing multiple applications
- Send the request to `speechly.identity.v2.IdentityAPI/Login` (the stubs help here)
- The `LoginResponse` will contain an access token, and expiry information. A new access token should be fetched before the expiration to prevent unnecessary errors.

#### Using the Access Token

The `IdentityAPI/Login` is the only API call which does not require authentication metadata. All other API's require that the access token received from `Login` is attached to the request metadata with key `authorization` and value `Bearer TOKEN` (replace TOKEN with the actual token).

If the token is expired or otherwise invalid, all API calls will terminate with gRPC status code `PERMISSION_DENIED`. A reason is included in the error details.

The token will expire after a certain amount of time, stated in the `LoginResponse` message. It is still a good idea to keep the once-received token and reuse it for multiple connections, and refresh it only when it is close to expiration. This will make the API calls as fast as possible.

### SLU, Spoken Language Understanding

The `speechly.slu.v1.SLU/Stream` is used to send audio in, and receive results based on the target Speechly application configuration. An access token from `IdentityAPI` is required to access the `SLU`.

A generic example of an `SLU` connection:

- Open a bi-directional stream to `speechly.slu.v1.SLU/Stream`. Remember to include the access token in the stream's metadata.
- All messages sent to the stream are of type `SLURequest` and all responses are of type `SLUResponse`. These are envelopes that will contain different types of data, depending on the situation:
  - Send an `SLURequest.config` message, describing the audio stream
  - Send an `SLURequest.event.START` message when the speech stream is started
  - Stream will respond with `SLUResponse.started` message, containing the `audioContext` id
  - For every chunk of audio, send it to the stream with `SLURequest.audio`
  - At the same time, read the stream for responses. As the `SLU` stream is bidirectional, it will receive data at the same time as it sends data. Refer to the docs to see the meaning of different types of `SLUResponse`
  - When the speech audio is stopped, send an `SLURequest.event.STOP` message
  - Stream will respond with `SLUResponse.finished` event, containing the `audioContext` id that was finished

The connection can be kept open, but an active speech stream (audioContext) will have a maximum duration of 5 minutes.

### Supporting APIs

There are other APIs that can be used to manage Speechly applications. Instead of integrating to these, a quicker alternative is to use the [Speechly command](https://github.com/speechly/cli). Nevertheless, the APIs are documented and usable, if so required.

## gRPC-JSON transcoding support

The Speechly API supports automatic transcoding for HTTP/1.1 REST access with JSON content. This means that gRPC services are also exposed as HTTP, being accessible and usable with any REST toolchain (curl, postman etc). The only exception to this is the SLU API, which is a bidirectional streaming API and cannot be represented in HTTP.

The transcoding is implemented in [envoy filter](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_json_transcoder_filter.html) and mostly use the default bindings. To call the `IdentityAPI`, for example:

```
curl https://api.speechly.com/speechly.identity.v2.IdentityAPI/Login -d '{"deviceId": "$DEVICEID", "application": {"appId": "$APPID"}}'
```

and to call an API requiring authorization:

``` sh
curl https://api.speechly.com/speechly.slu.v1.WLU/Text -H "Authorization: Bearer $TOKEN" -d '{"text": "show python repos"}'
```

The mapping for transcoding is implemented by generating the _descriptor set_ file, which is located in this repository (speechly_api.pb). This file is also usable in `grpcurl` to do intelligent type mapping for command line gRPC access.

See also [Google's protobuf annotations for transcoding HTTP/JSON to gRPC](https://cloud.google.com/endpoints/docs/grpc/transcoding).

## Building and Testing This Repository

The build is done with `make` and `docker`.

You can run the build for all languages with `make build` from the root of this repo.
