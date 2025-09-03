#!/bin/bash
set -e

echo "Running Vercel prebuild for Vocs..."

# Ensure docs/pages exists
mkdir -p docs/pages

# Optional: copy static assets
# cp -r src/assets/* docs/pages/assets/

# Install dependencies (in case Vercel doesn't automatically do it)
npm install & npx playwright install --with-deps

# Build the Vocs site
npm run docs:build

echo "Vocs build completed successfully!"
