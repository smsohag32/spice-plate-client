import { Rating } from "@smastrom/react-rating";
import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import "@smastrom/react-rating/style.css";

const Recipe = ({ recipe }) => {
  const { recipeName, description, ingredients, cookingSteps, rating } = recipe;
  //   const r = Math.round(rating);
  return (
    <div>
      <div className="card w-full relative bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-extrabold opacity-75 text-2xl">
            {recipeName}
          </h2>
          <div className="flex flex-col md:flex-row gap-5  items-center">
            <Rating value={rating} style={{ maxWidth: "180px" }} readOnly />
            <span className="mt-1 ms-2 font-bold">{rating}</span>
          </div>
          <p className="text-sm opacity-70">{description}</p>
          <hr />
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full text-sm leading-tight tracking-wide">
              {ingredients?.slice(0, 10).map((ingredient) => (
                <p>_{ingredient}</p>
              ))}
            </div>
            <div className="w-full text-sm leading-tight tracking-wide">
              {cookingSteps?.slice(0, 6).map((cook, index) => (
                <p>_{cook}</p>
              ))}
            </div>
          </div>
          <div className="absolute top-4 right-10">
            <button>
              <AiFillLike></AiFillLike>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
