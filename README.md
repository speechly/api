<h1 align="center">
  <a href="https://www.speechly.com/?utm_source=github&utm_medium=speechly-api&utm_campaign=header"><img src="https://www.speechly.com/images/logo.png" height="100" alt="Speechly"></a>
</h1>
<h2 align="center">Complete your touch user interface with voice</h2>

[Speechly website](https://www.speechly.com/?utm_source=github&utm_medium=speechly-api&utm_campaign=header)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Docs](https://www.speechly.com/docs/?utm_source=github&utm_medium=speechly-api&utm_campaign=header)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Blog](https://www.speechly.com/blog/?utm_source=github&utm_medium=speechly-api&utm_campaign=header)

# Speechly API

This repository stores the definitions and generated code for Speechly public APIs.

## Language Support

Protocol buffers definitions are located in [proto/](proto/README.md). The actual code generation is done with [prototool](https://github.com/uber/prototool). The supported languages are:

- [Go](go/README.md)
- [Javascript / TypeScript](javascript/README.md)
- [Python](python/README.md)
- [Swift](swift/README.md)
- [Java / Kotlin](java/README.md)
- [.NET](dotnet/README.md)

Protobuf stub generation is pretty easy, so if you need support for a language not in the list, you can always generate the stubs separately.

Make sure to check language-specific READMEs.

## Using Speechly API

See the language specific examples in the respective subdirectories for more detailed description about using the generated code. The following describes the basic API flow of a Speechly client, which sends speech to the API and receives results at the same time.

An [API Reference](API.md) is generated from the protobuf source files, which contains detailed documentation about the APIs.

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

## Building and Testing This Repository

The build is done with `make` and `docker`.

You can run the build for all languages with `make build` from the root of this repo.

## About Speechly

Speechly is a developer tool for building real-time multimodal voice user interfaces. It enables developers and designers to enhance their current touch user interface with voice functionalities for better user experience. Speechly key features:

#### Speechly key features

- Fully streaming API
- Multi-modal from the ground up
- Easy to configure for any use case
- Fast to integrate to any touch screen application
- Supports natural corrections such as "Show me red – i mean blue t-shirts"
- Real time visual feedback encourages users to go on with their voice

|                  Example application                  | Description                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://i.imgur.com/v9o1JHf.gif" width=50%> | Instead of using buttons, input fields and dropdowns, Speechly enables users to interact with the application by using voice. <br />User gets real-time visual feedback on the form as they speak and are encouraged to go on. If there's an error, the user can either correct it by using traditional touch user interface or by voice. |
