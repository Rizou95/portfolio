import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://rizou95.github.io',
  base: '/portfolio/', // repo name if not root
  adapter: github(),
});

