import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RecipeProvider } from "@reciperium/react-recipe";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecipeProvider defaultTheme="highlighted">
        <App />
      </RecipeProvider>
    </ThemeProvider>
  </StrictMode>
);
