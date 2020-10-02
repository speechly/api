build:
	@echo "Generating code stubs"
	@make -C go
	@make -C python
	@make -C javascript
.PHONY: build
