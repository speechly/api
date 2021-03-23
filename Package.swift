// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "speechly-api",
    products: [
        .library(name: "SpeechlyAPI", targets: ["SpeechlyAPI"]),
    ],
    dependencies: [
        .package(url: "https://github.com/grpc/grpc-swift.git", from: "1.0.0"),
    ],
    targets: [
        .target(
            name: "SpeechlyAPI",
            dependencies: [
                .product(name: "GRPC", package: "grpc-swift"),
            ]
        ),
    ]
)
