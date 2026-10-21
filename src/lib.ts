import { getCollection } from 'astro:content';

/** Prefix a site-relative path with the configured base (e.g. "/levain"). */
export function url(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}

/** Published projects, newest first. */
export async function getProjects() {
	const all = await getCollection('projects', ({ data }) => !data.draft);
	return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
