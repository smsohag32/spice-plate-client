import React from "react";
import Header from "../shared/Header";
import bg from "../../assets/bg/bg3.jpg";
const Favorites = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="h-60"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('${bg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white flex justify-center items-center h-full default-container">
          <p className="text-3xl primary-text">Your Favorite Items</p>
        </div>
      </div>

      <div className="py-10 default-container">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed autem
        accusantium iusto similique vel harum. Dolorum repudiandae consequuntur
        magnam tempore nemo, animi dolore velit. Iusto in deserunt nulla
        pariatur iste?
      </div>
    </div>
  );
};

export default Favorites;
