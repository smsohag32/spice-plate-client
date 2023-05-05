import React, { useState } from "react";
import Recipe from "../../components/Recipe";
import { Fade } from "react-reveal";

const Recipes = ({ recipes }) => {
  return (
    <div className="default-container py-10">
      <div
        className="gap-5 mb-5"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "#e21b70" }} />

        <div className="font-extrabold opacity-70 text-2xl md:text-3xl">
          <p
            className="mr-3 ms-2"
            style={{ width: "100%", textAlign: "center" }}
          >
            Let's Talk about Recipes
          </p>
        </div>

        <div style={{ flex: 1, height: "1px", backgroundColor: "#e21b70" }} />
      </div>
      <Fade left>
        <div className="grid grid-cols-1 px-7 gap-10 md:px-12">
          {recipes?.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Recipes;
