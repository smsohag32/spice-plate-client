import React from "react";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, chefPhoto, chefName, numberOfRecipes, likes, yearsOfExperience } =
    chef;
  return (
    <div>
      <Fade left>
        <div className="card w-full bg-base-100 h-full shadow-xl">
          <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
            {/* img lazy load */}
            <LazyLoad threshold={0.95} offset={300}>
              <img
                src={chefPhoto}
                className=" min-w-full object-cover h-60 transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre"
              />
            </LazyLoad>
          </div>
          <div className="card-body">
            <h2 className="card-title">{chefName}</h2>
            <p className="text-sm opacity-70 leading-snug ">
              {yearsOfExperience} years of Experience
            </p>
            <p className="text-sm opacity-70 leading-snug pb-3 ">
              Total Recipes - {numberOfRecipes}
            </p>
            <div className="card-actions justify-between items-center">
              <div className="badge text-sm primary-white ">
                <AiFillLike className="mr-2" />
                {likes}
              </div>
              <Link to={`/${id}`}>
                <button className="secondary-btn">View Recipes</button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Chef;
