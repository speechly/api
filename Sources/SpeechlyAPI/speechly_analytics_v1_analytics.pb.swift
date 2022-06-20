// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: speechly/analytics/v1/analytics.proto
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

/// Aggregation granularity.
public enum Speechly_Analytics_V1_Aggregation: SwiftProtobuf.Enum {
  public typealias RawValue = Int
  case invalid // = 0
  case monthly // = 1
  case daily // = 2
  case hourly // = 3
  case UNRECOGNIZED(Int)

  public init() {
    self = .invalid
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .invalid
    case 1: self = .monthly
    case 2: self = .daily
    case 3: self = .hourly
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .invalid: return 0
    case .monthly: return 1
    case .daily: return 2
    case .hourly: return 3
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Speechly_Analytics_V1_Aggregation: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Speechly_Analytics_V1_Aggregation] = [
    .invalid,
    .monthly,
    .daily,
    .hourly,
  ]
}

#endif  // swift(>=4.2)

/// Single row of statistics response.
public struct Speechly_Analytics_V1_UtteranceStatisticsPeriod {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// app_id or empty, if aggregating over project.
  public var appID: String = String()

  /// ISO-formatted UTC timestamp of the start time of the period.
  public var startTime: String = String()

  /// Count (sum) of utterances in the current period.
  public var count: Int32 = 0

  /// Total duration of the utterances in the current period.
  public var utterancesSeconds: Int32 = 0

  /// Total duration of annotated utterances in the current period.
  public var annotatedSeconds: Int32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// A single utterances recognized by Speechly API.
public struct Speechly_Analytics_V1_Utterance {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// The ASR transcript of the utterance.
  public var transcript: String = String()

  /// The SAL-annotated transcript of the utterance.
  public var annotated: String = String()

  /// ISO-formatted UTC date of the utterance.
  public var date: String = String()

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

/// Information about the on-device decoder.
public struct Speechly_Analytics_V1_DecoderInfo {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  /// Version of the Speechly on-device decoder.
  public var version: String = String()

  /// Number of utterances the decoder has transcribed.
  public var utteranceCount: Int32 = 0

  /// Cumulative sum of the utterance length in seconds for the decoder.
  public var totalSecondsTranscribed: Int32 = 0

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

#if swift(>=5.5) && canImport(_Concurrency)
extension Speechly_Analytics_V1_Aggregation: @unchecked Sendable {}
extension Speechly_Analytics_V1_UtteranceStatisticsPeriod: @unchecked Sendable {}
extension Speechly_Analytics_V1_Utterance: @unchecked Sendable {}
extension Speechly_Analytics_V1_DecoderInfo: @unchecked Sendable {}
#endif  // swift(>=5.5) && canImport(_Concurrency)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "speechly.analytics.v1"

extension Speechly_Analytics_V1_Aggregation: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "AGGREGATION_INVALID"),
    1: .same(proto: "AGGREGATION_MONTHLY"),
    2: .same(proto: "AGGREGATION_DAILY"),
    3: .same(proto: "AGGREGATION_HOURLY"),
  ]
}

extension Speechly_Analytics_V1_UtteranceStatisticsPeriod: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".UtteranceStatisticsPeriod"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    2: .standard(proto: "app_id"),
    3: .standard(proto: "start_time"),
    4: .same(proto: "count"),
    5: .standard(proto: "utterances_seconds"),
    6: .standard(proto: "annotated_seconds"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 2: try { try decoder.decodeSingularStringField(value: &self.appID) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.startTime) }()
      case 4: try { try decoder.decodeSingularInt32Field(value: &self.count) }()
      case 5: try { try decoder.decodeSingularInt32Field(value: &self.utterancesSeconds) }()
      case 6: try { try decoder.decodeSingularInt32Field(value: &self.annotatedSeconds) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.appID.isEmpty {
      try visitor.visitSingularStringField(value: self.appID, fieldNumber: 2)
    }
    if !self.startTime.isEmpty {
      try visitor.visitSingularStringField(value: self.startTime, fieldNumber: 3)
    }
    if self.count != 0 {
      try visitor.visitSingularInt32Field(value: self.count, fieldNumber: 4)
    }
    if self.utterancesSeconds != 0 {
      try visitor.visitSingularInt32Field(value: self.utterancesSeconds, fieldNumber: 5)
    }
    if self.annotatedSeconds != 0 {
      try visitor.visitSingularInt32Field(value: self.annotatedSeconds, fieldNumber: 6)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Analytics_V1_UtteranceStatisticsPeriod, rhs: Speechly_Analytics_V1_UtteranceStatisticsPeriod) -> Bool {
    if lhs.appID != rhs.appID {return false}
    if lhs.startTime != rhs.startTime {return false}
    if lhs.count != rhs.count {return false}
    if lhs.utterancesSeconds != rhs.utterancesSeconds {return false}
    if lhs.annotatedSeconds != rhs.annotatedSeconds {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Analytics_V1_Utterance: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Utterance"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "transcript"),
    2: .same(proto: "annotated"),
    3: .same(proto: "date"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.transcript) }()
      case 2: try { try decoder.decodeSingularStringField(value: &self.annotated) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.date) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.transcript.isEmpty {
      try visitor.visitSingularStringField(value: self.transcript, fieldNumber: 1)
    }
    if !self.annotated.isEmpty {
      try visitor.visitSingularStringField(value: self.annotated, fieldNumber: 2)
    }
    if !self.date.isEmpty {
      try visitor.visitSingularStringField(value: self.date, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Analytics_V1_Utterance, rhs: Speechly_Analytics_V1_Utterance) -> Bool {
    if lhs.transcript != rhs.transcript {return false}
    if lhs.annotated != rhs.annotated {return false}
    if lhs.date != rhs.date {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension Speechly_Analytics_V1_DecoderInfo: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".DecoderInfo"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "version"),
    2: .standard(proto: "utterance_count"),
    3: .standard(proto: "total_seconds_transcribed"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularStringField(value: &self.version) }()
      case 2: try { try decoder.decodeSingularInt32Field(value: &self.utteranceCount) }()
      case 3: try { try decoder.decodeSingularInt32Field(value: &self.totalSecondsTranscribed) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.version.isEmpty {
      try visitor.visitSingularStringField(value: self.version, fieldNumber: 1)
    }
    if self.utteranceCount != 0 {
      try visitor.visitSingularInt32Field(value: self.utteranceCount, fieldNumber: 2)
    }
    if self.totalSecondsTranscribed != 0 {
      try visitor.visitSingularInt32Field(value: self.totalSecondsTranscribed, fieldNumber: 3)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: Speechly_Analytics_V1_DecoderInfo, rhs: Speechly_Analytics_V1_DecoderInfo) -> Bool {
    if lhs.version != rhs.version {return false}
    if lhs.utteranceCount != rhs.utteranceCount {return false}
    if lhs.totalSecondsTranscribed != rhs.totalSecondsTranscribed {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
