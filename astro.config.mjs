import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  integrations: [react(), tailwind()],
});
