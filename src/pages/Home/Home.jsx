import React from "react";
import HeaderBanner from "../../components/HeaderBanner";
import SubNewsLetter from "../../components/SubNewsLetter";
import Chefs from "../../components/Chefs";
import NewsEvent from "../../components/NewsEvent";

const Home = () => {
  return (
    <div>
      <div className="h-[calc(100vh-110px)]  relative">
        <HeaderBanner />
      </div>
      <div className="default-container -mt-20 z-50">
        <SubNewsLetter />
      </div>
      <div>
        <Chefs />
      </div>
      <NewsEvent />
    </div>
  );
};

export default Home;
