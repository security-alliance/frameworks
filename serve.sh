#!/bin/bash
if ! test -e theme/index.hbs; then
    echo "Run serve.sh inside root folder."
    exit 1
fi

# Regenerate tags
node theme/tags_generator.js

# Run mdbook serve with poll watching enabled
mdbook serve
