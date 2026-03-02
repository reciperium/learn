import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wasm from "vite-plugin-wasm";
import path from "path";
import topLevelAwait from "vite-plugin-top-level-await";
import tailwindcss from "@tailwindcss/vite";
// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    // visualizer({ gzipSize: true, open: true }),
    tailwindcss(),
    react(),
    wasm(),
    topLevelAwait(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          radix: ["@radix-ui/react-dropdown-menu", "@radix-ui/react-slot"],
          codeMirror: ["@uiw/react-codemirror", "@uiw/codemirror-themes"],
          reciperium: [
            "@reciperium/react-recipe",
            "@reciperium/recipe-parser-wasm",
          ],
        },
      },
    },
  },
});
