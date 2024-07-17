#!/bin/bash
if ! test -e theme/index.hbs; then
    echo "Run serve.sh inside root folder."
    exit 1
fi
trap "sed -i 's|{{ path_to_root }}|/book/|g' theme/index.hbs" INT
sed -i 's|/book/|{{ path_to_root }}|g' theme/index.hbs
mdbook serve