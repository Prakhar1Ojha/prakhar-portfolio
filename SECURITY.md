# Security Policy

## Supported Versions

This is a personal portfolio website, actively maintained on the `main` branch only.

| Version | Supported |
|---|---|
| main    | ✅ |

## Reporting a Vulnerability

If you discover a security vulnerability (e.g. an XSS vector in the contact form, exposed secrets, or a dependency vulnerability):

1. **Do not** open a public issue.
2. Open a [private security advisory](../../security/advisories/new) on GitHub, or contact the maintainer directly via the email listed on the [GitHub profile](https://github.com/Prakhar1Ojha).
3. Include steps to reproduce and the potential impact.

You can expect an initial response within a few days. Since this is a personal project maintained outside of work hours, response times may vary.

## Scope

This site has no backend, authentication, or stored user data beyond what a browser-side contact form submits to a third-party service (if configured). Most relevant security concerns are around dependency vulnerabilities and client-side issues.
