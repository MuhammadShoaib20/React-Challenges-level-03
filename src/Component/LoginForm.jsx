import React, { useRef, useEffect } from "react";

const LoginForm = () => {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  });
  return (
    <form>
      <div>
        <label>Email :</label>
        <input type="email" ref={emailRef} placeholder="Enter Email ..." />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" placeholder="Enter Password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
