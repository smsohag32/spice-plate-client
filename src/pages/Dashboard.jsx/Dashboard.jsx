import React from "react";
import Header from "../shared/Header";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Footer from "../shared/Footer";

const Dashboard = () => {
  useTitle("Dashboard");
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="bg-[#271d21b8] h-full">
        <div className="default-container flex flex-col  items-center py-10 md:flex-row gap-5">
          <div className=" w-full">
            <Profile />
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
