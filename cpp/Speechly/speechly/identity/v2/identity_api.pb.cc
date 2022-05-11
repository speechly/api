// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: speechly/identity/v2/identity_api.proto

#include "speechly/identity/v2/identity_api.pb.h"

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

PROTOBUF_PRAGMA_INIT_SEG
namespace speechly {
namespace identity {
namespace v2 {
constexpr LoginRequest::LoginRequest(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : device_id_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , _oneof_case_{}{}
struct LoginRequestDefaultTypeInternal {
  constexpr LoginRequestDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~LoginRequestDefaultTypeInternal() {}
  union {
    LoginRequest _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT LoginRequestDefaultTypeInternal _LoginRequest_default_instance_;
constexpr LoginResponse::LoginResponse(
  ::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized)
  : token_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , expires_at_(&::PROTOBUF_NAMESPACE_ID::internal::fixed_address_empty_string)
  , expires_at_epoch_(uint64_t{0u})
  , valid_for_s_(0u){}
struct LoginResponseDefaultTypeInternal {
  constexpr LoginResponseDefaultTypeInternal()
    : _instance(::PROTOBUF_NAMESPACE_ID::internal::ConstantInitialized{}) {}
  ~LoginResponseDefaultTypeInternal() {}
  union {
    LoginResponse _instance;
  };
};
PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT LoginResponseDefaultTypeInternal _LoginResponse_default_instance_;
}  // namespace v2
}  // namespace identity
}  // namespace speechly
static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _internal_metadata_),
  ~0u,  // no _extensions_
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _oneof_case_[0]),
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, device_id_),
  ::PROTOBUF_NAMESPACE_ID::internal::kInvalidFieldOffsetTag,
  ::PROTOBUF_NAMESPACE_ID::internal::kInvalidFieldOffsetTag,
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, scope_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, token_),
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, valid_for_s_),
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, expires_at_epoch_),
  PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, expires_at_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::speechly::identity::v2::LoginRequest)},
  { 9, -1, sizeof(::speechly::identity::v2::LoginResponse)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::speechly::identity::v2::_LoginRequest_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::speechly::identity::v2::_LoginResponse_default_instance_),
};

const char descriptor_table_protodef_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\'speechly/identity/v2/identity_api.prot"
  "o\022\024speechly.identity.v2\032#speechly/identi"
  "ty/v2/identity.proto\"\240\001\n\014LoginRequest\022\021\n"
  "\tdevice_id\030\001 \001(\t\022=\n\013application\030\002 \001(\0132&."
  "speechly.identity.v2.ApplicationScopeH\000\022"
  "5\n\007project\030\003 \001(\0132\".speechly.identity.v2."
  "ProjectScopeH\000B\007\n\005scope\"a\n\rLoginResponse"
  "\022\r\n\005token\030\001 \001(\t\022\023\n\013valid_for_s\030\002 \001(\r\022\030\n\020"
  "expires_at_epoch\030\003 \001(\004\022\022\n\nexpires_at\030\004 \001"
  "(\t2_\n\013IdentityAPI\022P\n\005Login\022\".speechly.id"
  "entity.v2.LoginRequest\032#.speechly.identi"
  "ty.v2.LoginResponseB\203\001\n\030com.speechly.ide"
  "ntity.v2B\020IdentityApiProtoP\001Z\037speechly/i"
  "dentity/v2;identityv2\242\002\003SIX\252\002\024Speechly.I"
  "dentity.V2\312\002\024Speechly\\Identity\\V2b\006proto"
  "3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_deps[1] = {
  &::descriptor_table_speechly_2fidentity_2fv2_2fidentity_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto = {
  false, false, 601, descriptor_table_protodef_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto, "speechly/identity/v2/identity_api.proto", 
  &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once, descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_deps, 1, 2,
  schemas, file_default_instances, TableStruct_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto::offsets,
  file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto, file_level_enum_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto, file_level_service_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto,
};
PROTOBUF_ATTRIBUTE_WEAK const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable* descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_getter() {
  return &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto;
}

// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY static ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptorsRunner dynamic_init_dummy_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto(&descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto);
namespace speechly {
namespace identity {
namespace v2 {

// ===================================================================

class LoginRequest::_Internal {
 public:
  static const ::speechly::identity::v2::ApplicationScope& application(const LoginRequest* msg);
  static const ::speechly::identity::v2::ProjectScope& project(const LoginRequest* msg);
};

const ::speechly::identity::v2::ApplicationScope&
LoginRequest::_Internal::application(const LoginRequest* msg) {
  return *msg->scope_.application_;
}
const ::speechly::identity::v2::ProjectScope&
LoginRequest::_Internal::project(const LoginRequest* msg) {
  return *msg->scope_.project_;
}
void LoginRequest::set_allocated_application(::speechly::identity::v2::ApplicationScope* application) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaForAllocation();
  clear_scope();
  if (application) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena =
        ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper<
            ::PROTOBUF_NAMESPACE_ID::MessageLite>::GetOwningArena(
                reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(application));
    if (message_arena != submessage_arena) {
      application = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, application, submessage_arena);
    }
    set_has_application();
    scope_.application_ = application;
  }
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.LoginRequest.application)
}
void LoginRequest::clear_application() {
  if (_internal_has_application()) {
    if (GetArenaForAllocation() == nullptr) {
      delete scope_.application_;
    }
    clear_has_scope();
  }
}
void LoginRequest::set_allocated_project(::speechly::identity::v2::ProjectScope* project) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaForAllocation();
  clear_scope();
  if (project) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena =
        ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper<
            ::PROTOBUF_NAMESPACE_ID::MessageLite>::GetOwningArena(
                reinterpret_cast<::PROTOBUF_NAMESPACE_ID::MessageLite*>(project));
    if (message_arena != submessage_arena) {
      project = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, project, submessage_arena);
    }
    set_has_project();
    scope_.project_ = project;
  }
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.LoginRequest.project)
}
void LoginRequest::clear_project() {
  if (_internal_has_project()) {
    if (GetArenaForAllocation() == nullptr) {
      delete scope_.project_;
    }
    clear_has_scope();
  }
}
LoginRequest::LoginRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:speechly.identity.v2.LoginRequest)
}
LoginRequest::LoginRequest(const LoginRequest& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  device_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_device_id().empty()) {
    device_id_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_device_id(), 
      GetArenaForAllocation());
  }
  clear_has_scope();
  switch (from.scope_case()) {
    case kApplication: {
      _internal_mutable_application()->::speechly::identity::v2::ApplicationScope::MergeFrom(from._internal_application());
      break;
    }
    case kProject: {
      _internal_mutable_project()->::speechly::identity::v2::ProjectScope::MergeFrom(from._internal_project());
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  // @@protoc_insertion_point(copy_constructor:speechly.identity.v2.LoginRequest)
}

inline void LoginRequest::SharedCtor() {
device_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
clear_has_scope();
}

LoginRequest::~LoginRequest() {
  // @@protoc_insertion_point(destructor:speechly.identity.v2.LoginRequest)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void LoginRequest::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  device_id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (has_scope()) {
    clear_scope();
  }
}

void LoginRequest::ArenaDtor(void* object) {
  LoginRequest* _this = reinterpret_cast< LoginRequest* >(object);
  (void)_this;
}
void LoginRequest::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void LoginRequest::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void LoginRequest::clear_scope() {
// @@protoc_insertion_point(one_of_clear_start:speechly.identity.v2.LoginRequest)
  switch (scope_case()) {
    case kApplication: {
      if (GetArenaForAllocation() == nullptr) {
        delete scope_.application_;
      }
      break;
    }
    case kProject: {
      if (GetArenaForAllocation() == nullptr) {
        delete scope_.project_;
      }
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  _oneof_case_[0] = SCOPE_NOT_SET;
}


void LoginRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:speechly.identity.v2.LoginRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  device_id_.ClearToEmpty();
  clear_scope();
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* LoginRequest::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // string device_id = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_device_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "speechly.identity.v2.LoginRequest.device_id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // .speechly.identity.v2.ApplicationScope application = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          ptr = ctx->ParseMessage(_internal_mutable_application(), ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // .speechly.identity.v2.ProjectScope project = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          ptr = ctx->ParseMessage(_internal_mutable_project(), ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag == 0) || ((tag & 7) == 4)) {
          CHK_(ptr);
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
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

::PROTOBUF_NAMESPACE_ID::uint8* LoginRequest::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:speechly.identity.v2.LoginRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string device_id = 1;
  if (!this->_internal_device_id().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_device_id().data(), static_cast<int>(this->_internal_device_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "speechly.identity.v2.LoginRequest.device_id");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_device_id(), target);
  }

  // .speechly.identity.v2.ApplicationScope application = 2;
  if (_internal_has_application()) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(
        2, _Internal::application(this), target, stream);
  }

  // .speechly.identity.v2.ProjectScope project = 3;
  if (_internal_has_project()) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(
        3, _Internal::project(this), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:speechly.identity.v2.LoginRequest)
  return target;
}

size_t LoginRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:speechly.identity.v2.LoginRequest)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string device_id = 1;
  if (!this->_internal_device_id().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_device_id());
  }

  switch (scope_case()) {
    // .speechly.identity.v2.ApplicationScope application = 2;
    case kApplication: {
      total_size += 1 +
        ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(
          *scope_.application_);
      break;
    }
    // .speechly.identity.v2.ProjectScope project = 3;
    case kProject: {
      total_size += 1 +
        ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(
          *scope_.project_);
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData LoginRequest::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    LoginRequest::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*LoginRequest::GetClassData() const { return &_class_data_; }

void LoginRequest::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<LoginRequest *>(to)->MergeFrom(
      static_cast<const LoginRequest &>(from));
}


void LoginRequest::MergeFrom(const LoginRequest& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:speechly.identity.v2.LoginRequest)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_device_id().empty()) {
    _internal_set_device_id(from._internal_device_id());
  }
  switch (from.scope_case()) {
    case kApplication: {
      _internal_mutable_application()->::speechly::identity::v2::ApplicationScope::MergeFrom(from._internal_application());
      break;
    }
    case kProject: {
      _internal_mutable_project()->::speechly::identity::v2::ProjectScope::MergeFrom(from._internal_project());
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void LoginRequest::CopyFrom(const LoginRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:speechly.identity.v2.LoginRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool LoginRequest::IsInitialized() const {
  return true;
}

void LoginRequest::InternalSwap(LoginRequest* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &device_id_, GetArenaForAllocation(),
      &other->device_id_, other->GetArenaForAllocation()
  );
  swap(scope_, other->scope_);
  swap(_oneof_case_[0], other->_oneof_case_[0]);
}

::PROTOBUF_NAMESPACE_ID::Metadata LoginRequest::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_getter, &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once,
      file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[0]);
}

// ===================================================================

class LoginResponse::_Internal {
 public:
};

LoginResponse::LoginResponse(::PROTOBUF_NAMESPACE_ID::Arena* arena,
                         bool is_message_owned)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena, is_message_owned) {
  SharedCtor();
  if (!is_message_owned) {
    RegisterArenaDtor(arena);
  }
  // @@protoc_insertion_point(arena_constructor:speechly.identity.v2.LoginResponse)
}
LoginResponse::LoginResponse(const LoginResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  token_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_token().empty()) {
    token_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_token(), 
      GetArenaForAllocation());
  }
  expires_at_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_expires_at().empty()) {
    expires_at_.Set(::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::EmptyDefault{}, from._internal_expires_at(), 
      GetArenaForAllocation());
  }
  ::memcpy(&expires_at_epoch_, &from.expires_at_epoch_,
    static_cast<size_t>(reinterpret_cast<char*>(&valid_for_s_) -
    reinterpret_cast<char*>(&expires_at_epoch_)) + sizeof(valid_for_s_));
  // @@protoc_insertion_point(copy_constructor:speechly.identity.v2.LoginResponse)
}

inline void LoginResponse::SharedCtor() {
token_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
expires_at_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
::memset(reinterpret_cast<char*>(this) + static_cast<size_t>(
    reinterpret_cast<char*>(&expires_at_epoch_) - reinterpret_cast<char*>(this)),
    0, static_cast<size_t>(reinterpret_cast<char*>(&valid_for_s_) -
    reinterpret_cast<char*>(&expires_at_epoch_)) + sizeof(valid_for_s_));
}

LoginResponse::~LoginResponse() {
  // @@protoc_insertion_point(destructor:speechly.identity.v2.LoginResponse)
  if (GetArenaForAllocation() != nullptr) return;
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

inline void LoginResponse::SharedDtor() {
  GOOGLE_DCHECK(GetArenaForAllocation() == nullptr);
  token_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  expires_at_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void LoginResponse::ArenaDtor(void* object) {
  LoginResponse* _this = reinterpret_cast< LoginResponse* >(object);
  (void)_this;
}
void LoginResponse::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void LoginResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}

void LoginResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:speechly.identity.v2.LoginResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  token_.ClearToEmpty();
  expires_at_.ClearToEmpty();
  ::memset(&expires_at_epoch_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&valid_for_s_) -
      reinterpret_cast<char*>(&expires_at_epoch_)) + sizeof(valid_for_s_));
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* LoginResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    switch (tag >> 3) {
      // string token = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_token();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "speechly.identity.v2.LoginResponse.token"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint32 valid_for_s = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 16)) {
          valid_for_s_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint32(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // uint64 expires_at_epoch = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 24)) {
          expires_at_epoch_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string expires_at = 4;
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 34)) {
          auto str = _internal_mutable_expires_at();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "speechly.identity.v2.LoginResponse.expires_at"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag == 0) || ((tag & 7) == 4)) {
          CHK_(ptr);
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
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

::PROTOBUF_NAMESPACE_ID::uint8* LoginResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:speechly.identity.v2.LoginResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string token = 1;
  if (!this->_internal_token().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_token().data(), static_cast<int>(this->_internal_token().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "speechly.identity.v2.LoginResponse.token");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_token(), target);
  }

  // uint32 valid_for_s = 2;
  if (this->_internal_valid_for_s() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt32ToArray(2, this->_internal_valid_for_s(), target);
  }

  // uint64 expires_at_epoch = 3;
  if (this->_internal_expires_at_epoch() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteUInt64ToArray(3, this->_internal_expires_at_epoch(), target);
  }

  // string expires_at = 4;
  if (!this->_internal_expires_at().empty()) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_expires_at().data(), static_cast<int>(this->_internal_expires_at().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "speechly.identity.v2.LoginResponse.expires_at");
    target = stream->WriteStringMaybeAliased(
        4, this->_internal_expires_at(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:speechly.identity.v2.LoginResponse)
  return target;
}

size_t LoginResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:speechly.identity.v2.LoginResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string token = 1;
  if (!this->_internal_token().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_token());
  }

  // string expires_at = 4;
  if (!this->_internal_expires_at().empty()) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_expires_at());
  }

  // uint64 expires_at_epoch = 3;
  if (this->_internal_expires_at_epoch() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt64Size(
        this->_internal_expires_at_epoch());
  }

  // uint32 valid_for_s = 2;
  if (this->_internal_valid_for_s() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::UInt32Size(
        this->_internal_valid_for_s());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

const ::PROTOBUF_NAMESPACE_ID::Message::ClassData LoginResponse::_class_data_ = {
    ::PROTOBUF_NAMESPACE_ID::Message::CopyWithSizeCheck,
    LoginResponse::MergeImpl
};
const ::PROTOBUF_NAMESPACE_ID::Message::ClassData*LoginResponse::GetClassData() const { return &_class_data_; }

void LoginResponse::MergeImpl(::PROTOBUF_NAMESPACE_ID::Message*to,
                      const ::PROTOBUF_NAMESPACE_ID::Message&from) {
  static_cast<LoginResponse *>(to)->MergeFrom(
      static_cast<const LoginResponse &>(from));
}


void LoginResponse::MergeFrom(const LoginResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:speechly.identity.v2.LoginResponse)
  GOOGLE_DCHECK_NE(&from, this);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_token().empty()) {
    _internal_set_token(from._internal_token());
  }
  if (!from._internal_expires_at().empty()) {
    _internal_set_expires_at(from._internal_expires_at());
  }
  if (from._internal_expires_at_epoch() != 0) {
    _internal_set_expires_at_epoch(from._internal_expires_at_epoch());
  }
  if (from._internal_valid_for_s() != 0) {
    _internal_set_valid_for_s(from._internal_valid_for_s());
  }
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
}

void LoginResponse::CopyFrom(const LoginResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:speechly.identity.v2.LoginResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool LoginResponse::IsInitialized() const {
  return true;
}

void LoginResponse::InternalSwap(LoginResponse* other) {
  using std::swap;
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &token_, GetArenaForAllocation(),
      &other->token_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr::InternalSwap(
      &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      &expires_at_, GetArenaForAllocation(),
      &other->expires_at_, other->GetArenaForAllocation()
  );
  ::PROTOBUF_NAMESPACE_ID::internal::memswap<
      PROTOBUF_FIELD_OFFSET(LoginResponse, valid_for_s_)
      + sizeof(LoginResponse::valid_for_s_)
      - PROTOBUF_FIELD_OFFSET(LoginResponse, expires_at_epoch_)>(
          reinterpret_cast<char*>(&expires_at_epoch_),
          reinterpret_cast<char*>(&other->expires_at_epoch_));
}

::PROTOBUF_NAMESPACE_ID::Metadata LoginResponse::GetMetadata() const {
  return ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(
      &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_getter, &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once,
      file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[1]);
}

// @@protoc_insertion_point(namespace_scope)
}  // namespace v2
}  // namespace identity
}  // namespace speechly
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::speechly::identity::v2::LoginRequest* Arena::CreateMaybeMessage< ::speechly::identity::v2::LoginRequest >(Arena* arena) {
  return Arena::CreateMessageInternal< ::speechly::identity::v2::LoginRequest >(arena);
}
template<> PROTOBUF_NOINLINE ::speechly::identity::v2::LoginResponse* Arena::CreateMaybeMessage< ::speechly::identity::v2::LoginResponse >(Arena* arena) {
  return Arena::CreateMessageInternal< ::speechly::identity::v2::LoginResponse >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
