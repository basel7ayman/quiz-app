import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages serves the site from a subpath: https://<user>.github.io/<repo>/
  base: mode === "production" ? "/quiz-app/" : "/",
  plugins: [react(), tailwindcss()],
}));
