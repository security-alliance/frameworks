#!/bin/bash
if ! test -e theme/index.hbs; then
    echo "Run serve.sh inside root folder."
    exit 1
fi


# Function to perform sed operation in a cross-platform manner
cross_platform_sed() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS (BSD sed)
        trap "sed -i '' 's|{{ path_to_root }}logo\.svg|/book/logo\.svg|g' theme/index.hbs" INT
        sed -i '' 's|/book/logo\.svg|{{ path_to_root }}logo\.svg|g' theme/index.hbs
    else
        # Linux and others (GNU sed)
        trap "sed -i 's|{{ path_to_root }}logo\.svg|/book/logo\.svg|g' theme/index.hbs" INT
        sed -i 's|/book/logo\.svg|{{ path_to_root }}logo\.svg|g' theme/index.hbs
    fi
}



# Perform initial sed operation
cross_platform_sed

# Regenerate tags
node theme/tags_generator.js

# Run mdbook serve with poll watching enabled
mdbook serve
