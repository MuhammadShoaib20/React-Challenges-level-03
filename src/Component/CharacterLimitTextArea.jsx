import React, { useState } from "react";

const CharacterLimitTextArea = () => {
  const [text, setText] = useState("");
  const maxChar = 100;
  const handleChange = (e) => {
    if (e.target.value.length <= maxChar) {
      setText(e.target.value);
    }
  };
  return (
    <div style={{ textAlign: "center", margin: "20px auto ", width: "300px" }}>
      <textarea
        type="text"
        onChange={handleChange}
        cols="30"
        rows="5"
        placeholder="type here ...."
        style={{ resize: "none" }}
      />
      <p>
        CHARACTER REMAINING :<strong> {maxChar - text.length}</strong>
      </p>
    </div>
  );
};
export default CharacterLimitTextArea;
