import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://saiful-ull-502862.github.io',
  base: '/Saiful-Islam-Portfolio-Website',
  integrations: [mdx(), sitemap(), tailwind()]
});