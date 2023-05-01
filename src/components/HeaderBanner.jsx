import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation/animation.json";
const sliderData = [
  {
    id: 1,
    url: "https://i.ibb.co/9tn86dG/img2.jpg",
    title: "Bangladeshi Popular Spice Recife",
    description: "lorem haoojfdflasjldjdalflljksdflasf",
  },
  {
    id: 2,
    url: "https://i.ibb.co/BtXxZjz/img3.png",
    title: "Bangladeshi Popular Spice Recife",
    description: "lorem haoojfdflasjldjdalflljksdflasf",
  },
  {
    id: 3,
    url: "https://i.ibb.co/9tn86dG/img2.jpg",
    title: "Bangladeshi Popular Spice Recife",
    description: "lorem haoojfdflasjldjdalflljksdflasf",
  },
];

const HeaderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlide == 2) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);
  return (
    <div
      style={{
        backgroundImage: `url(${sliderData[currentSlide].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-full duration-700 transform "
    >
      <div className="w-full flex items-center max-w-[1200px] mx-auto">
        <div className="w-full">
          <h1>{sliderData[currentSlide].title}</h1>
          <p>{sliderData[currentSlide].description}</p>
          <div className="flex items-center gap-4">
            {sliderData.map((item, index) => (
              <span
                className="w-10 transition-all duration-300 transform h-2 rounded-2xl bg-[#e21b70]"
                key={index}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="w-full">
          <Lottie animationData={animation} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
