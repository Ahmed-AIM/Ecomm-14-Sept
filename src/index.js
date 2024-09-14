import React from "react";
import { createRoot } from "react-dom/client"; // Update import statement
import App from "./App";
import { CartProvider } from "./CartContext"; // Import CartProvider

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);