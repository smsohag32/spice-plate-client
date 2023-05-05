import React, { useContext } from "react";
import Header from "../shared/Header";
import bg from "../../assets/bg/bg3.jpg";
import { FavRecipesContext } from "../../Context/FavRecipesProvider";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";
import { AuthContext } from "../../Context/AuthProvider";
import Spinner from "../../components/Spinner";
const Favorites = () => {
  const { favRecipes, isLoading } = useContext(FavRecipesContext);
  const { loading } = useContext(AuthContext);
  console.log(favRecipes);
  if (loading) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }
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
        <div>
          {favRecipes.length == 0 ? (
            <>
              <div className="flex flex-col items-center justify-center">
                <p className="py-2 mb-2 text-2xl font-bold">
                  You don't have any favorite recipes
                </p>
                <Link to="/" className="secondary-btn">
                  Go home add To your favorite Recipes
                </Link>
              </div>
            </>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                {favRecipes.map((favRe) => (
                  <SingleRecipe key={favRe.id} favRe={favRe} />
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
