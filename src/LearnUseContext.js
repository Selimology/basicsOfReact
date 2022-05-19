import React, { useContext } from "react";
import { ThemeContext } from "./index";

function LearnUseContext() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  console.log("The theme is", theme);

  return (
    <>
      <h1 style={{ background: theme.background, color: theme.foreground }}>
        Hello Mate
      </h1>
      <button onClick={toggleTheme}>Toggle </button>
    </>
  );
}

export default LearnUseContext;
