import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  const contentStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#ccc",
    padding: "20px",
    margin: "20px",
    borderRadius: "8px",
  };

  return (
    <div style={contentStyle}>
      <p>This is the content area. Current theme: {theme}</p>
    </div>
  );
};

export default Content;
