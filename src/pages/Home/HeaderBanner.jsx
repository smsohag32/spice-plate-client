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

  console.log(sliderData);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.781), rgba(7, 6, 6, 0.987)),url('${bg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full flex items-center justify-center h-full relative duration-700 bg-hero transform"
    >
      <div className="w-full pt-5 md:pt-0  h-full md:gap-5 flex flex-col md:flex-row-reverse items-center  default-container">
        <div className="w-full h-full md:h-auto">
          <Lottie animationData={animation} loop={true} />;
        </div>
        <div className="w-full pt-10 text-white">
          <Fade left>
            <h1 className="text-[2rem] font-bold  text-center md:text-left">
              Cooking with Passion: Delicious{" "}
              <span className="primary-text font-bold">Recipes</span> for the
              Home Cook
            </h1>
          </Fade>
          <p className="py-4 opacity-90 text-lg">
            {sliderData[currentSlide]?.description?.slice(0, 300)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
