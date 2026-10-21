# 0001: Astro static site on GitHub Pages

- Status: superseded by [0003](0003-wasmer-edge-hosting.md)
- Date: 2026-10-21

## Context

A personal portfolio site: mostly static content, rarely updated, should cost nothing beyond the domain. It's deliberately separate from the IronClaw assistant repo (`dudds4/fala`), which is private and has no public surface.

## Decision

- **Generator:** Astro, minimal template, Markdown content collections. No UI framework or CSS framework until something needs one.
- **Hosting:** GitHub Pages, deployed by GitHub Actions (`withastro/action`) on push to `main`.
- **Repo:** `dudds4/levain`, public (GitHub Pages on a free account requires a public repo).

The generator choice still stands. The hosting choice was replaced the same day by Wasmer Edge.
