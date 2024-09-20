#!/bin/bash
if ! test -e theme/index.hbs; then
    echo "Run serve.sh inside root folder."
    exit 1
fi

# Function to perform sed operation in a cross-platform manner
cross_platform_sed() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS (BSD sed)
        sed -i '' 's|/book/|{{ path_to_root }}|g' theme/index.hbs
    else
        # Linux and others (GNU sed)
        sed -i 's|/book/|{{ path_to_root }}|g' theme/index.hbs
    fi
}

# Set up trap for cleanup
trap "cross_platform_sed" INT

# Perform initial sed operation
cross_platform_sed

mdbook serve --watcher native