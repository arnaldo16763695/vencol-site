import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  integrations: [tailwind()],
  output: "static", // siempre generamos un sitio estático
  adapter: isVercel ? vercel() : undefined, // Vercel usa su adaptador, Dokploy no necesita
});
