#!/bin/bash
if ! test -e theme/index.hbs; then
    echo "Run serve.sh inside root folder."
    exit 1
fi

# Run mdbook serve with poll watching enabled
mdbook serve
