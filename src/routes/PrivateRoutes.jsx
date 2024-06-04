import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoutes;
