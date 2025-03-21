import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Add this for proper path handling in production
  base: "./",
  // Server configuration for development
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  // Preview configuration for production
  preview: {
    port: 3000,
    host: "0.0.0.0",
    // Allow Heroku subdomain
    allowedHosts: ["tsongaqueens-31f1c25e123c.herokuapp.com", ".herokuapp.com"],
  },
  // For production build
  build: {
    outDir: "dist",
  },
});
