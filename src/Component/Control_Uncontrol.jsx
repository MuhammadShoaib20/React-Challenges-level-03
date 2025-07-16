import React, { useState, useRef } from "react";

const Control_Uncontrol = () => {
  const [controlValue, setControlValue] = useState("");
  const unControlRef = useRef();

  const HandleClick = () => {
    console.log("Controlled Value:", controlValue);
    console.log("Uncontrolled  Value:", unControlRef.current.value);
    alert(
      `Controlled :${controlValue} \ unControlled : ${unControlRef.current.value}`
    );
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Controlled Input (useState )</h3>
      <input
        type="text"
        value={controlValue}
        onChange={(e) => setControlValue(e.target.value)}
        placeholder="Control"
      />
      <br /> <br />
      <h3>UnControlled (useRef)</h3>
      <input type="text" ref={unControlRef} placeholder="Uncontrolled" />
      <br />
      <br />
      <button onClick={HandleClick}>Show Value</button>
    </div>
  );
};
export default Control_Uncontrol;
