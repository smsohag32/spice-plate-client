import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "./Chef";

const Chefs = ({ chefs }) => {
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-3xl font-extrabold">
        Popular Chefs in Bangladesh
      </h1>
      <hr className="w-[50%] my-2 mb-4 border-2 border-red-500" />
      <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-5">
        {chefs?.map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
