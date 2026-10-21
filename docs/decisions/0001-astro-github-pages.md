# 0001: Astro static site on GitHub Pages

- Status: accepted
- Date: 2026-10-21

## Context

A personal portfolio site: mostly static content, rarely updated, should cost nothing beyond the domain. It's deliberately separate from the IronClaw assistant repo (`dudds4/fala`), which is private and has no public surface.

## Decision

- **Generator:** Astro, minimal template, Markdown content collections. No UI framework or CSS framework until something needs one.
- **Hosting:** GitHub Pages, deployed by GitHub Actions (`withastro/action`) on push to `main`.
- **Repo:** `dudds4/levain`, public (GitHub Pages on a free account requires a public repo).

## Consequences

- Free hosting with automatic HTTPS, including for a custom domain.
- Source is public, so no secrets or private notes in the repo.
- Static only. If server-side features are ever needed (forms, etc.), use a third-party service or move to Cloudflare Pages, which also hosts from private repos.
