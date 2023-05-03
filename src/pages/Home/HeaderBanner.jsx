import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Fade from "react-reveal/Fade";
import animation from "../../assets/animation/animation.json";
import bg from "../../assets/bg/bg1.webp";

const HeaderBanner = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  //   slider data fetching
  useEffect(() => {
    fetch(`http://localhost:4200/banner`)
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
    <Fade left>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${bg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full flex items-center justify-center h-full relative duration-700 bg-hero transform"
      >
        <div className="w-full  absolute  h-full gap-5 flex flex-col md:flex-row-reverse items-center max-w-[1200px] mx-auto">
          <div className="w-full text-white">
            <Fade left>
              <h1 className="text-3xl opacity-50 md:5xl tracking-wide font-bold">
                {sliderData[currentSlide]?.title}
              </h1>
              <hr className="mt-5 mb-1" />
            </Fade>
            <p className="py-4 opacity-90 text-sm">
              {sliderData[currentSlide]?.description}
            </p>
          </div>
          <div className="w-full">
            <Lottie animationData={animation} loop={true} />;
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default HeaderBanner;
