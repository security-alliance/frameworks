#!/bin/bash
set -e

echo "Running Vercel prebuild for Vocs with manual Chromium..."

# Ensure docs/pages exists
mkdir -p docs/pages

# Install dependencies
npm install

# Directory for browsers
mkdir -p .playwright-browsers/chromium

# Download Chromium binary (revision 1187)
echo "Downloading Chromium for Playwright..."
curl -sSL https://cdn.playwright.dev/builds/chromium/1187/chromium-linux.zip -o chromium.zip

# Extract and clean up
unzip chromium.zip -d .playwright-browsers/chromium
rm chromium.zip

# Tell Playwright where to find the browser
export PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers

# Build the Vocs site
npm run docs:build

echo "Vocs build completed successfully!"
