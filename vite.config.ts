import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project Pages: https://frenchdog0802.github.io/profilio/
// For a user site (frenchdog0802.github.io), change base to "/"
export default defineConfig({
  plugins: [react()],
  base: "/profilio/",
});
