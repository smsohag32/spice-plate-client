import React from "react";
import Header from "../shared/Header";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="default-container flex flex-col  items-center py-10 md:flex-row gap-5">
        <div className=" w-full">
          <Profile />
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
