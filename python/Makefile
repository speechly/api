VERSION ?= latest

export VERSION

build: prepare setup.py
	@. .venv/bin/activate && python -m build

setup.py:
	@echo "Patching setup.py with version $(VERSION)"
	@cp template-setup.py setup.py
	@sed -i.bak 's/REVISION/$(VERSION)/' setup.py && rm setup.py.bak

.venv: src Makefile template-setup.py
	@python3 -m venv .venv \
		&& . .venv/bin/activate \
		&& python -m pip install -U pip \
		&& python -m pip install -U build

deploy: prepare setup.py
	@. .venv/bin/activate \
		&& python -m build \
		&& python -m pip install -U twine \
		&& python -m twine upload dist/*

prepare: .venv
	@rm -rf dist setup.py

clean:
	rm -rf .venv src dist setup.py

.PHONY: build deploy clean
