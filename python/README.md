# Python Speechly API

See the generic [Speechly gRPC stubs documentation](https://github.com/speechly/api) for more information about using the API.

## Install

Install the latest package using `pip`:

    pip install speechly-api

Note that the minimum python version supported is 3.6.

## Using Python Stubs

The stubs are generated for the default `grpcio` python package, and the examples are using `asyncio`.

### Creating a Channel

In python, the default authority of the channel needs to be overridden, as it defaults to a string containing the port number. This will not work with the API, so we set the DNS name manually:

```python
channel = grpc.aio.secure_channel(
    target='api.speechly.com:443',
    credentials=grpc.ssl_channel_credentials(),
    options=[('grpc.default_authority', 'api.speechly.com')]
)
```

### IdentityAPI

Login with `speechly.identity.v2.IdentityAPI` using an `app_id`:

```python
async def login(channel, device_id, app_id=None, project_id=None):
    assert device_id, 'UUID device_is required'
    assert (app_id or project_id), 'app_id or project_id is required'
    identity_api = IdentityAPIStub(channel)
    req = LoginRequest(device_id=device_id)
    if app_id:
        # if a token with a single app_id is required:
        req.application.app_id = app_id
    else:
        # get a token that is usable for all apps in project:
        req.project.project_id = project_id
    response = await identity_api.Login(req)
    token = response.token
    expires = datetime.fromisoformat(response.expires_at)
    return token, expires
```

### SLU

Open a bidirectional stream to `speechly.slu.v1.SLU/Stream` and send audio from a source generator to the API. The following example assumes that the `audio_stream` is an iterator that yields audio with 1 channel and sample rate 16KHz, in bytes chunks:

```python
async def stream_speech(channel, token, audio_stream, app_id=None):
    auth = ('authorization', f'Bearer {token}')

    async def read_responses(stream):
        transcript = []
        intent = ''
        entities = []
        resp = await stream.read()
        while resp != grpc.aio.EOF:
            if resp.HasField('started'):
                print(f'audioContext {resp.audio_context} started')
            elif resp.HasField('transcript'):
                transcript.append(resp.transcript.word)
            elif resp.HasField('entity'):
                entities.append(resp.entity.entity)
            elif resp.HasField('intent'):
                intent = resp.intent.intent
            elif resp.HasField('finished'):
                print(f'audioContext {resp.audio_context} finished')
            resp = await stream.read()
        return intent, entities, transcript

    async def send_audio(stream, source):
        await stream.write(SLURequest(event=SLUEvent(event='START', app_id=app_id)))
        for chunk in source:
            await stream.write(SLURequest(audio=chunk))
        await stream.write(SLURequest(event=SLUEvent(event='STOP')))
        await stream.done_writing()

    async with channel:
        slu = SLUStub(channel)
        try:
            stream = slu.Stream(metadata=[auth])
            config = SLUConfig(channels=1, sample_rate_hertz=16000)
            await stream.write(SLURequest(config=config))
            recv = read_responses(stream)
            send = send_audio(stream, audio_stream)
            r = await asyncio.gather(recv, send)
            intent, entities, transcript = r[0]
            print('Intent:', intent)
            print('Entities:', ', '.join(entities))
            print('Transcript:', ' '.join(transcript))
        except grpc.aio.AioRpcError as e:
            print('Error in SLU', str(e.code()), e.details())
```
