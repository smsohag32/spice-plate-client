import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

// animation
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./Context/AuthProvider";
import FavRecipesProvider from "./Context/FavRecipesProvider";
// ..
AOS.init();

// favorite recipes provider just share in favorite items

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <FavRecipesProvider>
      <RouterProvider router={router}></RouterProvider>
    </FavRecipesProvider>
  </AuthProvider>
);
