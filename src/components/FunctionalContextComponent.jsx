import React from "react";
import { useThemeUpdate, useTheme } from "./ThemeContext";

export default function FunctionalContextComponent() {
  const darkTheme = useTheme();

  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "3rem",
    margin: "2rem",
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle now function</button>
      <div style={themeStyles}>Function Theme</div>
    </div>
  );
}
