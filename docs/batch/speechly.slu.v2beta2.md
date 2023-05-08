
# speechly.slu.v2beta2.BatchAPI

Run Speechly Batch API operations on audio sources without actively waiting
the results.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| ProcessAudioSource | [ProcessAudioSourceRequest](#processaudiosourcerequest) | [ProcessAudioSourceResponse](#processaudiosourceresponse) | Create a new background Speechly Batch API operation for a one or more<br/>audio sources. Audio sources must be URIs of a files, reachable from the<br/>API The response includes an `id` that is used to match the operation to<br/>the results. A `reference` identifier can also be set. Also a<br/>`batch_reference` can be set to mark that multiple audio sources form a<br/>logical batch. In that case, the response will include a `batch_id`. |
| QueryStatus | [QueryStatusRequest](#querystatusrequest) | [QueryStatusResponse](#querystatusresponse) | Query the status of given operations.<br/>If the `ProcessAudioSourceRequest` did not define a `destination` or<br/>`completion_webhook` as a destination, the results are returned in the<br/>`QueryStatusResponse`. |

## Messages

- [BatchConfig](#batchconfig)
- [BatchOutput](#batchoutput)
- [BatchTasks](#batchtasks)
- [HttpResource](#httpresource)
- [HttpResource.Header](#httpresource.header)
- [Operation](#operation)
- [OperationResult](#operationresult)
- [Option](#option)
- [ProcessAudioSourceRequest](#processaudiosourcerequest)
- [ProcessAudioSourceRequestItem](#processaudiosourcerequestitem)
- [ProcessAudioSourceResponse](#processaudiosourceresponse)
- [QueryStatusRequest](#querystatusrequest)
- [QueryStatusResponse](#querystatusresponse)
- [Token](#token)


### BatchConfig

Describes the configuration options common for the input batch.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| model_id | string | ID of the language model to use when processing the audio.<br/>Optional. If not provided, the model to use will be determined<br/>from the login information or from language detection. |
| language_codes | string | The language(s) of the audio sent in the request as a BCP-47 language tag<br/>(e.g. "en-US"). Defaults to the target application language(s).<br/>Optional. |
| batch_reference | string | Reference id for a set of related operations. For example an identifier of<br/>the source system.<br/>Optional. |
| options | [Option](#option) | Additional batch specific options.<br/>Optional. |


### BatchOutput

Define the output formats for results. If all options are set as false,
`display` is returned.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| display | bool | return text formatted for display, ie. capitalized and punctuated.<br/>Optional, defaults to false. |
| lexical | bool | return lexical version of the transcript, ie. lower case and no<br/>punctuation.<br/>Optional, defaults to false. |


### BatchTasks

Describes the processing options for the audio. Note that not all options are
available for all languages or on all Payment Plans.
If all options are left to default values, `transcribe` is set as default.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| transcribe | bool | Results will include a transcription of the audio.<br/>Optional, defaults to true. |
| tokenize | bool | The processing should include the token level transcription and<br/>determination of time stamps for tokens.<br/>Optional, defaults to false. |
| translate | bool | The processing should include translating the audio to English.<br/>Optional, defaults to false. |


### HttpResource

Describes full properties of an HTTP endpoint.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| url | string | URL of the endpoint (protocol://server/path)<br/>Required. |
| method | [Method](#httpresourcemethod) | method to use in connection.<br/>Optional. |
| headers | [Header](#httpresourceheader) | Possible additional headers to include in the connection.<br/>Optional. |


### HttpResource.Header

A single header value in an HTTP request.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| name | string | Name of the header to set in request. |
| value | string | Value of the given header in request. |


### Operation

Describes a single batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | The id of the operation. |
| reference | string | The reference id of the operation, if given. |
| batch_id | string | The id of the batch the operation belongs to. |
| batch_reference | string | The reference id of the operation, if given. |
| status | [Status](#operationstatus) | The current status of the operation. |
| language_code | string | The language code of the detected language. |
| app_id | string | The application context for the operation. |
| result | [OperationResult](#operationresult) | If the operation status is STATUS_DONE and the destination is not set,<br/>the results of the processing. |
| duration | [Duration](#googleprotobufduration) | The duration of the audio. |
| error_code | [ErrorCode](#operationerrorcode) | Machine-readable status for the operation.<br/>Only set if operation status is STATUS_ERROR. |
| error_description | string | Contains a human readable description of the error.<br/>Only set if operation status is STATUS_ERROR. |
| source_url | string | The locator to the source audio. |
| destination_url | string | The locator to the result target. |


### OperationResult

Describes the results of the processing that took place.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| type | [ResultType](#operationresultresulttype) | The type of this result. |
| text | string | The textual representation of the results. |
| tokens | [Token](#token) | The tokenized representation of the result. Only available if requested in<br/>the `ProcessingConfiguration`. |


### Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### ProcessAudioSourceRequest

Describes a request to process audio from a pre-existing source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| tasks | [BatchTasks](#batchtasks) | tasks describe the requested operations for the given audio.<br/>Optional, defaults to `transcribe`. |
| config | [BatchConfig](#batchconfig) | The options shared by all of the source audios.<br/>Optional. |
| output | [BatchOutput](#batchoutput) | Define the output formatting for text results.<br/>Optional, defaults to `display`. |
| source | [ProcessAudioSourceRequestItem](#processaudiosourcerequestitem) | The source audios, and their unique options. |


### ProcessAudioSourceRequestItem

Describes the configuration options unique to a single audio source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| source_url | string | The locator to the source audio.<br/>Required. |
| destination_url | string | The locator to the result target. The payload will be `Operation` as JSON.<br/>Optional. |
| completion_webhook | [HttpResource](#httpresource) | HTTP endpoint to be notified on completion of the processing. The payload<br/>will be `Operation` as JSON.<br/>Optional. |
| reference | string | Reference id for the operation. For example an identifier of the source<br/>system.<br/>Optional. |
| device_id | string | The device ID of the audio source, for example a microphone identifier as<br/>UUID.<br/>Optional. |


### ProcessAudioSourceResponse

Describes a response to request to process audio from a pre-existing source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#operation) | The details of the created operations. |


### QueryStatusRequest

Query the status of an operation. At least one of these must be given.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation_ids | string | ID of an audio processing operation. |
| operation_references | string | Reference ID of an operation.<br/>Optional. |
| batch_id | string | ID of an audio processing batch.<br/>Optional. |
| batch_reference | string | Reference ID of a batch.<br/>Optional. |


### QueryStatusResponse

Describes the statuses of the queried operations.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#operation) | The details of the audio processing operation. |


### Token

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

- [HttpResource.Method](#HttpResource.Method)
- [Operation.ErrorCode](#Operation.ErrorCode)
- [Operation.Status](#Operation.Status)
- [OperationResult.ResultType](#OperationResult.ResultType)


### HttpResource.Method

The HTTP method to use when accessing an HTTP resource.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| METHOD_UNSPECIFIED | 0 | Method is not given, and default method is used for requests.<br/>Data fetches use GET, and result sending POST. |
| METHOD_GET | 1 | Use HTTP GET. |
| METHOD_POST | 2 | Use HTTP POST. |
| METHOD_PUT | 3 | Use HTTP PUT. |


### Operation.ErrorCode

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


### Operation.Status

The status of the operation.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| STATUS_UNSPECIFIED | 0 | Default status is empty. |
| STATUS_PENDING | 1 | The operation is queued for processing. |
| STATUS_DONE | 2 | The operation is complete and transcript is available. |
| STATUS_ERROR | 3 | The processing failed. Error reason is available. |


### OperationResult.ResultType

The possible types for the operation result.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| RESULT_TYPE_UNSPECIFIED | 0 | Result type is not set. |
| RESULT_TYPE_TRANSCRIPT_LEXICAL | 1 | The actual words of the audio with no additional processing applied. |
| RESULT_TYPE_TRANSCRIPT_DISPLAY | 2 | The content of the audio formatted to be displayed on screen, with eg.<br/>punctuation and capitalization included. |
| RESULT_TYPE_TRANSCRIPT_TRANSLATION | 3 | The content of the audio translated to English. |

