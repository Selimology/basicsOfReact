import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Login from "./Login";
import LearnUseContext from "./LearnUseContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

root.render(
  <ThemeContextProvider>
    <LearnUseContext />
  </ThemeContextProvider>
);
