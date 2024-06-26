# Preparation
- **Set a goal for the review:** This is the most important step of a security review, and paradoxically the one most often overlooked. You should have an idea of what kind of questions you want answered, such as:
    - *What’s the overall level of security for this product?*
    - *Are all client data transactions handled securely?*
    - *Can a user leak information about another user?*
    - *Are there any conditions that can result in user funds being stuck in your protocol?*
    
    Knowing your biggest area of concern will help the assessment team tailor their approach to meet your needs.
    
- **Internal due diligence:** It is essential for the development team to undergo internal testing prior to engaging an external security provider. Testing should include:
    - ***Positive unit tests:*** Paths handled by your code
    - ***Negative unit tests:*** Paths not handled by your code
    - ***Integration tests:*** End-to-end testing (testnets)
    - ***Active tests:*** Post-deployment testing
    
    Additionally, you should be leveraging automated tooling (e.g. static code analyzers) to identify any low-hanging fruits internally. Here’s a list of free/open source tools your project could use:
    
    - ***Solidity*:** slither, mythril, semgrep-smart-contracts
    - ***Golang*:** golangci-lint, go-critic, gosec, gokart
    - ***Rust*:** cargo audit, cargo outdated, clippy, cargo geiger, cargo tarpaulin
    
- **Documentation**

Documentation is the backbone of software development—essential for knowledge transfer, teamwork, and future-proofing projects. At the bare minimum, your documentation should include the following:

- **System Overview:** document in plain English your protocol: what does it do? what components is it made of? How does it fit within the broader target market?
- **User Flow Diagrams:** how do people actually use your protocol? Outline all possible interaction paths permitted within your system.
- **Design Choices:** why was the application designed the way it is? Document any known potential issues and the reason for moving forward with implementing them.
- **Known Restrictions / Limitations:** log any centralisation risks and any known limitations (limited TVL, limited token support, etc.)
- **Dependencies:** collect and maintain a list of all external dependencies your project relies on.
- **Access Control / Privileged Roles:** record all roles in your protocol (owners, admins, keepers, users, etc.) and list their associated privileges.
- **Formal Specification (optional):** provide a formal (ideally executable) protocol specification.