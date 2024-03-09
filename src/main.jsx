import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TrackerContext } from "./context/TrackerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrackerContext>
      <App />
    </TrackerContext>
  </React.StrictMode>
);
