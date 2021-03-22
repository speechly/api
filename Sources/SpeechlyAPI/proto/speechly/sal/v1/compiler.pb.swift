// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: proto/speechly/sal/v1/compiler.proto
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

/// Contains a chunk of SAL source.
/// This message is consumed by `Validate` and `ExtractSALSources` RPCs and as a part of `CompileRequest`.
public struct Speechly_Sal_V1_AppSource {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The ID of Speechly app to compile for.
  public var appID: String = String()

  /// The language of SAL as a BCP-47 language tag (e.g. "en-US").
  public var language: String = String()

  /// Chunk of SAL source code.
  public var dataChunk: Data = Data()

  /// Optional content type of the SAL source.
  public var contentType: Speechly_Sal_V1_AppSource.ContentType = .unspecified

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  /// Content type options.
  public enum ContentType: SwiftProtobuf.Enum {
    public typealias RawValue = Int
    case unspecified // = 0
    case yaml // = 1
    case tar // = 2
    case UNRECOGNIZED(Int)

    public init() {
      self = .unspecified
    }

    public init?(rawValue: Int) {
      switch rawValue {
      case 0: self = .unspecified
      case 1: self = .yaml
      case 2: self = .tar
      default: self = .UNRECOGNIZED(rawValue)
      }
    }

    public var rawValue: Int {
      switch self {
      case .unspecified: return 0
      case .yaml: return 1
      case .tar: return 2
      case .UNRECOGNIZED(let i): return i
      }
    }

  }

  public init() {}
}

#if swift(>=4.2)

extension Speechly_Sal_V1_AppSource.ContentType: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Speechly_Sal_V1_AppSource.ContentType] = [
    .unspecified,
    .yaml,
    .tar,
  ]
}

#endif  // swift(>=4.2)

/// This message is consumed by `Compile` RPC
public struct Speechly_Sal_V1_CompileRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// A chunk of SAL source.
  public var appSource: Speechly_Sal_V1_AppSource {
    get {return _appSource ?? Speechly_Sal_V1_AppSource()}
    set {_appSource = newValue}
  }
  /// Returns true if `appSource` has been explicitly set.
  public var hasAppSource: Bool {return self._appSource != nil}
  /// Clears the value of `appSource`. Subsequent reads from it will return its default value.
  public mutating func clearAppSource() {self._appSource = nil}

  /// Number of examples to return:
  public var batchSize: Int32 = 0

  /// Random seed for example sampling. Changing seed can give different output.
  public var randomSeed: Int32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _appSource: Speechly_Sal_V1_AppSource? = nil
}

/// Top-level message sent by the server for the `Compile` method.
public struct Speechly_Sal_V1_CompileResult {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The status of compilation.
  public var result: Speechly_Sal_V1_CompileResult.Result = .compileSuccess

  /// (If the result was compiled) A list of compiled templates.
  public var templates: [String] = []

  /// (If the result failed or had warnings) A list of error / warning messages.
  public var messages: [Speechly_Sal_V1_LineReference] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  /// Describes the status of result.
  public enum Result: SwiftProtobuf.Enum {
    public typealias RawValue = Int

    /// Result has been successfully compiled.
    case compileSuccess // = 0

    /// Result has failed to compile.
    case compileFailure // = 1

    /// Result has been compiled, but with warnings.
    case compileWarning // = 2
    case UNRECOGNIZED(Int)

    public init() {
      self = .compileSuccess
    }

    public init?(rawValue: Int) {
      switch rawValue {
      case 0: self = .compileSuccess
      case 1: self = .compileFailure
      case 2: self = .compileWarning
      default: self = .UNRECOGNIZED(rawValue)
      }
    }

    public var rawValue: Int {
      switch self {
      case .compileSuccess: return 0
      case .compileFailure: return 1
      case .compileWarning: return 2
      case .UNRECOGNIZED(let i): return i
      }
    }

  }

  public init() {}
}

#if swift(>=4.2)

extension Speechly_Sal_V1_CompileResult.Result: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Speechly_Sal_V1_CompileResult.Result] = [
    .compileSuccess,
    .compileFailure,
    .compileWarning,
  ]
}

#endif  // swift(>=4.2)

/// Top-level message sent by the server for the `Validate` method.
public struct Speechly_Sal_V1_ValidateResult {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// A list of error / warning messages, may be empty if validation didn't find any issues.
  public var messages: [Speechly_Sal_V1_LineReference] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Describes a message related to a line in SAL source code.
public struct Speechly_Sal_V1_LineReference {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The line in SAL source that this message refers to.
  public var line: UInt64 = 0

  /// The column in SAL source that this message refers to.
  public var column: UInt32 = 0

  /// The file in SAL sources that this message refers to.
  public var file: String = String()

  /// The level of the message.
  public var level: Speechly_Sal_V1_LineReference.Level = .note

  /// The contents of the message.
  public var message: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  /// The level of the message.
  public enum Level: SwiftProtobuf.Enum {
    public typealias RawValue = Int

    /// A notice - for information only.
    case note // = 0

    /// A warning, does not fail compilation or validation, but should be addressed.
    case warning // = 1

    /// An error, fails compilation and validation.
    case error // = 2
    case UNRECOGNIZED(Int)

    public init() {
      self = .note
    }

    public init?(rawValue: Int) {
      switch rawValue {
      case 0: self = .note
      case 1: self = .warning
      case 2: self = .error
      default: self = .UNRECOGNIZED(rawValue)
      }
    }

    public var rawValue: Int {
      switch self {
      case .note: return 0
      case .warning: return 1
      case .error: return 2
      case .UNRECOGNIZED(let i): return i
      }
    }

  }

  public init() {}
}

#if swift(>=4.2)

extension Speechly_Sal_V1_LineReference.Level: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Speechly_Sal_V1_LineReference.Level] = [
    .note,
    .warning,
    .error,
  ]
}

#endif  // swift(>=4.2)

/// Top-level message sent by the server for the `ExtractSALSources` method.
public struct Speechly_Sal_V1_ExtractSALSourcesResult {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// Chunk of extracted SAL source code.
  public var dataChunk: Data = Data()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.sal.v1"

extension Speechly_Sal_V1_AppSource: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".AppSource"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "app_id"),
    2: .same(proto: "language"),
    3: .standard(proto: "data_chunk"),
    4: .standard(proto: "content_type"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.appID) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.language) }()
      case 3: try { try decoder.decodeSingularBytesField(value: &self.dataChunk) }()
      case 4: try { try decoder.decodeSingularEnumField(value: &self.contentType) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.appID.isEmpty {
      try visitor.visitSingularStringField(value: self.appID, fieldNumber: 1)
    }
    if !self.language.isEmpty {
      try visitor.visitSingularStringField(value: self.language, fieldNumber: 2)
    }
    if !self.dataChunk.isEmpty {
      try visitor.visitSingularBytesField(value: self.dataChunk, fieldNumber: 3)
    }
    if self.contentType != .unspecified {
      try visitor.visitSingularEnumField(value: self.contentType, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Sal_V1_AppSource, rhs: Speechly_Sal_V1_AppSource) -> Bool {
    if lhs.appID != rhs.appID {return false}
    if lhs.language != rhs.language {return false}
    if lhs.dataChunk != rhs.dataChunk {return false}
    if lhs.contentType != rhs.contentType {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Sal_V1_AppSource.ContentType: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "CONTENT_TYPE_UNSPECIFIED"),
    1: .same(proto: "CONTENT_TYPE_YAML"),
    2: .same(proto: "CONTENT_TYPE_TAR"),
  ]
}

extension Speechly_Sal_V1_CompileRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CompileRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "app_source"),
    2: .standard(proto: "batch_size"),
    3: .standard(proto: "random_seed"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._appSource) }()
      case 2: try { try decoder.decodeSingularInt32Field(value: &self.batchSize) }()
      case 3: try { try decoder.decodeSingularInt32Field(value: &self.randomSeed) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._appSource {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if self.batchSize != 0 {
      try visitor.visitSingularInt32Field(value: self.batchSize, fieldNumber: 2)
    }
    if self.randomSeed != 0 {
      try visitor.visitSingularInt32Field(value: self.randomSeed, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Sal_V1_CompileRequest, rhs: Speechly_Sal_V1_CompileRequest) -> Bool {
    if lhs._appSource != rhs._appSource {return false}
    if lhs.batchSize != rhs.batchSize {return false}
    if lhs.randomSeed != rhs.randomSeed {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Sal_V1_CompileResult: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".CompileResult"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "result"),
    2: .same(proto: "templates"),
    3: .same(proto: "messages"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularEnumField(value: &self.result) }()
      case 2: try { try decoder.decodeRepeatedStringField(value: &self.templates) }()
      case 3: try { try decoder.decodeRepeatedMessageField(value: &self.messages) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.result != .compileSuccess {
      try visitor.visitSingularEnumField(value: self.result, fieldNumber: 1)
    }
    if !self.templates.isEmpty {
      try visitor.visitRepeatedStringField(value: self.templates, fieldNumber: 2)
    }
    if !self.messages.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.messages, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Sal_V1_CompileResult, rhs: Speechly_Sal_V1_CompileResult) -> Bool {
    if lhs.result != rhs.result {return false}
    if lhs.templates != rhs.templates {return false}
    if lhs.messages != rhs.messages {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Sal_V1_CompileResult.Result: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "COMPILE_SUCCESS"),
    1: .same(proto: "COMPILE_FAILURE"),
    2: .same(proto: "COMPILE_WARNING"),
  ]
}

extension Speechly_Sal_V1_ValidateResult: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ValidateResult"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "messages"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeRepeatedMessageField(value: &self.messages) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.messages.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.messages, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Sal_V1_ValidateResult, rhs: Speechly_Sal_V1_ValidateResult) -> Bool {
    if lhs.messages != rhs.messages {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Sal_V1_LineReference: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".LineReference"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "line"),
    2: .same(proto: "column"),
    3: .same(proto: "file"),
    4: .same(proto: "level"),
    5: .same(proto: "message"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularUInt64Field(value: &self.line) }()
      case 2: try { try decoder.decodeSingularUInt32Field(value: &self.column) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.file) }()
      case 4: try { try decoder.decodeSingularEnumField(value: &self.level) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.message) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.line != 0 {
      try visitor.visitSingularUInt64Field(value: self.line, fieldNumber: 1)
    }
    if self.column != 0 {
      try visitor.visitSingularUInt32Field(value: self.column, fieldNumber: 2)
    }
    if !self.file.isEmpty {
      try visitor.visitSingularStringField(value: self.file, fieldNumber: 3)
    }
    if self.level != .note {
      try visitor.visitSingularEnumField(value: self.level, fieldNumber: 4)
    }
    if !self.message.isEmpty {
      try visitor.visitSingularStringField(value: self.message, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Sal_V1_LineReference, rhs: Speechly_Sal_V1_LineReference) -> Bool {
    if lhs.line != rhs.line {return false}
    if lhs.column != rhs.column {return false}
    if lhs.file != rhs.file {return false}
    if lhs.level != rhs.level {return false}
    if lhs.message != rhs.message {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Sal_V1_LineReference.Level: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "LEVEL_NOTE"),
    1: .same(proto: "LEVEL_WARNING"),
    2: .same(proto: "LEVEL_ERROR"),
  ]
}

extension Speechly_Sal_V1_ExtractSALSourcesResult: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ExtractSALSourcesResult"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "data_chunk"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularBytesField(value: &self.dataChunk) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.dataChunk.isEmpty {
      try visitor.visitSingularBytesField(value: self.dataChunk, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Sal_V1_ExtractSALSourcesResult, rhs: Speechly_Sal_V1_ExtractSALSourcesResult) -> Bool {
    if lhs.dataChunk != rhs.dataChunk {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
