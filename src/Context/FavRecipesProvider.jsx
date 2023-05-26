import React, { createContext, useContext, useEffect, useState } from "react";
import { addToDb, getToDB } from "../utils/fackDb";
import { AuthContext } from "./AuthProvider";

export const FavRecipesContext = createContext({});

const FavRecipesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
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
    async function fetchData() {
      const res = await fetch(
        "https://spice-palate-backend.vercel.app/recipes"
      );
      const data = await res.json();
      setAllRecipes(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

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
      <FavRecipesContext.Provider
        value={{ favRecipes, handleRecipes, isLoading }}
      >
        {children}
      </FavRecipesContext.Provider>
    </>
  );
};

export default FavRecipesProvider;
