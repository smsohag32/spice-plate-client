import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="flex h-[calc(100vh-120px)] w-full items-center justify-center">
        <ThreeDots
          height="120"
          width="130"
          radius="9"
          color="#e21b70"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </span>
    );
  } else {
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location }}></Navigate>;
    }
  }
};

export default PrivateRoute;
