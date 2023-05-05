import React, { useContext } from "react";
import Header from "../shared/Header";
import bg from "../../assets/bg/bg3.jpg";
import { FavRecipesContext } from "../../Context/FavRecipesProvider";
import Footer from "../shared/Footer";
const Favorites = () => {
  const { favRecipes } = useContext(FavRecipesContext);
  console.log(favRecipes);
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
      <Footer />
    </div>
  );
};

export default Favorites;
