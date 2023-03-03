// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: speechly/slu/v2beta1/batch_api.proto
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

/// Describes a request to process audio from a pre-existing source.
public struct Speechly_Slu_V2beta1_ProcessAudioSourceRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The options shared by all of the source audios.
  public var config: Speechly_Slu_V2beta1_ProcessAudioBatchConfig {
    get {return _config ?? Speechly_Slu_V2beta1_ProcessAudioBatchConfig()}
    set {_config = newValue}
  }
  /// Returns true if `config` has been explicitly set.
  public var hasConfig: Bool {return self._config != nil}
  /// Clears the value of `config`. Subsequent reads from it will return its default value.
  public mutating func clearConfig() {self._config = nil}

  /// The source audios, and their unique options.
  public var source: [Speechly_Slu_V2beta1_ProcessAudioSourceRequestItem] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _config: Speechly_Slu_V2beta1_ProcessAudioBatchConfig? = nil
}

/// Describes a response to request to process audio from a pre-existing source.
public struct Speechly_Slu_V2beta1_ProcessAudioSourceResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The details of the created operations.
  public var operation: [Speechly_Slu_V2beta1_Operation] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Query the status of an operation. At least one of these must be given.
public struct Speechly_Slu_V2beta1_QueryStatusRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// ID of an audio processing operation.
  public var operationIds: [String] = []

  /// Reference ID of an operation.
  public var operationReferences: [String] = []

  /// ID of an audio processing batch.
  public var batchID: String = String()

  /// Reference ID of a batch.
  public var batchReference: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Describes the statuses of the queried operations.
public struct Speechly_Slu_V2beta1_QueryStatusResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The details of the audio processing operation.
  public var operation: [Speechly_Slu_V2beta1_Operation] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Speechly_Slu_V2beta1_ProcessAudioSourceRequest: @unchecked Sendable {}
extension Speechly_Slu_V2beta1_ProcessAudioSourceResponse: @unchecked Sendable {}
extension Speechly_Slu_V2beta1_QueryStatusRequest: @unchecked Sendable {}
extension Speechly_Slu_V2beta1_QueryStatusResponse: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.slu.v2beta1"

extension Speechly_Slu_V2beta1_ProcessAudioSourceRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ProcessAudioSourceRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "config"),
    2: .same(proto: "source"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._config) }()
      case 2: try { try decoder.decodeRepeatedMessageField(value: &self.source) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    try { if let v = self._config {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    } }()
    if !self.source.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.source, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V2beta1_ProcessAudioSourceRequest, rhs: Speechly_Slu_V2beta1_ProcessAudioSourceRequest) -> Bool {
    if lhs._config != rhs._config {return false}
    if lhs.source != rhs.source {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V2beta1_ProcessAudioSourceResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ProcessAudioSourceResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "operation"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeRepeatedMessageField(value: &self.operation) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.operation.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.operation, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V2beta1_ProcessAudioSourceResponse, rhs: Speechly_Slu_V2beta1_ProcessAudioSourceResponse) -> Bool {
    if lhs.operation != rhs.operation {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V2beta1_QueryStatusRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".QueryStatusRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "operation_ids"),
    2: .standard(proto: "operation_references"),
    3: .standard(proto: "batch_id"),
    4: .standard(proto: "batch_reference"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeRepeatedStringField(value: &self.operationIds) }()
      case 2: try { try decoder.decodeRepeatedStringField(value: &self.operationReferences) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.batchID) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.batchReference) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.operationIds.isEmpty {
      try visitor.visitRepeatedStringField(value: self.operationIds, fieldNumber: 1)
    }
    if !self.operationReferences.isEmpty {
      try visitor.visitRepeatedStringField(value: self.operationReferences, fieldNumber: 2)
    }
    if !self.batchID.isEmpty {
      try visitor.visitSingularStringField(value: self.batchID, fieldNumber: 3)
    }
    if !self.batchReference.isEmpty {
      try visitor.visitSingularStringField(value: self.batchReference, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V2beta1_QueryStatusRequest, rhs: Speechly_Slu_V2beta1_QueryStatusRequest) -> Bool {
    if lhs.operationIds != rhs.operationIds {return false}
    if lhs.operationReferences != rhs.operationReferences {return false}
    if lhs.batchID != rhs.batchID {return false}
    if lhs.batchReference != rhs.batchReference {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V2beta1_QueryStatusResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".QueryStatusResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "operation"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeRepeatedMessageField(value: &self.operation) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.operation.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.operation, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V2beta1_QueryStatusResponse, rhs: Speechly_Slu_V2beta1_QueryStatusResponse) -> Bool {
    if lhs.operation != rhs.operation {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
