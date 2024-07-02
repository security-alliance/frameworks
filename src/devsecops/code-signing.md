# Code Signing

Code signing ensures that the code has not been tampered with and verifies the identity of the developer. Implement the following best practices:

- **Require PRs to be Signed**: Ensure all Pull Requests (PRs) are signed with the user’s GPG key.
- **Peer Review**: Every PR must be reviewed by another core team member before being merged into the stable/main/master branch.
- **Mandatory MFA**: Require Multi-Factor Authentication (MFA) for all users where applicable and available (e.g., GitHub, email). Encourage the use of hardware MFA (e.g., Yubikeys) as MFA through SMS has more attack vectors.
- **Regular Key Rotation**: Rotate GPG keys regularly to mitigate the risk of key compromise.
- **Document Signing Procedures**: Maintain clear documentation on the code signing procedures and ensure all team members are trained on these practices.

By following these practices, you can ensure the integrity and authenticity of your codebase.
