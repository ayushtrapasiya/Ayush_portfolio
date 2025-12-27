import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RouterManagment from "./Router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterManagment />
  </StrictMode>
);
