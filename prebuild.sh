#!/bin/bash

# Exit on error
set -e

echo "Running prebuild SUMMARY.md selection..."

# Default branch
CURRENT_BRANCH="unknown"

# Check for Vercel environment variables first
if [ -n "$VERCEL_GIT_COMMIT_REF" ]; then
    CURRENT_BRANCH=$VERCEL_GIT_COMMIT_REF
    echo "Branch detected from VERCEL_GIT_COMMIT_REF: $CURRENT_BRANCH"
# Get the current git branch (fallback)
elif git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
    echo "Branch detected from git: $CURRENT_BRANCH"
# Try other CI environment variables
else
    # Try GitHub Actions env var
    if [ -n "$GITHUB_REF" ]; then
        CURRENT_BRANCH=${GITHUB_REF#refs/heads/}
        echo "Branch detected from GITHUB_REF: $CURRENT_BRANCH"
    # Try GitLab CI env var
    elif [ -n "$CI_COMMIT_BRANCH" ]; then
        CURRENT_BRANCH=$CI_COMMIT_BRANCH
        echo "Branch detected from CI_COMMIT_BRANCH: $CURRENT_BRANCH"
    # Try general CI environment variables
    elif [ -n "$BRANCH_NAME" ]; then
        CURRENT_BRANCH=$BRANCH_NAME
        echo "Branch detected from BRANCH_NAME: $CURRENT_BRANCH"
    else
        echo "Could not detect branch from any source, defaulting to 'develop'"
        CURRENT_BRANCH="develop"
    fi
fi

echo "Final detected branch: $CURRENT_BRANCH"

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

# Add debug information about available environment variables
echo "Available environment variables:"
env | sort | grep -E 'GIT|VERCEL|BRANCH|CI' || echo "No relevant environment variables found"

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