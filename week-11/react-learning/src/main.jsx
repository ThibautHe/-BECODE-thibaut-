import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomForm from "./customForm.jsx";
import Exo2 from "./Exo2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Exo2 />
  </StrictMode>
);
