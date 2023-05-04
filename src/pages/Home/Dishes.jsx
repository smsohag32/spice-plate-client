import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../assets/dish/dish1.jpg";
import img2 from "../../assets/dish/dish2.jpg";
import img3 from "../../assets/dish/dish3.jpg";
import img4 from "../../assets/dish/dish4.jpg";
import { Fade } from "react-reveal";
// component
const Dishes = () => {
  return (
    <div className="py-10 px-5">
      <Fade right>
        <div
          className="gap-5 mb-10 mx-auto md:max-w-[50%]"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "#e21b70" }} />

          <div className="font-extrabold opacity-70 text-2xl md:text-3xl">
            <p
              className="mr-3 ms-2"
              style={{ width: "100%", textAlign: "center" }}
            >
              Popular Dishes
            </p>
          </div>

          <div style={{ flex: 1, height: "1px", backgroundColor: "#e21b70" }} />
        </div>
      </Fade>
      <Marquee direction="right" pauseOnHover={true} speed={100}>
        <div className="flex mr-5 gap-5">
          <Fade right>
            <div className="card w-60 md:w-96 shadow-xl">
              <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
                <img
                  style={{
                    filter: `brightness(30%)`,
                  }}
                  src={img}
                  className=" blur-sm min-w-full  object-cover h-80 rounded-md transition duration-300 ease-in hover:scale-110"
                  alt="Louvre"
                />
              </div>
              <Fade left>
                <p className="absolute bottom-[20%] text-white left-[20%] transition duration-300 ease-in-out hover:scale-110 text-3xl z-50">
                  Hilsa Curry
                </p>
              </Fade>
            </div>
          </Fade>
          <div className="card w-96 shadow-xl">
            <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
              <img
                style={{
                  filter: `brightness(30%)`,
                }}
                src={img2}
                className=" blur-sm min-w-full  object-cover h-80 rounded-md transition duration-300 ease-in hover:scale-110"
                alt="Louvre"
              />
            </div>
            <p className="absolute bottom-[20%] text-white left-[20%] transition duration-300 ease-in-out hover:scale-110 text-3xl z-50">
              Shorshe Ilish
            </p>
          </div>
          <div className="card w-96 shadow-xl">
            <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
              <img
                style={{
                  filter: `brightness(30%)`,
                }}
                src={img3}
                className=" blur-sm min-w-full  object-cover h-80 rounded-md transition duration-300 ease-in hover:scale-110"
                alt="Louvre"
              />
            </div>
            <p className="absolute bottom-[20%] text-white left-[20%] transition duration-300 ease-in-out hover:scale-110 text-3xl z-50">
              Shorshe Ilish
            </p>
          </div>
          <div className="card w-96 shadow-xl">
            <div className="relative min-h-[40%]  object-contain overflow-hidden bg-cover bg-no-repeat">
              <img
                style={{
                  filter: `brightness(30%)`,
                }}
                src={img4}
                className=" blur-sm min-w-full  object-cover h-80 rounded-md transition duration-300 ease-in hover:scale-110"
                alt="Louvre"
              />
            </div>
            <p className="absolute bottom-[20%] text-white left-[20%] transition duration-300 ease-in-out hover:scale-110 text-3xl z-50">
              Shorshe Ilish
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Dishes;
