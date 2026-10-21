# levain

Personal site and project portfolio, built with [Astro](https://astro.build) and hosted on [Wasmer Edge](https://wasmer.io).

- Live (until the custom domain is set up): https://levain.wasmer.app (confirm after first deploy)
- Plan: [docs/PLAN.md](docs/PLAN.md)
- Decisions: [docs/decisions/](docs/decisions/)
- Working on this with an AI agent: [AGENTS.md](AGENTS.md)

Status: skeleton with placeholder content; not deployed yet. See Phase 1 in the plan.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321/
npm run build     # static output in dist/
npm run preview   # serve dist/
```

## Add a project

Create `src/content/projects/<slug>.md`:

```md
---
title: My project
summary: One sentence.
date: 2026-10-21
tags: [rust, cli]
repo: https://github.com/dudds4/my-project   # optional
url: https://example.com                     # optional, live demo
featured: false
draft: false                                 # true hides it
---

Case study in Markdown.
```

The schema lives in `src/content.config.ts`. The project shows up at `/projects/<slug>/` and on the home page.

## Layout

```text
src/
  content.config.ts      # projects collection schema
  content/projects/      # one Markdown file per project
  layouts/Base.astro     # page shell: head, header, footer
  components/            # ProjectCard
  pages/                 # index, about, 404, projects/[...id]
  styles/global.css      # color tokens (light/dark), base styles
  lib.ts                 # url() base-path helper, getProjects()
.github/workflows/deploy.yml   # build + wasmer deploy on push to main
wasmer.toml, app.yaml          # Wasmer Edge package + app config
```


## License

Code is [MIT](LICENSE). Written content and personal images are © David Weisdorf, all rights reserved.
