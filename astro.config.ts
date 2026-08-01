import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import flowbite from "flowbite-react/plugin/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.whyk.dev",
  integrations: [mdx(), sitemap(), react(), flowbite()],
  vite: {
    plugins: [tailwindcss()],
  },
});
