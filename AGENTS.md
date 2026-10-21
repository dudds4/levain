## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This project

- Plan and decisions: `docs/PLAN.md`, `docs/decisions/`.
- Projects are Markdown files in `src/content/projects/`; the schema is in `src/content.config.ts`.
- The site is served under `base: '/levain'` until the custom domain is live. Build every internal link with `url()` from `src/lib.ts`, never a hard-coded `/path`.
- The repo is public: never commit secrets or private notes.
