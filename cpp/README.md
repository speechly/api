# C++ Speechly Api

The generated stubs for C++ can be copied from here to your project, making the `protoc` step unnecessary.

Check out an example application for [here](https://github.com/speechly/cpp-example-app).

### IdentityAPI

Logging in with IdentityAPI is a single RPC call with `appId` and `deviceId`.

```c++
grpc::SslCredentialsOptions ssl_opts;
ssl_opts.pem_root_certs = "add certificates here";
auto channel_creds = grpc::SslCredentials(ssl_opts);
std::shared_ptr<Channel> identityChannel = grpc::CreateChannel("api.speechly.com", channel_creds);
std::unique_ptr<Identity::Stub> identityStub_ = Identity::NewStub(identityChannel);

LoginRequest request;
request.set_app_id(appId);
request.set_device_id(deviceId);
LoginResponse response;
ClientContext loginContext;

Status status = identityStub_->Login(&loginContext, request, &response);
std::string token = response.token();
```

### SLU

Streaming SLU is a bidirectional RPC call to the API, which means that it is not no simple as the login example above. Use the token from the `Identity` response to create the SLU channel.


```c++
class MyCustomAuthenticator : public grpc::MetadataCredentialsPlugin {
 public:
  MyCustomAuthenticator(const grpc::string& ticket) : ticket_(ticket) {}

  grpc::Status GetMetadata(grpc::string_ref service_url, grpc::string_ref method_name, const grpc::AuthContext& channel_auth_context, std::multimap<grpc::string, grpc::string>* metadata) override {
    metadata->insert(std::make_pair("authorization", ticket_));
    return grpc::Status::OK;
  }

 private:
  grpc::string ticket_;
};

std::shared_ptr<grpc::CallCredentials> call_creds = grpc::MetadataCredentialsFromPlugin(std::unique_ptr<grpc::MetadataCredentialsPlugin>(new MyCustomAuthenticator("Bearer " + token)));

std::shared_ptr<Channel> sluChannel = grpc::CreateChannel("api.speechly.com", grpc::CompositeChannelCredentials(channel_creds, call_creds));

std::unique_ptr<SLU::Stub> sluStub_ = slu::v1::SLU::NewStub(sluChannel);

std::shared_ptr<ClientReaderWriter<SLURequest, SLUResponse> > stream(sluStub_->Stream(&context));
```

### Start context

Before starting context need to send `SLUConfig` with `Encoding`, `LanguageCode` and `SampleRateHertz`.

```c++
SLUConfig config;
config.set_encoding(SLUConfig_Encoding::SLUConfig_Encoding_LINEAR16);
config.set_sample_rate_hertz(16000);
config.set_language_code("en-US");

SLURequest configRequest;
configRequest.mutable_config()->CopyFrom(config);

stream->Write(configRequest);

SLUEvent event;
event.set_event(slu::v1::SLUEvent_Event_START);
SLURequest startRequest;
startRequest.mutable_event()->CopyFrom(event);

stream->Write(startRequest);
```

### Send audio

Audio should be sent as in 16-bit format. In the example `audio` is an array of audio chunks and `number` is a number of chunks in the array.

```c++
SLURequest sluRequest;
sluRequest.set_audio(audio, number);
stream->Write(sluRequest);
```

### Stop context

```c++
SLUEvent event;
event.set_event(slu::v1::SLUEvent_Event_STOP);
SLURequest stopRequest;
stopRequest.mutable_event()->CopyFrom(event);

stream->Write(stopRequest);
```