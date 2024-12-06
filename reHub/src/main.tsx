import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ActivityProvider } from "./pages/institution/ActivityContext"; // Importando o provedor
import { ApprovedReeducandosProvider } from "./pages/institution/ApprovedReeducandosContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>

      <ActivityProvider>
        {/* Envolvendo a aplicação com o provedor */}
        <App />
      </ActivityProvider>

  </React.StrictMode>
);
