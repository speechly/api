PROTOS      := $(shell find ../speechly -name *.proto)
PACKAGE     := package.json
MODULES     := ./node_modules
TARGET      := ./speechly
PROTOTS     := $(MODULES)/.bin/protoc-gen-ts

all: clean build
.PHONY: all

build: $(TARGET)
.PHONY: build

clean:
	rm -r $(TARGET)
	rm -r $(MODULES)
.PHONY: clean

$(TARGET): $(PROTOS) $(MODULES)
	@protoc \
		-I .. \
		--plugin="protoc-gen-ts=$(PROTOTS)" \
		--js_out="import_style=commonjs,binary:." \
		--ts_out="service=grpc-web:." \
		$(PROTOS)

	@touch $@

$(MODULES): $(PACKAGE)
	@yarn install --frozen-lockfile
	@touch $@
