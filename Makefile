PROTOS    := $(shell find proto -type f -name *.proto)
PROTOTOOL := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR)/proto langma/prototool
PROTODOC  := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) --entrypoint protoc pseudomuto/protoc-gen-doc
CHANGELOG := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) ferrarimarco/github-changelog-generator

SUBDIRS   = java python javascript dotnet

test:
	@$(PROTOTOOL) lint

build: docs
ifndef VERSION
	$(error VERSION is undefined)
endif
	@export VERSION
	@$(PROTOTOOL) generate
	@$(CHANGELOG) --token $(GITHUB_TOKEN) --user speechly --project api --future-release $(VERSION)

docs:
	@$(PROTODOC) --proto_path=proto --doc_out=docs --doc_opt=markdown,identity.md $(shell find proto/speechly/identity/v2 -type f -name *.proto)
	@$(PROTODOC) --proto_path=proto --doc_out=docs --doc_opt=markdown,slu.md proto/speechly/slu/v1/slu.proto
	@$(PROTODOC) --proto_path=proto --doc_out=docs --doc_opt=markdown,sal.md $(shell find proto/speechly/sal -type f -name *.proto)

deploy: $(SUBDIRS)

clean: $(SUBDIRS)

.PHONY: subdirs $(SUBDIRS)
$(SUBDIRS):
	+$(MAKE) -C $@ $(MAKECMDGOALS)

.PHONY: test build docs deploy clean
