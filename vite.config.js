import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    open: true,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
