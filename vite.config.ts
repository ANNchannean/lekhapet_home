import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

const base = process.env.BASE_PATH || "";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit({
      // Consult https://svelte.dev/docs/kit/integrations
      // for more information about preprocessors
      preprocess: vitePreprocess(),
      adapter: adapter({ fallback: "404.html" }),
      prerender: { handleHttpError: "warn" },
      paths: { base: base as "" | `/${string}` | undefined },
    }),
  ],
  server: { host: true, allowedHosts: true },
});
