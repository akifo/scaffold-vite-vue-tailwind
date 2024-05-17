import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [vue()],
  base: "/scaffold-vite-vue-tailwind/",
});
