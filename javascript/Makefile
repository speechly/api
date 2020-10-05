PROTOS    := $(shell find ../speechly -name *.proto)
PACKAGE   := package.json
MODULES   := ./node_modules
TARGET    := ./speechly
PROTOC    := "$(MODULES)/.bin/grpc_tools_node_protoc"
PROTOTS   := "$(MODULES)/.bin/protoc-gen-ts"
PROTOGRPC := "$(MODULES)/.bin/grpc_tools_node_protoc_plugin"

all: clean build
.PHONY: all

build: $(TARGET)
.PHONY: build

clean:
	rm -r $(TARGET) || true
	rm -r $(MODULES) || true
.PHONY: clean


$(TARGET): $(PROTOS) $(MODULES)
	$(PROTOC) \
		-I .. \
		--plugin=protoc-gen-grpc="$(PROTOGRPC)" \
		--plugin=protoc-gen-ts="$(PROTOTS)" \
		--js_out=import_style=commonjs,binary:. \
		--grpc_out="." \
		--ts_out="service=grpc-node:." \
		$(PROTOS)

	@touch $@

$(MODULES): $(PACKAGE)
	@yarn install --frozen-lockfile
	@touch $@
