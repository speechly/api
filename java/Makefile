VERSION ?= latest
MAVEN   ?= docker run -it --rm \
	-e GPG_KEYFILE=/tmp/private.key \
	-v $(GPG_KEYFILE):/tmp/private.key \
	-v $(HOME)/.m2:/root/.m2 \
	-v $(CURDIR)/settings.xml:/root/.m2/settings.xml \
	-v $(CURDIR):$(CURDIR) \
	-w $(CURDIR) \
	maven:3-openjdk-11 $(CURDIR)/run_maven.sh

export VERSION

build: prepare
	@$(MAVEN) clean package

deploy: prepare
ifndef GPG_KEYFILE
	$(error GPG_KEYFILE is undefined)
endif
ifndef GPG_PASSPHRASE
	$(error GPG_PASSPHRASE is undefined)
endif
	@$(MAVEN) \
		-Dossrh.username=$(MVN_USERNAME) \
		-Dossrh.password=$(MVN_PASSWORD) \
		-Dgpg.passphrase=$(GPG_PASSPHRASE) \
		clean deploy

prepare:
	@echo "Patching pom.xml with version $(VERSION)"
	@sed -i.bak 's,<revision>.*</revision>,<revision>$(VERSION)</revision>,' pom.xml && rm pom.xml.bak

clean:
	@rm -rf src target

.PHONY: build deploy prepare clean
