VERSION ?= latest

export VERSION

build: dist/speechly_api-$(VERSION).tar.gz

.venv: src Makefile setup.py
	@python3 -m venv .venv \
		&& . .venv/bin/activate \
		&& python -m pip install -U pip \
		&& python -m pip install -U build

dist/speechly_api-$(VERSION).tar.gz: .venv
	@rm -rf dist
	@. .venv/bin/activate && python3 -m build

deploy: build
	@. .venv/bin/activate \
		&& python -m pip install -U twine \
		&& python -m twine upload dist/*

clean:
	rm -rf .venv src dist

.PHONY: build deploy clean
