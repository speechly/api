VERSION ?= latest
DOTNET  ?= docker run -it --rm \
	-v $(CURDIR):$(CURDIR) \
	-w $(CURDIR) \
	mcr.microsoft.com/dotnet/sdk dotnet

export VERSION

build: prepare Speechly/Speechly.csproj
	@$(DOTNET) build Speechly

Speechly/Speechly.csproj:
	@echo "Patching $@ with version $(VERSION)"
	@cp template-Speechly.csproj $@
	@sed -i.bak 's/REVISION/$(VERSION)/' $@ && rm $@.bak

deploy: prepare pom.xml
	@$(MAVEN) -Dgithub.username=$(MVN_USERNAME) -Dgithub.token=$(MVN_TOKEN) deploy

prepare:
	@rm -rf bin obj
	@rm -f Speechly/Speechly.csproj

clean:
	@rm -rf target src pom.xml

.PHONY: build deploy clean
