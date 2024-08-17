import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import figma from "@polipo/vite-plugin-figma";

export default defineConfig({
  plugins: [react(), figma()]
});
