{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = with pkgs; [
    pnpm
    nodejs_24
    python313
    python313Packages.pyyaml
    python313Packages.openai
  ];
}
