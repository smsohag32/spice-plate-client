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
    description:
      "loremlorem haoojfdflasjldjdalflljksdflasflorem haoojfdflasjldjdalflljksdflasf haoojfdflasjldjdalflljksdflasf",
  },
  {
    id: 3,
    url: "https://i.ibb.co/9tn86dG/img2.jpg",
    title: "Bangladeshi Popular Spice Recife",
    description:
      "lorem haoojfdflasjldjdalflljksdflasflorem haoojfdflasjldjdalflljksdflasflorem haoojfdflasjldjdalflljksdflasflorem haoojfdflasjldjdalflljksdflasf",
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${sliderData[currentSlide].url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full flex items-center justify-center h-full relative duration-700 bg-hero transform"
    >
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="w-full  absolute  h-full gap-5 flex flex-col md:flex-row-reverse items-center max-w-[1200px] mx-auto"
      >
        <div className="w-full text-white">
          <h1 className="text-3xl md:5xl tracking-wide font-bold">
            {sliderData[currentSlide].title}
          </h1>
          <p className="py-4">{sliderData[currentSlide].description}</p>
          <div className="flex mt-10 items-center gap-4">
            {sliderData.map((item, index) => (
              <span
                className="w-10 transition-transform duration-300 transform h-2 rounded-2xl bg-[#e21b70]"
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
