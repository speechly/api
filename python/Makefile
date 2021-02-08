PROTODIR:=..
TARGET:=src
PROTOS:=$(shell find ../speechly -name *proto)

all: clean build
.PHONY: all

build: .venv $(PROTOS)
	@mkdir -p src
	@pipenv run python -m grpc_tools.protoc -I${PROTODIR} --python_out=${TARGET} --grpc_python_out=${TARGET} --grpclib_python_out=${TARGET} ${PROTOS}
.PHONY: all

dist: clean build
	@pipenv run python setup.py sdist
.PHONY: dist

.venv: Pipfile Pipfile.lock
	PIPENV_VENV_IN_PROJECT=1 pipenv run pip install --upgrade pip
	PIPENV_VENV_IN_PROJECT=1 pipenv run pip install --upgrade setuptools
	PIPENV_VENV_IN_PROJECT=1 pipenv sync --dev
	@touch $@

clean:
	@rm -rf src .venv dist || true
.PHONY: clean
