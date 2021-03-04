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

deploy: build
	@$(DOTNET) pack Speechly/Speechly.csproj
	@$(DOTNET) nuget push Speechly/bin/Debug/SpeechlyApi.$(VERSION).nupkg \
		--api-key $(NUGET_APIKEY) \
		--source https://api.nuget.org/v3/index.json

prepare: clean
	@rm -f Speechly/Speechly.csproj

clean:
	@rm -rf bin obj

.PHONY: build deploy prepare clean
