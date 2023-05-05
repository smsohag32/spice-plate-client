import React from "react";
import Chef from "../../components/Chef";

const Chefs = ({ chefs }) => {
  return (
    <div className="py-10">
      <h1 className="text-2xl mt-5 md:text-3xl font-extrabold">
        Popular Chefs
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
