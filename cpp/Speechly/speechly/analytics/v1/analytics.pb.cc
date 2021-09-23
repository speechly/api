// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: speechly/analytics/v1/analytics.proto

#include "speechly/analytics/v1/analytics.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
namespace speechly {
namespace analytics {
namespace v1 {
class UtteranceStatisticsPeriodDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<UtteranceStatisticsPeriod> _instance;
} _UtteranceStatisticsPeriod_default_instance_;
}  // namespace v1
}  // namespace analytics
}  // namespace speechly
static void InitDefaultsscc_info_UtteranceStatisticsPeriod_speechly_2fanalytics_2fv1_2fanalytics_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::speechly::analytics::v1::_UtteranceStatisticsPeriod_default_instance_;
    new (ptr) ::speechly::analytics::v1::UtteranceStatisticsPeriod();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::speechly::analytics::v1::UtteranceStatisticsPeriod::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_UtteranceStatisticsPeriod_speechly_2fanalytics_2fv1_2fanalytics_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_UtteranceStatisticsPeriod_speechly_2fanalytics_2fv1_2fanalytics_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_speechly_2fanalytics_2fv1_2fanalytics_2eproto[1];
static const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* file_level_enum_descriptors_speechly_2fanalytics_2fv1_2fanalytics_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_speechly_2fanalytics_2fv1_2fanalytics_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_speechly_2fanalytics_2fv1_2fanalytics_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::speechly::analytics::v1::UtteranceStatisticsPeriod, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::speechly::analytics::v1::UtteranceStatisticsPeriod, app_id_),
  PROTOBUF_FIELD_OFFSET(::speechly::analytics::v1::UtteranceStatisticsPeriod, start_time_),
  PROTOBUF_FIELD_OFFSET(::speechly::analytics::v1::UtteranceStatisticsPeriod, count_),
  PROTOBUF_FIELD_OFFSET(::speechly::analytics::v1::UtteranceStatisticsPeriod, utterances_seconds_),
  PROTOBUF_FIELD_OFFSET(::speechly::analytics::v1::UtteranceStatisticsPeriod, annotated_seconds_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::speechly::analytics::v1::UtteranceStatisticsPeriod)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::speechly::analytics::v1::_UtteranceStatisticsPeriod_default_instance_),
};

const char descriptor_table_protodef_speechly_2fanalytics_2fv1_2fanalytics_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n%speechly/analytics/v1/analytics.proto\022"
  "\025speechly.analytics.v1\"\205\001\n\031UtteranceStat"
  "isticsPeriod\022\016\n\006app_id\030\002 \001(\t\022\022\n\nstart_ti"
  "me\030\003 \001(\t\022\r\n\005count\030\004 \001(\005\022\032\n\022utterances_se"
  "conds\030\005 \001(\005\022\031\n\021annotated_seconds\030\006 \001(\005*n"
  "\n\013Aggregation\022\027\n\023AGGREGATION_INVALID\020\000\022\027"
  "\n\023AGGREGATION_MONTHLY\020\001\022\025\n\021AGGREGATION_D"
  "AILY\020\002\022\026\n\022AGGREGATION_HOURLY\020\003B\206\001\n\031com.s"
  "peechly.analytics.v1B\016AnalyticsProtoP\001Z!"
  "speechly/analytics/v1;analyticsv1\242\002\003SAX\252"
  "\002\025Speechly.Analytics.V1\312\002\025Speechly\\Analy"
  "tics\\V1b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_sccs[1] = {
  &scc_info_UtteranceStatisticsPeriod_speechly_2fanalytics_2fv1_2fanalytics_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_once;
static bool descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto = {
  &descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_initialized, descriptor_table_protodef_speechly_2fanalytics_2fv1_2fanalytics_2eproto, "speechly/analytics/v1/analytics.proto", 455,
  &descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_once, descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_sccs, descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto_deps, 1, 0,
  schemas, file_default_instances, TableStruct_speechly_2fanalytics_2fv1_2fanalytics_2eproto::offsets,
  file_level_metadata_speechly_2fanalytics_2fv1_2fanalytics_2eproto, 1, file_level_enum_descriptors_speechly_2fanalytics_2fv1_2fanalytics_2eproto, file_level_service_descriptors_speechly_2fanalytics_2fv1_2fanalytics_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_speechly_2fanalytics_2fv1_2fanalytics_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto), true);
namespace speechly {
namespace analytics {
namespace v1 {
const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* Aggregation_descriptor() {
  ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&descriptor_table_speechly_2fanalytics_2fv1_2fanalytics_2eproto);
  return file_level_enum_descriptors_speechly_2fanalytics_2fv1_2fanalytics_2eproto[0];
}
bool Aggregation_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    default:
      return false;
  }
}


// ===================================================================

void UtteranceStatisticsPeriod::InitAsDefaultInstance() {
}
class UtteranceStatisticsPeriod::_Internal {
 public:
};

UtteranceStatisticsPeriod::UtteranceStatisticsPeriod()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:speechly.analytics.v1.UtteranceStatisticsPeriod)
}
UtteranceStatisticsPeriod::UtteranceStatisticsPeriod(const UtteranceStatisticsPeriod& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  app_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_app_id().empty()) {
    app_id_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.app_id_);
  }
  start_time_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_start_time().empty()) {
    start_time_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.start_time_);
  }
  ::memcpy(&count_, &from.count_,
    static_cast<size_t>(reinterpret_cast<char*>(&annotated_seconds_) -
    reinterpret_cast<char*>(&count_)) + sizeof(annotated_seconds_));
  // @@protoc_insertion_point(copy_constructor:speechly.analytics.v1.UtteranceStatisticsPeriod)
}

void UtteranceStatisticsPeriod::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_UtteranceStatisticsPeriod_speechly_2fanalytics_2fv1_2fanalytics_2eproto.base);
  app_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  start_time_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  ::memset(&count_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&annotated_seconds_) -
      reinterpret_cast<char*>(&count_)) + sizeof(annotated_seconds_));
}

UtteranceStatisticsPeriod::~UtteranceStatisticsPeriod() {
  // @@protoc_insertion_point(destructor:speechly.analytics.v1.UtteranceStatisticsPeriod)
  SharedDtor();
}

void UtteranceStatisticsPeriod::SharedDtor() {
  app_id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  start_time_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void UtteranceStatisticsPeriod::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const UtteranceStatisticsPeriod& UtteranceStatisticsPeriod::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_UtteranceStatisticsPeriod_speechly_2fanalytics_2fv1_2fanalytics_2eproto.base);
  return *internal_default_instance();
}


void UtteranceStatisticsPeriod::Clear() {
// @@protoc_insertion_point(message_clear_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  app_id_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  start_time_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  ::memset(&count_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&annotated_seconds_) -
      reinterpret_cast<char*>(&count_)) + sizeof(annotated_seconds_));
  _internal_metadata_.Clear();
}

const char* UtteranceStatisticsPeriod::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string app_id = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_app_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "speechly.analytics.v1.UtteranceStatisticsPeriod.app_id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string start_time = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          auto str = _internal_mutable_start_time();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "speechly.analytics.v1.UtteranceStatisticsPeriod.start_time"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // int32 count = 4;
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 32)) {
          count_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // int32 utterances_seconds = 5;
      case 5:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 40)) {
          utterances_seconds_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // int32 annotated_seconds = 6;
      case 6:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 48)) {
          annotated_seconds_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* UtteranceStatisticsPeriod::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string app_id = 2;
  if (this->app_id().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_app_id().data(), static_cast<int>(this->_internal_app_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "speechly.analytics.v1.UtteranceStatisticsPeriod.app_id");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_app_id(), target);
  }

  // string start_time = 3;
  if (this->start_time().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_start_time().data(), static_cast<int>(this->_internal_start_time().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "speechly.analytics.v1.UtteranceStatisticsPeriod.start_time");
    target = stream->WriteStringMaybeAliased(
        3, this->_internal_start_time(), target);
  }

  // int32 count = 4;
  if (this->count() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt32ToArray(4, this->_internal_count(), target);
  }

  // int32 utterances_seconds = 5;
  if (this->utterances_seconds() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt32ToArray(5, this->_internal_utterances_seconds(), target);
  }

  // int32 annotated_seconds = 6;
  if (this->annotated_seconds() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt32ToArray(6, this->_internal_annotated_seconds(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:speechly.analytics.v1.UtteranceStatisticsPeriod)
  return target;
}

size_t UtteranceStatisticsPeriod::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string app_id = 2;
  if (this->app_id().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_app_id());
  }

  // string start_time = 3;
  if (this->start_time().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_start_time());
  }

  // int32 count = 4;
  if (this->count() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int32Size(
        this->_internal_count());
  }

  // int32 utterances_seconds = 5;
  if (this->utterances_seconds() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int32Size(
        this->_internal_utterances_seconds());
  }

  // int32 annotated_seconds = 6;
  if (this->annotated_seconds() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int32Size(
        this->_internal_annotated_seconds());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void UtteranceStatisticsPeriod::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  GOOGLE_DCHECK_NE(&from, this);
  const UtteranceStatisticsPeriod* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<UtteranceStatisticsPeriod>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:speechly.analytics.v1.UtteranceStatisticsPeriod)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:speechly.analytics.v1.UtteranceStatisticsPeriod)
    MergeFrom(*source);
  }
}

void UtteranceStatisticsPeriod::MergeFrom(const UtteranceStatisticsPeriod& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.app_id().size() > 0) {

    app_id_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.app_id_);
  }
  if (from.start_time().size() > 0) {

    start_time_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.start_time_);
  }
  if (from.count() != 0) {
    _internal_set_count(from._internal_count());
  }
  if (from.utterances_seconds() != 0) {
    _internal_set_utterances_seconds(from._internal_utterances_seconds());
  }
  if (from.annotated_seconds() != 0) {
    _internal_set_annotated_seconds(from._internal_annotated_seconds());
  }
}

void UtteranceStatisticsPeriod::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void UtteranceStatisticsPeriod::CopyFrom(const UtteranceStatisticsPeriod& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:speechly.analytics.v1.UtteranceStatisticsPeriod)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool UtteranceStatisticsPeriod::IsInitialized() const {
  return true;
}

void UtteranceStatisticsPeriod::InternalSwap(UtteranceStatisticsPeriod* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  app_id_.Swap(&other->app_id_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  start_time_.Swap(&other->start_time_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  swap(count_, other->count_);
  swap(utterances_seconds_, other->utterances_seconds_);
  swap(annotated_seconds_, other->annotated_seconds_);
}

::PROTOBUF_NAMESPACE_ID::Metadata UtteranceStatisticsPeriod::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace v1
}  // namespace analytics
}  // namespace speechly
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::speechly::analytics::v1::UtteranceStatisticsPeriod* Arena::CreateMaybeMessage< ::speechly::analytics::v1::UtteranceStatisticsPeriod >(Arena* arena) {
  return Arena::CreateInternal< ::speechly::analytics::v1::UtteranceStatisticsPeriod >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>