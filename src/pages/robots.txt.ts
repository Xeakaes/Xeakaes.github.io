import type { APIRoute } from 'astro';
import { url } from '../scripts/url';

// Crawlers only read robots.txt at a domain root, so this matters for the user-site setup only.
// It allows everything, which also keeps /PcHWmonitor/ on the same domain crawlable.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(url('sitemap.xml'), site).href}\n`);
