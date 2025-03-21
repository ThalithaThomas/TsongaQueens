import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Add this for proper path handling in production
  base: "./",
  // Simplified server config
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  // For production build
  build: {
    outDir: "dist",
  },
});
