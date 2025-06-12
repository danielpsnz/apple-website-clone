import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/apple-website-clone/",
  plugins: [
    react(),
  ],

  build: {
    sourcemap: true,
  },
});
