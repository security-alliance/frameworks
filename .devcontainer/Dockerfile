# Base debian build with VS Code devcontainer base
FROM mcr.microsoft.com/vscode/devcontainers/base:debian

# Update packages and install only essential dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    libssl-dev \
    aspell \
    aspell-en \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Switch to vscode user
USER vscode

# Install Rust and Cargo for vscode user
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/home/vscode/.cargo/bin:${PATH}"

# Install mdBook and mdbook-admonish
RUN /home/vscode/.cargo/bin/cargo install mdbook mdbook-admonish

# Install just command runner
RUN /home/vscode/.cargo/bin/cargo install just

# Copy markdownlint-cli2 from its Docker image (need root for this)
USER root
COPY --from=davidanson/markdownlint-cli2:latest /usr/local/bin/markdownlint-cli2 /usr/local/bin/markdownlint-cli2
RUN chmod +x /usr/local/bin/markdownlint-cli2

# Switch back to vscode user
USER vscode

# Set working directory
WORKDIR /workspace

# Ensure cargo is in PATH for vscode user
RUN echo 'export PATH="/home/vscode/.cargo/bin:$PATH"' >> /home/vscode/.bashrc