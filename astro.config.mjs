// @ts-check
import { defineConfig } from 'astro/config';

// Until the custom domain is live, the site is served from
// https://dudds4.github.io/levain/. When the domain is set up (see docs/PLAN.md),
// set `site` to it and drop `base`.
export default defineConfig({
	site: 'https://dudds4.github.io',
	base: '/levain',
});
