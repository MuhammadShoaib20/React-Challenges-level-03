import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [succes, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({});
    setSuccess(false);
  };
  const Validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is Required ";
    if (!formData.email.trim()) newErrors.email = "Email is Required";
    if (!formData.password.trim()) newErrors.password = "Password is Required ";

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = Validate();
    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      setSuccess(false);
    } else {
      setError({});
      setSuccess(true);
      console.log("Form Submitted", formData);
    }
  };
  return (
    <div
      style={{
        border: " 2px ,solid, black",
        maxWidth: "300px",
        margin: "0 auto",
        backgroundColor: "lightgray",
      }}
    >
      <h2 style={{ textAlign: "center" }}> Registration Form </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "10px", marginLeft: "50px" }}>
          <label>Name :</label> <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {error.name && <div style={{ color: "red" }}>{error.name}</div>}
        </div>
        <div style={{ marginBottom: "10px", marginLeft: "50px" }}>
          <label>Email :</label> <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <div style={{ color: "red" }}>{error.email}</div>}
        </div>
        <div style={{ marginBottom: "10px", marginLeft: "50px" }}>
          <label>Password :</label> <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && (
            <div style={{ color: "red" }}>{error.password}</div>
          )}
        </div>
        <button
          type="Submit"
          style={{ marginBottom: "10px", marginLeft: "50px" }}
        >
          Submit
        </button>
      </form>
      {succes && (
        <div
          style={{
            color: "green ",
            marginTop: "10px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          Form Submit SuccessFully
        </div>
      )}
    </div>
  );
};
export default RegistrationForm;
