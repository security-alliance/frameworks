# Default recipe to display help information
default:
    @just --list

# Install dependencies
install:
    npm install

# Serve the Vocs site locally with hot reload
serve: 
    npm run docs:dev -- --host port 5173

# Build the static Vocs site
build: install
    npm run docs:build

# Preview the built site locally
preview: install
    npm run docs:preview

# Run all linting checks
lint:
    @echo "Running spell check..."
    @for f in docs/pages/**/*.mdx ; do echo $f ; aspell --lang=en_US --mode=markdown --home-dir=. --personal=wordlist.txt --ignore-case=true --camel-case list  < $f | sort | uniq -c ; done
    @echo "Spell check complete!"
    @echo ""
    @echo "Running markdownlint..."
    markdownlint-cli2 ./docs/pages/**/*.mdx
