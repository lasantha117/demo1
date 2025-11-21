import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
      return {
        // Base path for built assets. Use `BASE` env variable when provided
        // (e.g., for GitHub Pages) otherwise default to root '/' for hosts
        // like Netlify that serve the site at the domain root.
        // Default to the repository path on GitHub Pages. You can override
        // by setting the `BASE` environment variable (e.g. for Netlify use '/').
        // NOTE: update this value to match your GitHub repo name if needed.
        // The README references: /Pressure-cleaning-Demo-1/
        base: env.BASE || '/Pressure-cleaning-Demo-1/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
