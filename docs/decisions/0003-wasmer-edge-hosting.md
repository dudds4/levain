# 0003: Host on Wasmer Edge

- Status: accepted
- Date: 2026-10-21
- Supersedes the hosting part of [0001](0001-astro-github-pages.md)

## Context

GitHub Pages works but is bare-bones: it needs a public repo on a free account, serves project sites under a `/<repo>` subpath, and has no dashboard, logs or analytics. Wasmer Edge has a free Hobby plan with a dashboard and room to grow.

Hobby plan limits (checked 2026-10-21 on wasmer.io/pricing): 1M requests/month, 150 GB bandwidth, 50 custom domains with automatic TLS, 100 apps, 1,000 build minutes, 6 h active CPU, 1 GB storage, 1-day log retention, single seat, community support. A static portfolio sits far inside these limits. Pro is $10/month if ever needed.

## Decision

- Astro builds to `dist/`. Wasmer serves it with the `wasmer/static-web-server` package (see `wasmer.toml`, `app.yaml`).
- Deploy from **GitHub Actions** (`.github/workflows/deploy.yml`): build with npm, then `wasmer deploy` authenticated with a `WASMER_TOKEN` repo secret. The build stays in git and the Actions log, not in Wasmer's dashboard settings.
- The site is served from the domain root, so there's no `base` path.
- The repo doesn't have to be public (it currently is).

## Alternatives

- **Wasmer's GitHub integration** (connect the repo in the Wasmer dashboard; it builds and deploys `main` on push). Less setup, no token to manage, but its build settings live in the dashboard and Astro autodetection isn't documented. A reasonable switch later if the Actions workflow becomes a chore.
- **GitHub Pages / Cloudflare Pages:** both free. Cloudflare Pages is the fallback if Wasmer's free tier changes.

## Consequences

- Need a Wasmer account and an API token stored as a GitHub secret.
- Wasmer is a smaller company than GitHub or Cloudflare. The site is plain static files, so moving hosts is cheap.
