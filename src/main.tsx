import { StrictMode } from "react";
import { FigmaProvider } from "@polipo/react-figma";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FigmaProvider>
      <App />
    </FigmaProvider>
  </StrictMode>
);
