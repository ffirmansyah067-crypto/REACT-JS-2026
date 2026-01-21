import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedCard = () => {
  const { theme } = useTheme();

  const styles = {
    light: {
      backgroundColor: "#fff",
      color: "#333",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    dark: {
      backgroundColor: "#222",
      color: "#f0f0f0",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(255,255,255,0.1)",
    },
  };

  return (
    <div style={styles[theme]}>
      <h3>Card Component</h3>
      <p>Ini adalah card dengan tema {theme}.</p>
    </div>
  );
};

export default ThemedCard;
