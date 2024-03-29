// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: speechly/identity/v2/identity_api.proto

#include "speechly/identity/v2/identity_api.pb.h"

#include <algorithm>
#include "google/protobuf/io/coded_stream.h"
#include "google/protobuf/extension_set.h"
#include "google/protobuf/wire_format_lite.h"
#include "google/protobuf/descriptor.h"
#include "google/protobuf/generated_message_reflection.h"
#include "google/protobuf/reflection_ops.h"
#include "google/protobuf/wire_format.h"
#include "google/protobuf/generated_message_tctable_impl.h"
// @@protoc_insertion_point(includes)

// Must be included last.
#include "google/protobuf/port_def.inc"
PROTOBUF_PRAGMA_INIT_SEG
namespace _pb = ::google::protobuf;
namespace _pbi = ::google::protobuf::internal;
namespace _fl = ::google::protobuf::internal::field_layout;
namespace speechly {
namespace identity {
namespace v2 {
        template <typename>
PROTOBUF_CONSTEXPR LoginRequest::LoginRequest(::_pbi::ConstantInitialized)
    : _impl_{
      /*decltype(_impl_.device_id_)*/ {
          &::_pbi::fixed_address_empty_string,
          ::_pbi::ConstantInitialized{},
      },
      /*decltype(_impl_.scope_)*/ {},
      /*decltype(_impl_._cached_size_)*/ {},
      /*decltype(_impl_._oneof_case_)*/ {},
    } {}
struct LoginRequestDefaultTypeInternal {
  PROTOBUF_CONSTEXPR LoginRequestDefaultTypeInternal() : _instance(::_pbi::ConstantInitialized{}) {}
  ~LoginRequestDefaultTypeInternal() {}
  union {
    LoginRequest _instance;
  };
};

PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT
    PROTOBUF_ATTRIBUTE_INIT_PRIORITY1 LoginRequestDefaultTypeInternal _LoginRequest_default_instance_;
        template <typename>
PROTOBUF_CONSTEXPR LoginResponse::LoginResponse(::_pbi::ConstantInitialized)
    : _impl_{
      /*decltype(_impl_.token_)*/ {
          &::_pbi::fixed_address_empty_string,
          ::_pbi::ConstantInitialized{},
      },
      /*decltype(_impl_.expires_at_)*/ {
          &::_pbi::fixed_address_empty_string,
          ::_pbi::ConstantInitialized{},
      },
      /*decltype(_impl_.expires_at_epoch_)*/ ::uint64_t{0u},
      /*decltype(_impl_.valid_for_s_)*/ 0u,
      /*decltype(_impl_._cached_size_)*/ {},
    } {}
struct LoginResponseDefaultTypeInternal {
  PROTOBUF_CONSTEXPR LoginResponseDefaultTypeInternal() : _instance(::_pbi::ConstantInitialized{}) {}
  ~LoginResponseDefaultTypeInternal() {}
  union {
    LoginResponse _instance;
  };
};

PROTOBUF_ATTRIBUTE_NO_DESTROY PROTOBUF_CONSTINIT
    PROTOBUF_ATTRIBUTE_INIT_PRIORITY1 LoginResponseDefaultTypeInternal _LoginResponse_default_instance_;
}  // namespace v2
}  // namespace identity
}  // namespace speechly
static ::_pb::Metadata file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[2];
static constexpr const ::_pb::EnumDescriptor**
    file_level_enum_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto = nullptr;
static constexpr const ::_pb::ServiceDescriptor**
    file_level_service_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto = nullptr;
const ::uint32_t TableStruct_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(
    protodesc_cold) = {
    ~0u,  // no _has_bits_
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _internal_metadata_),
    ~0u,  // no _extensions_
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _impl_._oneof_case_[0]),
    ~0u,  // no _weak_field_map_
    ~0u,  // no _inlined_string_donated_
    ~0u,  // no _split_
    ~0u,  // no sizeof(Split)
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _impl_.device_id_),
    ::_pbi::kInvalidFieldOffsetTag,
    ::_pbi::kInvalidFieldOffsetTag,
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _impl_.scope_),
    ~0u,  // no _has_bits_
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, _internal_metadata_),
    ~0u,  // no _extensions_
    ~0u,  // no _oneof_case_
    ~0u,  // no _weak_field_map_
    ~0u,  // no _inlined_string_donated_
    ~0u,  // no _split_
    ~0u,  // no sizeof(Split)
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, _impl_.token_),
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, _impl_.valid_for_s_),
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, _impl_.expires_at_epoch_),
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginResponse, _impl_.expires_at_),
};

static const ::_pbi::MigrationSchema
    schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
        {0, -1, -1, sizeof(::speechly::identity::v2::LoginRequest)},
        {12, -1, -1, sizeof(::speechly::identity::v2::LoginResponse)},
};

static const ::_pb::Message* const file_default_instances[] = {
    &::speechly::identity::v2::_LoginRequest_default_instance_._instance,
    &::speechly::identity::v2::_LoginResponse_default_instance_._instance,
};
const char descriptor_table_protodef_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
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
};
static const ::_pbi::DescriptorTable* const descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_deps[1] =
    {
        &::descriptor_table_speechly_2fidentity_2fv2_2fidentity_2eproto,
};
static ::absl::once_flag descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once;
const ::_pbi::DescriptorTable descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto = {
    false,
    false,
    601,
    descriptor_table_protodef_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto,
    "speechly/identity/v2/identity_api.proto",
    &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once,
    descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_deps,
    1,
    2,
    schemas,
    file_default_instances,
    TableStruct_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto::offsets,
    file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto,
    file_level_enum_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto,
    file_level_service_descriptors_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto,
};

// This function exists to be marked as weak.
// It can significantly speed up compilation by breaking up LLVM's SCC
// in the .pb.cc translation units. Large translation units see a
// reduction of more than 35% of walltime for optimized builds. Without
// the weak attribute all the messages in the file, including all the
// vtables and everything they use become part of the same SCC through
// a cycle like:
// GetMetadata -> descriptor table -> default instances ->
//   vtables -> GetMetadata
// By adding a weak function here we break the connection from the
// individual vtables back into the descriptor table.
PROTOBUF_ATTRIBUTE_WEAK const ::_pbi::DescriptorTable* descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_getter() {
  return &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto;
}
// Force running AddDescriptors() at dynamic initialization time.
PROTOBUF_ATTRIBUTE_INIT_PRIORITY2
static ::_pbi::AddDescriptorsRunner dynamic_init_dummy_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto(&descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto);
namespace speechly {
namespace identity {
namespace v2 {
// ===================================================================

class LoginRequest::_Internal {
 public:
  static constexpr ::int32_t kOneofCaseOffset =
    PROTOBUF_FIELD_OFFSET(::speechly::identity::v2::LoginRequest, _impl_._oneof_case_);
  static const ::speechly::identity::v2::ApplicationScope& application(const LoginRequest* msg);
  static const ::speechly::identity::v2::ProjectScope& project(const LoginRequest* msg);
};

const ::speechly::identity::v2::ApplicationScope& LoginRequest::_Internal::application(const LoginRequest* msg) {
  return *msg->_impl_.scope_.application_;
}
const ::speechly::identity::v2::ProjectScope& LoginRequest::_Internal::project(const LoginRequest* msg) {
  return *msg->_impl_.scope_.project_;
}
void LoginRequest::set_allocated_application(::speechly::identity::v2::ApplicationScope* application) {
  ::google::protobuf::Arena* message_arena = GetArenaForAllocation();
  clear_scope();
  if (application) {
    ::google::protobuf::Arena* submessage_arena =
        ::google::protobuf::Arena::InternalGetOwningArena(
                reinterpret_cast<::google::protobuf::MessageLite*>(application));
    if (message_arena != submessage_arena) {
      application = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, application, submessage_arena);
    }
    set_has_application();
    _impl_.scope_.application_ = application;
  }
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.LoginRequest.application)
}
void LoginRequest::clear_application() {
  if (scope_case() == kApplication) {
    if (GetArenaForAllocation() == nullptr) {
      delete _impl_.scope_.application_;
    }
    clear_has_scope();
  }
}
void LoginRequest::set_allocated_project(::speechly::identity::v2::ProjectScope* project) {
  ::google::protobuf::Arena* message_arena = GetArenaForAllocation();
  clear_scope();
  if (project) {
    ::google::protobuf::Arena* submessage_arena =
        ::google::protobuf::Arena::InternalGetOwningArena(
                reinterpret_cast<::google::protobuf::MessageLite*>(project));
    if (message_arena != submessage_arena) {
      project = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, project, submessage_arena);
    }
    set_has_project();
    _impl_.scope_.project_ = project;
  }
  // @@protoc_insertion_point(field_set_allocated:speechly.identity.v2.LoginRequest.project)
}
void LoginRequest::clear_project() {
  if (scope_case() == kProject) {
    if (GetArenaForAllocation() == nullptr) {
      delete _impl_.scope_.project_;
    }
    clear_has_scope();
  }
}
LoginRequest::LoginRequest(::google::protobuf::Arena* arena)
    : ::google::protobuf::Message(arena) {
  SharedCtor(arena);
  // @@protoc_insertion_point(arena_constructor:speechly.identity.v2.LoginRequest)
}
LoginRequest::LoginRequest(const LoginRequest& from) : ::google::protobuf::Message() {
  LoginRequest* const _this = this;
  (void)_this;
  new (&_impl_) Impl_{
      decltype(_impl_.device_id_){},
      decltype(_impl_.scope_){},
      /*decltype(_impl_._cached_size_)*/ {},
      /*decltype(_impl_._oneof_case_)*/ {},
  };
  _internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(
      from._internal_metadata_);
  _impl_.device_id_.InitDefault();
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        _impl_.device_id_.Set("", GetArenaForAllocation());
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  if (!from._internal_device_id().empty()) {
    _this->_impl_.device_id_.Set(from._internal_device_id(), _this->GetArenaForAllocation());
  }
  clear_has_scope();
  switch (from.scope_case()) {
    case kApplication: {
      _this->_internal_mutable_application()->::speechly::identity::v2::ApplicationScope::MergeFrom(
          from._internal_application());
      break;
    }
    case kProject: {
      _this->_internal_mutable_project()->::speechly::identity::v2::ProjectScope::MergeFrom(
          from._internal_project());
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }

  // @@protoc_insertion_point(copy_constructor:speechly.identity.v2.LoginRequest)
}
inline void LoginRequest::SharedCtor(::_pb::Arena* arena) {
  (void)arena;
  new (&_impl_) Impl_{
      decltype(_impl_.device_id_){},
      decltype(_impl_.scope_){},
      /*decltype(_impl_._cached_size_)*/ {},
      /*decltype(_impl_._oneof_case_)*/ {},
  };
  _impl_.device_id_.InitDefault();
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        _impl_.device_id_.Set("", GetArenaForAllocation());
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  clear_has_scope();
}
LoginRequest::~LoginRequest() {
  // @@protoc_insertion_point(destructor:speechly.identity.v2.LoginRequest)
  _internal_metadata_.Delete<::google::protobuf::UnknownFieldSet>();
  SharedDtor();
}
inline void LoginRequest::SharedDtor() {
  ABSL_DCHECK(GetArenaForAllocation() == nullptr);
  _impl_.device_id_.Destroy();
  if (has_scope()) {
    clear_scope();
  }
}
void LoginRequest::SetCachedSize(int size) const {
  _impl_._cached_size_.Set(size);
}

void LoginRequest::clear_scope() {
// @@protoc_insertion_point(one_of_clear_start:speechly.identity.v2.LoginRequest)
  switch (scope_case()) {
    case kApplication: {
      if (GetArenaForAllocation() == nullptr) {
        delete _impl_.scope_.application_;
      }
      break;
    }
    case kProject: {
      if (GetArenaForAllocation() == nullptr) {
        delete _impl_.scope_.project_;
      }
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  _impl_._oneof_case_[0] = SCOPE_NOT_SET;
}


PROTOBUF_NOINLINE void LoginRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:speechly.identity.v2.LoginRequest)
  ::uint32_t cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  _impl_.device_id_.ClearToEmpty();
  clear_scope();
  _internal_metadata_.Clear<::google::protobuf::UnknownFieldSet>();
}

const char* LoginRequest::_InternalParse(
    const char* ptr, ::_pbi::ParseContext* ctx) {
  ptr = ::_pbi::TcParser::ParseLoop(this, ptr, ctx, &_table_.header);
  return ptr;
}


PROTOBUF_CONSTINIT PROTOBUF_ATTRIBUTE_INIT_PRIORITY1
const ::_pbi::TcParseTable<0, 3, 2, 51, 2> LoginRequest::_table_ = {
  {
    0,  // no _has_bits_
    0, // no _extensions_
    3, 0,  // max_field_number, fast_idx_mask
    offsetof(decltype(_table_), field_lookup_table),
    4294967288,  // skipmap
    offsetof(decltype(_table_), field_entries),
    3,  // num_field_entries
    2,  // num_aux_entries
    offsetof(decltype(_table_), aux_entries),
    &_LoginRequest_default_instance_._instance,
    ::_pbi::TcParser::GenericFallback,  // fallback
  }, {{
    // string device_id = 1;
    {::_pbi::TcParser::FastUS1,
     {10, 63, 0, PROTOBUF_FIELD_OFFSET(LoginRequest, _impl_.device_id_)}},
  }}, {{
    65535, 65535
  }}, {{
    // string device_id = 1;
    {PROTOBUF_FIELD_OFFSET(LoginRequest, _impl_.device_id_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kUtf8String | ::_fl::kRepAString)},
    // .speechly.identity.v2.ApplicationScope application = 2;
    {PROTOBUF_FIELD_OFFSET(LoginRequest, _impl_.scope_.application_), _Internal::kOneofCaseOffset + 0, 0,
    (0 | ::_fl::kFcOneof | ::_fl::kMessage | ::_fl::kTvTable)},
    // .speechly.identity.v2.ProjectScope project = 3;
    {PROTOBUF_FIELD_OFFSET(LoginRequest, _impl_.scope_.project_), _Internal::kOneofCaseOffset + 0, 1,
    (0 | ::_fl::kFcOneof | ::_fl::kMessage | ::_fl::kTvTable)},
  }}, {{
    {::_pbi::TcParser::GetTable<::speechly::identity::v2::ApplicationScope>()},
    {::_pbi::TcParser::GetTable<::speechly::identity::v2::ProjectScope>()},
  }}, {{
    "\41\11\0\0\0\0\0\0"
    "speechly.identity.v2.LoginRequest"
    "device_id"
  }},
};

::uint8_t* LoginRequest::_InternalSerialize(
    ::uint8_t* target,
    ::google::protobuf::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:speechly.identity.v2.LoginRequest)
  ::uint32_t cached_has_bits = 0;
  (void)cached_has_bits;

  // string device_id = 1;
  if (!this->_internal_device_id().empty()) {
    const std::string& _s = this->_internal_device_id();
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
        _s.data(), static_cast<int>(_s.length()), ::google::protobuf::internal::WireFormatLite::SERIALIZE, "speechly.identity.v2.LoginRequest.device_id");
    target = stream->WriteStringMaybeAliased(1, _s, target);
  }

  switch (scope_case()) {
    case kApplication: {
      target = ::google::protobuf::internal::WireFormatLite::
        InternalWriteMessage(2, _Internal::application(this),
          _Internal::application(this).GetCachedSize(), target, stream);
      break;
    }
    case kProject: {
      target = ::google::protobuf::internal::WireFormatLite::
        InternalWriteMessage(3, _Internal::project(this),
          _Internal::project(this).GetCachedSize(), target, stream);
      break;
    }
    default:
      break;
  }
  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target =
        ::_pbi::WireFormat::InternalSerializeUnknownFieldsToArray(
            _internal_metadata_.unknown_fields<::google::protobuf::UnknownFieldSet>(::google::protobuf::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:speechly.identity.v2.LoginRequest)
  return target;
}

::size_t LoginRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:speechly.identity.v2.LoginRequest)
  ::size_t total_size = 0;

  ::uint32_t cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string device_id = 1;
  if (!this->_internal_device_id().empty()) {
    total_size += 1 + ::google::protobuf::internal::WireFormatLite::StringSize(
                                    this->_internal_device_id());
  }

  switch (scope_case()) {
    // .speechly.identity.v2.ApplicationScope application = 2;
    case kApplication: {
      total_size += 1 +
        ::google::protobuf::internal::WireFormatLite::MessageSize(
          *_impl_.scope_.application_);
      break;
    }
    // .speechly.identity.v2.ProjectScope project = 3;
    case kProject: {
      total_size += 1 +
        ::google::protobuf::internal::WireFormatLite::MessageSize(
          *_impl_.scope_.project_);
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  return MaybeComputeUnknownFieldsSize(total_size, &_impl_._cached_size_);
}

const ::google::protobuf::Message::ClassData LoginRequest::_class_data_ = {
    ::google::protobuf::Message::CopyWithSourceCheck,
    LoginRequest::MergeImpl
};
const ::google::protobuf::Message::ClassData*LoginRequest::GetClassData() const { return &_class_data_; }


void LoginRequest::MergeImpl(::google::protobuf::Message& to_msg, const ::google::protobuf::Message& from_msg) {
  auto* const _this = static_cast<LoginRequest*>(&to_msg);
  auto& from = static_cast<const LoginRequest&>(from_msg);
  // @@protoc_insertion_point(class_specific_merge_from_start:speechly.identity.v2.LoginRequest)
  ABSL_DCHECK_NE(&from, _this);
  ::uint32_t cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_device_id().empty()) {
    _this->_internal_set_device_id(from._internal_device_id());
  }
  switch (from.scope_case()) {
    case kApplication: {
      _this->_internal_mutable_application()->::speechly::identity::v2::ApplicationScope::MergeFrom(
          from._internal_application());
      break;
    }
    case kProject: {
      _this->_internal_mutable_project()->::speechly::identity::v2::ProjectScope::MergeFrom(
          from._internal_project());
      break;
    }
    case SCOPE_NOT_SET: {
      break;
    }
  }
  _this->_internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(from._internal_metadata_);
}

void LoginRequest::CopyFrom(const LoginRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:speechly.identity.v2.LoginRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

PROTOBUF_NOINLINE bool LoginRequest::IsInitialized() const {
  return true;
}

void LoginRequest::InternalSwap(LoginRequest* other) {
  using std::swap;
  auto* lhs_arena = GetArenaForAllocation();
  auto* rhs_arena = other->GetArenaForAllocation();
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::_pbi::ArenaStringPtr::InternalSwap(&_impl_.device_id_, lhs_arena,
                                       &other->_impl_.device_id_, rhs_arena);
  swap(_impl_.scope_, other->_impl_.scope_);
  swap(_impl_._oneof_case_[0], other->_impl_._oneof_case_[0]);
}

::google::protobuf::Metadata LoginRequest::GetMetadata() const {
  return ::_pbi::AssignDescriptors(
      &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_getter, &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once,
      file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[0]);
}
// ===================================================================

class LoginResponse::_Internal {
 public:
};

LoginResponse::LoginResponse(::google::protobuf::Arena* arena)
    : ::google::protobuf::Message(arena) {
  SharedCtor(arena);
  // @@protoc_insertion_point(arena_constructor:speechly.identity.v2.LoginResponse)
}
LoginResponse::LoginResponse(const LoginResponse& from) : ::google::protobuf::Message() {
  LoginResponse* const _this = this;
  (void)_this;
  new (&_impl_) Impl_{
      decltype(_impl_.token_){},
      decltype(_impl_.expires_at_){},
      decltype(_impl_.expires_at_epoch_){},
      decltype(_impl_.valid_for_s_){},
      /*decltype(_impl_._cached_size_)*/ {},
  };
  _internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(
      from._internal_metadata_);
  _impl_.token_.InitDefault();
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        _impl_.token_.Set("", GetArenaForAllocation());
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  if (!from._internal_token().empty()) {
    _this->_impl_.token_.Set(from._internal_token(), _this->GetArenaForAllocation());
  }
  _impl_.expires_at_.InitDefault();
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        _impl_.expires_at_.Set("", GetArenaForAllocation());
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  if (!from._internal_expires_at().empty()) {
    _this->_impl_.expires_at_.Set(from._internal_expires_at(), _this->GetArenaForAllocation());
  }
  ::memcpy(&_impl_.expires_at_epoch_, &from._impl_.expires_at_epoch_,
    static_cast<::size_t>(reinterpret_cast<char*>(&_impl_.valid_for_s_) -
    reinterpret_cast<char*>(&_impl_.expires_at_epoch_)) + sizeof(_impl_.valid_for_s_));

  // @@protoc_insertion_point(copy_constructor:speechly.identity.v2.LoginResponse)
}
inline void LoginResponse::SharedCtor(::_pb::Arena* arena) {
  (void)arena;
  new (&_impl_) Impl_{
      decltype(_impl_.token_){},
      decltype(_impl_.expires_at_){},
      decltype(_impl_.expires_at_epoch_){::uint64_t{0u}},
      decltype(_impl_.valid_for_s_){0u},
      /*decltype(_impl_._cached_size_)*/ {},
  };
  _impl_.token_.InitDefault();
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        _impl_.token_.Set("", GetArenaForAllocation());
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  _impl_.expires_at_.InitDefault();
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        _impl_.expires_at_.Set("", GetArenaForAllocation());
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
}
LoginResponse::~LoginResponse() {
  // @@protoc_insertion_point(destructor:speechly.identity.v2.LoginResponse)
  _internal_metadata_.Delete<::google::protobuf::UnknownFieldSet>();
  SharedDtor();
}
inline void LoginResponse::SharedDtor() {
  ABSL_DCHECK(GetArenaForAllocation() == nullptr);
  _impl_.token_.Destroy();
  _impl_.expires_at_.Destroy();
}
void LoginResponse::SetCachedSize(int size) const {
  _impl_._cached_size_.Set(size);
}

PROTOBUF_NOINLINE void LoginResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:speechly.identity.v2.LoginResponse)
  ::uint32_t cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  _impl_.token_.ClearToEmpty();
  _impl_.expires_at_.ClearToEmpty();
  ::memset(&_impl_.expires_at_epoch_, 0, static_cast<::size_t>(
      reinterpret_cast<char*>(&_impl_.valid_for_s_) -
      reinterpret_cast<char*>(&_impl_.expires_at_epoch_)) + sizeof(_impl_.valid_for_s_));
  _internal_metadata_.Clear<::google::protobuf::UnknownFieldSet>();
}

const char* LoginResponse::_InternalParse(
    const char* ptr, ::_pbi::ParseContext* ctx) {
  ptr = ::_pbi::TcParser::ParseLoop(this, ptr, ctx, &_table_.header);
  return ptr;
}


PROTOBUF_CONSTINIT PROTOBUF_ATTRIBUTE_INIT_PRIORITY1
const ::_pbi::TcParseTable<2, 4, 0, 58, 2> LoginResponse::_table_ = {
  {
    0,  // no _has_bits_
    0, // no _extensions_
    4, 24,  // max_field_number, fast_idx_mask
    offsetof(decltype(_table_), field_lookup_table),
    4294967280,  // skipmap
    offsetof(decltype(_table_), field_entries),
    4,  // num_field_entries
    0,  // num_aux_entries
    offsetof(decltype(_table_), field_names),  // no aux_entries
    &_LoginResponse_default_instance_._instance,
    ::_pbi::TcParser::GenericFallback,  // fallback
  }, {{
    // string expires_at = 4;
    {::_pbi::TcParser::FastUS1,
     {34, 63, 0, PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.expires_at_)}},
    // string token = 1;
    {::_pbi::TcParser::FastUS1,
     {10, 63, 0, PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.token_)}},
    // uint32 valid_for_s = 2;
    {::_pbi::TcParser::SingularVarintNoZag1<::uint32_t, offsetof(LoginResponse, _impl_.valid_for_s_), 63>(),
     {16, 63, 0, PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.valid_for_s_)}},
    // uint64 expires_at_epoch = 3;
    {::_pbi::TcParser::SingularVarintNoZag1<::uint64_t, offsetof(LoginResponse, _impl_.expires_at_epoch_), 63>(),
     {24, 63, 0, PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.expires_at_epoch_)}},
  }}, {{
    65535, 65535
  }}, {{
    // string token = 1;
    {PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.token_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kUtf8String | ::_fl::kRepAString)},
    // uint32 valid_for_s = 2;
    {PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.valid_for_s_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kUInt32)},
    // uint64 expires_at_epoch = 3;
    {PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.expires_at_epoch_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kUInt64)},
    // string expires_at = 4;
    {PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.expires_at_), 0, 0,
    (0 | ::_fl::kFcSingular | ::_fl::kUtf8String | ::_fl::kRepAString)},
  }},
  // no aux_entries
  {{
    "\42\5\0\0\12\0\0\0"
    "speechly.identity.v2.LoginResponse"
    "token"
    "expires_at"
  }},
};

::uint8_t* LoginResponse::_InternalSerialize(
    ::uint8_t* target,
    ::google::protobuf::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:speechly.identity.v2.LoginResponse)
  ::uint32_t cached_has_bits = 0;
  (void)cached_has_bits;

  // string token = 1;
  if (!this->_internal_token().empty()) {
    const std::string& _s = this->_internal_token();
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
        _s.data(), static_cast<int>(_s.length()), ::google::protobuf::internal::WireFormatLite::SERIALIZE, "speechly.identity.v2.LoginResponse.token");
    target = stream->WriteStringMaybeAliased(1, _s, target);
  }

  // uint32 valid_for_s = 2;
  if (this->_internal_valid_for_s() != 0) {
    target = stream->EnsureSpace(target);
    target = ::_pbi::WireFormatLite::WriteUInt32ToArray(
        2, this->_internal_valid_for_s(), target);
  }

  // uint64 expires_at_epoch = 3;
  if (this->_internal_expires_at_epoch() != 0) {
    target = stream->EnsureSpace(target);
    target = ::_pbi::WireFormatLite::WriteUInt64ToArray(
        3, this->_internal_expires_at_epoch(), target);
  }

  // string expires_at = 4;
  if (!this->_internal_expires_at().empty()) {
    const std::string& _s = this->_internal_expires_at();
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
        _s.data(), static_cast<int>(_s.length()), ::google::protobuf::internal::WireFormatLite::SERIALIZE, "speechly.identity.v2.LoginResponse.expires_at");
    target = stream->WriteStringMaybeAliased(4, _s, target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target =
        ::_pbi::WireFormat::InternalSerializeUnknownFieldsToArray(
            _internal_metadata_.unknown_fields<::google::protobuf::UnknownFieldSet>(::google::protobuf::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:speechly.identity.v2.LoginResponse)
  return target;
}

::size_t LoginResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:speechly.identity.v2.LoginResponse)
  ::size_t total_size = 0;

  ::uint32_t cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string token = 1;
  if (!this->_internal_token().empty()) {
    total_size += 1 + ::google::protobuf::internal::WireFormatLite::StringSize(
                                    this->_internal_token());
  }

  // string expires_at = 4;
  if (!this->_internal_expires_at().empty()) {
    total_size += 1 + ::google::protobuf::internal::WireFormatLite::StringSize(
                                    this->_internal_expires_at());
  }

  // uint64 expires_at_epoch = 3;
  if (this->_internal_expires_at_epoch() != 0) {
    total_size += ::_pbi::WireFormatLite::UInt64SizePlusOne(
        this->_internal_expires_at_epoch());
  }

  // uint32 valid_for_s = 2;
  if (this->_internal_valid_for_s() != 0) {
    total_size += ::_pbi::WireFormatLite::UInt32SizePlusOne(
        this->_internal_valid_for_s());
  }

  return MaybeComputeUnknownFieldsSize(total_size, &_impl_._cached_size_);
}

const ::google::protobuf::Message::ClassData LoginResponse::_class_data_ = {
    ::google::protobuf::Message::CopyWithSourceCheck,
    LoginResponse::MergeImpl
};
const ::google::protobuf::Message::ClassData*LoginResponse::GetClassData() const { return &_class_data_; }


void LoginResponse::MergeImpl(::google::protobuf::Message& to_msg, const ::google::protobuf::Message& from_msg) {
  auto* const _this = static_cast<LoginResponse*>(&to_msg);
  auto& from = static_cast<const LoginResponse&>(from_msg);
  // @@protoc_insertion_point(class_specific_merge_from_start:speechly.identity.v2.LoginResponse)
  ABSL_DCHECK_NE(&from, _this);
  ::uint32_t cached_has_bits = 0;
  (void) cached_has_bits;

  if (!from._internal_token().empty()) {
    _this->_internal_set_token(from._internal_token());
  }
  if (!from._internal_expires_at().empty()) {
    _this->_internal_set_expires_at(from._internal_expires_at());
  }
  if (from._internal_expires_at_epoch() != 0) {
    _this->_internal_set_expires_at_epoch(from._internal_expires_at_epoch());
  }
  if (from._internal_valid_for_s() != 0) {
    _this->_internal_set_valid_for_s(from._internal_valid_for_s());
  }
  _this->_internal_metadata_.MergeFrom<::google::protobuf::UnknownFieldSet>(from._internal_metadata_);
}

void LoginResponse::CopyFrom(const LoginResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:speechly.identity.v2.LoginResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

PROTOBUF_NOINLINE bool LoginResponse::IsInitialized() const {
  return true;
}

void LoginResponse::InternalSwap(LoginResponse* other) {
  using std::swap;
  auto* lhs_arena = GetArenaForAllocation();
  auto* rhs_arena = other->GetArenaForAllocation();
  _internal_metadata_.InternalSwap(&other->_internal_metadata_);
  ::_pbi::ArenaStringPtr::InternalSwap(&_impl_.token_, lhs_arena,
                                       &other->_impl_.token_, rhs_arena);
  ::_pbi::ArenaStringPtr::InternalSwap(&_impl_.expires_at_, lhs_arena,
                                       &other->_impl_.expires_at_, rhs_arena);
  ::google::protobuf::internal::memswap<
      PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.valid_for_s_)
      + sizeof(LoginResponse::_impl_.valid_for_s_)
      - PROTOBUF_FIELD_OFFSET(LoginResponse, _impl_.expires_at_epoch_)>(
          reinterpret_cast<char*>(&_impl_.expires_at_epoch_),
          reinterpret_cast<char*>(&other->_impl_.expires_at_epoch_));
}

::google::protobuf::Metadata LoginResponse::GetMetadata() const {
  return ::_pbi::AssignDescriptors(
      &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_getter, &descriptor_table_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto_once,
      file_level_metadata_speechly_2fidentity_2fv2_2fidentity_5fapi_2eproto[1]);
}
// @@protoc_insertion_point(namespace_scope)
}  // namespace v2
}  // namespace identity
}  // namespace speechly
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google
// @@protoc_insertion_point(global_scope)
#include "google/protobuf/port_undef.inc"
