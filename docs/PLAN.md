# Plan

Personal website that hosts a project portfolio. It should be cheap (only the domain costs money), low-maintenance and fully in git.

## Phase 0: Skeleton (done 2026-10-21)

- Astro 7 minimal template, TypeScript strict.
- `projects` content collection (Markdown + frontmatter schema).
- Pages: home (intro + project list), project detail, about.
- GitHub Actions deploy to GitHub Pages at `dudds4.github.io/levain`.

## Phase 1: Go live on github.io

1. Create the public GitHub repo `dudds4/levain` and push.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Confirm the workflow deploys and the site loads at https://dudds4.github.io/levain/.

## Phase 2: Content

- Write the intro and about page.
- Add real projects (candidates: backup-manager, resync-keepass, fala/IronClaw assistant). Check each repo's visibility before linking it.
- Pick a name/brand, favicon and a social preview image.

## Phase 3: Custom domain

1. Buy the domain (see [ADR 0002](decisions/0002-domain-registrar.md)).
2. DNS at the registrar:
   - Apex: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and `AAAA` to `2606:50c0:8000::153` … `8003::153`).
   - `www`: `CNAME` to `dudds4.github.io`.
3. Verify the domain under GitHub **Settings → Pages → Verified domains** (account level) to prevent takeover.
4. Add `public/CNAME` containing the domain; set **Custom domain** in repo Pages settings; enable **Enforce HTTPS** once the cert is issued.
5. In `astro.config.mjs`: set `site` to `https://<domain>` and remove `base`. Internal links use `url()`, so nothing else changes.

## Phase 4: Polish (optional)

- Sitemap (`@astrojs/sitemap`) and RSS if there's writing.
- Open Graph tags per project.
- Privacy-friendly analytics (e.g. Cloudflare Web Analytics, free) — only if wanted.
- Lighthouse / link check in CI.

## Budget

| Item | Cost |
| --- | --- |
| Hosting (GitHub Pages) | $0 |
| Domain | ~$10–15/year, depends on TLD |
