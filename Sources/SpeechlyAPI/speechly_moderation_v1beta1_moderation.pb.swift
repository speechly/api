// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: speechly/moderation/v1beta1/moderation.proto
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

/// Describes the context where the moderated discussion took place.
public struct Speechly_Moderation_V1beta1_DiscourseContext {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// An identifier for the voice channel, e.g. voice chat room, the utterance originates from
  public var channelID: String = String()

  /// The identifier of the person who spoke the utterance
  public var speakerID: String = String()

  /// A list of person identifiers who were presumed to hear the utterance
  public var listenerIds: [String] = []

  /// Start time of the utterance
  public var startTime: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _startTime ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_startTime = newValue}
  }
  /// Returns true if `startTime` has been explicitly set.
  public var hasStartTime: Bool {return self._startTime != nil}
  /// Clears the value of `startTime`. Subsequent reads from it will return its default value.
  public mutating func clearStartTime() {self._startTime = nil}

  /// End time of the utterance
  public var endTime: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _endTime ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_endTime = newValue}
  }
  /// Returns true if `endTime` has been explicitly set.
  public var hasEndTime: Bool {return self._endTime != nil}
  /// Clears the value of `endTime`. Subsequent reads from it will return its default value.
  public mutating func clearEndTime() {self._endTime = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _startTime: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
  fileprivate var _endTime: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
}

/// Describes and identified label desbribing the content under moderation.
public struct Speechly_Moderation_V1beta1_ModerationLabel {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The label itself
  public var label: String = String()

  /// Confidence score. Value is between 0 and 1. The score should not be interpreted as probability.
  public var score: Float = 0

  /// The value is true if the model flags the label as abusive, otherwise it's false.
  public var flagged: Bool = false

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Describes the metadata of the audio to be moderated.
public struct Speechly_Moderation_V1beta1_AudioModerationConfig {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The identity of the model to be used for the moderation.
  public var modelID: String = String()

  /// The language of the utterance (as BCP-47 language code)
  public var languageCode: String = String()

  /// Description of the context where the utterance was uttered.
  public var discourseContext: Speechly_Moderation_V1beta1_DiscourseContext {
    get {return _discourseContext ?? Speechly_Moderation_V1beta1_DiscourseContext()}
    set {_discourseContext = newValue}
  }
  /// Returns true if `discourseContext` has been explicitly set.
  public var hasDiscourseContext: Bool {return self._discourseContext != nil}
  /// Clears the value of `discourseContext`. Subsequent reads from it will return its default value.
  public mutating func clearDiscourseContext() {self._discourseContext = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _discourseContext: Speechly_Moderation_V1beta1_DiscourseContext? = nil
}

/// Describes the moderation results applying to a sub segment of the content under moderation.
public struct Speechly_Moderation_V1beta1_ModerationSegment {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// Index of the segment
  public var index: UInt32 = 0

  /// Transcript of the content of the segment
  public var transcript: String = String()

  /// The moderation labels
  public var labels: [Speechly_Moderation_V1beta1_ModerationLabel] = []

  /// Start time of the segment in milliseconds
  public var startMs: UInt32 = 0

  /// End time of the segment in milliseconds
  public var endMs: UInt32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Speechly_Moderation_V1beta1_DiscourseContext: @unchecked Sendable {}
extension Speechly_Moderation_V1beta1_ModerationLabel: @unchecked Sendable {}
extension Speechly_Moderation_V1beta1_AudioModerationConfig: @unchecked Sendable {}
extension Speechly_Moderation_V1beta1_ModerationSegment: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.moderation.v1beta1"

extension Speechly_Moderation_V1beta1_DiscourseContext: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DiscourseContext"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "channel_id"),
    2: .standard(proto: "speaker_id"),
    3: .standard(proto: "listener_ids"),
    4: .standard(proto: "start_time"),
    5: .standard(proto: "end_time"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.channelID) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.speakerID) }()
      case 3: try { try decoder.decodeRepeatedStringField(value: &self.listenerIds) }()
      case 4: try { try decoder.decodeSingularMessageField(value: &self._startTime) }()
      case 5: try { try decoder.decodeSingularMessageField(value: &self._endTime) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    if !self.channelID.isEmpty {
      try visitor.visitSingularStringField(value: self.channelID, fieldNumber: 1)
    }
    if !self.speakerID.isEmpty {
      try visitor.visitSingularStringField(value: self.speakerID, fieldNumber: 2)
    }
    if !self.listenerIds.isEmpty {
      try visitor.visitRepeatedStringField(value: self.listenerIds, fieldNumber: 3)
    }
    try { if let v = self._startTime {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    } }()
    try { if let v = self._endTime {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Moderation_V1beta1_DiscourseContext, rhs: Speechly_Moderation_V1beta1_DiscourseContext) -> Bool {
    if lhs.channelID != rhs.channelID {return false}
    if lhs.speakerID != rhs.speakerID {return false}
    if lhs.listenerIds != rhs.listenerIds {return false}
    if lhs._startTime != rhs._startTime {return false}
    if lhs._endTime != rhs._endTime {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Moderation_V1beta1_ModerationLabel: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ModerationLabel"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "label"),
    2: .same(proto: "score"),
    3: .same(proto: "flagged"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.label) }()
      case 2: try { try decoder.decodeSingularFloatField(value: &self.score) }()
      case 3: try { try decoder.decodeSingularBoolField(value: &self.flagged) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.label.isEmpty {
      try visitor.visitSingularStringField(value: self.label, fieldNumber: 1)
    }
    if self.score != 0 {
      try visitor.visitSingularFloatField(value: self.score, fieldNumber: 2)
    }
    if self.flagged != false {
      try visitor.visitSingularBoolField(value: self.flagged, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Moderation_V1beta1_ModerationLabel, rhs: Speechly_Moderation_V1beta1_ModerationLabel) -> Bool {
    if lhs.label != rhs.label {return false}
    if lhs.score != rhs.score {return false}
    if lhs.flagged != rhs.flagged {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Moderation_V1beta1_AudioModerationConfig: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".AudioModerationConfig"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "model_id"),
    2: .standard(proto: "language_code"),
    3: .standard(proto: "discourse_context"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.modelID) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.languageCode) }()
      case 3: try { try decoder.decodeSingularMessageField(value: &self._discourseContext) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    if !self.modelID.isEmpty {
      try visitor.visitSingularStringField(value: self.modelID, fieldNumber: 1)
    }
    if !self.languageCode.isEmpty {
      try visitor.visitSingularStringField(value: self.languageCode, fieldNumber: 2)
    }
    try { if let v = self._discourseContext {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Moderation_V1beta1_AudioModerationConfig, rhs: Speechly_Moderation_V1beta1_AudioModerationConfig) -> Bool {
    if lhs.modelID != rhs.modelID {return false}
    if lhs.languageCode != rhs.languageCode {return false}
    if lhs._discourseContext != rhs._discourseContext {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Moderation_V1beta1_ModerationSegment: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".ModerationSegment"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "index"),
    2: .same(proto: "transcript"),
    3: .same(proto: "labels"),
    4: .standard(proto: "start_ms"),
    5: .standard(proto: "end_ms"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularUInt32Field(value: &self.index) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.transcript) }()
      case 3: try { try decoder.decodeRepeatedMessageField(value: &self.labels) }()
      case 4: try { try decoder.decodeSingularUInt32Field(value: &self.startMs) }()
      case 5: try { try decoder.decodeSingularUInt32Field(value: &self.endMs) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if self.index != 0 {
      try visitor.visitSingularUInt32Field(value: self.index, fieldNumber: 1)
    }
    if !self.transcript.isEmpty {
      try visitor.visitSingularStringField(value: self.transcript, fieldNumber: 2)
    }
    if !self.labels.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.labels, fieldNumber: 3)
    }
    if self.startMs != 0 {
      try visitor.visitSingularUInt32Field(value: self.startMs, fieldNumber: 4)
    }
    if self.endMs != 0 {
      try visitor.visitSingularUInt32Field(value: self.endMs, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Moderation_V1beta1_ModerationSegment, rhs: Speechly_Moderation_V1beta1_ModerationSegment) -> Bool {
    if lhs.index != rhs.index {return false}
    if lhs.transcript != rhs.transcript {return false}
    if lhs.labels != rhs.labels {return false}
    if lhs.startMs != rhs.startMs {return false}
    if lhs.endMs != rhs.endMs {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
