#!/bin/bash
set -e

echo "Running Vercel prebuild for Vocs"
# Ensure docs/pages exists
mkdir -p docs/pages

# Install dependencies
npm install

# Build the Vocs site
npm run docs:build

echo "Vocs build completed successfully!"
