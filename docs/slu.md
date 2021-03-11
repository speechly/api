# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [speechly/slu/v1/slu.proto](#speechly/slu/v1/slu.proto)
    - [SLUConfig](#speechly.slu.v1.SLUConfig)
    - [SLUEntity](#speechly.slu.v1.SLUEntity)
    - [SLUError](#speechly.slu.v1.SLUError)
    - [SLUEvent](#speechly.slu.v1.SLUEvent)
    - [SLUFinished](#speechly.slu.v1.SLUFinished)
    - [SLUIntent](#speechly.slu.v1.SLUIntent)
    - [SLURequest](#speechly.slu.v1.SLURequest)
    - [SLUResponse](#speechly.slu.v1.SLUResponse)
    - [SLUSegmentEnd](#speechly.slu.v1.SLUSegmentEnd)
    - [SLUStarted](#speechly.slu.v1.SLUStarted)
    - [SLUTentativeEntities](#speechly.slu.v1.SLUTentativeEntities)
    - [SLUTentativeTranscript](#speechly.slu.v1.SLUTentativeTranscript)
    - [SLUTranscript](#speechly.slu.v1.SLUTranscript)
  
    - [SLUConfig.Encoding](#speechly.slu.v1.SLUConfig.Encoding)
    - [SLUEvent.Event](#speechly.slu.v1.SLUEvent.Event)
  
    - [SLU](#speechly.slu.v1.SLU)
  
- [Scalar Value Types](#scalar-value-types)



<a name="speechly/slu/v1/slu.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/slu/v1/slu.proto



<a name="speechly.slu.v1.SLUConfig"></a>

### SLUConfig
Describes the configuration of the audio sent by the client.
Currently the API only supports single-channel Linear PCM with sample rate of 16 kHz.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| encoding | [SLUConfig.Encoding](#speechly.slu.v1.SLUConfig.Encoding) |  | The encoding of the audio data sent in the stream. Required. |
| channels | [int32](#int32) |  | The number of channels in the input audio data. Required. |
| sample_rate_hertz | [int32](#int32) |  | Sample rate in Hertz of the audio data sent in the stream. Required. |
| language_code | [string](#string) |  | The language of the audio sent in the stream as a BCP-47 language tag (e.g. &#34;en-US&#34;). Required. |






<a name="speechly.slu.v1.SLUEntity"></a>

### SLUEntity
Describes an SLU entity.

An entity is a specific object in the phrase that falls into some kind of category,
e.g. in a SAL example &#34;*book book a [burger restaurant](restaurant_type) for [tomorrow](date)&#34;
&#34;burger restaurant&#34; would be an entity of type `restaurant_type`,
and &#34;tomorrow&#34; would be an entity of type `date`.

An entity has a start and end indices which map to the indices of words in SLUTranscript messages,
e.g. in the example &#34;book a [burger restaurant](restaurant_type) for [tomorrow](date)&#34; it would be:

* Entity &#34;burger restaurant&#34; - `start_position = 2, end_position = 3`
* Entity &#34;tomorrow&#34; - `start_position = 5, end_position = 5`

The start index is inclusive, but the end index is exclusive, i.e. the interval is `[start_position, end_position)`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entity | [string](#string) |  | The type of the entity, e.g. `restaurant_type` or `date`. |
| value | [string](#string) |  | The value of the entity, e.g. `burger restaurant` or `tomorrow`. |
| start_position | [int32](#int32) |  | The starting index of the entity in the phrase, maps to the `index` field in `SLUTranscript`. Inclusive. |
| end_position | [int32](#int32) |  | The finishing index of the entity in the phrase, maps to the `index` field in `SLUTranscript`. Exclusive. |






<a name="speechly.slu.v1.SLUError"></a>

### SLUError
Describes the error that happened when processing an audio context.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [string](#string) |  | Error code (refer to documentation for specific codes). |
| message | [string](#string) |  | Error message. |






<a name="speechly.slu.v1.SLUEvent"></a>

### SLUEvent
Indicates the beginning and the end of a logical audio segment (audio context in Speechly terms).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| event | [SLUEvent.Event](#speechly.slu.v1.SLUEvent.Event) |  | The event type being sent. Required. |
| app_id | [string](#string) |  | The `appId` for the utterance. - Required in the `START` event if the authorization token is *project based*. The given application must be part of the project set in the token. - Not required if the authorization token is *application based*. |






<a name="speechly.slu.v1.SLUFinished"></a>

### SLUFinished
Indicates that the API has stopped processing current audio context.
It guarantees that no new messages for that context will be sent by the server.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [SLUError](#speechly.slu.v1.SLUError) |  | DEPRECATED An error which has happened when processing the context, if any. |






<a name="speechly.slu.v1.SLUIntent"></a>

### SLUIntent
Describes an SLU intent.
There can be only one intent per SLU segment.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intent | [string](#string) |  | The value of the intent, as defined in SAL. |






<a name="speechly.slu.v1.SLURequest"></a>

### SLURequest
Top-level message sent by the client for the `Stream` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [SLUConfig](#speechly.slu.v1.SLUConfig) |  | Describes the configuration of the audio sent by the client. MUST be the first message sent to the stream. |
| event | [SLUEvent](#speechly.slu.v1.SLUEvent) |  | Indicates the beginning and the end of a logical audio segment (audio context in Speechly terms). A context MUST be preceded by a start event and concluded with a stop event, otherwise the server WILL terminate the stream with an error. |
| audio | [bytes](#bytes) |  | Contains a chunk of the audio being streamed. |






<a name="speechly.slu.v1.SLUResponse"></a>

### SLUResponse
Top-level message sent by the server for the `Stream` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audio_context | [string](#string) |  | The ID of the audio context that this response belongs to. |
| segment_id | [int32](#int32) |  | The ID of the SLU segment that this response belongs to. This will be 0 for SLUStarted and SLUFinished responses. |
| transcript | [SLUTranscript](#speechly.slu.v1.SLUTranscript) |  | Final SLU transcript. |
| entity | [SLUEntity](#speechly.slu.v1.SLUEntity) |  | Final SLU entity. |
| intent | [SLUIntent](#speechly.slu.v1.SLUIntent) |  | Final SLU intent. |
| segment_end | [SLUSegmentEnd](#speechly.slu.v1.SLUSegmentEnd) |  | A special marker message that indicates that the segment with specified `segment_id` has been finalised and no new responses belonging to that segment will be sent. The client is expected to discard any tentative responses in this segment. |
| tentative_transcript | [SLUTentativeTranscript](#speechly.slu.v1.SLUTentativeTranscript) |  | Tentative SLU transcript. |
| tentative_entities | [SLUTentativeEntities](#speechly.slu.v1.SLUTentativeEntities) |  | Tentative SLU entities. |
| tentative_intent | [SLUIntent](#speechly.slu.v1.SLUIntent) |  | Tentative SLU intent. |
| started | [SLUStarted](#speechly.slu.v1.SLUStarted) |  | A special marker message that indicates that the audio context with specified `audio_context` id has been started by the API and all audio data sent by the client will be processed in that context. This message is an asynchronous acknowledgement for client-side SLUEvent_START message. |
| finished | [SLUFinished](#speechly.slu.v1.SLUFinished) |  | A special marker message that indicates that the audio context with specified `audio_context` id has been stopped by the API and no new responses for that context will be sent. The client is expected to discard any non-finalised segments. This message is an asynchronous acknowledgement for client-side SLUEvent_STOP message. |






<a name="speechly.slu.v1.SLUSegmentEnd"></a>

### SLUSegmentEnd
Indicates the end of the segment.
Upon receiving this, the segment should be finalised and all future messages for that segment (if any) discarded.






<a name="speechly.slu.v1.SLUStarted"></a>

### SLUStarted
Indicates that the API has started processing the portion of audio as new audio context.
This does not guarantee that the server will not send any more messages for the previous audio context.






<a name="speechly.slu.v1.SLUTentativeEntities"></a>

### SLUTentativeEntities
Describes tentative entities.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tentative_entities | [SLUEntity](#speechly.slu.v1.SLUEntity) | repeated | A list of entities, which must be treated as tentative.

This is not an aggregate of all entities in the audio, but rather it ONLY contains entities that have not been finalised yet.

e.g. if at the start there are two tentatively recognised entities - [&#34;burger restaurant&#34;, &#34;tomorrow&#34;] but then the API marks &#34;burger restaurant&#34; as final and recognises a new tentative entity &#34;for two&#34;, this will contain [&#34;tomorrow&#34;, &#34;for two&#34;]. |






<a name="speechly.slu.v1.SLUTentativeTranscript"></a>

### SLUTentativeTranscript
Describes a tentative transcript.

Tentative transcript is an interim recognition result, which may change over time,
e.g. a phrase &#34;find me a red t-shirt&#34; can be tentatively recognised as &#34;find me a tea&#34;,
until the API processes the audio completely.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tentative_transcript | [string](#string) |  | Aggregated tentative transcript from the beginning of the audio until current moment in time. Consecutive transcripts will have this value appended to, e.g. if in the first message it&#39;s &#34;find me&#34;, in the next it may be &#34;find me a t-shirt&#34;. |
| tentative_words | [SLUTranscript](#speechly.slu.v1.SLUTranscript) | repeated | A list of individual words which compose `tentative_transcript`. All words must be considered tentative. |






<a name="speechly.slu.v1.SLUTranscript"></a>

### SLUTranscript
Describes an SLU transcript.
A transcript is a speech-to-text element of the phrase, i.e. a word recognised from the audio.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| word | [string](#string) |  | The word recongised from the audio. |
| index | [int32](#int32) |  | The position of the word in the whole phrase, zero-based. |
| start_time | [int32](#int32) |  | The end time of the word in the audio, in milliseconds from the beginning of the audio. |
| end_time | [int32](#int32) |  | The end time of the word in the audio, in milliseconds from the beginning of the audio. |





 


<a name="speechly.slu.v1.SLUConfig.Encoding"></a>

### SLUConfig.Encoding
The encoding of the audio data sent in the stream.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LINEAR16 | 0 | Uncompressed 16-bit signed little-endian samples (Linear PCM). |



<a name="speechly.slu.v1.SLUEvent.Event"></a>

### SLUEvent.Event
The event type value.

| Name | Number | Description |
| ---- | ------ | ----------- |
| START | 0 | START indicates the beginning of the audio context. Must be sent before sending audio data. |
| STOP | 1 | STOP indicates the end of the audio context. Must be sent after sending last chunk of audio in that segment. |


 

 


<a name="speechly.slu.v1.SLU"></a>

### SLU
Service that implements Speechly SLU (Spoken Language Understanding) API (https://speechly.com/docs/api/slu).

To use this service you MUST use an access token from Speechly Identity API (https://speechly.com/docs/api/identity).
The token MUST be passed in gRPC metadata with &#34;Authorization&#34; key and Bearer $ACCESS_TOKEN&#34; as value, e.g. in Go:

ctx := context.Background()
ctx = metadata.AppendToOutgoingContext(ctx, &#34;Authorization&#34;, &#34;Bearer &#34;&#43;accessToken)
stream, err := speechlySLUClient.Stream(ctx)

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Stream | [SLURequest](#speechly.slu.v1.SLURequest) stream | [SLUResponse](#speechly.slu.v1.SLUResponse) stream | Performs bidirectional streaming speech recognition: receive results while sending audio.

First request MUST be an SLUConfig message with the configuration that describes the audio format being sent.

This RPC can handle multiple logical audio segments with the use of SLUEvent_START and SLUEvent_STOP messages, which are used to indicate the beginning and the end of a segment.

A typical call timeline will look like this:

1. Client starts the RPC. 2. Client sends SLUConfig message with audio configuration. 3. Client sends SLUEvent_START. 4. Client sends audio and receives responses from the server. 5. Client sends SLUEvent_STOP. 6. Client sends SLUEvent_START. 7. Client sends audio and receives responses from the server. 8. Client sends SLUEvent_STOP. 9. Client closes the stream and receives responses from the server until EOF is received.

NB: the client does not have to wait until the server acknowledges the start / stop events, this is done asynchronously. The client can deduplicate responses based on the audio context ID, which will be present in every response message. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

