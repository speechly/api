# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [speechly/identity/v2/identity.proto](#speechly/identity/v2/identity.proto)
    - [ApplicationScope](#speechly.identity.v2.ApplicationScope)
    - [ProjectScope](#speechly.identity.v2.ProjectScope)
  
- [speechly/identity/v2/identity_api.proto](#speechly/identity/v2/identity_api.proto)
    - [LoginRequest](#speechly.identity.v2.LoginRequest)
    - [LoginResponse](#speechly.identity.v2.LoginResponse)
  
    - [IdentityAPI](#speechly.identity.v2.IdentityAPI)
  
- [Scalar Value Types](#scalar-value-types)



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

