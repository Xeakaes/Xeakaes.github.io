import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { SITE_URL, BASE_PATH } from './src/config/deploy.mjs';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
