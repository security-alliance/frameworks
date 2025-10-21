#!/bin/bash
set -e

echo "Running Vercel prebuild for Vocs"
# Ensure docs/pages exists
mkdir -p docs/pages

# Install dependencies
pnpm install --frozen-lockfile

# Build the Vocs site
pnpm run docs:build

# Post-build searchbar indexing
node utils/searchbar-indexing.js

echo "✅ Vocs build + searchbar index completed successfully!"
