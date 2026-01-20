import React, { createContext, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
