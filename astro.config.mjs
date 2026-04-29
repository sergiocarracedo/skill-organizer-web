import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sergiocarracedo.github.io",
  base: "/skill-organizer",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
