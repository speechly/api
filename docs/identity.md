
## IdentityAPI

Service that implements Speechly Identity API (https://speechly.com/docs/api/identity).

This service is used for generating access token for the Speechly API.

### Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| Login | LoginRequest | LoginResponse | Performs a login of specific Speechly application.<br/>Returns an access token, that can be used to access thee Speechly API. |

#### ApplicationScope

Keys for login with an app_id.

### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | string | Speechly application ID. The defined application can be accessed with the returned token.<br/>Required. |
| config_id | string | Define a specific model configuration to use.<br/>Defaults to the application's latest configuration. |


#### ProjectScope

Keys for login with a project_id.

### Fields

| name | type | description |
| ---- | ---- | ----------- |
| project_id | string | Speechly project ID. Every application in the same project is accessible with the same token.<br/>Required. |


#### LoginRequest

Top-level message sent by the client for the `Login` method.

### Fields

| name | type | description |
| ---- | ---- | ----------- |
| device_id | string | A unique end-user device identifier.<br/>Must be UUID.<br/>Required. |
| application | ApplicationScope | Login scope application: use the given application context for all utterances. |
| project | ProjectScope | Login scope project: define the target application per utterance.<br/>The target applications must be located in the same project. |


#### LoginResponse

Top-level message returned by the server for the `Login` method.

### Fields

| name | type | description |
| ---- | ---- | ----------- |
| token | string | Access token which can used for the Speechly API.<br/>The token is a JSON Web Token and includes all standard claims, as well as custom ones.<br/>The token has expiration, so you should check whether it has expired before using it.<br/>It is safe to cache the token for future use until its expiration date. |
| valid_for_s | uint32 | Amount of seconds the returned token is valid. |
| expires_at_epoch | uint64 | Token expiration time in seconds after 1970-01-01 ("unix time"). |
| expires_at | string | ISO-formatted UTC timestamp of the expiration time of the returned token. |

