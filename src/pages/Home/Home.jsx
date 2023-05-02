import React from "react";
import HeaderBanner from "../../components/HeaderBanner";
import SubNewsLetter from "../../components/SubNewsLetter";

const Home = () => {
  return (
    <div>
      <div className="h-[calc(100vh-110px)] -z-50 relative">
        <HeaderBanner />
      </div>
      <div className="default-container -mt-20 z-50">
        <SubNewsLetter />
      </div>
    </div>
  );
};

export default Home;
