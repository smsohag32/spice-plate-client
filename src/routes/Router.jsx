import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../pages/Dashboard.jsx/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import RecipesLayout from "../Layouts/RecipesLayout";
import Events from "../pages/Events/Events";
import Update from "../pages/Dashboard.jsx/Update";
import chefsDataLoad from "../utils/chefsDataLoad";
import About from "../pages/About/About";
import Favorites from "../pages/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: chefsDataLoad,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: () => fetch(`https://spice-palate-backend.vercel.app/faqs`),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <RecipesLayout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://spice-palate-backend.vercel.app/chefs/${params.id}`),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "favorite",
    element: (
      <PrivateRoute>
        <Favorites />
      </PrivateRoute>
    ),
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "update",
        element: <Update />,
      },
    ],
  },
]);

export default router;
