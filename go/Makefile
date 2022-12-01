PROTOS := $(shell find ../proto/speechly -name *.proto)
TARGET := speechly
GOMOD  := go.mod

all: clean build
.PHONY: all

build: $(TARGET)
.PHONY: build

clean:
	rm -rf $(TARGET)
.PHONY: clean

$(TARGET): $(PROTOS) $(GOMOD)
	@protoc -I ../proto --go_out=. --go-grpc_out=. $(PROTOS)
	@go mod tidy
	@touch $@
