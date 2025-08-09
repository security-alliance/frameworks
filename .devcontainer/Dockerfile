# Base debian build with VSCode devcontainer base
FROM mcr.microsoft.com/vscode/devcontainers/base:debian

# Update packages and install only essential dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libssl-dev \
    aspell \
    aspell-en \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 20.x (LTS) from NodeSource
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Switch to vscode user
USER vscode

# Install Rust and Cargo for vscode user
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/home/vscode/.cargo/bin:${PATH}"

# Install mdBook and mdbook-admonish
RUN /home/vscode/.cargo/bin/cargo install mdbook mdbook-admonish

# Install just command runner
RUN /home/vscode/.cargo/bin/cargo install just

# Install markdownlint-cli2 globally via npm (need root for global install)
USER root
RUN npm install -g markdownlint-cli2

# Switch back to vscode user
USER vscode

# Set working directory
WORKDIR /workspace

# Ensure cargo is in PATH for vscode user
RUN echo 'export PATH="/home/vscode/.cargo/bin:$PATH"' >> /home/vscode/.bashrc