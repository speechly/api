
# <a name="speechly.slu.v2beta1.BatchAPI"></a>speechly.slu.v2beta1.BatchAPI

Run Speechly Batch API operations on audio sources without actively waiting the results.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| ProcessAudioSource | [ProcessAudioSourceRequest](#speechly.slu.v2beta1.ProcessAudioSourceRequest) | [ProcessAudioSourceResponse](#speechly.slu.v2beta1.ProcessAudioSourceResponse) | Create a new background Speechly Batch API operation for a one or more audio sources.<br/>Audio sources must be URIs of a files, reachable from the API<br/>The response includes an `id` that is used to match the operation to the<br/>results. A `reference` identifier can also be set.<br/>Also a `batch_reference` can be set to mark that multiple audio sources form a<br/>logical batch. In that case, the response will include a `batch_id`. |
| QueryStatus | [QueryStatusRequest](#speechly.slu.v2beta1.QueryStatusRequest) | [QueryStatusResponse](#speechly.slu.v2beta1.QueryStatusResponse) | Query the status of given operations.<br/>If the `ProcessAudioSourceRequest` did not define a `destination` or `completion_webhook`<br/>as a destination, the results are returned in the `QueryStatusResponse`. |

## Messages

- [HttpResource](#speechly.slu.v2beta1.HttpResource)
- [HttpResource.Header](#speechly.slu.v2beta1.HttpResource.Header)
- [Operation](#speechly.slu.v2beta1.Operation)
- [OperationResult](#speechly.slu.v2beta1.OperationResult)
- [Option](#speechly.slu.v2beta1.Option)
- [ProcessAudioBatchConfig](#speechly.slu.v2beta1.ProcessAudioBatchConfig)
- [ProcessAudioSourceRequest](#speechly.slu.v2beta1.ProcessAudioSourceRequest)
- [ProcessAudioSourceRequestItem](#speechly.slu.v2beta1.ProcessAudioSourceRequestItem)
- [ProcessAudioSourceResponse](#speechly.slu.v2beta1.ProcessAudioSourceResponse)
- [ProcessingConfiguration](#speechly.slu.v2beta1.ProcessingConfiguration)
- [QueryStatusRequest](#speechly.slu.v2beta1.QueryStatusRequest)
- [QueryStatusResponse](#speechly.slu.v2beta1.QueryStatusResponse)
- [Token](#speechly.slu.v2beta1.Token)


### <a name="speechly.slu.v2beta1.HttpResource"></a>HttpResource

Describes full properties of an HTTP endpoint.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| url | string | URL of the endpoint (protocol://server/path)<br/>Required. |
| method | [Method](#speechly.slu.v2beta1.HttpResource.Method) | method to use in connection.<br/>Optional. |
| headers | [Header](#speechly.slu.v2beta1.HttpResource.Header) | Possible additional headers to include in the connection.<br/>Optional. |


### <a name="speechly.slu.v2beta1.HttpResource.Header"></a>HttpResource.Header

A single header value in an HTTP request.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| name | string | Name of the header to set in request. |
| value | string | Value of the given header in request. |


### <a name="speechly.slu.v2beta1.Operation"></a>Operation

Describes a single batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | The id of the operation. |
| reference | string | The reference id of the operation, if given. |
| batch_id | string | The id of the batch the operation belongs to. |
| batch_reference | string | The reference id of the operation, if given. |
| status | [Status](#speechly.slu.v2beta1.Operation.Status) | The current status of the operation. |
| language_code | string | The language code of the detected language. |
| app_id | string | The application context for the operation. |
| result | [OperationResult](#speechly.slu.v2beta1.OperationResult) | If the operation status is STATUS_DONE and the destination is not set,<br/>the results of the processing. |
| duration | [Duration](#google.protobuf.Duration) | The duration of the audio. |
| error_code | [ErrorCode](#speechly.slu.v2beta1.Operation.ErrorCode) | Machine-readable status for the operation.<br/>Only set if operation status is STATUS_ERROR. |
| error_description | string | Contains a human readable description of the error.<br/>Only set if operation status is STATUS_ERROR. |
| source_url | string | The locator to the source audio. |
| destination_url | string | The locator to the result target. |


### <a name="speechly.slu.v2beta1.OperationResult"></a>OperationResult

Describes the results of the processing that took place.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| type | [ResultType](#speechly.slu.v2beta1.OperationResult.ResultType) | The type of this result. |
| text | string | The textual representation of the results. |
| tokens | [Token](#speechly.slu.v2beta1.Token) | The tokenized representation of the result. Only available if requested in<br/>the `ProcessingConfiguration`. |


### <a name="speechly.slu.v2beta1.Option"></a>Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### <a name="speechly.slu.v2beta1.ProcessAudioBatchConfig"></a>ProcessAudioBatchConfig

Describes the configuration options common for the input batch.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | The processing context, Speechly Application ID.<br/>Optional. If not provided, the processing context will be determined<br/>from the login information. |
| language_codes | string | The language(s) of the audio sent in the request as a BCP-47 language tag<br/>(e.g. "en-US"). Defaults to the target application language(s).<br/>Optional. |
| processing_config | [ProcessingConfiguration](#speechly.slu.v2beta1.ProcessingConfiguration) | Processing configuration.<br/>Optional, defaults to transcribe. |
| batch_reference | string | Reference id for a set of related operations. For example an identifier of<br/>the source system.<br/>Optional. |
| options | [Option](#speechly.slu.v2beta1.Option) | Additional batch specific options.<br/>Optional. |


### <a name="speechly.slu.v2beta1.ProcessAudioSourceRequest"></a>ProcessAudioSourceRequest

Describes a request to process audio from a pre-existing source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| config | [ProcessAudioBatchConfig](#speechly.slu.v2beta1.ProcessAudioBatchConfig) | The options shared by all of the source audios. |
| source | [ProcessAudioSourceRequestItem](#speechly.slu.v2beta1.ProcessAudioSourceRequestItem) | The source audios, and their unique options. |


### <a name="speechly.slu.v2beta1.ProcessAudioSourceRequestItem"></a>ProcessAudioSourceRequestItem

Describes the configuration options unique to a single audio source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| source_url | string | The locator to the source audio.<br/>Required. |
| destination_url | string | The locator to the result target. The payload will be `Operation` as JSON.<br/>Optional. |
| completion_webhook | [HttpResource](#speechly.slu.v2beta1.HttpResource) | HTTP endpoint to be notified on completion of the processing. The payload<br/>will be `Operation` as JSON.<br/>Optional. |
| reference | string | Reference id for the operation. For example an identifier of the source<br/>system.<br/>Optional. |
| device_id | string | The device ID of the audio source, for example a microphone identifier as<br/>UUID.<br/>Optional. |


### <a name="speechly.slu.v2beta1.ProcessAudioSourceResponse"></a>ProcessAudioSourceResponse

Describes a response to request to process audio from a pre-existing source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechly.slu.v2beta1.Operation) | The details of the created operations. |


### <a name="speechly.slu.v2beta1.ProcessingConfiguration"></a>ProcessingConfiguration

Describes the processing options for the audio. Note that not all options are
available for all languages or on all Payment Plans.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| tokenize | bool | The processing should include the token level transcription and<br/>determination of time stamps for tokens.<br/>Optional, defaults to false. |
| translate | bool | The processing should include translating the audio to English.<br/>Optional, defaults to false. |
| skip_transcribe | bool | The processing should not include transcribing the audio to the source<br/>language. This option should be used with translate (or other similar<br/>option) to suppress the normal Speech Recognition processing.<br/>Optional, defaults to false. |


### <a name="speechly.slu.v2beta1.QueryStatusRequest"></a>QueryStatusRequest

Query the status of an operation. At least one of these must be given.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation_ids | string | ID of an audio processing operation. |
| operation_references | string | Reference ID of an operation. |
| batch_id | string | ID of an audio processing batch. |
| batch_reference | string | Reference ID of a batch. |


### <a name="speechly.slu.v2beta1.QueryStatusResponse"></a>QueryStatusResponse

Describes the statuses of the queried operations.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechly.slu.v2beta1.Operation) | The details of the audio processing operation. |


### <a name="speechly.slu.v2beta1.Token"></a>Token

Describes a single meaningful unit of speech. In languages that use spaces to
separate words, closely maps to those words.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| token | string | The token described. |
| index | int32 | The position of the token in the whole phrase, zero-based. |
| start_time | int32 | The end time of the token in the audio, in milliseconds from the beginning<br/>of the audio. |
| end_time | int32 | The end time of the token in the audio, in milliseconds from the beginning<br/>of the audio. |


## Enums

- [HttpResource.Method](#speechly.slu.v2beta1.HttpResource.Method)
- [Operation.ErrorCode](#speechly.slu.v2beta1.Operation.ErrorCode)
- [Operation.Status](#speechly.slu.v2beta1.Operation.Status)
- [OperationResult.ResultType](#speechly.slu.v2beta1.OperationResult.ResultType)


### <a name="speechly.slu.v2beta1.HttpResource.Method"></a>HttpResource.Method

The HTTP method to use when accessing an HTTP resource.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| METHOD_UNSPECIFIED | 0 | Method is not given, and default method is used for requests.<br/>Data fetches use GET, and result sending POST. |
| METHOD_GET | 1 | Use HTTP GET. |
| METHOD_POST | 2 | Use HTTP POST. |
| METHOD_PUT | 3 | Use HTTP PUT. |


### <a name="speechly.slu.v2beta1.Operation.ErrorCode"></a>Operation.ErrorCode

Contains a machine readable error type if the operation status is
STATUS_ERROR.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| ERROR_UNSPECIFIED | 0 | No error is set. |
| ERROR_UNSUPPORTED_LANGUAGE | 1 | The input was in a language that was not supported in this context. |
| ERROR_INTERNAL | 2 | An internal error occurred. |
| ERROR_INVALID_PARAMETERS | 3 | Given parameters cannot be used to process the given input. |
| ERROR_INVALID_SOURCE | 4 | The source could not be read or understood. |
| ERROR_INVALID_DESTINATION | 5 | The results could not be written to the destination. |
| ERROR_INVALID_AUDIO | 6 | The provided audio was not in a supported format. |


### <a name="speechly.slu.v2beta1.Operation.Status"></a>Operation.Status

The status of the operation.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| STATUS_UNSPECIFIED | 0 | Default status is empty. |
| STATUS_PENDING | 1 | The operation is queued for processing. |
| STATUS_DONE | 2 | The operation is complete and transcript is available. |
| STATUS_ERROR | 3 | The processing failed. Error reason is available. |


### <a name="speechly.slu.v2beta1.OperationResult.ResultType"></a>OperationResult.ResultType

The possible types for the operation result.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| RESULT_TYPE_UNSPECIFIED | 0 | Result type is not set. |
| RESULT_TYPE_TRANSCRIPT_LEXICAL | 1 | The actual words of the audio with no additional processing applied. |
| RESULT_TYPE_TRANSCRIPT_DISPLAY | 2 | The content of the audio formatted to be displayed on screen, with eg.<br/>punctuation and capitalization included. |
| RESULT_TYPE_TRANSCRIPT_TRANSLATION | 3 | The content of the audio translated to English. |


# <a name="speechly.slu.v1.BatchAPI"></a>speechly.slu.v1.BatchAPI

Run SLU operations on audio sources without actively waiting the results.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| ProcessAudio | [ProcessAudioRequest stream](#speechly.slu.v1.ProcessAudioRequest) | [ProcessAudioResponse](#speechly.slu.v1.ProcessAudioResponse) | Create a new background SLU operation for a single audio source.<br/>An audio source can be<br/> - audio chunks sent via repeated ProcessAudioRequests, or<br/> - URI of a file, reachable from the API<br/> The response includes an `id` that is used to match the operation to the<br/> results. A `reference` identifier can also be set.<br/> The destination can be a webhook URL, in which case the results are posted<br/> there when they are ready. The payload is an instance of `Operation`. |
| QueryStatus | [QueryStatusRequest](#speechly.slu.v1.QueryStatusRequest) | [QueryStatusResponse](#speechly.slu.v1.QueryStatusResponse) | Query the status of a given batch operation.<br/>If the `ProcessAudioRequest` did not define a `results_uri` as a<br/>destination, the results are returned in the `QueryStatusResponse`. |

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


### <a name="speechly.slu.v1.AudioConfiguration"></a>AudioConfiguration

Describes the audio content of the batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| encoding | [Encoding](#speechly.slu.v1.AudioConfiguration.Encoding) | The encoding of the audio data sent in the stream.<br/>Required. |
| channels | int32 | The number of channels in the input audio data.<br/>Required. |
| sample_rate_hertz | int32 | Sample rate in Hertz of the audio data sent in the stream (e.g. 16000).<br/>Required. |
| language_codes | string | The language(s) of the audio sent in the stream as a BCP-47 language tag<br/>(e.g. "en-US"). Defaults to the target application language.<br/>Optional. |


### <a name="speechly.slu.v1.HttpResource"></a>HttpResource

Describes full properties of an HTTP endpoint.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| url | string | URL of the endpoint (protocol://server/path)<br/>Required. |
| method | [Method](#speechly.slu.v1.HttpResource.Method) | method to use in connection.<br/>Required. |
| headers | [Header](#speechly.slu.v1.HttpResource.Header) | Possible additional headers to include in the connection.<br/>Optional. |


### <a name="speechly.slu.v1.HttpResource.Header"></a>HttpResource.Header

A single header value.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| name | string |  |
| value | string |  |


### <a name="speechly.slu.v1.Operation"></a>Operation

Describes a single batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | The id of the operation. |
| reference | string | The reference id of the operation, if given. |
| status | [Status](#speechly.slu.v1.Operation.Status) | The current status of the operation. |
| language_code | string | The language code of the detected language. |
| app_id | string | The application context for the operation. |
| device_id | string | The device or microphone id for the audio, if applicable. |
| transcripts | [Transcript](#speechly.slu.v1.Transcript) | If the operation status is STATUS_DONE and the destination is not set,<br/>the results of the operation. |
| error | string | Contains a description of the error if the operation status is<br/>STATUS_ERROR. |
| duration | [Duration](#google.protobuf.Duration) | The duration of the audio. |


### <a name="speechly.slu.v1.Option"></a>Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### <a name="speechly.slu.v1.ProcessAudioRequest"></a>ProcessAudioRequest

If sending a stream of `ProcessAudioRequest` messages, the first one must
contain the `AudioConfiguration` for the audio data. The `config` is ignored
in the following messages.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | The processing context, Speechly application ID.<br/>Required. |
| device_id | string | The device ID of the audio source, for example a microphone<br/>identifier as UUID.<br/>Optional. |
| config | [AudioConfiguration](#speechly.slu.v1.AudioConfiguration) | Audio configuration.<br/>Required. |
| audio | bytes | Raw audio data. |
| uri | string | URI of audio data. Can be http or GCS. |
| http_source | [HttpResource](#speechly.slu.v1.HttpResource) | Detailed HTTP source data. |
| results_uri | string | Basic HTTP POST destination.<br/>The payload will be `Operation` as JSON. |
| http_result | [HttpResource](#speechly.slu.v1.HttpResource) | A more fine-grained result target, supporting HTTP method and HTTP headers.<br/>The payload will be `Operation` as JSON. |
| reference | string | Reference id for the operation. For example an identifier of the source<br/>system.<br/>Optional. |
| options | [Option](#speechly.slu.v1.Option) | Additional operation specific options.<br/>Optional. |


### <a name="speechly.slu.v1.ProcessAudioResponse"></a>ProcessAudioResponse



#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechly.slu.v1.Operation) | The details of the created operation. |


### <a name="speechly.slu.v1.QueryStatusRequest"></a>QueryStatusRequest

Query the status of an operation. Either `id` or `reference` must be given.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | ID of an audio processing operation. |
| reference | string | Reference ID of an operation. |


### <a name="speechly.slu.v1.QueryStatusResponse"></a>QueryStatusResponse



#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechly.slu.v1.Operation) | The details of the audio processing operation. |


### <a name="speechly.slu.v1.Transcript"></a>Transcript

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


### <a name="speechly.slu.v1.AudioConfiguration.Encoding"></a>AudioConfiguration.Encoding

The encoding of the audio data sent in the stream.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| ENCODING_INVALID | 0 |  |
| ENCODING_LINEAR16 | 1 | Uncompressed 16-bit signed little-endian samples (Linear PCM). |


### <a name="speechly.slu.v1.HttpResource.Method"></a>HttpResource.Method

The HTTP method to use.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| METHOD_INVALID | 0 |  |
| METHOD_GET | 1 |  |
| METHOD_POST | 2 |  |
| METHOD_PUT | 3 |  |


### <a name="speechly.slu.v1.Operation.Status"></a>Operation.Status

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


