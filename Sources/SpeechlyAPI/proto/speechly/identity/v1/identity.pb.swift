// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: proto/speechly/identity/v1/identity.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

/// @exclude

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

/// Top-level message sent by the client for the `Login` method.
public struct Speechly_Identity_V1_LoginRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// A unique end-user device identifier.
  /// Must be UUID.
  /// Required.
  public var deviceID: String = String()

  /// Speechly application ID.
  /// Required.
  public var appID: String = String()

  /// The language to use.
  /// Must be a supported BCP-47 language code, eg. 'en-US'.
  /// Defaults to the application's language.
  public var languageCode: String = String()

  /// Define a specific model configuration to use.
  /// Defaults to the application's latest configuration.
  public var configID: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Top-level message sent by the server for the `Login` method.
public struct Speechly_Identity_V1_LoginResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// Access token which can used for Speechly SLU API.
  /// The token is a JSON Web Token and includes all standard claims, as well as custom ones.
  /// The token has expiration, so you should check whether it has expired before using it.
  /// It is safe to cache the token for future use until its expiration date.
  public var token: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.identity.v1"

extension Speechly_Identity_V1_LoginRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".LoginRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "device_id"),
    2: .standard(proto: "app_id"),
    3: .standard(proto: "language_code"),
    4: .standard(proto: "config_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.deviceID) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.appID) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.languageCode) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.configID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.deviceID.isEmpty {
      try visitor.visitSingularStringField(value: self.deviceID, fieldNumber: 1)
    }
    if !self.appID.isEmpty {
      try visitor.visitSingularStringField(value: self.appID, fieldNumber: 2)
    }
    if !self.languageCode.isEmpty {
      try visitor.visitSingularStringField(value: self.languageCode, fieldNumber: 3)
    }
    if !self.configID.isEmpty {
      try visitor.visitSingularStringField(value: self.configID, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Identity_V1_LoginRequest, rhs: Speechly_Identity_V1_LoginRequest) -> Bool {
    if lhs.deviceID != rhs.deviceID {return false}
    if lhs.appID != rhs.appID {return false}
    if lhs.languageCode != rhs.languageCode {return false}
    if lhs.configID != rhs.configID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Identity_V1_LoginResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".LoginResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "token"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.token) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.token.isEmpty {
      try visitor.visitSingularStringField(value: self.token, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Identity_V1_LoginResponse, rhs: Speechly_Identity_V1_LoginResponse) -> Bool {
    if lhs.token != rhs.token {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
