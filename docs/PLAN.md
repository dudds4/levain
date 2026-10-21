# Plan

Personal website that hosts a project portfolio. It should be cheap (only the domain costs money), low-maintenance and fully in git.

## Phase 0: Skeleton (done 2026-10-21)

- Astro 7 minimal template, TypeScript strict.
- `projects` content collection (Markdown + frontmatter schema).
- Pages: home (intro + project list), project detail, about, 404.
- Wasmer Edge config (`wasmer.toml`, `app.yaml`) and a GitHub Actions deploy workflow.

## Phase 1: Go live on wasmer.app

Done so far: the GitHub repo `dudds4/levain` exists (public) and the code is pushed.

1. **User:** create a Wasmer account (signing in with GitHub works) and tell the agent the username. It must match `owner` in `app.yaml`.
2. **Agent:** install the Wasmer CLI, run `npm run build && wasmer run . -- --port 9000`, and confirm the site serves correctly (pages, project page, 404). Fix `wasmer.toml` / `app.yaml` if needed.
3. **User:** create an API token at https://wasmer.io/settings/access-tokens and add it as the repo secret `WASMER_TOKEN` (GitHub → Settings → Secrets and variables → Actions). Don't paste it into chat or commit it.
4. Push to `main` (or run the workflow manually). Check the deploy log for the app URL, then update `site` in `astro.config.mjs` and the README if it differs from `https://levain.wasmer.app`.
5. Update the status section in `AGENTS.md`.

## Phase 2: Content

- Write the intro and about page.
- Add real projects (candidates: backup-manager, resync-keepass, fala/IronClaw assistant). Check each repo's visibility before linking it.
- Pick a name/brand, favicon and a social preview image.

## Phase 3: Custom domain

1. Buy the domain (see [ADR 0002](decisions/0002-domain-registrar.md)).
2. In the Wasmer dashboard: app → **Domains** → add the apex and `www`. Wasmer shows the DNS records to create; TLS is provisioned automatically.
3. Create those records at the registrar and wait for Wasmer to mark the domain verified.
4. Set `site` in `astro.config.mjs` to `https://<domain>`. Optionally redirect `www` to the apex (or the reverse).

## Phase 4: Polish (optional)

- Sitemap (`@astrojs/sitemap`) and RSS if there's writing.
- Open Graph tags per project.
- Analytics, only if wanted: check what the Wasmer dashboard offers first.
- Lighthouse / link check in CI.

## Budget

| Item | Cost |
| --- | --- |
| Hosting (Wasmer Edge, Hobby plan) | $0 |
| Domain | ~$10–15/year, depends on TLD |
