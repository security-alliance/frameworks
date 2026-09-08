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
    find ./docs/pages -name "*.mdx" -print0 | xargs -0 pnpm exec cspell
    @echo "Spell check complete!"
    @echo ""
    @echo "Running markdownlint..."
    find ./docs/pages -path ./docs/pages/config -prune -o -name "*.mdx" -print0 | xargs -0 markdownlint-cli2

# Objective MDX structure checks (non-strict by default; see content-model.mdx)
validate-content *args:
    pnpm run validate:content -- {{args}}
