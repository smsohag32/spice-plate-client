import React from "react";
import { AiFillLike } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, chefPhoto, chefName, numberOfRecipes, likes, yearsOfExperience } =
    chef;
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="card w-full bg-base-100 h-full shadow-xl"
      >
        <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
          {/* img lazy load */}
          <LazyLoadImage
            width={"100%"}
            src={chefPhoto}
            className="min-w-full object-cover h-60 transition duration-300 ease-in-out hover:scale-110"
          ></LazyLoadImage>
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
            <div className="badge text-sm bg-white text-black outline-none border-none ">
              <small>Likes: </small>
              <AiFillLike className="mr-2 ps-1 opacity-80" />
              <span>{likes}</span>
            </div>
            <Link to={`/${id}`}>
              <button className="secondary-btn">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
