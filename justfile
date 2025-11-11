# Default recipe to display help information
default:
    @just --list

# Install dependencies
install:
    pnpm install

# Serve the Vocs site locally with hot reload
serve: 
    pnpm run docs:dev

# Build the static Vocs site
build: install
    pnpm run docs:build

# Preview the built site locally
preview: install
    pnpm run docs:preview

# Run all linting checks
lint:
    @echo "Running spell check..."
    npx cspell ./docs/pages/**/*.mdx
    @echo "Spell check complete!"
    @echo ""
    @echo "Running markdownlint..."
    markdownlint-cli2 ./docs/pages/**/*.mdx
