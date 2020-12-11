PROTOS    := $(shell find ./speechly -name *.proto)
SWIFT_PROTOS_DIR :=  ./Sources/SpeechlyAPI
SWIFT_BUILD_DIR := ./.build
SWIFT_LIB_VERSION := 1.0.0-alpha.20
SWIFT_PLUGINS_DIR := ./protoc_plugins
SWIFT_PROTOC_GEN_SWIFT := $(SWIFT_PLUGINS_DIR)/bin/protoc-gen-swift
SWIFT_PROTOC_GEN_GRPC_SWIFT := $(SWIFT_PLUGINS_DIR)/bin/protoc-gen-grpc-swift

build: build-swift
	@echo "Generating code stubs"
	@make -C go
	@make -C python
	@make -C javascript
	@make -C kotlin
.PHONY: build

build-swift: $(SWIFT_BUILD_DIR)
.PHONY: build-swift

clean-swift:
	@rm -rf $(SWIFT_BUILD_DIR) $(SWIFT_PROTOS_DIR) $(SWIFT_PLUGINS_DIR) || true
.PHONY: clean-swift

$(SWIFT_BUILD_DIR): $(SWIFT_PROTOS_DIR)
	@swift build
	@touch $@

$(SWIFT_PROTOS_DIR): $(PROTOS) $(SWIFT_PLUGINS_DIR)
	@mkdir -p $(SWIFT_PROTOS_DIR)
	@protoc \
		-I . \
		--plugin=$(SWIFT_PROTOC_GEN_SWIFT) \
		--plugin=$(SWIFT_PROTOC_GEN_GRPC_SWIFT) \
		--swift_out="$(SWIFT_PROTOS_DIR)" \
		--swift_opt=Visibility=Public \
		--grpc-swift_out="$(SWIFT_PROTOS_DIR)" \
		--grpc-swift_opt=Visibility=Public \
		$(PROTOS)

$(SWIFT_PLUGINS_DIR):
	@mkdir $(SWIFT_PLUGINS_DIR)
	@curl -L https://github.com/grpc/grpc-swift/releases/download/$(SWIFT_LIB_VERSION)/protoc-grpc-swift-plugins-$(SWIFT_LIB_VERSION).zip -o $(SWIFT_PLUGINS_DIR)/plugins.zip
	@unzip $(SWIFT_PLUGINS_DIR)/plugins.zip -d $(SWIFT_PLUGINS_DIR)
	@rm $(SWIFT_PLUGINS_DIR)/plugins.zip
