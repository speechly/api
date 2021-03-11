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

