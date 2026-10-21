# 0002: Domain registrar

- Status: proposed
- Date: 2026-10-21

## Context

The site needs a custom domain. Wasmer Edge only needs DNS records pointing at it, so any registrar works.

## Options

- **Cloudflare Registrar:** sells at cost with no markup on renewal; free DNS. Requires a Cloudflare account and uses Cloudflare nameservers.
- **Porkbun / Namecheap:** cheap, simple, include free DNS; renewal prices can be higher than the first year.

## Decision

Pending: choose when buying. Prefer a registrar whose renewal price is known up front, and turn on auto-renew and registrar lock.
