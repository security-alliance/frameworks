# Default recipe to display help information
default:
    @just --list

# Install dependencies
install:
    cargo install mdbook mdbook-admonish

# Serve the book locally with hot reload
serve: install
    mdbook serve

# Run all linting checks
lint:
    @echo "Running spell check..."
    @for f in **/*.md ; do echo $f ; aspell --lang=en_US --mode=markdown --home-dir=. --personal=wordlist.txt --ignore-case=true --camel-case list  < $f | sort | uniq -c ; done
    @echo "Spell check complete!"
    @echo ""
    @echo "Running markdownlint..."
    markdownlint-cli2 ./src/*.md