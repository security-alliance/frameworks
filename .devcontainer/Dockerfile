# Base debian build with VSCode devcontainer base
FROM mcr.microsoft.com/vscode/devcontainers/base:debian

# Update packages and install only essential dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libssl-dev \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 22.x (required by vocs >=1.2.0, see https://github.com/wevm/vocs/blob/main/package.json)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

# Switch to vscode user
USER vscode


# Install markdownlint-cli2 globally via npm (need root for global install)
USER root
RUN npm install -g pnpm@10.15.0 markdownlint-cli2

# Switch back to vscode user
USER vscode

# Set working directory
WORKDIR /workspace
