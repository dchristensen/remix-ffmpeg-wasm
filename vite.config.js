import { config } from '@netlify/remix-adapter';

import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';

export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? config : undefined),
  plugins: [remix()],
});
