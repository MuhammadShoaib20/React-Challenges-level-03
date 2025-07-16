import React, { useState, useRef, useEffect } from "react";

const PreviousValueTracker = () => {
  const [inputValue, setInputValue] = useState("");
  const prevalRef = useRef("");

  useEffect(() => {
    prevalRef.current = inputValue;
  }, [inputValue]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Track Previous Input Value</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>
        <strong>Current Value:</strong> {inputValue}
      </p>
      <p>
        <strong>Previous Value:</strong> {prevalRef.current}
      </p>
    </div>
  );
};

export default PreviousValueTracker;
