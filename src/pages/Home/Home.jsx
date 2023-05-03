import React from "react";
import HeaderBanner from "../../components/HeaderBanner";
import SubNewsLetter from "../../components/SubNewsLetter";
import Chefs from "../../components/Chefs";
import NewsEvent from "../../components/NewsEvent";
import { useLoaderData } from "react-router-dom";
import { Zoom } from "react-reveal";
import bg from "../../assets/bg/bg1.webp";
const Home = () => {
  const chefs = useLoaderData();

  return (
    <div>
      <div className="h-[calc(100vh-110px)] -z-20 relative">
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
    </div>
  );
};

export default Home;
