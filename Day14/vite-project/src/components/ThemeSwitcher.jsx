import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            minHeight: "10vh",
            padding: "20px"
        }}>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeSwitcher;