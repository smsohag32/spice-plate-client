import React, { useContext } from "react";
import HeaderBanner from "./HeaderBanner";
import SubNewsLetter from "./SubNewsLetter";
import Chefs from "./Chefs";
import NewsEvent from "./NewsEvent";
import { useLoaderData } from "react-router-dom";
import { Zoom } from "react-reveal";
import bg from "../../assets/bg/bg1.jpg";
import Dishes from "./Dishes";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Context/AuthProvider";
import Spinner from "../../components/Spinner";
const Home = () => {
  const { loading } = useContext(AuthContext);
  const chefs = useLoaderData();
  useTitle("Home");
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <div className="min-h-[calc(100vh-80px)]  relative">
        <HeaderBanner />
      </div>

      <div className="default-container">
        <Chefs chefs={chefs} />
      </div>
      <div className="text-gray-900">
        <NewsEvent />
      </div>
      <div className="mt-7">
        <Dishes />
      </div>
      <Zoom>
        <div className="default-container pb-16 z-50">
          <SubNewsLetter />
        </div>
      </Zoom>
    </>
  );
};

export default Home;
