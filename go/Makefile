PROTOS := $(shell find ../speechly -name *.proto)
TARGET := speechly
GOMOD  := go.mod

all: clean build
.PHONY: all

build: $(TARGET)
.PHONY: build

clean:
	rm -r $(TARGET)
.PHONY: clean

$(TARGET): $(PROTOS) $(GOMOD)
	@protoc -I .. --go_out=plugins=grpc:. $(PROTOS)
	@go mod tidy
	@touch $@
