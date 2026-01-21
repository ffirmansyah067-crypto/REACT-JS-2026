import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css"; // opsional

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LanguageProvider>
      <UserProvider>
        <NotificationProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </NotificationProvider>
      </UserProvider>
    </LanguageProvider>
  </ThemeProvider>
);
