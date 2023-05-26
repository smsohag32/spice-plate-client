import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Fade from "react-reveal/Fade";
import animation from "../../assets/animation/animation.json";
import bg from "../../assets/bg/bg1.jpg";

const HeaderBanner = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  //   slider data fetching
  useEffect(() => {
    fetch(`https://spice-palate-backend.vercel.app/banner`)
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);

  //   auto play
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),url('${bg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full flex items-center justify-center h-full relative duration-700 bg-hero transform"
    >
      <div className="w-full pt-5 md:pt-0 absolute  h-full md:gap-5 flex flex-col md:flex-row-reverse items-center  default-container">
        <div className="w-full pt-10 text-white">
          <Fade left>
            <h1 className="text-xl text-center md:text-left opacity-50 md:5xl tracking-wide font-bold">
              {sliderData[currentSlide]?.title}
            </h1>
            <hr className="mt-5 mb-1" />
          </Fade>
          <p className="py-4 opacity-90 text-sm">
            {sliderData[currentSlide]?.description?.slice(0, 300)}...
          </p>
        </div>
        <div className="w-full h-full md:h-auto">
          <Lottie animationData={animation} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
