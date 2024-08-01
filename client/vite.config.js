import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Use HTTP for the local proxy target
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
