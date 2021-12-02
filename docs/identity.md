
<a name="speechly.identity.v2.IdentityAPI"></a>
# speechly.identity.v2.IdentityAPI

Speechly Identity API is used for creating access tokens for the Speechly APIs.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| Login | [LoginRequest](#speechly.identity.v2.LoginRequest) | [LoginResponse](#speechly.identity.v2.LoginResponse) | Performs a login of specific Speechly application.<br/>Returns an access token which can be used to access thee Speechly API. |

## Messages

- [ApplicationScope](#speechly.identity.v2.ApplicationScope)
- [LoginRequest](#speechly.identity.v2.LoginRequest)
- [LoginResponse](#speechly.identity.v2.LoginResponse)
- [ProjectScope](#speechly.identity.v2.ProjectScope)


<a name="speechly.identity.v2.ApplicationScope"></a>
### ApplicationScope

Used as the scope in `LoginRequest` when the access is for a single Speechly application.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | [string](#string) | Speechly application ID. The defined application can be accessed with the returned token.<br/>Required. |
| config_id | [string](#string) | Define a specific model configuration to use.<br/>Defaults to the application's latest configuration. |


<a name="speechly.identity.v2.LoginRequest"></a>
### LoginRequest

Top-level message sent by the client for the `Login` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| device_id | [string](#string) | A unique end-user device identifier.<br/>Must be a `UUID`.<br/>Required. |
| application | [ApplicationScope](#speechly.identity.v2.ApplicationScope) | Login scope application: use the given application context for all utterances. |
| project | [ProjectScope](#speechly.identity.v2.ProjectScope) | Login scope project: define the target application per utterance.<br/>The target applications must be located in the same project. |


<a name="speechly.identity.v2.LoginResponse"></a>
### LoginResponse

Top-level message returned by the server for the `Login` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| token | [string](#string) | Access token which can used for the Speechly API.<br/>The token is a JSON Web Token and includes all standard claims, as well as custom ones.<br/>The token has expiration, so you should check whether it has expired before using it.<br/>It is safe to cache the token for future use until its expiration date. |
| valid_for_s | [uint32](#uint32) | Amount of seconds the returned token is valid. |
| expires_at_epoch | [uint64](#uint64) | Token expiration time in seconds after 1970-01-01 ("unix time"). |
| expires_at | [string](#string) | ISO-formatted UTC timestamp of the expiration time of the returned token. |


<a name="speechly.identity.v2.ProjectScope"></a>
### ProjectScope

Used as the scope in `LoginRequest` when access is required for every application in a Speechly project.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| project_id | [string](#string) | Speechly project ID. Every application in the same project is accessible with the same token.<br/>Required. |


