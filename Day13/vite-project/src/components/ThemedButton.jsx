import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    light: {
      backgroundColor: "#f0f0f0",
      color: "#333",
      padding: "10px 20px",
      border: "1px solid #ccc",
      cursor: "pointer",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f0f0f0",
      padding: "10px 20px",
      border: "1px solid #555",
      cursor: "pointer",
    },
  };

  return (
    <button style={styles[theme]} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
