---
tags:
  - Engineer/Developer
  - Security Specialist
  - Operations & Strategy
  - Devops
  - SRE
contributors:
  - role: wrote
    users: [patrickalphac, mattaereal]
---

# Security Testing

The objective of Security testing, while most likely impossible, is to ensure that applications and systems are resilient to attacks and free from vulnerabilities. This section covers various security testing methodologies, including dynamic and static application security testing, fuzz testing, and security regression testing.

There are several types of testing:
- **Unit Testing**: Tests individual components or functions of the codebase.
- **Integration Testing**: Tests the interaction between different components or systems.
- **Fuzz Testing**: Tests the application by providing random or unexpected inputs to identify vulnerabilities.
- **Static Analysis**: Analyzes the code without executing it to find potential vulnerabilities.
- **Formal Verification**: Uses mathematical methods to prove the correctness of algorithms and protocols.

Some types of testing overlap, for example, a unit test could also be a fuzz test. We will focus on testing and how it applies to smart contracts, and use solidity as an example.

## Goal

The goal of security testing is to identify vulnerabilities and weaknesses in the codebase, while also making sure that the code behaves the same way even after changes. Different types of testing can help achieve this goal in different ways. There is no "one size fits all" solution, and the choice of testing methodology depends on the specific requirements and constraints of the project. 

## Smart Contracts 

For smart contracts in particular, here is when to use each type of testing:
- **Unit Testing**: Always. And aim for high "code coverage" (i.e. unit test as many paths as possible)
- **Integration Testing**: Always. This can also be combined with fork testing.
- **Fuzz Testing**: Always. Most unit tests can be fuzz tests.
- **Static Analysis**: Always. Use tools like [Slither](https://github.com/crytic/slither) and [Aderyn](https://github.com/Cyfrin/aderyn) to analyze the code for vulnerabilities.
- **Formal Verification**: Dependent. Anywhere functions are math heavy, stateless, or functionality matches another system, this should be used.