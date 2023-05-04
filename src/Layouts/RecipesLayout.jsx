import React, { useContext, useEffect, useState } from "react";
import Banner from "../pages/Recipes/Banner";
import Recipes from "../pages/Recipes/Recipes";
import { useLoaderData, useParams } from "react-router-dom";
import bg from "../assets/bg/bg3.jpg";
const RecipesLayout = () => {
  const chefs = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const [recipes, setRecipes] = useState([]);
  console.log(chefs);
  console.log(recipes);

  //   recipes data load
  useEffect(() => {
    fetch(`https://spice-palate-server090.vercel.app/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),url('${bg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full text-white flex justify-center items-center h-[calc(100vh-110px)]"
      >
        <Banner chefs={chefs} />
      </div>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default RecipesLayout;
