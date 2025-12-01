<div align="center">
  <h1>Developer Security Guide</h1>
  <p><em>Security practices for Web3 development</em></p>
</div>

---

## Overview

Development in Web3 presents additional security risks over traditional developer environments. Apps integrate with crypto wallets for development and testing, developers often have app or contract deployment permissions, and attackers specifically target Web3 developers and organizations to steal crypto assets.

---

## Security Risks

- **🦠 Malicious Code Execution**
  - Untrusted code containing malware in development environments
  - Compromised libraries and dependencies in trusted projects
  - Supply chain attacks through development tools

- **💻 Endpoint Compromise**
  - General malware infection from downloads, external files, or 0-day exploits
  - Physical device attacks and theft
  - Network-based attacks on development machines

- **🌐 Browser-Based Attacks**
  - Browser vulnerabilities (e.g. cross-site scripting)
  - Wallet extension attacks and vulnerabilities
  - Session hijacking and phishing attacks

- **🔑 Credential Compromise**
  - Side-channel credential leakage
  - Accidental credential exposure in code
  - Overly permissive dev accounts

---

## Trust Level Isolation

### 🔴 **Privileged Operations**
*Highest security requirements - dedicated secure environment*

- **Wallet Operations**
  - Transaction signing and multi-sig operations
  - Hardware wallet interactions
  - Transaction simulation and verification
  - Contract deployments

- **Sensitive Data Access**
  - Internal confidential documents and information
  - Production deployment credentials
  - Administrative access to critical systems

- **High Permission Sessions**
  - Cloud platform consoles (AWS, GCP, Azure)
  - Online banking and financial services
  - Organization admin panels and privileged accounts

### 🟡 **Default Operations**
*Standard security measures - daily work environment*

- **Development Work**
  - Using pre-installed and verified development tools
  - Working with known, trusted codebases
  - Standard IDE and editor usage

- **Authenticated Browsing**
  - Logged-in sessions for work tools
  - Social media and communication platforms
  - Personal browsing with saved sessions

### 🟠 **Untrusted Operations**
*Maximum isolation required - disposable environment*

- **Code Execution**
  - Running foreign or unknown code
  - Testing new libraries and dependencies
  - Executing downloaded scripts or tools

- **File Handling**
  - Opening external files from unknown sources
  - Downloading and running untrusted executables
  - Processing user-submitted content

- **Risky Browsing**
  - Opening untrusted links
  - Temporary browsing without saved sessions
  - Accessing potentially malicious websites
  - Downloading and using video conference software

---

## Implementation Strategies

### 🖥️ Device Separation

**Dedicated Privileged Device**
- [ ] **Separation**: Use a separate machine exclusively for privileged operations
- [ ] **Air Gap**: Isolate from other devices and networks when possible
- [ ] **Network Isolation**: Use separate WiFi network or cellular connection
- [ ] **Physical Security**: No external device connections (USB drives, keyboards, etc.)
- [ ] **VPN Usage**: Always use a VPN when traveling or on untrusted networks

**Development and Untrusted Environment Separation**
- [ ] Use separate devices, OS accounts, or VMs for segregating between daily activity and untrusted operations
- [ ] Regularly wipe untrusted environments clean
- [ ] Assume untrusted environment is always infected with malware - do not enter any credentials for usual accounts, create dedicated accounts with minimal access when needed

### 📦 Virtualization & Containerization

**Development Containers** *(Recommended for all code execution)*
- [ ] **Execution**: Use dev containers for all project execution, including for trusted projects
- [ ] **Project Isolation**: Create a separate container for each project
- [ ] **No Persistence**: Use clean images for untrusted operations
- [ ] **Container Methods**: Containers can be OS images in Docker, IDE-integrated project containers, or cloud-based workstations

**Virtual Machines**
- [ ] Use VMs for untrusted operations when dedicated hardware isn't available and dev containers are not desired
- [ ] Ensure proper VM configuration (no shared storage, network, or device access)
- [ ] Restore VMs to clean state after each use

### 🌐 Browser Separation

**Use a two-browser system within your default trust level:**

**🔒 Session-Based Browser** *(Trusted Operations)*
- [ ] Use only for authenticated, trusted browsing
- [ ] Never open links or paste URLs directly
- [ ] Maintain logged-in sessions for work tools
- [ ] Regular cookie and cache clearing

**🕵️ Ephemeral Browser** *(Untrusted Operations)*
- [ ] Configure to run in private/incognito mode by default
- [ ] Set as default browser to catch clicked links
- [ ] No persistent cookies, cache, or history
- [ ] Use for all temporary and untrusted browsing

**Browser Security**
- [ ] Keep browsers updated to latest versions
- [ ] Avoid beta features and experimental settings
- [ ] Use reputable, security-focused browsers for sensitive operations

---

## Additional Security Tips

**Device Protection**
- [ ] **Full Disk Encryption**: Enable on all devices to protect against theft
- [ ] **Privacy Screens**: Use to prevent shoulder surfing in open spaces
- [ ] **Biometric Authentication**: Use biometrics, passkeys, or SSO in public to avoid leaking typed credentials
- [ ] **Linux**: Consider SELinux for advanced access controls
- [ ] **Windows**: Enable Windows Defender Application Control or AppLocker
- [ ] **macOS**: Ensure System Integrity Protection (SIP) is enabled
- [ ] **Root OS Accounts**: Do not log in as root for performing daily tasks, only when absolutely necessary. Your regular account should have minimal permissions

**Travel Security**
- [ ] Use dedicated travel devices or wipe devices before travel
- [ ] Create backup snapshots for easy device restoration
- [ ] Avoid accessing sensitive accounts on untrusted networks
- [ ] Ensure remote wipe capabilities in case of theft or seizure of device

**DNS and Network Protection**
- [ ] **Secure DNS**: Use [NextDNS](https://nextdns.io/) or [Quad9](https://quad9.net/) for malware protection
- [ ] **VPN Usage**: Always use a VPN on untrusted networks
- [ ] **Network Monitoring**: Use tools like [Little Snitch](https://www.obdev.at/products/littlesnitch/) (macOS), [Lulu](https://objective-see.org/products/lulu.html) (free alternative), or [Glasswire](https://www.glasswire.com/) (Windows) to actively block unknown network connections

**Code Security**
- [ ] **Commit Signing**: [Sign all git commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) for non-repudiation in logs
- [ ] **Encrypted Secrets**: Use a tool like [git-secret](https://sobolevn.me/git-secret/) to encrypt secrets in code repos
- [ ] **Secret Leakage**: Use an automated scanner like [git-secrets](https://github.com/awslabs/git-secrets) in pre-commit hooks to prevent accidental leakage of unencrypted secrets

---

## Development Containers Setup

Development containers completely isolate potentially risky code execution from the host machine. Even trusted projects can contain malicious dependencies, making containerized execution necessary for the security of your development environment.

### Supported IDEs

**Visual Studio Code & Cursor**
- 📖 [VS Code Dev Containers Guide](https://code.visualstudio.com/docs/devcontainers/containers)
- 📖 [Cursor Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) (same as VS Code)

**JetBrains IDEs**
- 📖 [JetBrains Dev Containers Guide](https://www.jetbrains.com/help/idea/start-dev-container-from-welcome-screen.html)

### Container Security Best Practices

**Container Configuration**
- [ ] **One Container Per Project**: Never reuse containers across projects
- [ ] **Appropriate Base Images**: Choose minimal, security-focused base images
- [ ] **No Host Downloads**: Avoid downloading code outside of the container
- [ ] **Network and Storage**: Do no allow containers to access host network and avoid shared storage devices

**Credential Management**
- [ ] **No Sensitive Credentials**: Avoid supplying API keys or deployment credentials to untrusted projects. Development credentials must be different from production credentials, encrypted at rest with a different passphrase/key
- [ ] **1Password Integration**: Use [1Password SSH/Git signing](https://vinialbano.com/how-to-sign-git-commits-with-1password/#setting-up-1password-for-ssh-and-git-commit-signing) for simple secure commit signing

**Container Lifecycle**
- [ ] **Clean State**: Start each session with a clean container
- [ ] **Initialization**: Clone repos inside of containers rather than importing them after creation (ideally, repos should never touch the host machine)