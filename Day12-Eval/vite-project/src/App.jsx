import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { CartProvider } from "./context/CartContext";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  const appStyle = {
    background: theme === "light" ? "#f9f9f9" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100%",
    width:  "100%",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <button
        onClick={toggleTheme}
        style={{
          marginBottom: "20px",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: theme === "light" ? "#222" : "#eee",
          color: theme === "light" ? "#fff" : "#000"
        }}
      >
        Toggle Theme
      </button>
      <Home />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
