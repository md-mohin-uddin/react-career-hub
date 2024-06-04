import React, { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInfo = { user };
  return (
    <AuthContext.Provider
      value={authInfo}
      children={children}
    ></AuthContext.Provider>
  );
};

export default AuthProvider;
