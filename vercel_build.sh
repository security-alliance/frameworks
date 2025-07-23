#!/bin/bash
set -e  # Exit immediately if a command fails

# Create a bin directory
mkdir -p bin

# Download and extract mdBook
echo "Downloading mdBook v0.4.40..."
curl -sSL https://github.com/rust-lang/mdBook/releases/download/v0.4.52/mdbook-v0.4.52-x86_64-unknown-linux-gnu.tar.gz | tar -xz --directory=bin 

# Install Rust (needed for the prebuild script)
echo "Installing Rust..."
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source "$HOME/.cargo/env"

# Download mdbook-admonish directly from GitHub releases
echo "Downloading mdbook-admonish v1.19.0..."
# Check the exact names of the files in the release
curl -sSL https://github.com/tommilligan/mdbook-admonish/releases/download/v1.19.0/mdbook-admonish-v1.19.0-x86_64-unknown-linux-gnu.tar.gz | tar -xz --directory=bin/

# Make the binaries executable
chmod +x bin/mdbook
chmod +x bin/mdbook-admonish

# Add the bin directory to PATH
export PATH="$PWD/bin:$PATH"

# Verify the binaries are in PATH
echo "Verifying binaries..."
which mdbook
which mdbook-admonish

# Run the prebuild script
echo "Running prebuild script..."
chmod +x prebuild.sh
./prebuild.sh

# Build the book
echo "Building the book..."
bin/mdbook build -d "book/"
