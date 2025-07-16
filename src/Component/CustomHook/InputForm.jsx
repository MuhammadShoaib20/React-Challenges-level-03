import React from "react";
import UseInput from "./UseInput";

const InputForm = () => {
  const InputName = UseInput("");
  const InputEmail = UseInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name :${InputName.value}\n Email : ${InputEmail.value}`);
    InputName.reset();
    InputEmail.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name : </label>
        <input type="text" {...InputName.bind} placeholder="Enter Name" />
      </div>
      <div>
        <label>Email : </label>
        <input type="email" {...InputEmail.bind} placeholder="Enter Email " />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default InputForm;
