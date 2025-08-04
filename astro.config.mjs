import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

const isVercel = process.env.VERCEL === "1";
export default defineConfig({
  integrations: [tailwind()],
  output: isVercel ? "server" : "server", // puedes mantenerlo 'server' en ambos casos
  adapter: isVercel
    ? vercel() // Si está en Vercel, usa el adaptador de Vercel
    : node({ mode: "standalone" }), // Si no está en Vercel, usa Node
});