import React, { createContext, useEffect, useState } from "react";
import { addToDb, getToDB } from "../utils/fackDb";

export const FavRecipesContext = createContext({});

const FavRecipesProvider = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const handleRecipes = (item) => {
    let favR = [];
    const isExist = favRecipes.find((fev) => fev.id == item.id);
    if (!isExist) {
      favR = [...favRecipes, item];
    } else {
      const remaining = favRecipes.filter((fav) => fav.id != item.id);
      favR = [...remaining, item];
    }
    setFavRecipes(favR);
    addToDb(item.id);
  };

  //   all recipes data load
  useEffect(() => {
    fetch("https://spice-palate-server090.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setAllRecipes(data));
  }, []);
  console.log(allRecipes);
  //   to get recipes in localStorage and set it saved recipes

  useEffect(() => {
    const storedRec = getToDB();
    let savedRec = [];
    for (const id in storedRec) {
      const addedItems = allRecipes.find((res) => res.id == id);
      if (addedItems) {
        const quantity = storedRec[id];
        addedItems.quantity = quantity;
        savedRec.push(addedItems);
      }
    }
    setFavRecipes(savedRec);
  }, [allRecipes]);
  return (
    <>
      <FavRecipesContext.Provider value={{ favRecipes, handleRecipes }}>
        {children}
      </FavRecipesContext.Provider>
    </>
  );
};

export default FavRecipesProvider;
