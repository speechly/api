VERSION ?= latest
MAVEN   ?= docker run -it --rm \
	-v $(CURDIR)/settings.xml:/root/.m2/settings.xml \
	-v $(CURDIR):$(CURDIR) \
	-w $(CURDIR) \
	maven:3-openjdk-11 mvn

export VERSION

build: prepare
	@$(MAVEN) clean package

deploy: prepare
	@$(MAVEN) clean deploy

prepare:
	@echo "Patching pom.xml with version $(VERSION)"
	@sed -i.bak 's,<revision>.*</revision>,<revision>$(VERSION)</revision>,' pom.xml && rm pom.xml.bak

clean:
	@rm -rf src target

.PHONY: build deploy prepare clean
