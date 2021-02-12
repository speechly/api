VERSION   ?= latest

PROTOS    := $(shell find proto -type f -name *.proto)
PROTOTOOL := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR)/proto langma/prototool
PROTODOC  := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) --entrypoint protoc pseudomuto/protoc-gen-doc

export VERSION

SUBDIRS   = java python

test: $(PROTOS)
	@$(PROTOTOOL) lint

build: $(PROTOS)
	@$(PROTOTOOL) generate
	@$(PROTODOC) --proto_path=proto --doc_out=. --doc_opt=markdown,API.md $(PROTOS)

check_stubs: build
	@if [ "$(shell git status --porcelain)" != "" ]; then echo "Stubs not committed after generate: '$(CHANGES)'"; exit 1; fi

deploy: check_stubs $(SUBDIRS)

.PHONY: subdirs $(SUBDIRS)
$(SUBDIRS):
	+$(MAKE) -C $@ $(MAKECMDGOALS)

clean: $(SUBDIRS)

.PHONY: test build deploy check_stubs clean
