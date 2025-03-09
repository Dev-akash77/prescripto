import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../Context/Store";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(StoreContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
