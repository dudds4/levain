# Agent guide: levain

Personal website and project portfolio for David Weisdorf (GitHub: dudds4). Astro 7 static site, hosted on Wasmer Edge, deployed from GitHub Actions.

Read these first:

- `docs/PLAN.md`: phases and what's done.
- `docs/decisions/`: why things are the way they are. Don't reverse a decision without asking the user.

## Current status (2026-10-21)

- Phase 0 (skeleton) is done: pages, projects collection, styles, deploy workflow. `npm run build` passes.
- **Not yet verified:** the Wasmer config (`wasmer.toml`, `app.yaml`) and the `wasmer deploy --non-interactive` step in the workflow were written from Wasmer's docs and has not been run with the Wasmer CLI or deployed. Verifying it is the first job; see Phase 1 in `docs/PLAN.md`.
- `owner: dudds4` in `app.yaml` assumes the Wasmer username matches GitHub. Confirm with the user.
- `site` in `astro.config.mjs` (`https://levain.wasmer.app`) is a guess until the first deploy prints the real app URL.
- The deploy workflow builds on every push. It skips the deploy step until the `WASMER_TOKEN` repo secret exists.
- All page text and `src/content/projects/example-project.md` are placeholders.

## Commands

```sh
npm install
npm run dev -- --background   # dev server at http://localhost:4321/; manage with `npx astro dev stop|status|logs`
npm run build                 # static output in dist/
npm run preview
```

Wasmer (CLI not installed by default; see https://docs.wasmer.io):

```sh
npm run build && wasmer run . -- --port 9000   # serve dist/ locally the way Edge will
wasmer deploy                                  # manual deploy (needs `wasmer login`)
```

## Conventions

- Projects are Markdown files in `src/content/projects/`; the schema is in `src/content.config.ts`. `draft: true` hides one.
- Build internal links with `url()` from `src/lib.ts`, never a hard-coded `/path`, so a `base` path can be added later.
- Colors are CSS custom properties in `src/styles/global.css`, with a dark-mode block. Add new colors there, not inline.
- No UI or CSS framework until something actually needs one (ADR 0001).
- Use Astro 7 APIs: content config at `src/content.config.ts`, `glob()` loader from `astro/loaders`, `z` from `astro/zod` (the `astro:content` `z` export is deprecated).
- Record significant choices as a new ADR in `docs/decisions/` and add it to the index there.
- Keep the docs current: update the status above and `docs/PLAN.md` when a phase step is finished.

## Safety

- The GitHub repo is **public**. Never commit secrets, tokens or private notes. The Wasmer token lives only in the `WASMER_TOKEN` GitHub secret.
- Before linking one of the user's other repos as a project, check that it's public.
- Ask before pushing, deploying, changing DNS or creating accounts and tokens.

## Astro docs

- https://docs.astro.build (routing, components, content collections, styling)
