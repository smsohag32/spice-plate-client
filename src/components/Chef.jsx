import React from "react";
import { Fade } from "react-reveal";
const Chef = ({ chef }) => {
  const { chefPhoto, chefName } = chef;
  return (
    <div>
      <Fade left>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
            <img
              src={chefPhoto}
              className=" min-w-full object-cover h-60 transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {chefName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Chef;
