import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedText = () => {
  const { theme } = useTheme();

  const styles = {
    light: { color: "#333", fontSize: "18px" },
    dark: { color: "#f0f0f0", fontSize: "18px" },
  };

  return <p style={styles[theme]}>Ini teks dengan tema {theme}.</p>;
};

export default ThemedText;
