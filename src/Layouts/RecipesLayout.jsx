import React, { useEffect, useState } from "react";
import Banner from "../pages/Recipes/Banner";
import Recipes from "../pages/Recipes/Recipes";
import { useLoaderData, useParams } from "react-router-dom";

const RecipesLayout = () => {
  const chefs = useLoaderData();
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  console.log(chefs);
  console.log(recipes);

  //   recipes data load
  useEffect(() => {
    fetch(`http://localhost:4200/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div>
      <div>
        <Banner chefs={chefs} />
      </div>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default RecipesLayout;
