import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/dish/dish1.jpg";
import img2 from "../../assets/dish/dish2.jpg";
import img3 from "../../assets/dish/dish3.jpg";
import img4 from "../../assets/dish/dish4.jpg";
const NewsEvent = () => {
  return (
    <div className="default-container py-10 text-white">
      {/* title */}
      <div
        className="gap-5"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "#e21b70" }} />

        <div className="font-extrabold opacity-70 text-2xl md:text-3xl">
          <p
            className="mr-3 ms-2"
            style={{ width: "100%", textAlign: "center" }}
          >
            Recent Events and News
          </p>
        </div>

        <div style={{ flex: 1, height: "1px", backgroundColor: "#e21b70" }} />
      </div>

      <div className="mt-10 grid gap-5">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="relative min-w-[50%] overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img}
              className=" transition object-fill duration-300 h-full ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className="card-body w-full text-black">
            <h2 className="card-title">Bangladeshi Food Festival</h2>
            <p>
              This festival celebrated the rich and diverse culinary traditions
              of Bangladesh. It featured a variety of traditional dishes from
              different parts of the country, as well as modern fusion cuisine
              that showcased local ingredients and flavors. There were also
              cooking demonstrations, food contests, and workshops on
              Bangladeshi cooking techniques.
            </p>
            <div className="card-actions justify-end">
              <Link to="/events">
                <button className=" secondary-btn outline-none">
                  Reed More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="relative min-w-[50%] overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img}
              className=" transition duration-300 h-full ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className="card-body text-black">
            <h2 className="card-title">Bangladeshi Food Festival</h2>
            <p>
              This festival celebrated the rich and diverse culinary traditions
              of Bangladesh. It featured a variety of traditional dishes from
              different parts of the country, as well as modern fusion cuisine
              that showcased local ingredients and flavors. There were also
              cooking demonstrations, food contests, and workshops on
              Bangladeshi cooking techniques.
            </p>
            <div className="card-actions justify-end">
              <Link to="/events">
                <button className=" secondary-btn outline-none">
                  Reed More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="relative min-w-[50%] overflow-hidden bg-cover bg-no-repeat">
            <img
              src={img}
              className=" transition duration-300 h-full ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </div>
          <div className="card-body text-black">
            <h2 className="card-title">Bangladeshi Food Festival</h2>
            <p>
              This festival celebrated the rich and diverse culinary traditions
              of Bangladesh. It featured a variety of traditional dishes from
              different parts of the country, as well as modern fusion cuisine
              that showcased local ingredients and flavors. There were also
              cooking demonstrations, food contests, and workshops on
              Bangladeshi cooking techniques.
            </p>
            <div className="card-actions justify-end">
              <Link to="/events">
                <button className=" secondary-btn outline-none">
                  Reed More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
