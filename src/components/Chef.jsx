import React from "react";
import { Fade } from "react-reveal";
const Chef = ({ chef }) => {
  const { id, chefPhoto, chefName, numberOfRecipes, likes, yearsOfExperience } =
    chef;
  return (
    <div>
      <Fade left>
        <div className="card w-full bg-base-100 h-full shadow-xl">
          <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
            <img
              src={chefPhoto}
              className=" min-w-full object-cover h-60 transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {chefName}
              <div className="badge badge-secondary"></div>
            </h2>
            <p className="text-sm opacity-70 leading-snug ">
              Experience - {yearsOfExperience}
            </p>
            <p className="text-sm opacity-70 leading-snug pb-3 ">
              Total Recipes - {numberOfRecipes}
            </p>
            <div className="card-actions justify-end">
              <button className="secondary-btn">View Recipes</button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Chef;
