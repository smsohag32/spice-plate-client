import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  } else {
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location }}></Navigate>;
    }
  }
};

export default PrivateRoute;
