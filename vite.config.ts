import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
  resolve: {
    alias: {
      "@services": "/src/services",
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
  },
});
