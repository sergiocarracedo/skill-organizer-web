import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://skill-organizer.dev",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
