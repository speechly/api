PROTOS    := $(shell find proto -type f -name *.proto)
PROTOTOOL := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR)/proto langma/prototool
PROTOC    := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) --entrypoint protoc langma/prototool
PROTODOC  := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) --entrypoint protoc pseudomuto/protoc-gen-doc
CHANGELOG := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) githubchangeloggenerator/github-changelog-generator
PYTHON    := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) python:3-slim python

SUBDIRS   = python javascript dotnet java
APIREFS   = docs/slu.json docs/wlu.json docs/batch.json docs/identity.json

test:
	@$(PROTOTOOL) lint

build: docs
ifndef VERSION
	$(error VERSION is undefined)
endif
	@export VERSION
	@$(PROTOTOOL) generate
	@$(PROTOC) --include_imports --include_source_info --proto_path=proto/ --descriptor_set_out=speechly_api.pb $(PROTOS)
	@$(CHANGELOG) --token $(GITHUB_TOKEN) --user speechly --project api --future-release $(VERSION)

docs/%.json: $(PROTOS)
	@$(PROTODOC) --proto_path=proto --doc_out=docs --doc_opt=json,$*.json $(shell find proto/speechly/ -type f -name $**.proto)

docs: $(APIREFS)
	@$(PYTHON) docs/gendoc.py $(wildcard docs/*.json) docs/

deploy: $(SUBDIRS)

clean: $(SUBDIRS)
	@rm $(APIREFS)

.PHONY: subdirs $(SUBDIRS)
$(SUBDIRS):
	+$(MAKE) -C $@ $(MAKECMDGOALS)

.PHONY: test build docs deploy clean
