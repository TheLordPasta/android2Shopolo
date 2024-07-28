import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <Router>
        <CartProvider>
          <App />
        </CartProvider>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);

reportWebVitals(console.log);
