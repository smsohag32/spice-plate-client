import React from "react";
import HeaderBanner from "./HeaderBanner";
import SubNewsLetter from "./SubNewsLetter";
import Chefs from "./Chefs";
import NewsEvent from "./NewsEvent";
import { useLoaderData } from "react-router-dom";
import { Zoom } from "react-reveal";
import bg from "../../assets/bg/bg4.png";
import Dishes from "./Dishes";
const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <div className="h-[calc(100vh-110px)]  relative">
        <HeaderBanner />
      </div>
      <Zoom>
        <div className="default-container -mt-16 z-50">
          <SubNewsLetter />
        </div>
      </Zoom>
      <div className="default-container">
        <Chefs chefs={chefs} />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),url('${bg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=""
      >
        <NewsEvent />
      </div>
      <div className="mt-7">
        <Dishes />
      </div>
    </div>
  );
};

export default Home;
