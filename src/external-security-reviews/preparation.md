# Preparation

Preparation is key to a successful security review. Here are essential steps to prepare for an external security assessment:

## Set a Goal for the Review
This is the most important step of a security review and often the most overlooked. Define what you want to achieve with the review, such as:
- What’s the overall level of security for this product?
- Are all client data transactions handled securely?
- Can a user leak information about another user?
- Are there any conditions that can result in user funds being stuck in your protocol?

Knowing your primary concerns will help the assessment team tailor their approach to meet your needs.

## Internal Due Diligence
Conduct internal testing before engaging an external security provider:
- **Positive Unit Tests**: Validate paths handled by your code.
- **Negative Unit Tests**: Validate paths not handled by your code.
- **Integration Tests**: Conduct end-to-end testing (testnets).
- **Active Tests**: Perform post-deployment testing.

Leverage automated tools to identify low-hanging fruits internally. Here’s a list of free/open-source tools your project could use:

- **Solidity**: slither, mythril, semgrep-smart-contracts
- **Golang**: golangci-lint, go-critic, gosec, gokart
- **Rust**: cargo audit, cargo outdated, clippy, cargo geiger, cargo tarpaulin

## Documentation
Documentation is critical for knowledge transfer, teamwork, and future-proofing projects. At a minimum, your documentation should include:

- **System Overview**: Describe your protocol in plain English—what it does, its components, and its place in the market.
- **User Flow Diagrams**: Outline all possible interaction paths within your system.
- **Design Choices**: Document design decisions and any known potential issues.
- **Known Restrictions / Limitations**: Log centralization risks and known limitations (e.g., limited TVL, token support).
- **Dependencies**: List all external dependencies.
- **Access Control / Privileged Roles**: Record all roles (owners, admins, keepers, users) and their privileges.
- **Formal Specification (Optional)**: Provide a formal (ideally executable) protocol specification.

Thorough preparation ensures that the external security review is focused and effective.
