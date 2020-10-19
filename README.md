# Speechly API

This repository stores the definitions and generated code for Speechly public APIs.

Protocol buffers definitions are located in `speechly/`.

Generated Go code and the module is located in `go/`, Python code and package in `python/`, Javascript code and package in `javascript/` and Swift code in `Sources/`. Swift Package Manager requires the manifest to be in the root of the repository, hence why Swift code is not put into its dedicated subdirectory.

Make sure to check language-specific READMEs.

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
