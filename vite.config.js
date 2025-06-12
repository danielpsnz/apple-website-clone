import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/apple-website-clone/",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "daniel-perez-ki",
      project: "apple-website-clone",
      include: "./dist",
      telemetry: false,
    }),
  ],

  build: {
    sourcemap: true,
  },
});
