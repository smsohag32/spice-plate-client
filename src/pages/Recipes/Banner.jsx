import React from "react";
import { Fade } from "react-reveal";
import { FcLike } from "react-icons/fc";
const Banner = ({ chefs }) => {
  const {
    chefName,
    yearsOfExperience,
    chefPhoto,
    numberOfRecipes,
    likes,
    shortBio,
  } = chefs;
  return (
    <div className="default-container my-10 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
      {/* img */}
      <div className="w-full">
        <div className="relative min-w-[50%] min-h-full overflow-hidden bg-cover bg-no-repeat">
          <img
            src={chefPhoto}
            className=" transition w-full object-cover h-full overflow-hidden rounded-xl duration-500  ease-in-out hover:scale-110"
            alt="chef"
          />
        </div>
      </div>
      {/* content */}
      <Fade right>
        <div className="w-full">
          <h2 className="text-right text-2xl md:text-3xl font-bold">
            {chefName}
          </h2>
          <hr className="my-5" />
          <p>
            <small>{shortBio}</small>
          </p>
          <p className="text-right mt-2">
            <span className="text-sm opacity-70">Experiences - </span>
            <span className="primary-text font-bold">
              {yearsOfExperience}
            </span>{" "}
            <span className="text-sm opacity-80">years</span>
          </p>
          <p className="text-right mt-2">
            <span className="text-sm opacity-70">Total Recipes - </span>
            <span className="primary-text font-bold">{numberOfRecipes}</span>
            <span className="text-sm opacity-80"> Items</span>
          </p>
          <Fade left>
            <div className="mt-5 flex items-center gap-3 justify-center">
              <FcLike className="text-2xl"></FcLike>
              <p className="font-bold">{likes}</p>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
