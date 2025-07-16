import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const headerStyle = {
    backgroundColor: theme === "light" ? "#f2f2f2" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
