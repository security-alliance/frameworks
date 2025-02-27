#!/bin/bash

# Exit on error
set -e

echo "Running prebuild SUMMARY.md selection..."

# Get the current git branch
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")

# If branch detection fails, try CI environment variables
if [ "$CURRENT_BRANCH" = "unknown" ]; then
    # Try GitHub Actions env var
    if [ -n "$GITHUB_REF" ]; then
        CURRENT_BRANCH=${GITHUB_REF#refs/heads/}
    # Try GitLab CI env var
    elif [ -n "$CI_COMMIT_BRANCH" ]; then
        CURRENT_BRANCH=$CI_COMMIT_BRANCH
    fi
fi

echo "Detected branch: $CURRENT_BRANCH"

# Ensure the config directory exists
if [ ! -d "src/config" ]; then
    echo "Creating config directory..."
    mkdir -p src/config
fi

# Ensure we have branch-specific SUMMARY files
# If they don't exist, fail with an error
if [ ! -f "src/config/SUMMARY.md.develop" ]; then
    echo "ERROR: src/config/SUMMARY.md.develop file is missing!"
    exit 1
fi

if [ ! -f "src/config/SUMMARY.md.main" ]; then
    echo "ERROR: src/config/SUMMARY.md.main file is missing!"
    exit 1
fi

# Select the appropriate SUMMARY.md based on branch
if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "master" ]; then
    echo "Using main branch SUMMARY.md"
    cp src/config/SUMMARY.md.main src/SUMMARY.md
else
    echo "Using develop branch SUMMARY.md"
    cp src/config/SUMMARY.md.develop src/SUMMARY.md
fi

# Now continue with the normal build process
echo "SUMMARY.md set for $CURRENT_BRANCH branch"
echo "Prebuild script completed successfully" 