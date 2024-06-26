# Continuous Integration and Continuous Deployment
- Ensure every PR undergoes CI testing (e.g. Github Actions) before merge. At the minimum, your CI tests should include a run of unit tests and integration tests, and a check for known vulnerabilities on dependencies.
- The CI/CD should also check for misconfiguration and leaked credentials.
- Producing deterministic builds with a strict set of dependencies and/or a build container that can reliably produce the same results on different machines.
