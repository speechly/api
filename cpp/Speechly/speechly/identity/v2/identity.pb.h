// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: speechly/identity/v2/identity.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_speechly_2fidentity_2fv2_2fidentity_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_speechly_2fidentity_2fv2_2fidentity_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_speechly_2fidentity_2fv2_2fidentity_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_speechly_2fidentity_2fv2_2fidentity_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxiliaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[2]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_speechly_2fidentity_2fv2_2fidentity_2eproto;
namespace speechly {
namespace identity {
namespace v2 {
class ApplicationScope;
struct ApplicationScopeDefaultTypeInternal;
extern ApplicationScopeDefaultTypeInternal _ApplicationScope_default_instance_;
class ProjectScope;
struct ProjectScopeDefaultTypeInternal;
extern ProjectScopeDefaultTypeInternal _ProjectScope_default_instance_;
}  // namespace v2
}  // namespace identity
}  // namespace speechly
PROTOBUF_NAMESPACE_OPEN
template<> ::speechly::identity::v2::ApplicationScope* Arena::CreateMaybeMessage<::speechly::identity::v2::ApplicationScope>(Arena*);
template<> ::speechly::identity::v2::ProjectScope* Arena::CreateMaybeMessage<::speechly::identity::v2::ProjectScope>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace speechly {
namespace identity {
namespace v2 {

// ===================================================================

class ApplicationScope final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:speechly.identity.v2.ApplicationScope) */ {
 public:
  inline ApplicationScope() : ApplicationScope(nullptr) {}
  ~ApplicationScope() override;
  explicit constexpr ApplicationScope(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  ApplicationScope(const ApplicationScope& from);
  ApplicationScope(ApplicationScope&& from) noexcept
    : ApplicationScope() {
    *this = ::std::move(from);
  }

  inline ApplicationScope& operator=(const ApplicationScope& from) {
    CopyFrom(from);
    return *this;
  }
  inline ApplicationScope& operator=(ApplicationScope&& from) noexcept {
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
  static const ApplicationScope& default_instance() {
    return *internal_default_instance();
  }
  static inline const ApplicationScope* internal_default_instance() {
    return reinterpret_cast<const ApplicationScope*>(
               &_ApplicationScope_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(ApplicationScope& a, ApplicationScope& b) {
    a.Swap(&b);
  }
  inline void Swap(ApplicationScope* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(ApplicationScope* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline ApplicationScope* New() const final {
    return new ApplicationScope();
  }

  ApplicationScope* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<ApplicationScope>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const ApplicationScope& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const ApplicationScope& from);
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
  void InternalSwap(ApplicationScope* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "speechly.identity.v2.ApplicationScope";
  }
  protected:
  explicit ApplicationScope(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kAppIdFieldNumber = 1,
    kConfigIdFieldNumber = 3,
  };
  // string app_id = 1;
  void clear_app_id();
  const std::string& app_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_app_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_app_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_app_id();
  void set_allocated_app_id(std::string* app_id);
  private:
  const std::string& _internal_app_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_app_id(const std::string& value);
  std::string* _internal_mutable_app_id();
  public:

  // string config_id = 3;
  void clear_config_id();
  const std::string& config_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_config_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_config_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_config_id();
  void set_allocated_config_id(std::string* config_id);
  private:
  const std::string& _internal_config_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_config_id(const std::string& value);
  std::string* _internal_mutable_config_id();
  public:

  // @@protoc_insertion_point(class_scope:speechly.identity.v2.ApplicationScope)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr app_id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr config_id_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_speechly_2fidentity_2fv2_2fidentity_2eproto;
};
// -------------------------------------------------------------------

class ProjectScope final :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:speechly.identity.v2.ProjectScope) */ {
 public:
  inline ProjectScope() : ProjectScope(nullptr) {}
  ~ProjectScope() override;
  explicit constexpr ProjectScope(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized);

  ProjectScope(const ProjectScope& from);
  ProjectScope(ProjectScope&& from) noexcept
    : ProjectScope() {
    *this = ::std::move(from);
  }

  inline ProjectScope& operator=(const ProjectScope& from) {
    CopyFrom(from);
    return *this;
  }
  inline ProjectScope& operator=(ProjectScope&& from) noexcept {
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
  static const ProjectScope& default_instance() {
    return *internal_default_instance();
  }
  static inline const ProjectScope* internal_default_instance() {
    return reinterpret_cast<const ProjectScope*>(
               &_ProjectScope_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(ProjectScope& a, ProjectScope& b) {
    a.Swap(&b);
  }
  inline void Swap(ProjectScope* other) {
    if (other == this) return;
    if (GetOwningArena() == other->GetOwningArena()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(ProjectScope* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetOwningArena() == other->GetOwningArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline ProjectScope* New() const final {
    return new ProjectScope();
  }

  ProjectScope* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<ProjectScope>(arena);
  }
  using ::PROTOBUF_NAMESPACE_ID::Message::CopyFrom;
  void CopyFrom(const ProjectScope& from);
  using ::PROTOBUF_NAMESPACE_ID::Message::MergeFrom;
  void MergeFrom(const ProjectScope& from);
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
  void InternalSwap(ProjectScope* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "speechly.identity.v2.ProjectScope";
  }
  protected:
  explicit ProjectScope(::PROTOBUF_NAMESPACE_ID::Arena* arena,
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
    kProjectIdFieldNumber = 1,
  };
  // string project_id = 1;
  void clear_project_id();
  const std::string& project_id() const;
  template <typename ArgT0 = const std::string&, typename... ArgT>
  void set_project_id(ArgT0&& arg0, ArgT... args);
  std::string* mutable_project_id();
  PROTOBUF_MUST_USE_RESULT std::string* release_project_id();
  void set_allocated_project_id(std::string* project_id);
  private:
  const std::string& _internal_project_id() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_project_id(const std::string& value);
  std::string* _internal_mutable_project_id();
  public:

  // @@protoc_insertion_point(class_scope:speechly.identity.v2.ProjectScope)
 private:
  class _Internal;

  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr project_id_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_speechly_2fidentity_2fv2_2fidentity_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// ApplicationScope

// string app_id = 1;
inline void ApplicationScope::clear_app_id() {
  app_id_.ClearToEmpty();
}
inline const std::string& ApplicationScope::app_id() const {
  // @@protoc_insertion_point(field_get:speechly.identity.v2.ApplicationScope.app_id)
  return _internal_app_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void ApplicationScope::set_app_id(ArgT0&& arg0, ArgT... args) {
 
 app_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:speechly.identity.v2.ApplicationScope.app_id)
}
inline std::string* ApplicationScope::mutable_app_id() {
  std::string* _s = _internal_mutable_app_id();
  // @@protoc_insertion_point(field_mutable:speechly.identity.v2.ApplicationScope.app_id)
  return _s;
}
inline const std::string& ApplicationScope::_internal_app_id() const {
  return app_id_.Get();
}
inline void ApplicationScope::_internal_set_app_id(const std::string& value) {
  
  app_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* ApplicationScope::_internal_mutable_app_id() {
  
  return app_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* ApplicationScope::release_app_id() {
  // @@protoc_insertion_point(field_release:speechly.identity.v2.ApplicationScope.app_id)
  return app_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void ApplicationScope::set_allocated_app_id(std::string* app_id) {
  if (app_id != nullptr) {
    
  } else {
    
  }
  app_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), app_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.ApplicationScope.app_id)
}

// string config_id = 3;
inline void ApplicationScope::clear_config_id() {
  config_id_.ClearToEmpty();
}
inline const std::string& ApplicationScope::config_id() const {
  // @@protoc_insertion_point(field_get:speechly.identity.v2.ApplicationScope.config_id)
  return _internal_config_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void ApplicationScope::set_config_id(ArgT0&& arg0, ArgT... args) {
 
 config_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:speechly.identity.v2.ApplicationScope.config_id)
}
inline std::string* ApplicationScope::mutable_config_id() {
  std::string* _s = _internal_mutable_config_id();
  // @@protoc_insertion_point(field_mutable:speechly.identity.v2.ApplicationScope.config_id)
  return _s;
}
inline const std::string& ApplicationScope::_internal_config_id() const {
  return config_id_.Get();
}
inline void ApplicationScope::_internal_set_config_id(const std::string& value) {
  
  config_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* ApplicationScope::_internal_mutable_config_id() {
  
  return config_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* ApplicationScope::release_config_id() {
  // @@protoc_insertion_point(field_release:speechly.identity.v2.ApplicationScope.config_id)
  return config_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void ApplicationScope::set_allocated_config_id(std::string* config_id) {
  if (config_id != nullptr) {
    
  } else {
    
  }
  config_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), config_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.ApplicationScope.config_id)
}

// -------------------------------------------------------------------

// ProjectScope

// string project_id = 1;
inline void ProjectScope::clear_project_id() {
  project_id_.ClearToEmpty();
}
inline const std::string& ProjectScope::project_id() const {
  // @@protoc_insertion_point(field_get:speechly.identity.v2.ProjectScope.project_id)
  return _internal_project_id();
}
template <typename ArgT0, typename... ArgT>
inline PROTOBUF_ALWAYS_INLINE
void ProjectScope::set_project_id(ArgT0&& arg0, ArgT... args) {
 
 project_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, static_cast<ArgT0 &&>(arg0), args..., GetArenaForAllocation());
  // @@protoc_insertion_point(field_set:speechly.identity.v2.ProjectScope.project_id)
}
inline std::string* ProjectScope::mutable_project_id() {
  std::string* _s = _internal_mutable_project_id();
  // @@protoc_insertion_point(field_mutable:speechly.identity.v2.ProjectScope.project_id)
  return _s;
}
inline const std::string& ProjectScope::_internal_project_id() const {
  return project_id_.Get();
}
inline void ProjectScope::_internal_set_project_id(const std::string& value) {
  
  project_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, value, GetArenaForAllocation());
}
inline std::string* ProjectScope::_internal_mutable_project_id() {
  
  return project_id_.Mutable(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, GetArenaForAllocation());
}
inline std::string* ProjectScope::release_project_id() {
  // @@protoc_insertion_point(field_release:speechly.identity.v2.ProjectScope.project_id)
  return project_id_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaForAllocation());
}
inline void ProjectScope::set_allocated_project_id(std::string* project_id) {
  if (project_id != nullptr) {
    
  } else {
    
  }
  project_id_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), project_id,
      GetArenaForAllocation());
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.ProjectScope.project_id)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace v2
}  // namespace identity
}  // namespace speechly

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_speechly_2fidentity_2fv2_2fidentity_2eproto
