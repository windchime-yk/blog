import flowbite from "flowbite-react/plugin/tailwindcss";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    ".flowbite-react/class-list.json",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite, typography()],
} satisfies Config;
