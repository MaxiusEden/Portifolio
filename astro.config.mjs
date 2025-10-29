import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'static', // <-- VOLTOU PARA 'static'
  integrations: [tailwind(), icon()]
  // REMOVEMOS o adapter e o netlify
});