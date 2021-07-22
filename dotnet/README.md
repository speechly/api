# .NET Speechly Api

Install the Speechly API stubs with

    dotnet add package SpeechlyApi


### Importing namespaces

```c#
using Grpc.Net.Client;
using Grpc.Core;
using Speechly.Identity.V1;
using Speechly.Slu.V1;
```

### IdentityAPI

Logging in with IdentityAPI is a single RPC call with `appId` and `deviceId`.

```c#
GrpcChannel channel = GrpcChannel.ForAddress("https://api.speechly.com");
Identity.IdentityClient identityClient = new Identity.IdentityClient(channel);

var deviceId = System.Guid.NewGuid().ToString();

var loginRquest = new LoginRequest
{
    AppId = appId,
    DeviceId = deviceId
};

var response = await identityClient.LoginAsync(loginRquest);

var token = response.Token;
```

### SLU

Streaming SLU is a bidirectional RPC call to the API, which means that it is not no simple as the login example above. Use the token from the `Identity` response to create the channel for the SLUClient.


```c#
var authInterceptor = new AsyncAuthInterceptor(async (context, metadata) =>
{
    metadata.Add(
        new Metadata.Entry("Authorization", "Bearer " + token));
});

var metadataCredentials = CallCredentials.FromInterceptor(authInterceptor);
ChannelCredentials channelCredentials = ChannelCredentials.Create(new SslCredentials(), metadataCredentials);
Channel channel = new Channel("api.speechly.com", channelCredentials);
SLU.SLUClient sluClient = new SLU.SLUClient(channel);
AsyncDuplexStreamingCall<SLURequest, SLUResponse> call = sluClient.Stream();
```

### Start context

Before starting context need to send `SLUConfig` with `Encoding`, `LanguageCode` and `SampleRateHertz`.

```c#
SLURequest configRequest = new SLURequest
{
    Config = new SLUConfig
    {
        Encoding = SLUConfig.Types.Encoding.Linear16,
        LanguageCode = "en-US",
        SampleRateHertz = 16_000,
    }
};

call.RequestStream.WriteAsync(configRequest).Wait();

SLURequest startRequest = new SLURequest
{
    Event = new SLUEvent { Event = SLUEvent.Types.Event.Start }
};
call.RequestStream.WriteAsync(startRequest).Wait();
```

### Send audio

Audio should be sent as a `ByteString`. In the example `audioChunk` is a byte[].

```c#
SLURequest audio = new SLURequest
{
    Audio = ByteString.CopyFrom(audioChunk)
};

call.RequestStream.WriteAsync(audio).Wait();
```

### Stop context

```c#
SLURequest stopRequest = new SLURequest
{
    Event = new SLUEvent { Event = SLUEvent.Types.Event.Stop }
};

call.RequestStream.WriteAsync(stopRequest).Wait();
```
