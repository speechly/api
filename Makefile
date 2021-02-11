VERSION ?= "latest"
PROTOS  := $(shell find proto/speechly -name *proto)
PROTOC  := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR)/proto langma/prototool

export VERSION

SUBDIRS = java

test: $(PROTOS)
	$(PROTOC) lint

build: $(PROTOS)
	$(PROTOC) generate

dist: build $(SUBDIRS)

.PHONY: subdirs $(SUBDIRS)
$(SUBDIRS):
	+$(MAKE) -C $@ $(MAKECMDGOALS)

clean: $(SUBDIRS)

.PHONY: test build dist clean
