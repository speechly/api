
<a name="speechly.sal.v1.Compiler"></a>
# speechly.sal.v1.Compiler

The Speechly Compiler API C is used for validating and compiling Speechly Annotation Language source files.

The service requires a Speechly API token, which is obtained from Speechly Dashboard (https://speechly.com/dashboard).

The token acts as a proxy for the user who has generated it,
i.e. all operations are performed with that user as a subject.

## Methods

| name | request | response | description |
| ---- | ------- | -------- | ----------- |
| Compile | [CompileRequest stream](#speechly.sal.v1.CompileRequest) | [CompileResult](#speechly.sal.v1.CompileResult) | Compiles the SAL source and returns compiled templates and / or any compilation errors and warnings. |
| Validate | [AppSource stream](#speechly.sal.v1.AppSource) | [ValidateResult](#speechly.sal.v1.ValidateResult) | Validates the SAL source and returns compilation notices / warnings and errors, if any. |
| ExtractSALSources | [AppSource stream](#speechly.sal.v1.AppSource) | [ExtractSALSourcesResult stream](#speechly.sal.v1.ExtractSALSourcesResult) | Extracts raw, not compiled SAL templates from the SAL source. |

## Messages

- [AppSource](#speechly.sal.v1.AppSource)
- [CompileRequest](#speechly.sal.v1.CompileRequest)
- [CompileResult](#speechly.sal.v1.CompileResult)
- [ExtractSALSourcesResult](#speechly.sal.v1.ExtractSALSourcesResult)
- [LineReference](#speechly.sal.v1.LineReference)
- [ValidateResult](#speechly.sal.v1.ValidateResult)


<a name="speechly.sal.v1.AppSource"></a>
### AppSource

Contains a chunk of SAL source.
This message is consumed by `Validate` and `ExtractSALSources` RPCs and as a part of `CompileRequest`.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_id | [string](#string) | The ID of Speechly app to compile for. |
| language | [string](#string) | The language of SAL as a BCP-47 language tag (e.g. "en-US"). |
| data_chunk | [bytes](#bytes) | Chunk of SAL source code. |
| content_type | [ContentType](#speechly.sal.v1.AppSource.ContentType) | Optional content type of the SAL source. |


<a name="speechly.sal.v1.CompileRequest"></a>
### CompileRequest

This message is consumed by `Compile` RPC

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| app_source | [AppSource](#speechly.sal.v1.AppSource) | A chunk of SAL source. |
| batch_size | [int32](#int32) | Number of examples to return: |
| random_seed | [int32](#int32) | Random seed for example sampling. Changing seed can give different output. |


<a name="speechly.sal.v1.CompileResult"></a>
### CompileResult

Top-level message sent by the server for the `Compile` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| result | [Result](#speechly.sal.v1.CompileResult.Result) | The status of compilation. |
| templates | [string](#string) | (If the result was compiled) A list of compiled templates. |
| messages | [LineReference](#speechly.sal.v1.LineReference) | (If the result failed or had warnings) A list of error / warning messages. |


<a name="speechly.sal.v1.ExtractSALSourcesResult"></a>
### ExtractSALSourcesResult

Top-level message sent by the server for the `ExtractSALSources` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| data_chunk | [bytes](#bytes) | Chunk of extracted SAL source code. |


<a name="speechly.sal.v1.LineReference"></a>
### LineReference

Describes a message related to a line in SAL source code.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| line | [uint64](#uint64) | The line in SAL source that this message refers to. |
| column | [uint32](#uint32) | The column in SAL source that this message refers to. |
| file | [string](#string) | The file in SAL sources that this message refers to. |
| level | [Level](#speechly.sal.v1.LineReference.Level) | The level of the message. |
| message | [string](#string) | The contents of the message. |


<a name="speechly.sal.v1.ValidateResult"></a>
### ValidateResult

Top-level message sent by the server for the `Validate` method.

#### Fields

| name | type | description |
| ---- | ---- | ----------- |
| messages | [LineReference](#speechly.sal.v1.LineReference) | A list of error / warning messages, may be empty if validation didn't find any issues. |


