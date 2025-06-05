---
tags:
  - Security Specialist
  - Operations & Strategy
  - Devops
---

# Preparation


A common misconception is that when doing a security review, you can just hand off the written code and let reviewers do their work. This could in theory work, however this would mean that time by reviewers is spent doing things that you could have easily done on your side to make the review more cost effective. Some of the steps you could consider taking before initiating a security review are:

## Thoroughly Review and Test Your Code
Before engaging an external security provider, ensure that your code is as clean and well-structured as possible. This includes:
- **Review Code Against External Checklists**: [Solcurity](https://github.com/transmissions11/solcurity), [Simple Security Toolkit](https://github.com/nascentxyz/simple-security-toolkit/blob/main/audit-readiness-checklist.md) both offer checklists that can help you ensure your code is polished and ready for a security review.
- **Code Quality**: Ensure your code is well-written, follows best practices, and is free of obvious bugs.
- **Code Comments**: Add comments to explain complex logic or non-obvious code sections.
- **Unit Tests**: Write comprehensive unit tests to cover critical functionality. This helps identify issues and catch regressions should changes be made.
- **Integration Tests**: Ensure that your integration tests cover all major components and interactions within your system.


## Set a Goal for the Review
This is the most important step of a security review and often the most overlooked. By setting a scope that is not too large or undefined, you are more likely to have a successful audit. If the project is very large, you may want to focus on the most critical aspects of the project.

## Internal Due Diligence
Conduct internal testing before engaging an external security provider. You can do this by creating and running test vectors for your code, and leverage automated tools to identify low-hanging fruit. Here’s a list of free/open-source tools your project could use:

- **Solidity**: slither, mythril, semgrep-smart-contracts
- **Golang**: golangci-lint, go-critic, gosec, gokart
- **Rust**: cargo audit, cargo outdated, clippy, cargo geiger, cargo tarpaulin

If tools flag false positives, make sure to document them and the reasons why they are non-issues. This will help reviewers focus on the real issues rather than spending time on false alarms.

## Documentation
Documentation is critical for knowledge transfer and future-proofing projects. At a minimum, your documentation should include:

- **Project Overview**: Describe your protocol in plain English—what it does and its components.
- **Flow Diagrams**: Outline all possible interaction paths within your system.
- **Design Choices**: Document design decisions and any known potential issues.
- **Known Restrictions / Limitations**: Document centralization risks and known limitations (e.g., limited TVL, token support).
- **Dependencies**: List all external dependencies.
- **Access Control / Privileged Roles**: Record all roles and their privileges.
- **Edge Cases**: Document any edge cases and assumptions, this can help auditors find issues faster.
