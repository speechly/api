
# speechly.slu.v1.WLU

Service that implements Speechly WLU (Written Language Understanding).

To use this service you MUST use an access token from Speechly Identity API.
The token MUST be passed in gRPC metadata with `Authorization` key and `Bearer ACCESS_TOKEN` as value, e.g. in Go:

```
ctx := context.Background()
ctx = metadata.AppendToOutgoingContext(ctx, "Authorization", "Bearer "+accessToken)
res, err := speechlyWLUClient.Text(ctx, req)
```

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| Text | [WLURequest](#wlurequest) | [WLUResponse](#wluresponse) | Performs recognition of a text with specified language. |
| Texts | [TextsRequest](#textsrequest) | [TextsResponse](#textsresponse) | Performs recognition of a batch of texts with specified language. |

## Messages

- [TextsRequest](#textsrequest)
- [TextsResponse](#textsresponse)
- [WLUEntity](#wluentity)
- [WLUIntent](#wluintent)
- [WLURequest](#wlurequest)
- [WLUResponse](#wluresponse)
- [WLUSegment](#wlusegment)
- [WLUToken](#wlutoken)


### TextsRequest

Top-level message sent by the client for the `Texts` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | The target application for the texts request.<br/>Required. |
| requests | [WLURequest](#wlurequest) | List of WLURequest.<br/>Required. |


### TextsResponse

Top-level message sent by the server for the `Texts` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| responses | [WLUResponse](#wluresponse) | List of WLUResponses.<br/>Required. |


### WLUEntity

Describes a single entity in a segment.

An entity is a specific object in the phrase that falls into some kind of category,
e.g. in a SAL example "*book book a [burger restaurant](restaurant_type) for [tomorrow](date)"
"burger restaurant" would be an entity of type `restaurant_type`,
and "tomorrow" would be an entity of type `date`.

An entity has a start and end indices which map to the indices of words in WLUToken messages,
e.g. in the example "book a [burger restaurant](restaurant_type) for [tomorrow](date)" it would be:

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


### WLUIntent

Describes the intent of a segment.
There can only be one intent per segment.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| intent | string | The value of the intent, as defined in SAL. |


### WLURequest

Top-level message sent by the client for the `Text` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| language_code | string | The language of the text sent in the request as a BCP-47 language tag (e.g. "en-US").<br/>Required. |
| text | string | The text to recognise.<br/>Required. |
| reference_time | [Timestamp](#googleprotobuftimestamp) | The reference time for postprocessing. By default, the current date is used.<br/>Optional. |


### WLUResponse

Top-level message sent by the server for the `Text` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| segments | [WLUSegment](#wlusegment) | A list of WLU segments. |


### WLUSegment

Describes a WLU segment.
A segment is a logical portion of text denoted by its intent,
e.g. in a phrase "book me a flight and rent a car"
there would be a segment for "book me a flight" and another for "rent a car".

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| text | string | The portion of text that contains this segment. |
| tokens | [WLUToken](#wlutoken) | The list of word tokens which are contained in this segment. |
| entities | [WLUEntity](#wluentity) | The list of entities which are contained in this segment. |
| intent | [WLUIntent](#wluintent) | The intent that defines this segment. |
| annotated_text | string | The value of text annotated in SAL format. |


### WLUToken

Describes a single word token in a segment.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| word | string | The value of the word. |
| index | int32 | Position of the token in the text. |

