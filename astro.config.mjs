import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: isVercel
    ? vercel() // SOLO si corre en Vercel
    : node({ mode: "standalone" }), // SOLO si corre en Dokploy
});
