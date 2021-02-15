// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: speechly/identity/v2/api.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

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
public struct Speechly_Identity_V2_LoginRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// A unique end-user device identifier.
  /// Required.
  public var deviceID: String = String()

  public var scope: Speechly_Identity_V2_LoginRequest.OneOf_Scope? = nil

  /// Login scope application: use the given application context for all utterances.
  public var application: Speechly_Identity_V2_LoginRequest.ApplicationScope {
    get {
      if case .application(let v)? = scope {return v}
      return Speechly_Identity_V2_LoginRequest.ApplicationScope()
    }
    set {scope = .application(newValue)}
  }

  /// Login scope project: define the target application per utterance.
  /// The target applications must be located in the same project.
  public var project: Speechly_Identity_V2_LoginRequest.ProjectScope {
    get {
      if case .project(let v)? = scope {return v}
      return Speechly_Identity_V2_LoginRequest.ProjectScope()
    }
    set {scope = .project(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Scope: Equatable {
    /// Login scope application: use the given application context for all utterances.
    case application(Speechly_Identity_V2_LoginRequest.ApplicationScope)
    /// Login scope project: define the target application per utterance.
    /// The target applications must be located in the same project.
    case project(Speechly_Identity_V2_LoginRequest.ProjectScope)

  #if !swift(>=4.1)
    public static func ==(lhs: Speechly_Identity_V2_LoginRequest.OneOf_Scope, rhs: Speechly_Identity_V2_LoginRequest.OneOf_Scope) -> Bool {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch (lhs, rhs) {
      case (.application, .application): return {
        guard case .application(let l) = lhs, case .application(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      case (.project, .project): return {
        guard case .project(let l) = lhs, case .project(let r) = rhs else { preconditionFailure() }
        return l == r
      }()
      default: return false
      }
    }
  #endif
  }

  public struct ApplicationScope {
    // SwiftProtobuf.Message conformance is added in an extension below. See the
    // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
    // methods supported on all messages.

    /// Speechly application ID. The defined application can be accessed with the returned token.
    /// Required.
    public var appID: String = String()

    /// Define a specific model configuration to use.
    /// Defaults to the application's latest configuration.
    public var configID: String = String()

    public var unknownFields = SwiftProtobuf.UnknownStorage()

    public init() {}
  }

  public struct ProjectScope {
    // SwiftProtobuf.Message conformance is added in an extension below. See the
    // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
    // methods supported on all messages.

    /// Speechly project ID. Every application in the same project is accessible with the same token.
    /// Required.
    public var projectID: String = String()

    public var unknownFields = SwiftProtobuf.UnknownStorage()

    public init() {}
  }

  public init() {}
}

/// Top-level message returned by the server for the `Login` method.
public struct Speechly_Identity_V2_LoginResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// Access token which can used for Speechly SLU API.
  /// The token is a JSON Web Token and includes all standard claims, as well as custom ones.
  /// The token has expiration, so you should check whether it has expired before using it.
  /// It is safe to cache the token for future use until its expiration date.
  public var token: String = String()

  /// Amount of seconds the returned token is valid.
  public var validForS: UInt32 = 0

  /// Token expiration time in seconds after 1970-01-01 ("unix time").
  public var expiresAtEpoch: UInt64 = 0

  /// ISO-formatted UTC timestamp of the expiration time of the returned token.
  public var expiresAt: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.identity.v2"

extension Speechly_Identity_V2_LoginRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".LoginRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "device_id"),
    2: .same(proto: "application"),
    3: .same(proto: "project"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.deviceID) }()
      case 2: try {
        var v: Speechly_Identity_V2_LoginRequest.ApplicationScope?
        if let current = self.scope {
          try decoder.handleConflictingOneOf()
          if case .application(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.scope = .application(v)}
      }()
      case 3: try {
        var v: Speechly_Identity_V2_LoginRequest.ProjectScope?
        if let current = self.scope {
          try decoder.handleConflictingOneOf()
          if case .project(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.scope = .project(v)}
      }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.deviceID.isEmpty {
      try visitor.visitSingularStringField(value: self.deviceID, fieldNumber: 1)
    }
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every case branch when no optimizations are
    // enabled. https://github.com/apple/swift-protobuf/issues/1034
    switch self.scope {
    case .application?: try {
      guard case .application(let v)? = self.scope else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }()
    case .project?: try {
      guard case .project(let v)? = self.scope else { preconditionFailure() }
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    }()
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Identity_V2_LoginRequest, rhs: Speechly_Identity_V2_LoginRequest) -> Bool {
    if lhs.deviceID != rhs.deviceID {return false}
    if lhs.scope != rhs.scope {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Identity_V2_LoginRequest.ApplicationScope: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = Speechly_Identity_V2_LoginRequest.protoMessageName + ".ApplicationScope"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "app_id"),
    3: .standard(proto: "config_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.appID) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.configID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.appID.isEmpty {
      try visitor.visitSingularStringField(value: self.appID, fieldNumber: 1)
    }
    if !self.configID.isEmpty {
      try visitor.visitSingularStringField(value: self.configID, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Identity_V2_LoginRequest.ApplicationScope, rhs: Speechly_Identity_V2_LoginRequest.ApplicationScope) -> Bool {
    if lhs.appID != rhs.appID {return false}
    if lhs.configID != rhs.configID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Identity_V2_LoginRequest.ProjectScope: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = Speechly_Identity_V2_LoginRequest.protoMessageName + ".ProjectScope"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "project_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.projectID) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.projectID.isEmpty {
      try visitor.visitSingularStringField(value: self.projectID, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Identity_V2_LoginRequest.ProjectScope, rhs: Speechly_Identity_V2_LoginRequest.ProjectScope) -> Bool {
    if lhs.projectID != rhs.projectID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Identity_V2_LoginResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".LoginResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "token"),
    2: .standard(proto: "valid_for_s"),
    3: .standard(proto: "expires_at_epoch"),
    4: .standard(proto: "expires_at"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.token) }()
      case 2: try { try decoder.decodeSingularUInt32Field(value: &self.validForS) }()
      case 3: try { try decoder.decodeSingularUInt64Field(value: &self.expiresAtEpoch) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.expiresAt) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.token.isEmpty {
      try visitor.visitSingularStringField(value: self.token, fieldNumber: 1)
    }
    if self.validForS != 0 {
      try visitor.visitSingularUInt32Field(value: self.validForS, fieldNumber: 2)
    }
    if self.expiresAtEpoch != 0 {
      try visitor.visitSingularUInt64Field(value: self.expiresAtEpoch, fieldNumber: 3)
    }
    if !self.expiresAt.isEmpty {
      try visitor.visitSingularStringField(value: self.expiresAt, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Identity_V2_LoginResponse, rhs: Speechly_Identity_V2_LoginResponse) -> Bool {
    if lhs.token != rhs.token {return false}
    if lhs.validForS != rhs.validForS {return false}
    if lhs.expiresAtEpoch != rhs.expiresAtEpoch {return false}
    if lhs.expiresAt != rhs.expiresAt {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
