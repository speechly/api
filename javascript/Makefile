VERSION ?= latest

export VERSION

build: node_modules speechly

node_modules: package.json
	@npm install

deploy: build
	@npm version $(VERSION)
	@npm publish

clean:
	rm -rf node_modules

.PHONY: build deploy clean
