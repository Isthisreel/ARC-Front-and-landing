# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

We take the security of this project seriously. If you believe you have found a security vulnerability, please follow the responsible disclosure process below.

**Please do NOT open a public GitHub issue for security vulnerabilities.**

### How to Report

Send a detailed report to the project maintainers via one of the following:

- **Email**: Contact the repository owner through their GitHub profile at [https://github.com/Isthisreel](https://github.com/Isthisreel)
- **GitHub Private Vulnerability Reporting**: Use the [GitHub Security Advisory](https://github.com/Isthisreel/ARC-Front-and-landing/security/advisories/new) feature to submit a private report

### What to Include

Please include as much of the following information as possible to help us understand and resolve the issue quickly:

- A description of the vulnerability and its potential impact
- The type of issue (e.g., XSS, exposed secret, insecure dependency, etc.)
- Step-by-step instructions to reproduce the vulnerability
- Any proof-of-concept or exploit code (if applicable)
- Suggested remediation (if you have one)

### What to Expect

- **Acknowledgement**: We will acknowledge receipt of your report within **48 hours**.
- **Assessment**: We will assess the severity and impact within **7 days** and provide an initial response.
- **Resolution**: We aim to resolve critical vulnerabilities within **30 days** of confirmed impact.
- **Disclosure**: We follow coordinated disclosure — we will notify you before any public disclosure and credit you (if desired) in the security advisory.

## Security Best Practices for Contributors

- **Never commit secrets**: Do not commit API keys, private keys, tokens, or passwords. Use environment variables via `.env` files (which are gitignored).
- **Use `.env.example`**: Provide placeholder values in `.env.example` so others know which variables are required without exposing real secrets.
- **Blockchain private keys**: Keys used in `hardhat.config.ts` or agent wallets must always be loaded from environment variables — never hardcoded.
- **Dependency hygiene**: Keep dependencies up to date. Dependabot is enabled on this repository to alert on vulnerable packages.
- **Branch protection**: All changes to `main` must go through a pull request with at least one review.

## Automated Security Tooling

This repository uses the following automated security tools:

- **GitHub Secret Scanning**: Automatically detects accidentally committed secrets (API keys, private keys, tokens).
- **Dependabot**: Automatically opens PRs to update vulnerable dependencies.
- **CodeQL**: Static analysis to detect security vulnerabilities in JavaScript/TypeScript source code.

Thank you for helping keep this project secure.
