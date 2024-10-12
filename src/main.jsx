import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SiteContextProvider from "./context/SiteContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <SiteContextProvider>
    <App />
  </SiteContextProvider>
);
