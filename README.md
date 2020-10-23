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

Generated Go code and the module is located in `go/`, Python code and package in `python/`, Javascript code and package in `javascript/` and Swift code in `Sources/`. Swift Package Manager requires the manifest to be in the root of the repository, hence why Swift code is not put into its dedicated subdirectory.

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

## Using Swift stubs

You can add Swift stubs to your project using Swift Package Manager. Here's an example configuration:

```swift
// swift-tools-version:5.3

import PackageDescription

let package = Package(
  name: "my-package",
  products: [
    .executable(name: "SomeName", targets: ["SomeTarget"]),
  ],
  dependencies: [
    .package(url: "https://github.com/speechly/api.git", from: "1.0.0-alpha.1"),
  ],
  targets: [
    .target(
      name: "SomeTarget",
      dependencies: [
        .product(name: "SpeechlyAPI", package: "speechly-api"),
      ]),
  ]
)
```

Thereafter you can use the stubs in your code (you will most likely need to add `grpc-swift` and `swift-nio` dependencies to write gRPC clients):

```swift
import NIO
import GRPC
import SpeechlyAPI

class IdentityClient {
  let client: SpeechlyAPI.Speechly_Identity_V1_IdentityClient

  init() {
    let group = GRPC.PlatformSupport.makeEventLoopGroup(loopCount: 1)
    let channel = GRPC.ClientConnection.secure(group: group).connect(host: "api.speechly.com", port: 443)

    self.client = SpeechlyAPI.Speechly_Identity_V1_IdentityClient(channel: channel)
  }

  func login(appId: String, deviceId: String) -> NIO.EventLoopFuture<String> {
    let request = SpeechlyAPI.Speechly_Identity_V1_LoginRequest.with {
      $0.appID = appId
      $0.deviceID = deviceId
    }

    return self.client.login(request).response.map({ (response: SpeechlyAPI.Speechly_Identity_V1_LoginResponse) -> String in
      return response.token
    })
  }

  deinit {
    let future = self.client.channel.close()

    do {
      try future.wait()
    } catch {
      print("Error closing gRPC channel: \(error)")
    }
  }
}
```
