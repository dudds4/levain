// @ts-check
import { defineConfig } from 'astro/config';

// Until the custom domain is live, the site is served from its wasmer.app URL.
// When the domain is set up (see docs/PLAN.md), point `site` at it.
export default defineConfig({
	site: 'https://levain.wasmer.app',
});
