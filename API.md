# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [speechly/sal/v1/compiler.proto](#speechly/sal/v1/compiler.proto)
    - [AppSource](#speechly.sal.v1.AppSource)
    - [CompileRequest](#speechly.sal.v1.CompileRequest)
    - [CompileResult](#speechly.sal.v1.CompileResult)
    - [ExtractSALSourcesResult](#speechly.sal.v1.ExtractSALSourcesResult)
    - [LineReference](#speechly.sal.v1.LineReference)
    - [ValidateResult](#speechly.sal.v1.ValidateResult)
  
    - [AppSource.ContentType](#speechly.sal.v1.AppSource.ContentType)
    - [CompileResult.Result](#speechly.sal.v1.CompileResult.Result)
    - [LineReference.Level](#speechly.sal.v1.LineReference.Level)
  
    - [Compiler](#speechly.sal.v1.Compiler)
  
- [speechly/identity/v1/identity.proto](#speechly/identity/v1/identity.proto)
    - [LoginRequest](#speechly.identity.v1.LoginRequest)
    - [LoginResponse](#speechly.identity.v1.LoginResponse)
  
    - [Identity](#speechly.identity.v1.Identity)
  
- [speechly/identity/v2/identity.proto](#speechly/identity/v2/identity.proto)
    - [ApplicationScope](#speechly.identity.v2.ApplicationScope)
    - [ProjectScope](#speechly.identity.v2.ProjectScope)
  
- [speechly/identity/v2/identity_api.proto](#speechly/identity/v2/identity_api.proto)
    - [LoginRequest](#speechly.identity.v2.LoginRequest)
    - [LoginResponse](#speechly.identity.v2.LoginResponse)
  
    - [IdentityAPI](#speechly.identity.v2.IdentityAPI)
  
- [speechly/config/v1/config_api.proto](#speechly/config/v1/config_api.proto)
    - [App](#speechly.config.v1.App)
    - [CreateAppRequest](#speechly.config.v1.CreateAppRequest)
    - [CreateAppResponse](#speechly.config.v1.CreateAppResponse)
    - [CreateProjectRequest](#speechly.config.v1.CreateProjectRequest)
    - [CreateProjectResponse](#speechly.config.v1.CreateProjectResponse)
    - [DeleteAppRequest](#speechly.config.v1.DeleteAppRequest)
    - [DeleteAppResponse](#speechly.config.v1.DeleteAppResponse)
    - [DownloadCurrentTrainingDataRequest](#speechly.config.v1.DownloadCurrentTrainingDataRequest)
    - [DownloadCurrentTrainingDataResponse](#speechly.config.v1.DownloadCurrentTrainingDataResponse)
    - [GetAppRequest](#speechly.config.v1.GetAppRequest)
    - [GetAppResponse](#speechly.config.v1.GetAppResponse)
    - [GetProjectParticipantsRequest](#speechly.config.v1.GetProjectParticipantsRequest)
    - [GetProjectParticipantsResponse](#speechly.config.v1.GetProjectParticipantsResponse)
    - [GetProjectParticipantsResponse.Participant](#speechly.config.v1.GetProjectParticipantsResponse.Participant)
    - [GetProjectRequest](#speechly.config.v1.GetProjectRequest)
    - [GetProjectResponse](#speechly.config.v1.GetProjectResponse)
    - [InviteRequest](#speechly.config.v1.InviteRequest)
    - [InviteResponse](#speechly.config.v1.InviteResponse)
    - [JoinProjectRequest](#speechly.config.v1.JoinProjectRequest)
    - [JoinProjectResponse](#speechly.config.v1.JoinProjectResponse)
    - [ListAppsRequest](#speechly.config.v1.ListAppsRequest)
    - [ListAppsResponse](#speechly.config.v1.ListAppsResponse)
    - [UpdateAppRequest](#speechly.config.v1.UpdateAppRequest)
    - [UpdateAppResponse](#speechly.config.v1.UpdateAppResponse)
    - [UpdateProjectRequest](#speechly.config.v1.UpdateProjectRequest)
    - [UpdateProjectResponse](#speechly.config.v1.UpdateProjectResponse)
    - [UploadTrainingDataRequest](#speechly.config.v1.UploadTrainingDataRequest)
    - [UploadTrainingDataResponse](#speechly.config.v1.UploadTrainingDataResponse)
  
    - [App.Status](#speechly.config.v1.App.Status)
    - [DownloadCurrentTrainingDataResponse.ContentType](#speechly.config.v1.DownloadCurrentTrainingDataResponse.ContentType)
    - [UploadTrainingDataRequest.ContentType](#speechly.config.v1.UploadTrainingDataRequest.ContentType)
  
    - [ConfigAPI](#speechly.config.v1.ConfigAPI)
  
- [speechly/slu/v1/wlu.proto](#speechly/slu/v1/wlu.proto)
    - [WLUEntity](#speechly.slu.v1.WLUEntity)
    - [WLUIntent](#speechly.slu.v1.WLUIntent)
    - [WLURequest](#speechly.slu.v1.WLURequest)
    - [WLUResponse](#speechly.slu.v1.WLUResponse)
    - [WLUSegment](#speechly.slu.v1.WLUSegment)
    - [WLUToken](#speechly.slu.v1.WLUToken)
  
    - [WLU](#speechly.slu.v1.WLU)
  
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



<a name="speechly/sal/v1/compiler.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/sal/v1/compiler.proto



<a name="speechly.sal.v1.AppSource"></a>

### AppSource
Contains a chunk of SAL source.
This message is consumed by `Validate` and `ExtractSALSources` RPCs and as a part of `CompileRequest`.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_id | [string](#string) |  | The ID of Speechly app to compile for. |
| language | [string](#string) |  | The language of SAL as a BCP-47 language tag (e.g. &#34;en-US&#34;). |
| data_chunk | [bytes](#bytes) |  | Chunk of SAL source code. |
| content_type | [AppSource.ContentType](#speechly.sal.v1.AppSource.ContentType) |  | Optional content type of the SAL source. |






<a name="speechly.sal.v1.CompileRequest"></a>

### CompileRequest
This message is consumed by `Compile` RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_source | [AppSource](#speechly.sal.v1.AppSource) |  | A chunk of SAL source. |
| batch_size | [int32](#int32) |  | Number of examples to return: |
| random_seed | [int32](#int32) |  | Random seed for example sampling. Changing seed can give different output. |






<a name="speechly.sal.v1.CompileResult"></a>

### CompileResult
Top-level message sent by the server for the `Compile` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [CompileResult.Result](#speechly.sal.v1.CompileResult.Result) |  | The status of compilation. |
| templates | [string](#string) | repeated | (If the result was compiled) A list of compiled templates. |
| messages | [LineReference](#speechly.sal.v1.LineReference) | repeated | (If the result failed or had warnings) A list of error / warning messages. |






<a name="speechly.sal.v1.ExtractSALSourcesResult"></a>

### ExtractSALSourcesResult
Top-level message sent by the server for the `ExtractSALSources` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data_chunk | [bytes](#bytes) |  | Chunk of extracted SAL source code. |






<a name="speechly.sal.v1.LineReference"></a>

### LineReference
Describes a message related to a line in SAL source code.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| line | [uint64](#uint64) |  | The line in SAL source that this message refers to. |
| column | [uint32](#uint32) |  | The column in SAL source that this message refers to. |
| file | [string](#string) |  | The file in SAL sources that this message refers to. |
| level | [LineReference.Level](#speechly.sal.v1.LineReference.Level) |  | The level of the message. |
| message | [string](#string) |  | The contents of the message. |






<a name="speechly.sal.v1.ValidateResult"></a>

### ValidateResult
Top-level message sent by the server for the `Validate` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [LineReference](#speechly.sal.v1.LineReference) | repeated | A list of error / warning messages, may be empty if validation didn&#39;t find any issues. |





 


<a name="speechly.sal.v1.AppSource.ContentType"></a>

### AppSource.ContentType
Content type options.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONTENT_TYPE_UNSPECIFIED | 0 |  |
| CONTENT_TYPE_YAML | 1 |  |
| CONTENT_TYPE_TAR | 2 |  |



<a name="speechly.sal.v1.CompileResult.Result"></a>

### CompileResult.Result
Describes the status of result.

| Name | Number | Description |
| ---- | ------ | ----------- |
| COMPILE_SUCCESS | 0 | Result has been successfully compiled. |
| COMPILE_FAILURE | 1 | Result has failed to compile. |
| COMPILE_WARNING | 2 | Result has been compiled, but with warnings. |



<a name="speechly.sal.v1.LineReference.Level"></a>

### LineReference.Level
The level of the message.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LEVEL_NOTE | 0 | A notice - for information only. |
| LEVEL_WARNING | 1 | A warning, does not fail compilation or validation, but should be addressed. |
| LEVEL_ERROR | 2 | An error, fails compilation and validation. |


 

 


<a name="speechly.sal.v1.Compiler"></a>

### Compiler
Service that implements Speechly SAL API (https://speechly.com/docs/api/sal).

This service is used for validating and compiling Speechly Annotation Language source files.

The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).

The token acts as a proxy for the user who has generated it,
i.e. all operations are performed with that user as a subject.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Compile | [CompileRequest](#speechly.sal.v1.CompileRequest) stream | [CompileResult](#speechly.sal.v1.CompileResult) | Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings. |
| Validate | [AppSource](#speechly.sal.v1.AppSource) stream | [ValidateResult](#speechly.sal.v1.ValidateResult) | Validates the SAL source and returns compilation notices / warnings and errors, if any. |
| ExtractSALSources | [AppSource](#speechly.sal.v1.AppSource) stream | [ExtractSALSourcesResult](#speechly.sal.v1.ExtractSALSourcesResult) stream | Extracts raw, not compiled SAL templates from the SAL source. |

 



<a name="speechly/identity/v1/identity.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/identity/v1/identity.proto



<a name="speechly.identity.v1.LoginRequest"></a>

### LoginRequest
Top-level message sent by the client for the `Login` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_id | [string](#string) |  | A unique end-user device identifier. Required. |
| app_id | [string](#string) |  | Speechly application ID. Required. |
| language_code | [string](#string) |  | The language to use. Must be a supported BCP-47 language code, eg. &#39;en-US&#39;. Defaults to the application&#39;s language. |
| config_id | [string](#string) |  | Define a specific model configuration to use. Defaults to the application&#39;s latest configuration. |






<a name="speechly.identity.v1.LoginResponse"></a>

### LoginResponse
Top-level message sent by the server for the `Login` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  | Access token which can used for Speechly SLU API. The token is a JSON Web Token and includes all standard claims, as well as custom ones. The token has expiration, so you should check whether it has expired before using it. It is safe to cache the token for future use until its expiration date. |





 

 

 


<a name="speechly.identity.v1.Identity"></a>

### Identity
Service that implements Speechly Identity API (https://speechly.com/docs/api/identity).

This service is used for generating access token for Speechly SLU API.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#speechly.identity.v1.LoginRequest) | [LoginResponse](#speechly.identity.v1.LoginResponse) | Performs a login of specific Speechly application. Returns an access token, that can be used to access Speechly SLU API. |

 



<a name="speechly/identity/v2/identity.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/identity/v2/identity.proto



<a name="speechly.identity.v2.ApplicationScope"></a>

### ApplicationScope
Keys for login with an app_id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_id | [string](#string) |  | Speechly application ID. The defined application can be accessed with the returned token. Required. |
| config_id | [string](#string) |  | Define a specific model configuration to use. Defaults to the application&#39;s latest configuration. |






<a name="speechly.identity.v2.ProjectScope"></a>

### ProjectScope
Keys for login with a project_id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project_id | [string](#string) |  | Speechly project ID. Every application in the same project is accessible with the same token. Required. |





 

 

 

 



<a name="speechly/identity/v2/identity_api.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/identity/v2/identity_api.proto



<a name="speechly.identity.v2.LoginRequest"></a>

### LoginRequest
Top-level message sent by the client for the `Login` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_id | [string](#string) |  | A unique end-user device identifier. Required. |
| application | [ApplicationScope](#speechly.identity.v2.ApplicationScope) |  | Login scope application: use the given application context for all utterances. |
| project | [ProjectScope](#speechly.identity.v2.ProjectScope) |  | Login scope project: define the target application per utterance. The target applications must be located in the same project. |






<a name="speechly.identity.v2.LoginResponse"></a>

### LoginResponse
Top-level message returned by the server for the `Login` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  | Access token which can used for Speechly SLU API. The token is a JSON Web Token and includes all standard claims, as well as custom ones. The token has expiration, so you should check whether it has expired before using it. It is safe to cache the token for future use until its expiration date. |
| valid_for_s | [uint32](#uint32) |  | Amount of seconds the returned token is valid. |
| expires_at_epoch | [uint64](#uint64) |  | Token expiration time in seconds after 1970-01-01 (&#34;unix time&#34;). |
| expires_at | [string](#string) |  | ISO-formatted UTC timestamp of the expiration time of the returned token. |





 

 

 


<a name="speechly.identity.v2.IdentityAPI"></a>

### IdentityAPI
Service that implements Speechly Identity API (https://speechly.com/docs/api/identity).

This service is used for generating access token for Speechly SLU API.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#speechly.identity.v2.LoginRequest) | [LoginResponse](#speechly.identity.v2.LoginResponse) | Performs a login of specific Speechly application. Returns an access token, that can be used to access Speechly SLU API. |

 



<a name="speechly/config/v1/config_api.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/config/v1/config_api.proto



<a name="speechly.config.v1.App"></a>

### App
Describes a Speechly application and is used as an argument for application API.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The ID of the application. This field is ignored when creating an application. |
| language | [string](#string) |  | The language of the application as a BCP-47 language tag (e.g. &#34;en-US&#34;). Required. |
| status | [App.Status](#speechly.config.v1.App.Status) |  | The status of the application. This field is ignored in requests. |
| name | [string](#string) |  | The human-friendly name of the application. |
| queue_size | [int32](#int32) |  | The size of the training queue size if the application is queued for training. This field is ignored in requests. |
| error_msg | [string](#string) |  | The detailed error description if the application failed training. This field is ignored in requests. |
| estimated_remaining_sec | [int32](#int32) |  | Estimated training time remaining if the application is being trained. Will equal to 0 when no estimate is available. This field is ignored in requests. |
| estimated_training_time_sec | [int32](#int32) |  | Estimated total training time in seconds if the application is being trained. This field is ignored in requests. |
| training_time_sec | [int32](#int32) |  | Time since training started if the application is being trained. This field is ignored in requests. |






<a name="speechly.config.v1.CreateAppRequest"></a>

### CreateAppRequest
Top-level message sent by the client for the `CreateApp` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The ID of the project in which the app will be created. |
| app | [App](#speechly.config.v1.App) |  | The app information to use for creation. |






<a name="speechly.config.v1.CreateAppResponse"></a>

### CreateAppResponse
Top-level message sent by the server for the `CreateApp` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app | [App](#speechly.config.v1.App) |  | The app information that was stored in the API. The difference between the app in the request and response is generated fields. |






<a name="speechly.config.v1.CreateProjectRequest"></a>

### CreateProjectRequest
Top-level message sent by the client for the `CreateProject` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | An optional human-friendly name for the project. |






<a name="speechly.config.v1.CreateProjectResponse"></a>

### CreateProjectResponse
Top-level message sent by the server for the `CreateProject` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The ID of created project. |
| name | [string](#string) |  | The name of created project. |






<a name="speechly.config.v1.DeleteAppRequest"></a>

### DeleteAppRequest
Top-level message sent by the client for the `DeleteApp` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_id | [string](#string) |  | The ID of the app to delete. |






<a name="speechly.config.v1.DeleteAppResponse"></a>

### DeleteAppResponse
Top-level message sent by the server for the `DeleteApp` method.






<a name="speechly.config.v1.DownloadCurrentTrainingDataRequest"></a>

### DownloadCurrentTrainingDataRequest
Top-level message sent by the server for the `DownloadCurrentTrainingData` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_id | [string](#string) |  | The ID of the app to fetch. |
| config_id | [string](#string) |  | The config ID to fetch, defaults to the latest configuration. |






<a name="speechly.config.v1.DownloadCurrentTrainingDataResponse"></a>

### DownloadCurrentTrainingDataResponse
Top-level message sent by the server for the `DownloadCurrentTrainingData` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data_chunk | [bytes](#bytes) |  | Training data payload. |
| content_type | [DownloadCurrentTrainingDataResponse.ContentType](#speechly.config.v1.DownloadCurrentTrainingDataResponse.ContentType) |  | Training data content type, see enum ContentType. |






<a name="speechly.config.v1.GetAppRequest"></a>

### GetAppRequest
Top-level message sent by the client for the `GetApp` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_id | [string](#string) |  | The ID of the app to fetch. |






<a name="speechly.config.v1.GetAppResponse"></a>

### GetAppResponse
Top-level message sent by the server for the `GetApp` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app | [App](#speechly.config.v1.App) |  | The app fetched with the ID. |






<a name="speechly.config.v1.GetProjectParticipantsRequest"></a>

### GetProjectParticipantsRequest
Top-level message sent by the client for the `GetProjectParticipants` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The ID of the project. |






<a name="speechly.config.v1.GetProjectParticipantsResponse"></a>

### GetProjectParticipantsResponse
Top-level message sent by the server for the `GetProjectParticipants` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| participants | [GetProjectParticipantsResponse.Participant](#speechly.config.v1.GetProjectParticipantsResponse.Participant) | repeated | A list of project&#39;s participants. |






<a name="speechly.config.v1.GetProjectParticipantsResponse.Participant"></a>

### GetProjectParticipantsResponse.Participant
Describes a project participant.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Participant&#39;s name, may be empty. |
| email | [string](#string) |  | Participant&#39;s email, may be empty. |
| id | [string](#string) |  | Participants identifier. |






<a name="speechly.config.v1.GetProjectRequest"></a>

### GetProjectRequest
Top-level message sent by the client for the `GetProject` method.






<a name="speechly.config.v1.GetProjectResponse"></a>

### GetProjectResponse
Top-level message sent by the server for the `GetProject` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) | repeated | A list of project IDs. |
| project_names | [string](#string) | repeated | A list of project names in the same order as project IDs. |






<a name="speechly.config.v1.InviteRequest"></a>

### InviteRequest
Top-level message sent by the client for the `Invite` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The ID of the project to invite to. |






<a name="speechly.config.v1.InviteResponse"></a>

### InviteResponse
Top-level message sent by the server for the `Invite` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| invitation_token | [string](#string) |  | The token that can be used for joining the project. The token is only valid once so if you need to invite multiple people, you have to generated a token for each person. |






<a name="speechly.config.v1.JoinProjectRequest"></a>

### JoinProjectRequest
Top-level message sent by the client for the `JoinProject` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| invitation_token | [string](#string) |  | The invitation token to use for joining a project. |






<a name="speechly.config.v1.JoinProjectResponse"></a>

### JoinProjectResponse
Top-level message sent by the server for the `JoinProject` method.






<a name="speechly.config.v1.ListAppsRequest"></a>

### ListAppsRequest
Top-level message sent by the client for the `ListApps` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The ID of the project to list the apps in. |






<a name="speechly.config.v1.ListAppsResponse"></a>

### ListAppsResponse
Top-level message sent by the server for the `ListApps` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| apps | [App](#speechly.config.v1.App) | repeated | A list of apps belonging to the project. |






<a name="speechly.config.v1.UpdateAppRequest"></a>

### UpdateAppRequest
Top-level message sent by the client for the `UpdateApp` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app | [App](#speechly.config.v1.App) |  | The app information to use for the update. |






<a name="speechly.config.v1.UpdateAppResponse"></a>

### UpdateAppResponse
Top-level message sent by the server for the `UpdateApp` method.






<a name="speechly.config.v1.UpdateProjectRequest"></a>

### UpdateProjectRequest
Top-level message sent by the client for the `UpdateProject` method.
Currently it&#39;s only possible to update the name of the project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The ID of the project. |
| name | [string](#string) |  | New name of the project. |






<a name="speechly.config.v1.UpdateProjectResponse"></a>

### UpdateProjectResponse
Top-level message sent by the server for the `UpdateProject` method.






<a name="speechly.config.v1.UploadTrainingDataRequest"></a>

### UploadTrainingDataRequest
Top-level message sent by the server for the `UploadTrainingData` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_id | [string](#string) |  | The ID of the app to train. |
| data_chunk | [bytes](#bytes) |  | Training data payload. |
| content_type | [UploadTrainingDataRequest.ContentType](#speechly.config.v1.UploadTrainingDataRequest.ContentType) |  | Content type of the training data payload. |






<a name="speechly.config.v1.UploadTrainingDataResponse"></a>

### UploadTrainingDataResponse
Top-level message sent by the server for the `UploadTrainingData` method.





 


<a name="speechly.config.v1.App.Status"></a>

### App.Status
The status of then application, defaults to STATUS_UNSPECIFIED.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STATUS_UNSPECIFIED | 0 | Indicates that the application only been created, but never trained. |
| STATUS_NEW | 1 | Indicates that the application is currently in the training queue. |
| STATUS_TRAINING | 2 | Indicates that the application is currently being trained. |
| STATUS_TRAINED | 3 | Indicates that the application has been successfully trained. |
| STATUS_FAILED | 4 | Indicates that the application has failed the training. |



<a name="speechly.config.v1.DownloadCurrentTrainingDataResponse.ContentType"></a>

### DownloadCurrentTrainingDataResponse.ContentType
The content type of the training data.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONTENT_TYPE_UNSPECIFIED | 0 |  |
| CONTENT_TYPE_YAML | 1 |  |
| CONTENT_TYPE_TAR | 2 |  |



<a name="speechly.config.v1.UploadTrainingDataRequest.ContentType"></a>

### UploadTrainingDataRequest.ContentType
Identifies the content type of training data payload.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONTENT_TYPE_UNSPECIFIED | 0 |  |
| CONTENT_TYPE_YAML | 1 | A YAML file that contains intents, entities, SAL script and metadata. Refer to Speechly documentation (https://www.speechly.com/docs/) for the details on the format. |
| CONTENT_TYPE_TAR | 2 | A TAR archive file that contains the YAML file with training payload and supporting vocabulary files. Refer to Speechly documentation (https://www.speechly.com/docs/) for the details on the format. |


 

 


<a name="speechly.config.v1.ConfigAPI"></a>

### ConfigAPI
Service that implements Speechly Configuration API (https://speechly.com/docs/api/configuration).

The service requires a Speechly token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).

The token acts as a proxy for the user who has generated it,
i.e. all operations are performed with that user as a subject.

Project API methods.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetProject | [GetProjectRequest](#speechly.config.v1.GetProjectRequest) | [GetProjectResponse](#speechly.config.v1.GetProjectResponse) | Lists all current user projects. |
| CreateProject | [CreateProjectRequest](#speechly.config.v1.CreateProjectRequest) | [CreateProjectResponse](#speechly.config.v1.CreateProjectResponse) | Creates a new project for current user. |
| UpdateProject | [UpdateProjectRequest](#speechly.config.v1.UpdateProjectRequest) | [UpdateProjectResponse](#speechly.config.v1.UpdateProjectResponse) | Updates an existing project. |
| GetProjectParticipants | [GetProjectParticipantsRequest](#speechly.config.v1.GetProjectParticipantsRequest) | [GetProjectParticipantsResponse](#speechly.config.v1.GetProjectParticipantsResponse) | Lists all users with access to a project. |
| Invite | [InviteRequest](#speechly.config.v1.InviteRequest) | [InviteResponse](#speechly.config.v1.InviteResponse) | Generates an invitation link for another user to join a project, which can be used to call JoinProject. |
| JoinProject | [JoinProjectRequest](#speechly.config.v1.JoinProjectRequest) | [JoinProjectResponse](#speechly.config.v1.JoinProjectResponse) | Joins a project as a current user. Requires a link generated with `Invite`.

Application API methods. |
| ListApps | [ListAppsRequest](#speechly.config.v1.ListAppsRequest) | [ListAppsResponse](#speechly.config.v1.ListAppsResponse) | Lists all applications in a project. |
| GetApp | [GetAppRequest](#speechly.config.v1.GetAppRequest) | [GetAppResponse](#speechly.config.v1.GetAppResponse) | Gets detailed information about an application. |
| CreateApp | [CreateAppRequest](#speechly.config.v1.CreateAppRequest) | [CreateAppResponse](#speechly.config.v1.CreateAppResponse) | Creates a new application for current user. |
| UpdateApp | [UpdateAppRequest](#speechly.config.v1.UpdateAppRequest) | [UpdateAppResponse](#speechly.config.v1.UpdateAppResponse) | Updates an existing application. |
| DeleteApp | [DeleteAppRequest](#speechly.config.v1.DeleteAppRequest) | [DeleteAppResponse](#speechly.config.v1.DeleteAppResponse) | Deletes an existing application.

Training API methods. |
| UploadTrainingData | [UploadTrainingDataRequest](#speechly.config.v1.UploadTrainingDataRequest) stream | [UploadTrainingDataResponse](#speechly.config.v1.UploadTrainingDataResponse) | Uploads new training data for an application. This will create and queue a new training job for that application. |
| DownloadCurrentTrainingData | [DownloadCurrentTrainingDataRequest](#speechly.config.v1.DownloadCurrentTrainingDataRequest) | [DownloadCurrentTrainingDataResponse](#speechly.config.v1.DownloadCurrentTrainingDataResponse) stream | Downloads current training data for an application. |

 



<a name="speechly/slu/v1/wlu.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## speechly/slu/v1/wlu.proto



<a name="speechly.slu.v1.WLUEntity"></a>

### WLUEntity
Describes a single entity in a segment.

An entity is a specific object in the phrase that falls into some kind of category,
e.g. in a SAL example &#34;*book book a [burger restaurant](restaurant_type) for [tomorrow](date)&#34;
&#34;burger restaurant&#34; would be an entity of type `restaurant_type`,
and &#34;tomorrow&#34; would be an entity of type `date`.

An entity has a start and end indices which map to the indices of words in WLUToken messages,
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






<a name="speechly.slu.v1.WLUIntent"></a>

### WLUIntent
Describes the intent of a segment.
There can only be one intent per segment.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intent | [string](#string) |  | The value of the intent, as defined in SAL. |






<a name="speechly.slu.v1.WLURequest"></a>

### WLURequest
Top-level message sent by the client for the `Text` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| language_code | [string](#string) |  | The language of the text sent in the request as a BCP-47 language tag (e.g. &#34;en-US&#34;). Required. |
| text | [string](#string) |  | The text to recognise. Required. |






<a name="speechly.slu.v1.WLUResponse"></a>

### WLUResponse
Top-level message sent by the server for the `Text` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| segments | [WLUSegment](#speechly.slu.v1.WLUSegment) | repeated | A list of WLU segments. |






<a name="speechly.slu.v1.WLUSegment"></a>

### WLUSegment
Describes a WLU segment.
A segment is a logical portion of text denoted by its intent,
e.g. in a phrase &#34;book me a flight and rent a car&#34;
there would be a segment for &#34;book me a flight&#34; and another for &#34;rent a car&#34;.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  | The portion of text that contains this segment. |
| tokens | [WLUToken](#speechly.slu.v1.WLUToken) | repeated | The list of word tokens which are contained in this segment. |
| entities | [WLUEntity](#speechly.slu.v1.WLUEntity) | repeated | The list of entities which are contained in this segment. |
| intent | [WLUIntent](#speechly.slu.v1.WLUIntent) |  | The intent that defines this segment. |






<a name="speechly.slu.v1.WLUToken"></a>

### WLUToken
Describes a single word token in a segment.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| word | [string](#string) |  | The value of the word. |
| index | [int32](#int32) |  | Position of the token in the text. |





 

 

 


<a name="speechly.slu.v1.WLU"></a>

### WLU
Service that implements Speechly WLU (Written Language Understanding) API (https://speechly.com/docs/api/wlu).

To use this service you MUST use an access token from Speechly Identity API (https://speechly.com/docs/api/identity).
The token MUST be passed in gRPC metadata with &#34;Authorization&#34; key and Bearer $ACCESS_TOKEN&#34; as value, e.g. in Go:

ctx := context.Background()
ctx = metadata.AppendToOutgoingContext(ctx, &#34;Authorization&#34;, &#34;Bearer &#34;&#43;accessToken)
res, err := speechlyWLUClient.Text(ctx, req)

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Text | [WLURequest](#speechly.slu.v1.WLURequest) | [WLUResponse](#speechly.slu.v1.WLUResponse) | Performs recognition of a text with specified language. |

 



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

