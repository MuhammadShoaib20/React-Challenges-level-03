import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const toggleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Shoaib " });
    }
  };
  return (
    <AuthContext.Provider value={{ user, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
export const AuthStatus = () => {
  const { user, toggleLogin } = useContext(AuthContext);

  return (
    <div>
      <h1>{user ? `Hi ${user.name}` : "Please Login"}</h1>
      <button onClick={toggleLogin}>{user ? "LogOut" : "LogIn"}</button>
    </div>
  );
};
