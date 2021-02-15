VERSION ?= latest
MAVEN   ?= docker run -it --rm \
	-v $(CURDIR)/settings.xml:/root/.m2/settings.xml \
	-v $(CURDIR):$(CURDIR) \
	-w $(CURDIR) \
	maven:3 mvn

export VERSION

build: prepare pom.xml
	@$(MAVEN) package

pom.xml:
	@echo "Patching pom.xml with version $(VERSION)"
	@cp template-pom.xml pom.xml
	@sed -i.bak 's/REVISION/$(VERSION)/' pom.xml && rm pom.xml.bak

deploy: prepare pom.xml
	@$(MAVEN) -Dgithub.username=$(MVN_USERNAME) -Dgithub.token=$(MVN_TOKEN) deploy

prepare:
	@rm -rf target
	@rm -f pom.xml

clean:
	@rm -rf target src pom.xml

.PHONY: build deploy clean
