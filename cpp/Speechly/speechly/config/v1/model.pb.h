// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: speechly/config/v1/model.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_speechly_2fconfig_2fv1_2fmodel_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_speechly_2fconfig_2fv1_2fmodel_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3017000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3017003 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata_lite.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_speechly_2fconfig_2fv1_2fmodel_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_speechly_2fconfig_2fv1_2fmodel_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxiliaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[1]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_speechly_2fconfig_2fv1_2fmodel_2eproto;
namespace speechly {
namespace config {
namespace v1 {
class BaseModel;
struct BaseModelDefaultTypeInternal;
extern BaseModelDefaultTypeInternal _BaseModel_default_instance_;
}  // namespace v1
}  // namespace config
}  // namespace speechly
PROTOBUF_NAMESPACE_OPEN
template<> ::speechly::config::v1::BaseModel* Arena::CreateMaybeMessage<::speechly::config::v1::BaseModel>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace speechly {
namespace config {
namespace v1 {

// ===================================================================

class BaseModel final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:speechly.config.v1.BaseModel) */ {
 public:
  inline BaseModel() : BaseModel(nullptr) {}
  ~BaseModel() override;
  explicit constexpr BaseModel(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  BaseModel(const BaseModel& from);
  BaseModel(BaseModel&& from) noexcept
    : BaseModel() {
    *this = ::std::move(from);
  }

  inline BaseModel& operator=(const BaseModel& from) {
    CopyFrom(from);
    return *this;
  }
  inline BaseModel& operator=(BaseModel&& from) noexcept {
    if (this == &from) return *this;
    if (GetOwningArena() == from.GetOwningArena()) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const BaseModel& default_instance() {
    return *internal_default_instance();
  }
  static inline const BaseModel* internal_default_instance() {
    return reinterpret_cast<const BaseModel*>(
               &_BaseModel_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(BaseModel& a, BaseModel& b) {
    a.Swap(&b);
  }
  inline void Swap(BaseModel* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(BaseModel* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline BaseModel* New() const final {
    return new BaseModel();
  }

  BaseModel* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<BaseModel>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const BaseModel& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const BaseModel& from);
  private:
  static void MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to, const ::PROTOBUF_NAMESPACE_ID::Message&from);
  public:
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(BaseModel* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "speechly.config.v1.BaseModel";
  }
  protected:
  explicit BaseModel(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                       bool is_message_owned = false);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  public:

  static const ClassData _class_data_;
  const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*GetClassData() const final;

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kNameFieldNumber = 1,
    kAliasFieldNumber = 2,
    kIsDownloadableFieldNumber = 3,
  };
  // string name = 1;
  void clear_name();
  const std::string& name() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_name(ArgT0&& arg0, ArgT... args);
  std::string* mutable_name();
  PROTOBUF_MUST_USE_RESULT std::string* release_name();
  void set_allocated_name(std::string* name);
  private:
  const std::string& _internal_name() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_name(const std::string& value);
  std::string* _internal_mutable_name();
  public:

  // string alias = 2;
  void clear_alias();
  const std::string& alias() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_alias(ArgT0&& arg0, ArgT... args);
  std::string* mutable_alias();
  PROTOBUF_MUST_USE_RESULT std::string* release_alias();
  void set_allocated_alias(std::string* alias);
  private:
  const std::string& _internal_alias() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_alias(const std::string& value);
  std::string* _internal_mutable_alias();
  public:

  // bool is_downloadable = 3;
  void clear_is_downloadable();
  bool is_downloadable() const;
  void set_is_downloadable(bool value);
  private:
  bool _internal_is_downloadable() const;
  void _internal_set_is_downloadable(bool value);
  public:

  // @@protoc_insertion_point(class_scope:speechly.config.v1.BaseModel)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr alias_;
  bool is_downloadable_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_speechly_2fconfig_2fv1_2fmodel_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// BaseModel

// string name = 1;
inline void BaseModel::clear_name() {
  name_.ClearToEmpty();
}
inline const std::string& BaseModel::name() const {
  // @@protoc_insertion_point(field_get:speechly.config.v1.BaseModel.name)
  return _internal_name();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void BaseModel::set_name(ArgT0&& arg0, ArgT... args) {
 
 name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:speechly.config.v1.BaseModel.name)
}
inline std::string* BaseModel::mutable_name() {
  std::string* _s = _internal_mutable_name();
  // @@protoc_insertion_point(field_mutable:speechly.config.v1.BaseModel.name)
  return _s;
}
inline const std::string& BaseModel::_internal_name() const {
  return name_.Get();
}
inline void BaseModel::_internal_set_name(const std::string& value) {
  
  name_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* BaseModel::_internal_mutable_name() {
  
  return name_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* BaseModel::release_name() {
  // @@protoc_insertion_point(field_release:speechly.config.v1.BaseModel.name)
  return name_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void BaseModel::set_allocated_name(std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), name,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:speechly.config.v1.BaseModel.name)
}

// string alias = 2;
inline void BaseModel::clear_alias() {
  alias_.ClearToEmpty();
}
inline const std::string& BaseModel::alias() const {
  // @@protoc_insertion_point(field_get:speechly.config.v1.BaseModel.alias)
  return _internal_alias();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void BaseModel::set_alias(ArgT0&& arg0, ArgT... args) {
 
 alias_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:speechly.config.v1.BaseModel.alias)
}
inline std::string* BaseModel::mutable_alias() {
  std::string* _s = _internal_mutable_alias();
  // @@protoc_insertion_point(field_mutable:speechly.config.v1.BaseModel.alias)
  return _s;
}
inline const std::string& BaseModel::_internal_alias() const {
  return alias_.Get();
}
inline void BaseModel::_internal_set_alias(const std::string& value) {
  
  alias_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* BaseModel::_internal_mutable_alias() {
  
  return alias_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* BaseModel::release_alias() {
  // @@protoc_insertion_point(field_release:speechly.config.v1.BaseModel.alias)
  return alias_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void BaseModel::set_allocated_alias(std::string* alias) {
  if (alias != nullptr) {
    
  } else {
    
  }
  alias_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), alias,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:speechly.config.v1.BaseModel.alias)
}

// bool is_downloadable = 3;
inline void BaseModel::clear_is_downloadable() {
  is_downloadable_ = false;
}
inline bool BaseModel::_internal_is_downloadable() const {
  return is_downloadable_;
}
inline bool BaseModel::is_downloadable() const {
  // @@protoc_insertion_point(field_get:speechly.config.v1.BaseModel.is_downloadable)
  return _internal_is_downloadable();
}
inline void BaseModel::_internal_set_is_downloadable(bool value) {
  
  is_downloadable_ = value;
}
inline void BaseModel::set_is_downloadable(bool value) {
  _internal_set_is_downloadable(value);
  // @@protoc_insertion_point(field_set:speechly.config.v1.BaseModel.is_downloadable)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace v1
}  // namespace config
}  // namespace speechly

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_speechly_2fconfig_2fv1_2fmodel_2eproto
