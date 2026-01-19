import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";

/** ===== Context ===== */
const ThemeContext = createContext();

/** ===== Provider ===== */
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/** ===== Komponen Konsumen ===== */
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        background: theme === "light" ? "#222" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
      }}
    >
      Ganti ke {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function ThemedCard() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "12px",
        background: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Ini adalah ThemedCard</h2>
      <p>Warna berubah sesuai tema.</p>
    </div>
  );
}

function ThemedText() {
  const { theme } = useContext(ThemeContext);
  return (
    <p style={{ marginTop: "10px", color: theme === "light" ? "#444" : "#ddd" }}>
      Ini adalah teks dengan tema <strong>{theme}</strong>.
    </p>
  );
}

/** ===== App ===== */
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
        <h1>Context API: Tema Light/Dark</h1>
        <ThemedButton />
        <ThemedCard />
        <ThemedText />
      </div>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;