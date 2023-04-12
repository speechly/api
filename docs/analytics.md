
<a name="speechly.analytics.v1.AnalyticsAPI"></a>
# speechly.analytics.v1.AnalyticsAPI

Speechly Analytics API contains methods to get accumulated access data
for given apps and/or projects.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| UtteranceStatistics | [UtteranceStatisticsRequest](#speechly.analytics.v1.UtteranceStatisticsRequest) | [UtteranceStatisticsResponse](#speechly.analytics.v1.UtteranceStatisticsResponse) | Get a summary of utterances for a given time period. |
| Utterances | [UtterancesRequest](#speechly.analytics.v1.UtterancesRequest) | [UtterancesResponse](#speechly.analytics.v1.UtterancesResponse) | Get a sample of recent utterances. |
| RegisterUtterance | [RegisterUtteranceRequest](#speechly.analytics.v1.RegisterUtteranceRequest) | [RegisterUtteranceResponse](#speechly.analytics.v1.RegisterUtteranceResponse) | Register a data point of an on-device utterance. |

## Messages

- [DecoderInfo](#speechly.analytics.v1.DecoderInfo)
- [ProcessingInfo](#speechly.analytics.v1.ProcessingInfo)
- [RegisterUtteranceRequest](#speechly.analytics.v1.RegisterUtteranceRequest)
- [RegisterUtteranceResponse](#speechly.analytics.v1.RegisterUtteranceResponse)
- [Utterance](#speechly.analytics.v1.Utterance)
- [UtteranceStatisticsPeriod](#speechly.analytics.v1.UtteranceStatisticsPeriod)
- [UtteranceStatisticsRequest](#speechly.analytics.v1.UtteranceStatisticsRequest)
- [UtteranceStatisticsResponse](#speechly.analytics.v1.UtteranceStatisticsResponse)
- [UtterancesRequest](#speechly.analytics.v1.UtterancesRequest)
- [UtterancesResponse](#speechly.analytics.v1.UtterancesResponse)


<a name="speechly.analytics.v1.DecoderInfo"></a>
### DecoderInfo

Information about the on-device decoder.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| version | [string](#string) | Version of the Speechly on-device decoder. |
| utterance_count | [int32](#int32) | Number of utterances the decoder has transcribed. |
| total_seconds_transcribed | [int32](#int32) | Cumulative sum of the utterance length in seconds for the decoder. |


<a name="speechly.analytics.v1.ProcessingInfo"></a>
### ProcessingInfo

Specifies what processing has been applied to an utterance.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| processing_types | [ProcessingType](#speechly.analytics.v1.ProcessingType) | The processing types that were applied |
| model_id | [string](#string) | id of the model that was used for processing |


<a name="speechly.analytics.v1.RegisterUtteranceRequest"></a>
### RegisterUtteranceRequest

A single data point of an utterance recognized by Speechly On Device or Speechly On Premise.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | [string](#string) | id of the application the operation belongs to |
| device_id | [string](#string) | device_id of the utterance. |
| utterance_length_seconds | [int32](#int32) | Length of the recognized utterance in seconds. |
| utterance_length_chars | [int32](#int32) | Length of the recognized utterance in characters. |
| decoder_info | [DecoderInfo](#speechly.analytics.v1.DecoderInfo) | Information about the on-device decoder. |
| created_time | [Timestamp](#google.protobuf.Timestamp) | When the processing was initially requested. |
| finished_time | [Timestamp](#google.protobuf.Timestamp) | When the processing was finished. |
| status | [Status](#speechly.analytics.v1.RegisterUtteranceRequest.Status) | The status of the processing. |
| operation_id | [string](#string) | batch api operation id of the utterance |
| batch_id | [string](#string) | id of the batch the operation belongs to |
| project_id | [string](#string) | id of the project the operation belongs to |
| language | [string](#string) | language of the utterance (BCP-47) |
| processing_info | [ProcessingInfo](#speechly.analytics.v1.ProcessingInfo) | Information about the processing applied to the utterance |


<a name="speechly.analytics.v1.RegisterUtteranceResponse"></a>
### RegisterUtteranceResponse



#### Fields

| name | type | description |
| ---- | ---- | ----------- |



<a name="speechly.analytics.v1.Utterance"></a>
### Utterance

A single utterances recognized by Speechly API.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| transcript | [string](#string) | The ASR transcript of the utterance. |
| annotated | [string](#string) | The SAL-annotated transcript of the utterance. |
| date | [string](#string) | ISO-formatted UTC date of the utterance. |


<a name="speechly.analytics.v1.UtteranceStatisticsPeriod"></a>
### UtteranceStatisticsPeriod

Single row of statistics response.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | [string](#string) | app_id or empty, if aggregating over project. |
| start_time | [string](#string) | ISO-formatted UTC timestamp of the start time of the period. |
| count | [int32](#int32) | Count (sum) of utterances in the current period. |
| utterances_seconds | [int32](#int32) | Total duration of the utterances in the current period. |
| annotated_seconds | [int32](#int32) | Total duration of annotated utterances in the current period. |
| project_id | [string](#string) | project_id or empty, if specifying a project. |


<a name="speechly.analytics.v1.UtteranceStatisticsRequest"></a>
### UtteranceStatisticsRequest

Includes keys for the UtteranceStatistics method.
If no keys are given, the token's project is used.
Token needs to have access to the given app / project.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | [string](#string) | Limit statistics to a single app_id.<br/>Default is none, returning statistics for all apps in the project. |
| days | [int32](#int32) | Amount of days to include in the result.<br/>Default is 14 days. |
| scope | [Scope](#speechly.analytics.v1.UtteranceStatisticsRequest.Scope) | Scope of returned data.<br/>Default is UTTERANCES. |
| aggregation | [Aggregation](#speechly.analytics.v1.Aggregation) | Aggregation of the data.<br/>Default is DAILY |
| start_date | [string](#string) | Start of requested statistics period.<br/>Default is 15 days ago.<br/>Must be YYYY-mm-DD formatted string if given. |
| end_date | [string](#string) | End of requested statistics period.<br/>Default is 1 day ago, resulting in two full weeks.<br/>Must be YYYY-mm-DD formatted string if given. |
| project_id | [string](#string) | Limit statisticts to a single project_id<br/>Default is none, returning statistics for the project in the given scope. |


<a name="speechly.analytics.v1.UtteranceStatisticsResponse"></a>
### UtteranceStatisticsResponse

Contains a list of statistics entries for utterances, based on the requested scope.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| start_date | [string](#string) | Start of this statistics period.<br/>YYYY-mm-DD formatted string. |
| end_date | [string](#string) | End of this statistics period.<br/>YYYY-mm-DD formatted string. |
| aggregation | [Aggregation](#speechly.analytics.v1.Aggregation) | Time period length. |
| items | [UtteranceStatisticsPeriod](#speechly.analytics.v1.UtteranceStatisticsPeriod) | Aggregated results. |
| total_utterances | [int32](#int32) | Amount of utterances in this response |
| total_duration_seconds | [int32](#int32) | Total duration of utterances in seconds. |
| total_annotated_seconds | [int32](#int32) | Total duration of annotated utterances in seconds. |


<a name="speechly.analytics.v1.UtterancesRequest"></a>
### UtterancesRequest



#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | [string](#string) | The app_id to show the utterances for. |


<a name="speechly.analytics.v1.UtterancesResponse"></a>
### UtterancesResponse



#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| utterances | [Utterance](#speechly.analytics.v1.Utterance) | Sample of utterances. |


