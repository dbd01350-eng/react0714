import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import List from "./components/List";
createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
    <List />
  </StrictMode>,
);
