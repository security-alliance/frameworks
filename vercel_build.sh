#!/bin/bash
mkdir bin
curl -sSL https://github.com/rust-lang/mdBook/releases/download/v0.4.35/mdbook-v0.4.35-x86_64-unknown-linux-gnu.tar.gz | tar -xz --directory=bin 
curl -sSL https://github.com/catppuccin/mdBook/releases/download/v2.1.0/mdbook-catppuccin-x86_64-unknown-linux-gnu.tar.gz |  tar -xz --directory=bin
mv bin/mdbook-catppuccin-x86_64-unknown-linux-gnu/mdbook-catppuccin bin/
curl -sSL https://github.com/tommilligan/mdbook-admonish/releases/download/v1.15.0/mdbook-admonish-v1.15.0-x86_64-unknown-linux-gnu.tar.gz | tar -xz --directory=bin/
bin/mdbook build -d "book/"