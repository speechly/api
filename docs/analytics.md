
<a name="speechly.analytics.v1.AnalyticsAPI"></a>
# speechly.analytics.v1.AnalyticsAPI

Speechly Analytics API contains methods to get accumulated access data
for given apps and/or projects.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| UtteranceStatistics | [UtteranceStatisticsRequest](#speechly.analytics.v1.UtteranceStatisticsRequest) | [UtteranceStatisticsResponse](#speechly.analytics.v1.UtteranceStatisticsResponse) | Get a summary of utterances for a given time period. |

## Messages

- [UtteranceStatisticsPeriod](#speechly.analytics.v1.UtteranceStatisticsPeriod)
- [UtteranceStatisticsRequest](#speechly.analytics.v1.UtteranceStatisticsRequest)
- [UtteranceStatisticsResponse](#speechly.analytics.v1.UtteranceStatisticsResponse)


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


