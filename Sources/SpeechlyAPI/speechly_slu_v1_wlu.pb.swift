// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: speechly/slu/v1/wlu.proto
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

/// Top-level message sent by the client for the `Texts` method.
public struct Speechly_Slu_V1_TextsRequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The target application for the texts request.
  /// Required.
  public var appID: String = String()

  /// List of WLURequest.
  /// Required.
  public var requests: [Speechly_Slu_V1_WLURequest] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Top-level message sent by the server for the `Texts` method.
public struct Speechly_Slu_V1_TextsResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// List of WLUResponses.
  /// Required.
  public var responses: [Speechly_Slu_V1_WLUResponse] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Top-level message sent by the client for the `Text` method.
public struct Speechly_Slu_V1_WLURequest {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The language of the text sent in the request as a BCP-47 language tag (e.g. "en-US").
  /// Required.
  public var languageCode: String = String()

  /// The text to recognise.
  /// Required.
  public var text: String = String()

  /// The reference time for postprocessing. By default, the current date is used.
  /// Optional.
  public var referenceTime: SwiftProtobuf.Google_Protobuf_Timestamp {
    get {return _referenceTime ?? SwiftProtobuf.Google_Protobuf_Timestamp()}
    set {_referenceTime = newValue}
  }
  /// Returns true if `referenceTime` has been explicitly set.
  public var hasReferenceTime: Bool {return self._referenceTime != nil}
  /// Clears the value of `referenceTime`. Subsequent reads from it will return its default value.
  public mutating func clearReferenceTime() {self._referenceTime = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _referenceTime: SwiftProtobuf.Google_Protobuf_Timestamp? = nil
}

/// Top-level message sent by the server for the `Text` method.
public struct Speechly_Slu_V1_WLUResponse {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// A list of WLU segments.
  public var segments: [Speechly_Slu_V1_WLUSegment] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Describes a WLU segment.
/// A segment is a logical portion of text denoted by its intent,
/// e.g. in a phrase "book me a flight and rent a car"
/// there would be a segment for "book me a flight" and another for "rent a car".
public struct Speechly_Slu_V1_WLUSegment {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The portion of text that contains this segment.
  public var text: String = String()

  /// The list of word tokens which are contained in this segment.
  public var tokens: [Speechly_Slu_V1_WLUToken] = []

  /// The list of entities which are contained in this segment.
  public var entities: [Speechly_Slu_V1_WLUEntity] = []

  /// The intent that defines this segment.
  public var intent: Speechly_Slu_V1_WLUIntent {
    get {return _intent ?? Speechly_Slu_V1_WLUIntent()}
    set {_intent = newValue}
  }
  /// Returns true if `intent` has been explicitly set.
  public var hasIntent: Bool {return self._intent != nil}
  /// Clears the value of `intent`. Subsequent reads from it will return its default value.
  public mutating func clearIntent() {self._intent = nil}

  /// The value of text annotated in SAL format.
  public var annotatedText: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _intent: Speechly_Slu_V1_WLUIntent? = nil
}

/// Describes a single word token in a segment.
public struct Speechly_Slu_V1_WLUToken {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The value of the word.
  public var word: String = String()

  /// Position of the token in the text.
  public var index: Int32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Describes a single entity in a segment.
///
/// An entity is a specific object in the phrase that falls into some kind of category,
/// e.g. in a SAL example "*book book a [burger restaurant](restaurant_type) for [tomorrow](date)"
/// "burger restaurant" would be an entity of type `restaurant_type`,
/// and "tomorrow" would be an entity of type `date`.
///
/// An entity has a start and end indices which map to the indices of words in WLUToken messages,
/// e.g. in the example "book a [burger restaurant](restaurant_type) for [tomorrow](date)" it would be:
///
/// - Entity "burger restaurant" - `start_position = 2, end_position = 3`
/// - Entity "tomorrow" - `start_position = 5, end_position = 5`
///
/// The start index is inclusive, but the end index is exclusive, i.e. the interval is `[start_position, end_position)`.
public struct Speechly_Slu_V1_WLUEntity {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The type of the entity, e.g. `restaurant_type` or `date`.
  public var entity: String = String()

  /// The value of the entity, e.g. `burger restaurant` or `tomorrow`.
  public var value: String = String()

  /// The starting index of the entity in the phrase, maps to the `index` field in `SLUTranscript`.
  /// Inclusive.
  public var startPosition: Int32 = 0

  /// The finishing index of the entity in the phrase, maps to the `index` field in `SLUTranscript`.
  /// Exclusive.
  public var endPosition: Int32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Describes the intent of a segment.
/// There can only be one intent per segment.
public struct Speechly_Slu_V1_WLUIntent {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The value of the intent, as defined in SAL.
  public var intent: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Speechly_Slu_V1_TextsRequest: @unchecked Sendable {}
extension Speechly_Slu_V1_TextsResponse: @unchecked Sendable {}
extension Speechly_Slu_V1_WLURequest: @unchecked Sendable {}
extension Speechly_Slu_V1_WLUResponse: @unchecked Sendable {}
extension Speechly_Slu_V1_WLUSegment: @unchecked Sendable {}
extension Speechly_Slu_V1_WLUToken: @unchecked Sendable {}
extension Speechly_Slu_V1_WLUEntity: @unchecked Sendable {}
extension Speechly_Slu_V1_WLUIntent: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.slu.v1"

extension Speechly_Slu_V1_TextsRequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".TextsRequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "app_id"),
    2: .same(proto: "requests"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.appID) }()
      case 2: try { try decoder.decodeRepeatedMessageField(value: &self.requests) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.appID.isEmpty {
      try visitor.visitSingularStringField(value: self.appID, fieldNumber: 1)
    }
    if !self.requests.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.requests, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_TextsRequest, rhs: Speechly_Slu_V1_TextsRequest) -> Bool {
    if lhs.appID != rhs.appID {return false}
    if lhs.requests != rhs.requests {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_TextsResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".TextsResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "responses"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeRepeatedMessageField(value: &self.responses) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.responses.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.responses, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_TextsResponse, rhs: Speechly_Slu_V1_TextsResponse) -> Bool {
    if lhs.responses != rhs.responses {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_WLURequest: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".WLURequest"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "language_code"),
    2: .same(proto: "text"),
    3: .standard(proto: "reference_time"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.languageCode) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.text) }()
      case 3: try { try decoder.decodeSingularMessageField(value: &self._referenceTime) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    if !self.languageCode.isEmpty {
      try visitor.visitSingularStringField(value: self.languageCode, fieldNumber: 1)
    }
    if !self.text.isEmpty {
      try visitor.visitSingularStringField(value: self.text, fieldNumber: 2)
    }
    try { if let v = self._referenceTime {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    } }()
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_WLURequest, rhs: Speechly_Slu_V1_WLURequest) -> Bool {
    if lhs.languageCode != rhs.languageCode {return false}
    if lhs.text != rhs.text {return false}
    if lhs._referenceTime != rhs._referenceTime {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_WLUResponse: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".WLUResponse"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "segments"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeRepeatedMessageField(value: &self.segments) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.segments.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.segments, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_WLUResponse, rhs: Speechly_Slu_V1_WLUResponse) -> Bool {
    if lhs.segments != rhs.segments {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_WLUSegment: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".WLUSegment"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "text"),
    2: .same(proto: "tokens"),
    3: .same(proto: "entities"),
    4: .same(proto: "intent"),
    5: .standard(proto: "annotated_text"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.text) }()
      case 2: try { try decoder.decodeRepeatedMessageField(value: &self.tokens) }()
      case 3: try { try decoder.decodeRepeatedMessageField(value: &self.entities) }()
      case 4: try { try decoder.decodeSingularMessageField(value: &self._intent) }()
      case 5: try { try decoder.decodeSingularStringField(value: &self.annotatedText) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    // The use of inline closures is to circumvent an issue where the compiler
    // allocates stack space for every if/case branch local when no optimizations
    // are enabled. https://github.com/apple/swift-protobuf/issues/1034 and
    // https://github.com/apple/swift-protobuf/issues/1182
    if !self.text.isEmpty {
      try visitor.visitSingularStringField(value: self.text, fieldNumber: 1)
    }
    if !self.tokens.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.tokens, fieldNumber: 2)
    }
    if !self.entities.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.entities, fieldNumber: 3)
    }
    try { if let v = self._intent {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    } }()
    if !self.annotatedText.isEmpty {
      try visitor.visitSingularStringField(value: self.annotatedText, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_WLUSegment, rhs: Speechly_Slu_V1_WLUSegment) -> Bool {
    if lhs.text != rhs.text {return false}
    if lhs.tokens != rhs.tokens {return false}
    if lhs.entities != rhs.entities {return false}
    if lhs._intent != rhs._intent {return false}
    if lhs.annotatedText != rhs.annotatedText {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_WLUToken: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".WLUToken"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "word"),
    2: .same(proto: "index"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.word) }()
      case 2: try { try decoder.decodeSingularInt32Field(value: &self.index) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.word.isEmpty {
      try visitor.visitSingularStringField(value: self.word, fieldNumber: 1)
    }
    if self.index != 0 {
      try visitor.visitSingularInt32Field(value: self.index, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_WLUToken, rhs: Speechly_Slu_V1_WLUToken) -> Bool {
    if lhs.word != rhs.word {return false}
    if lhs.index != rhs.index {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_WLUEntity: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".WLUEntity"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "entity"),
    2: .same(proto: "value"),
    3: .standard(proto: "start_position"),
    4: .standard(proto: "end_position"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.entity) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.value) }()
      case 3: try { try decoder.decodeSingularInt32Field(value: &self.startPosition) }()
      case 4: try { try decoder.decodeSingularInt32Field(value: &self.endPosition) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.entity.isEmpty {
      try visitor.visitSingularStringField(value: self.entity, fieldNumber: 1)
    }
    if !self.value.isEmpty {
      try visitor.visitSingularStringField(value: self.value, fieldNumber: 2)
    }
    if self.startPosition != 0 {
      try visitor.visitSingularInt32Field(value: self.startPosition, fieldNumber: 3)
    }
    if self.endPosition != 0 {
      try visitor.visitSingularInt32Field(value: self.endPosition, fieldNumber: 4)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_WLUEntity, rhs: Speechly_Slu_V1_WLUEntity) -> Bool {
    if lhs.entity != rhs.entity {return false}
    if lhs.value != rhs.value {return false}
    if lhs.startPosition != rhs.startPosition {return false}
    if lhs.endPosition != rhs.endPosition {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Slu_V1_WLUIntent: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".WLUIntent"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "intent"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.intent) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.intent.isEmpty {
      try visitor.visitSingularStringField(value: self.intent, fieldNumber: 1)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Slu_V1_WLUIntent, rhs: Speechly_Slu_V1_WLUIntent) -> Bool {
    if lhs.intent != rhs.intent {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
