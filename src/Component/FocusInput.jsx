import React, { useRef } from "react";
import "./App.css";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type here..."
        className="zoom-input"
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
