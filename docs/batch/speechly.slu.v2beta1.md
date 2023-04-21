
# speechly.slu.v2beta1.BatchAPI

Run Speechly Batch API operations on audio sources without actively waiting the results.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| ProcessAudioSource | [ProcessAudioSourceRequest](#speechlysluv2beta1processaudiosourcerequest) | [ProcessAudioSourceResponse](#speechlysluv2beta1processaudiosourceresponse) | Create a new background Speechly Batch API operation for a one or more audio sources.<br/>Audio sources must be URIs of a files, reachable from the API<br/>The response includes an `id` that is used to match the operation to the<br/>results. A `reference` identifier can also be set.<br/>Also a `batch_reference` can be set to mark that multiple audio sources form a<br/>logical batch. In that case, the response will include a `batch_id`. |
| QueryStatus | [QueryStatusRequest](#speechlysluv2beta1querystatusrequest) | [QueryStatusResponse](#speechlysluv2beta1querystatusresponse) | Query the status of given operations.<br/>If the `ProcessAudioSourceRequest` did not define a `destination` or `completion_webhook`<br/>as a destination, the results are returned in the `QueryStatusResponse`. |

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


### speechly.slu.v2beta1.HttpResource

Describes full properties of an HTTP endpoint.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| url | string | URL of the endpoint (protocol://server/path)<br/>Required. |
| method | [Method](#speechlysluv2beta1httpresourcemethod) | method to use in connection.<br/>Optional. |
| headers | [Header](#speechlysluv2beta1httpresourceheader) | Possible additional headers to include in the connection.<br/>Optional. |


### speechly.slu.v2beta1.HttpResource.Header

A single header value in an HTTP request.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| name | string | Name of the header to set in request. |
| value | string | Value of the given header in request. |


### speechly.slu.v2beta1.Operation

Describes a single batch operation.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| id | string | The id of the operation. |
| reference | string | The reference id of the operation, if given. |
| batch_id | string | The id of the batch the operation belongs to. |
| batch_reference | string | The reference id of the operation, if given. |
| status | [Status](#speechlysluv2beta1operationstatus) | The current status of the operation. |
| language_code | string | The language code of the detected language. |
| app_id | string | The application context for the operation. |
| result | [OperationResult](#speechlysluv2beta1operationresult) | If the operation status is STATUS_DONE and the destination is not set,<br/>the results of the processing. |
| duration | [Duration](#googleprotobufduration) | The duration of the audio. |
| error_code | [ErrorCode](#speechlysluv2beta1operationerrorcode) | Machine-readable status for the operation.<br/>Only set if operation status is STATUS_ERROR. |
| error_description | string | Contains a human readable description of the error.<br/>Only set if operation status is STATUS_ERROR. |
| source_url | string | The locator to the source audio. |
| destination_url | string | The locator to the result target. |


### speechly.slu.v2beta1.OperationResult

Describes the results of the processing that took place.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| type | [ResultType](#speechlysluv2beta1operationresultresulttype) | The type of this result. |
| text | string | The textual representation of the results. |
| tokens | [Token](#speechlysluv2beta1token) | The tokenized representation of the result. Only available if requested in<br/>the `ProcessingConfiguration`. |


### speechly.slu.v2beta1.Option

Option to change the default behaviour of the SLU.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| key | string | The key of the option to be set. |
| value | string | The values to set the option to. |


### speechly.slu.v2beta1.ProcessAudioBatchConfig

Describes the configuration options common for the input batch.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | The processing context, Speechly Application ID.<br/>Optional. If not provided, the processing context will be determined<br/>from the login information. |
| language_codes | string | The language(s) of the audio sent in the request as a BCP-47 language tag<br/>(e.g. "en-US"). Defaults to the target application language(s).<br/>Optional. |
| processing_config | [ProcessingConfiguration](#speechlysluv2beta1processingconfiguration) | Processing configuration.<br/>Optional, defaults to transcribe. |
| batch_reference | string | Reference id for a set of related operations. For example an identifier of<br/>the source system.<br/>Optional. |
| options | [Option](#speechlysluv2beta1option) | Additional batch specific options.<br/>Optional. |


### speechly.slu.v2beta1.ProcessAudioSourceRequest

Describes a request to process audio from a pre-existing source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| config | [ProcessAudioBatchConfig](#speechlysluv2beta1processaudiobatchconfig) | The options shared by all of the source audios. |
| source | [ProcessAudioSourceRequestItem](#speechlysluv2beta1processaudiosourcerequestitem) | The source audios, and their unique options. |


### speechly.slu.v2beta1.ProcessAudioSourceRequestItem

Describes the configuration options unique to a single audio source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| source_url | string | The locator to the source audio.<br/>Required. |
| destination_url | string | The locator to the result target. The payload will be `Operation` as JSON.<br/>Optional. |
| completion_webhook | [HttpResource](#speechlysluv2beta1httpresource) | HTTP endpoint to be notified on completion of the processing. The payload<br/>will be `Operation` as JSON.<br/>Optional. |
| reference | string | Reference id for the operation. For example an identifier of the source<br/>system.<br/>Optional. |
| device_id | string | The device ID of the audio source, for example a microphone identifier as<br/>UUID.<br/>Optional. |


### speechly.slu.v2beta1.ProcessAudioSourceResponse

Describes a response to request to process audio from a pre-existing source.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechlysluv2beta1operation) | The details of the created operations. |


### speechly.slu.v2beta1.ProcessingConfiguration

Describes the processing options for the audio. Note that not all options are
available for all languages or on all Payment Plans.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| tokenize | bool | The processing should include the token level transcription and<br/>determination of time stamps for tokens.<br/>Optional, defaults to false. |
| translate | bool | The processing should include translating the audio to English.<br/>Optional, defaults to false. |
| skip_transcribe | bool | The processing should not include transcribing the audio to the source<br/>language. This option should be used with translate (or other similar<br/>option) to suppress the normal Speech Recognition processing.<br/>Optional, defaults to false. |


### speechly.slu.v2beta1.QueryStatusRequest

Query the status of an operation. At least one of these must be given.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation_ids | string | ID of an audio processing operation. |
| operation_references | string | Reference ID of an operation. |
| batch_id | string | ID of an audio processing batch. |
| batch_reference | string | Reference ID of a batch. |


### speechly.slu.v2beta1.QueryStatusResponse

Describes the statuses of the queried operations.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| operation | [Operation](#speechlysluv2beta1operation) | The details of the audio processing operation. |


### speechly.slu.v2beta1.Token

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


### speechly.slu.v2beta1.HttpResource.Method

The HTTP method to use when accessing an HTTP resource.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| METHOD_UNSPECIFIED | 0 | Method is not given, and default method is used for requests.<br/>Data fetches use GET, and result sending POST. |
| METHOD_GET | 1 | Use HTTP GET. |
| METHOD_POST | 2 | Use HTTP POST. |
| METHOD_PUT | 3 | Use HTTP PUT. |


### speechly.slu.v2beta1.Operation.ErrorCode

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


### speechly.slu.v2beta1.Operation.Status

The status of the operation.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| STATUS_UNSPECIFIED | 0 | Default status is empty. |
| STATUS_PENDING | 1 | The operation is queued for processing. |
| STATUS_DONE | 2 | The operation is complete and transcript is available. |
| STATUS_ERROR | 3 | The processing failed. Error reason is available. |


### speechly.slu.v2beta1.OperationResult.ResultType

The possible types for the operation result.

#### Values

| name | value | description |
| ---- | ----- | ----------- |
| RESULT_TYPE_UNSPECIFIED | 0 | Result type is not set. |
| RESULT_TYPE_TRANSCRIPT_LEXICAL | 1 | The actual words of the audio with no additional processing applied. |
| RESULT_TYPE_TRANSCRIPT_DISPLAY | 2 | The content of the audio formatted to be displayed on screen, with eg.<br/>punctuation and capitalization included. |
| RESULT_TYPE_TRANSCRIPT_TRANSLATION | 3 | The content of the audio translated to English. |

