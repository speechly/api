PROTOS    := $(shell find proto -type f -name *.proto)
PROTOTOOL := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR)/proto langma/prototool
PROTODOC  := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) --entrypoint protoc pseudomuto/protoc-gen-doc
CHANGELOG := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) ferrarimarco/github-changelog-generator
PYTHON    := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) python:3-slim python

SUBDIRS   = dotnet java
APIREFS   = docs/slu.md docs/identity.md docs/sal.md docs/analytics.md

test:
	@$(PROTOTOOL) lint

build: docs
ifndef VERSION
	$(error VERSION is undefined)
endif
	@export VERSION
	@$(PROTOTOOL) generate
	@$(CHANGELOG) --token $(GITHUB_TOKEN) --user speechly --project api --future-release $(VERSION)

docs/%.json: $(PROTOS)
	@$(PROTODOC) --proto_path=proto --doc_out=docs --doc_opt=json,$*.json $(shell find proto/speechly/$* -type f -name *.proto)

docs/%.md: docs/%.json
	@$(PYTHON) docs/gendoc.py docs/$*.json > $@

docs: $(APIREFS)

deploy: $(SUBDIRS)

clean: $(SUBDIRS)

.PHONY: subdirs $(SUBDIRS)
$(SUBDIRS):
	+$(MAKE) -C $@ $(MAKECMDGOALS)

.PHONY: test build docs deploy clean
