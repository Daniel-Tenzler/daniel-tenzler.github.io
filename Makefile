REPO_NAME := danieltenz.github.io

# Directories
PUBLIC_DIR := public
BUILD_DIR := build/client

# Install dependencies
install:
	@echo "Installing npm dependencies..."
	npm install

all: build prepare

build:
	@echo "Building Remix SPA..."
	npm run build

prepare:
	@echo "Preparing public/ directory for GitHub Pages..."
	rm -rf $(PUBLIC_DIR) && mkdir -p $(PUBLIC_DIR)
	cp -R $(BUILD_DIR)/* $(PUBLIC_DIR)/
	cp $(PUBLIC_DIR)/index.html $(PUBLIC_DIR)/404.html

# Commit and push to GitHub
deploy:
	@echo "Deploying to GitHub Pages..."
	git add $(PUBLIC_DIR)
	git commit -m "Deploy static site"
	git push origin main

# Clean build artifacts and dependencies
clean:
	@echo "Cleaning project..."
	rm -rf node_modules $(PUBLIC_DIR) build .cache
	@echo "Clean complete."
