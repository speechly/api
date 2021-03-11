# Swift Speechly API

## Install

Swift supports fetching packages directly from the repository. Install the latest API stubs for Speechly API from XCode:

- Open File -> Swift Packages -> Add Package Dependency
- Insert `https://github.com/speechly/api` and click next, or search for `speechly/api` if you have your github credentials set up

See the [official docs](https://developer.apple.com/documentation/xcode/adding_package_dependencies_to_your_app) for more in-depth instructions.

Example Swift Package Manager configuration:

```swift
// swift-tools-version:5.3

import PackageDescription

let package = Package(
  name: "my-package",
  products: [
    .executable(name: "SomeName", targets: ["SomeTarget"]),
  ],
  dependencies: [
    .package(name: "speechly-api", url: "https://github.com/speechly/api.git" , from: "0.1.1"),
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

## Using Swift stubs

You will most likely need to add `grpc-swift` and `swift-nio` dependencies to write gRPC clients. Example of an identity client:

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
