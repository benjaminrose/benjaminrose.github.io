.DEFAULT_GOAL := serve
.PHONY: help serve

serve: ## Run the main script
	bundle exec jekyll serve

update: ## Update jekyll dependencies
	bundle update

help:  ## Displays this message
		@echo "Commands for developing my website"
		@echo " "
		@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-18s\033[0m %s\n", $$1, $$2}'