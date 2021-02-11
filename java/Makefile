VERSION ?= latest
MAVEN   := docker run -it --rm \
	-v $(CURDIR)/settings.xml:/root/.m2/settings.xml \
	-v $(CURDIR):$(CURDIR) \
	-w $(CURDIR) \
	maven:3 mvn

export VERSION

build: pom.xml
	@rm -rf target
	@$(MAVEN) package

pom.xml: template-pom.xml
	cp template-pom.xml pom.xml
	sed -i.bak 's/REVISION/$(VERSION)/' pom.xml && rm pom.xml.bak

deploy: build
	$(MAVEN) -Dgithub.username=$(MVN_USERNAME) -Dgithub.token=$(MVN_TOKEN) deploy

clean:
	rm -rf target src pom.xml

.PHONY: build deploy clean
