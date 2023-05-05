import React, { useContext } from "react";
import Header from "../pages/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../components/Spinner";
const Main = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="z-50">
      <Header />
      <div className="min-h-[50vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
