PROTOS    := $(shell find proto -type f -name *.proto)
PROTOTOOL := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR)/proto langma/prototool
PROTODOC  := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) --entrypoint protoc pseudomuto/protoc-gen-doc
CHANGELOG := docker run -it --rm -v $(CURDIR):$(CURDIR) -w $(CURDIR) ferrarimarco/github-changelog-generator

SUBDIRS   = java python javascript dotnet

test: $(PROTOS)
	@$(PROTOTOOL) lint

build: $(PROTOS)
ifndef VERSION
	$(error VERSION is undefined)
endif
	@export VERSION
	@$(PROTOTOOL) generate
	@$(PROTODOC) --proto_path=proto --doc_out=. --doc_opt=markdown,API.md $(PROTOS)
	@$(CHANGELOG) --token $(GITHUB_TOKEN) --user speechly --project api --future-release $(VERSION)

check_stubs:
	@if [ "$(shell git status --porcelain --untracked-files=no)" != "" ]; then echo "Repo not clean: '$(shell git status --porcelain)'"; exit 1; fi

deploy: check_stubs $(SUBDIRS)

.PHONY: subdirs $(SUBDIRS)
$(SUBDIRS):
	+$(MAKE) -C $@ $(MAKECMDGOALS)

clean: $(SUBDIRS)

.PHONY: test build deploy check_stubs clean
