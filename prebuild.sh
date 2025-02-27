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
# If they don't exist, create them from the current SUMMARY.md
if [ ! -f "src/config/SUMMARY.md.develop" ]; then
    echo "Creating develop SUMMARY file from current..."
    cp src/SUMMARY.md src/config/SUMMARY.md.develop
fi

if [ ! -f "src/config/SUMMARY.md.main" ]; then
    echo "Creating main SUMMARY file from current..."
    cp src/SUMMARY.md src/config/SUMMARY.md.main
fi

# Select the appropriate SUMMARY.md based on branch
if [ "$CURRENT_BRANCH" = "main" ]; then
    echo "Using main branch SUMMARY.md"
    cp src/config/SUMMARY.md.main src/SUMMARY.md
else
    echo "Using develop branch SUMMARY.md"
    cp src/config/SUMMARY.md.develop src/SUMMARY.md
fi

# Now continue with the normal build process
echo "SUMMARY.md set for $CURRENT_BRANCH branch"
echo "Prebuild script completed successfully" 