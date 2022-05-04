# Simple example on how to stream audio from an audio file to the
# Speechly API using gRPC.
#
# Dependencies (all can be installed via pip):
# - speechly-api (the gRPC stubs for communicating with our API)
# - grpcio
# - soundfile (for reading audio files)
# - numpy (required by soundfile)
#
# To run the example, you need:
# 1. a Speechly App Id that you can get at www.speechly.com/dashboard,
# 2. a 1-channel 16bit 16kHz .wav file with some speech.
#
# Then, run
#
# python speechly_client.py MY_APP_ID_HERE name_of_my_wav_file.wav
#
# The script will print the recognized transcript, one word per line,
# together with the begin and end timestamps for each word.

import argparse
import asyncio
from datetime import datetime

import soundfile
import grpc

# Speechly Identity API
from speechly.identity.v2.identity_api_pb2_grpc import IdentityAPIStub
from speechly.identity.v2.identity_api_pb2 import LoginRequest

# Speechly SLU API
from speechly.slu.v1.slu_pb2 import SLURequest, SLUConfig, SLUEvent
from speechly.slu.v1.slu_pb2_grpc import SLUStub

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
                w = resp.transcript
                transcript.append(w.word)
                print(w.word, w.start_time, w.end_time)
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
            await stream.write(SLURequest(audio=bytes(chunk)))
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
            print('Transcript:', ' '.join(transcript))
        except grpc.aio.AioRpcError as e:
            print('Error in SLU', str(e.code()), e.details())

async def main(args):
    audio_blocks = soundfile.blocks(args.filename, dtype='int16', blocksize=512)

    channel = grpc.aio.secure_channel(
        target=f'api.speechly.com:443',
        credentials=grpc.ssl_channel_credentials(),
        options=[('grpc.default_authority', f'api.speechly.com')]
    )

    # this is a randomly generated device id
    device_id = '9116b05b-d4a6-4073-b3b9-43dfb04c83ba'

    # login to get API token
    token, _ = await login(channel, device_id, app_id=args.app_id)

    # stream audio and print results in return
    await stream_speech(channel, token, audio_blocks, app_id=args.app_id)

if __name__=='__main__':
    parser = argparse.ArgumentParser(description='Speechly GRPC client')
    parser.add_argument('app_id', type=str, help='The application id')
    parser.add_argument('filename', type=str, help='Name of input file to stream.')
    asyncio.run(main(parser.parse_args()))
