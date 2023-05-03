import React, { useState } from "react";
import Banner from "../pages/Recipes/Banner";
import Recipes from "../pages/Recipes/Recipes";

const RecipesLayout = () => {
  const [chefInfo, setChefInfo] = useState([]);
  const [recipes, setRecipes] = useState([]);
  return (
    <div>
      <div>
        <Banner />
      </div>
      <Recipes />
    </div>
  );
};

export default RecipesLayout;
