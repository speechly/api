
# speechly.slu.v1.BatchAPI

Run SLU operations on audio sources without actively waiting the results.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| ProcessAudio | [ProcessAudioRequest stream](#speechlysluv1processaudiorequest) | [ProcessAudioResponse](#speechlysluv1processaudioresponse) | Create a new background SLU operation for a single audio source.<br/>An audio source can be<br/> - audio chunks sent via repeated ProcessAudioRequests, or<br/> - URI of a file, reachable from the API<br/> The response includes an `id` that is used to match the operation to the<br/> results. A `reference` identifier can also be set.<br/> The destination can be a webhook URL, in which case the results are posted<br/> there when they are ready. The payload is an instance of `Operation`. |
| QueryStatus | [QueryStatusRequest](#speechlysluv1querystatusrequest) | [QueryStatusResponse](#speechlysluv1querystatusresponse) | Query the status of a given batch operation.<br/>If the `ProcessAudioRequest` did not define a `results_uri` as a<br/>destination, the results are returned in the `QueryStatusResponse`. |

## Messages

- [AudioConfiguration](#speechly.slu.v1.AudioConfiguration)
- [HttpResource](#speechly.slu.v1.HttpResource)
- [HttpResource.Header](#speechly.slu.v1.HttpResource.Header)
- [Operation](#speechly.slu.v1.Operation)
- [Option](#speechly.slu.v1.Option)
- [ProcessAudioRequest](#speechly.slu.v1.ProcessAudioRequest)
- [ProcessAudioResponse](#speechly.slu.v1.ProcessAudioResponse)
- [QueryStatusRequest](#speechly.slu.v1.QueryStatusRequest)
- [QueryStatusResponse](#speechly.slu.v1.QueryStatusResponse)
- [Transcript](#speechly.slu.v1.Transcript)


### speechly.slu.v1.AudioConfiguration

Describes the audio content of the batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| encoding | [Encoding](#speechlysluv1audioconfigurationencoding) | The encoding of the audio data sent in the stream.<br/>Required. |
| channels | int32 | The number of channels in the input audio data.<br/>Required. |
| sample_rate_hertz | int32 | Sample rate in Hertz of the audio data sent in the stream (e.g. 16000).<br/>Required. |
| language_codes | string | The language(s) of the audio sent in the stream as a BCP-47 language tag<br/>(e.g. "en-US"). Defaults to the target application language.<br/>Optional. |


### speechly.slu.v1.HttpResource

Describes full properties of an HTTP endpoint.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| url | string | URL of the endpoint (protocol://server/path)<br/>Required. |
| method | [Method](#speechlysluv1httpresourcemethod) | method to use in connection.<br/>Required. |
| headers | [Header](#speechlysluv1httpresourceheader) | Possible additional headers to include in the connection.<br/>Optional. |


### speechly.slu.v1.HttpResource.Header

A single header value.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| name | string |  |
| value | string |  |


### speechly.slu.v1.Operation

Describes a single batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | The id of the operation. |
| reference | string | The reference id of the operation, if given. |
| status | [Status](#speechlysluv1operationstatus) | The current status of the operation. |
| language_code | string | The language code of the detected language. |
| app_id | string | The application context for the operation. |
| device_id | string | The device or microphone id for the audio, if applicable. |
| transcripts | [Transcript](#speechlysluv1transcript) | If the operation status is STATUS_DONE and the destination is not set,<br/>the results of the operation. |
| error | string | Contains a description of the error if the operation status is<br/>STATUS_ERROR. |
| duration | [Duration](#googleprotobufduration) | The duration of the audio. |


### speechly.slu.v1.Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### speechly.slu.v1.ProcessAudioRequest

If sending a stream of `ProcessAudioRequest` messages, the first one must
contain the `AudioConfiguration` for the audio data. The `config` is ignored
in the following messages.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | The processing context, Speechly application ID.<br/>Required. |
| device_id | string | The device ID of the audio source, for example a microphone<br/>identifier as UUID.<br/>Optional. |
| config | [AudioConfiguration](#speechlysluv1audioconfiguration) | Audio configuration.<br/>Required. |
| audio | bytes | Raw audio data. |
| uri | string | URI of audio data. Can be http or GCS. |
| http_source | [HttpResource](#speechlysluv1httpresource) | Detailed HTTP source data. |
| results_uri | string | Basic HTTP POST destination.<br/>The payload will be `Operation` as JSON. |
| http_result | [HttpResource](#speechlysluv1httpresource) | A more fine-grained result target, supporting HTTP method and HTTP headers.<br/>The payload will be `Operation` as JSON. |
| reference | string | Reference id for the operation. For example an identifier of the source<br/>system.<br/>Optional. |
| options | [Option](#speechlysluv1option) | Additional operation specific options.<br/>Optional. |


### speechly.slu.v1.ProcessAudioResponse



#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechlysluv1operation) | The details of the created operation. |


### speechly.slu.v1.QueryStatusRequest

Query the status of an operation. Either `id` or `reference` must be given.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | ID of an audio processing operation. |
| reference | string | Reference ID of an operation. |


### speechly.slu.v1.QueryStatusResponse



#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechlysluv1operation) | The details of the audio processing operation. |


### speechly.slu.v1.Transcript

Describes an SLU transcript.
A transcript is a speech-to-text element of the phrase, i.e. a word
recognised from the audio.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| word | string | The word recongised from the audio. |
| index | int32 | The position of the word in the whole phrase, zero-based. |
| start_time | int32 | The end time of the word in the audio, in milliseconds from the beginning<br/>of the audio. |
| end_time | int32 | The end time of the word in the audio, in milliseconds from the beginning<br/>of the audio. |


## Enums

- [AudioConfiguration.Encoding](#speechly.slu.v1.AudioConfiguration.Encoding)
- [HttpResource.Method](#speechly.slu.v1.HttpResource.Method)
- [Operation.Status](#speechly.slu.v1.Operation.Status)


### speechly.slu.v1.AudioConfiguration.Encoding

The encoding of the audio data sent in the stream.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| ENCODING_INVALID | 0 |  |
| ENCODING_LINEAR16 | 1 | Uncompressed 16-bit signed little-endian samples (Linear PCM). |


### speechly.slu.v1.HttpResource.Method

The HTTP method to use.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| METHOD_INVALID | 0 |  |
| METHOD_GET | 1 |  |
| METHOD_POST | 2 |  |
| METHOD_PUT | 3 |  |


### speechly.slu.v1.Operation.Status

The status of the operation.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| STATUS_INVALID | 0 | Default status is empty. |
| STATUS_QUEUED | 1 | The operation is queued for processing. |
| STATUS_PROCESSING | 2 | Audio is being decoded. |
| STATUS_DONE | 3 | The operation is ready and transcript is available. |
| STATUS_ERROR | 4 | The processing failed. Error reason is available. |
| STATUS_ANALYSING | 5 | Audio is being analysed, eg. language is detected. |
| STATUS_WAITING_DECODER | 6 | Audio has been analysed, the operation is waiting for a free decoder. |

