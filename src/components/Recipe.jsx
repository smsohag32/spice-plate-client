import React from "react";
import { FcLike } from "react-icons/fc";

const Recipe = ({ recipe }) => {
  const { recipeName, description, ingredients, cookingSteps } = recipe;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{recipeName}</h2>
          <p>{description}</p>
          <div className="flex flex-col md:flex-row">
            <div className="">
              {ingredients?.map((ingredient) => (
                <p>{ingredient}</p>
              ))}
            </div>
            <div>
              {cookingSteps?.map((cook) => (
                <p>{cook}</p>
              ))}
            </div>
          </div>
          <div className="card-actions justify-end">
            <button disabled className="">
              <FcLike></FcLike>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
