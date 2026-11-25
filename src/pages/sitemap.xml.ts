import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { url } from '../scripts/url';

export const GET: APIRoute = async ({ site }) => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const paths = ['', ...projects.map((p) => `work/${p.id}/`)];
  const body = paths.map((p) => `  <url><loc>${new URL(url(p), site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
};
