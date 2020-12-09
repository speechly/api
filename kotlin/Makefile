CACHE   := ./.gradle
GRADLE  := ./gradlew

all: clean build
.PHONY: all

publish: build
	$(GRADLE) publish
.PHONY: publish

run: build
	source .env
	$(GRADLE) run
.PHONY: run

build:
	$(GRADLE) build
.PHONY: build

clean:
	$(GRADLE) clean
	rm -rf $(CACHE)
.PHONY: clean
