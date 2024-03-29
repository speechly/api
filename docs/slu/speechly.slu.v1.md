
# speechly.slu.v1.SLU

Service that implements Speechly SLU (Spoken Language Understanding) API.

To use this service you MUST use an access token from Speechly Identity API.
The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer ACCESS_TOKEN` as value, e.g. in Go:

```
ctx := context.Background()
ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
stream, err := speechlySLUClient.Stream(ctx)
```

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| Stream | [SLURequest stream](#slurequest) | [SLUResponse stream](#sluresponse) | Performs bidirectional streaming speech recognition: receive results while sending audio.<br/><br/>First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.<br/><br/>This RPC can handle multiple logical audio segments with the use of `SLUEvent_START` and `SLUEvent_STOP` messages,<br/>which are used to indicate the beginning and the end of a segment.<br/><br/>A typical call timeline will look like this:<br/><br/>1. Client starts the RPC.<br/>2. Client sends `SLUConfig` message with audio configuration.<br/>3. Client sends `SLUEvent.START`.<br/>4. Client sends audio and receives responses from the server.<br/>5. Client sends `SLUEvent.STOP`.<br/>6. Client sends `SLUEvent.START`.<br/>7. Client sends audio and receives responses from the server.<br/>8. Client sends `SLUEvent.STOP`.<br/>9. Client closes the stream and receives responses from the server until EOF is received.<br/><br/>NB: the client does not have to wait until the server acknowledges the start / stop events,<br/>this is done asynchronously. The client can deduplicate responses based on the audio context ID,<br/>which will be present in every response message. |

## Messages

- [RoundTripMeasurementRequest](#roundtripmeasurementrequest)
- [RoundTripMeasurementResponse](#roundtripmeasurementresponse)
- [SLUConfig](#sluconfig)
- [SLUConfig.Option](#sluconfig.option)
- [SLUEntity](#sluentity)
- [SLUError](#sluerror)
- [SLUEvent](#sluevent)
- [SLUFinished](#slufinished)
- [SLUIntent](#sluintent)
- [SLURequest](#slurequest)
- [SLUResponse](#sluresponse)
- [SLUSegmentEnd](#slusegmentend)
- [SLUStart](#slustart)
- [SLUStart.Option](#slustart.option)
- [SLUStarted](#slustarted)
- [SLUStop](#slustop)
- [SLUTentativeEntities](#slutentativeentities)
- [SLUTentativeTranscript](#slutentativetranscript)
- [SLUTranscript](#slutranscript)


### RoundTripMeasurementRequest

Network latency measurement request. Sent from the server to measure the time it takes for the client
to receive a message and the server to receive the client's response. Also known as RTT.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | int32 | Measurement id. Multiple measurements can be sent during one connection, so the response should contain<br/>the same `id` as in the request. |


### RoundTripMeasurementResponse

Response sent from the client immediately after seeing the RoundTripMeasurementRequest.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | int32 | `id` should match the request's id. |


### SLUConfig

Describes the configuration of the audio sent by the client.
Currently the API only supports single-channel Linear PCM with sample rate of 16 kHz.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| encoding | [Encoding](#sluconfigencoding) | The encoding of the audio data sent in the stream.<br/>Required. |
| channels | int32 | The number of channels in the input audio data.<br/>Required. |
| sample_rate_hertz | int32 | Sample rate in Hertz of the audio data sent in the stream.<br/>Required. |
| language_code | string | The language of the audio sent in the stream as a BCP-47 language tag (e.g. "en-US").<br/>Defaults to the target application language. |
| options | [Option](#sluconfigoption) | Special options to change the default behaviour of the SLU for all logical audio segment. |


### SLUConfig.Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### SLUEntity

Describes an SLU entity.

An entity is a specific object in the phrase that falls into some kind of category,
e.g. in a SAL example `*book book a [burger restaurant](restaurant_type) for [tomorrow](date)`
"burger restaurant" would be an entity of type `restaurant_type`,
and "tomorrow" would be an entity of type `date`.

An entity has a start and end indices which map to the indices of words in SLUTranscript messages,
e.g. in the example `*book book a [burger restaurant](restaurant_type) for [tomorrow](date)` it would be:

- Entity "burger restaurant" - `start_position = 2, end_position = 3`
- Entity "tomorrow" - `start_position = 5, end_position = 5`

The start index is inclusive, but the end index is exclusive, i.e. the interval is `[start_position, end_position)`.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| entity | string | The type of the entity, e.g. `restaurant_type` or `date`. |
| value | string | The value of the entity, e.g. `burger restaurant` or `tomorrow`. |
| start_position | int32 | The starting index of the entity in the phrase, maps to the `index` field in `SLUTranscript`.<br/>Inclusive. |
| end_position | int32 | The finishing index of the entity in the phrase, maps to the `index` field in `SLUTranscript`.<br/>Exclusive. |


### SLUError

Describes the error that happened when processing an audio context.
DEPRECATED: Will not be returned. Any errors are returned as gRCP status codes with detail messages.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| code | string | Error code (refer to documentation for specific codes). |
| message | string | Error message. |


### SLUEvent

Indicates the beginning and the end of a logical audio segment (audio context in Speechly terms).

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| event | [Event](#slueventevent) | The event type being sent. Required. |
| app_id | string | The `appId` for the utterance.<br/>Required in the `START` event if the authorization token is *project based*. The<br/>given application must be part of the project set in the token.<br/>Not required if the authorization token is *application based*. |


### SLUFinished

Indicates that the API has stopped processing current audio context.
It guarantees that no new messages for that context will be sent by the server.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| error | [SLUError](#sluerror) | DEPRECATED<br/>An error which has happened when processing the context, if any. |


### SLUIntent

Describes an SLU intent.
There can be only one intent per SLU segment.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| intent | string | The value of the intent, as defined in SAL. |


### SLURequest

Top-level message sent by the client for the `Stream` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| config | [SLUConfig](#sluconfig) | Describes the configuration of the audio sent by the client.<br/>MUST be the first message sent to the stream. |
| event | [SLUEvent](#sluevent) | Indicates the beginning and the end of a logical audio segment (audio context in Speechly terms).<br/>A context MUST be preceded by a start event and concluded with a stop event,<br/>otherwise the server WILL terminate the stream with an error.<br/>DEPRECATED in favour of SLUStart and SLUStop |
| audio | bytes | Contains a chunk of the audio being streamed. |
| rtt_response | [RoundTripMeasurementResponse](#roundtripmeasurementresponse) | Response to an RTT measurement request from server. Should be sent immediately<br/>after receiving the RoundTripMeasurementRequest in the stream.<br/>If ignored, no round trip measurements are made. |
| start | [SLUStart](#slustart) | Indicates the beginning of a logical audio segment (audio context in Speechly terms).<br/>A context MUST be preceded by a SLUStart, (or the deprecated SLUEvent start event)<br/>otherwise the server WILL terminate the stream with an error. |
| stop | [SLUStop](#slustop) | Indicates the end of a logical audio segment (audio context in Speechly terms).<br/>A context MUST be concluded with a SLUStop, (or the deprecated SLUEvent stop event)<br/>otherwise the server WILL terminate the stream with an error. |


### SLUResponse

Top-level message sent by the server for the `Stream` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| audio_context | string | The ID of the audio context that this response belongs to. |
| segment_id | int32 | The ID of the SLU segment that this response belongs to.<br/>This will be 0 for SLUStarted and SLUFinished responses. |
| transcript | [SLUTranscript](#slutranscript) | Final SLU transcript. |
| entity | [SLUEntity](#sluentity) | Final SLU entity. |
| intent | [SLUIntent](#sluintent) | Final SLU intent. |
| segment_end | [SLUSegmentEnd](#slusegmentend) | A special marker message that indicates that the segment with specified `segment_id`<br/>has been finalised and no new responses belonging to that segment will be sent.<br/>The client is expected to discard any tentative responses in this segment. |
| tentative_transcript | [SLUTentativeTranscript](#slutentativetranscript) | Tentative SLU transcript. |
| tentative_entities | [SLUTentativeEntities](#slutentativeentities) | Tentative SLU entities. |
| tentative_intent | [SLUIntent](#sluintent) | Tentative SLU intent. |
| started | [SLUStarted](#slustarted) | A special marker message that indicates that the audio context with specified `audio_context` id<br/>has been started by the API and all audio data sent by the client will be processed in that context.<br/>This message is an asynchronous acknowledgement for client-side SLUEvent_START message. |
| finished | [SLUFinished](#slufinished) | A special marker message that indicates that the audio context with specified `audio_context` id<br/>has been stopped by the API and no new responses for that context will be sent.<br/>The client is expected to discard any non-finalised segments.<br/>This message is an asynchronous acknowledgement for client-side SLUEvent_STOP message. |
| rtt_request | [RoundTripMeasurementRequest](#roundtripmeasurementrequest) | Initiates a round trip network latency measurement. The response handler should respond to this<br/>message by sending a RoundTripMeasurementResponse in the request stream.<br/>The measurement is stored server side and used to minimise the latency in the future. |


### SLUSegmentEnd

Indicates the end of the segment.
Upon receiving this, the segment should be finalised and all future messages for that segment (if any) discarded.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |



### SLUStart

Indicates the beginning and the end of a logical audio segment (audio context in Speechly terms).

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | The `appId` for the utterance.<br/>Required if the authorization token is *project based*. The<br/>given application must be part of the project set in the token.<br/>Not required if the authorization token is *application based*. |
| options | [Option](#slustartoption) | Special options to change the default behaviour of the SLU for this audio segment. |


### SLUStart.Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### SLUStarted

Indicates that the API has started processing the portion of audio as new audio context.
This does not guarantee that the server will not send any more messages for the previous audio context.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |



### SLUStop

Indicates the end of a logical audio segment (audio context in Speechly terms).

#### Fields

| name | type | description |
| ---- | ---- | ----------- |



### SLUTentativeEntities

Describes tentative entities.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| tentative_entities | [SLUEntity](#sluentity) | A list of entities, which must be treated as tentative.<br/><br/>This is not an aggregate of all entities in the audio,<br/>but rather it ONLY contains entities that have not been finalised yet.<br/><br/>e.g. if at the start there are two tentatively recognised entities - ["burger restaurant", "tomorrow"]<br/>but then the API marks "burger restaurant" as final and recognises a new tentative entity "for two",<br/>this will contain ["tomorrow", "for two"]. |


### SLUTentativeTranscript

Describes a tentative transcript.

Tentative transcript is an interim recognition result, which may change over time,
e.g. a phrase "find me a red t-shirt" can be tentatively recognised as "find me a tea",
until the API processes the audio completely.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| tentative_transcript | string | Aggregated tentative transcript from the beginning of the audio until current moment in time.<br/>Consecutive transcripts will have this value appended to,<br/>e.g. if in the first message it's "find me", in the next it may be "find me a t-shirt". |
| tentative_words | [SLUTranscript](#slutranscript) | A list of individual words which compose `tentative_transcript`.<br/>All words must be considered tentative. |


### SLUTranscript

Describes an SLU transcript.
A transcript is a speech-to-text element of the phrase, i.e. a word recognised from the audio.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| word | string | The word recongised from the audio. |
| index | int32 | The position of the word in the whole phrase, zero-based. |
| start_time | int32 | The start time of the word in the audio, in milliseconds from the beginning of the audio. |
| end_time | int32 | The end time of the word in the audio, in milliseconds from the beginning of the audio. |


## Enums

- [SLUConfig.Encoding](#SLUConfig.Encoding)
- [SLUEvent.Event](#SLUEvent.Event)


### SLUConfig.Encoding

The encoding of the audio data sent in the stream.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| LINEAR16 | 0 | Uncompressed 16-bit signed little-endian samples (Linear PCM). |


### SLUEvent.Event

The event type value.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| START | 0 | START indicates the beginning of the audio context. Must be sent before sending audio data. |
| STOP | 1 | STOP indicates the end of the audio context. Must be sent after sending last chunk of audio in that segment. |

