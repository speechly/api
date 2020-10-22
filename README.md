<h1 align="center">
<a href="https://www.speechly.com/?utm_source=github&utm_medium=speechly-api&utm_campaign=header"><img src="https://www.speechly.com/images/logo.png" height="100" alt="Speechly"></a>
</h1>
<h2 align="center">
Complete your touch user interface with voice
</h2>

[Speechly website](https://www.speechly.com/?utm_source=github&utm_medium=speechly-api&utm_campaign=header)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Docs](https://www.speechly.com/docs/?utm_source=github&utm_medium=speechly-api&utm_campaign=header)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Blog](https://www.speechly.com/blog/?utm_source=github&utm_medium=speechly-api&utm_campaign=header)


# Speechly API

This repository stores the definitions and generated code for Speechly public APIs.

Protocol buffers definitions are located in `speechly/`.

Generated Go code and the module is located in `go/`, Python code and package in `python/`, Javascript code and package in `javascript/`.

Make sure to check language-specific READMEs.

## About Speechly

Speechly is a developer tool for building real-time multimodal voice user interfaces. It enables developers and designers to enhance their current touch user interface with voice functionalities for better user experience. Speechly key features:

#### Speechly key features

- Fully streaming API
- Multi modal from the ground up
- Easy to configure for any use case
- Fast to integrate to any touch screen application
- Supports natural corrections such as "Show me red – i mean blue t-shirts"
- Real time visual feedback encourages users to go on with their voice

| Example application | Description |
| :---: | --- |
| <img src="https://i.imgur.com/v9o1JHf.gif" width=50%> | Instead of using buttons, input fields and dropdowns, Speechly enables users to interact with the application by using voice. <br />User gets real-time visual feedback on the form as they speak and are encouraged to go on. If there's an error, the user can either correct it by using traditional touch user interface or by voice. |

## Building

You can run the build for all languages with `make build` from the root of this repo.

