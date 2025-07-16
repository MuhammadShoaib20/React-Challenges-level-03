import React, { useState } from "react";

const UseInput = (InitialValue = " ") => {
  const [inputValue, setInputValue] = useState(InitialValue);

  const onChange = (e) => setInputValue(e.target.value);
  const reset = () => setInputValue("");

  return {
    value: inputValue,
    onChange,
    reset,
    bind: {
      value: inputValue,
      onChange,
    },
  };
};
export default UseInput;
