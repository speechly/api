
# speechly.identity.v1.Identity

Speechly Identity API is used for creating access tokens for the Speechly APIs.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| Login | [LoginRequest](#loginrequest) | [LoginResponse](#loginresponse) | Performs a login of specific Speechly application.<br/>Returns an access token, that can be used to access Speechly SLU API. |

## Messages

- [LoginRequest](#loginrequest)
- [LoginResponse](#loginresponse)


### LoginRequest

Top-level message sent by the client for the `Login` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| device_id | string | A unique end-user device identifier.<br/>Must be UUID.<br/>Required. |
| app_id | string | Speechly application ID.<br/>Required. |
| language_code | string | The language to use.<br/>Must be a supported BCP-47 language code, eg. 'en-US'.<br/>Defaults to the application's language. |
| config_id | string | Define a specific model configuration to use.<br/>Defaults to the application's latest configuration. |


### LoginResponse

Top-level message sent by the server for the `Login` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| token | string | Access token which can used for Speechly SLU API.<br/>The token is a JSON Web Token and includes all standard claims, as well as custom ones.<br/>The token has expiration, so you should check whether it has expired before using it.<br/>It is safe to cache the token for future use until its expiration date. |

