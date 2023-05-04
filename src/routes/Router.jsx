import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../pages/Dashboard.jsx/Dashboard";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import RecipesLayout from "../Layouts/RecipesLayout";
import Events from "../pages/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () => fetch("http://localhost:4200/"),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4200/chefs"),
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
        loader: () => fetch(`http://localhost:4200/faqs`),
      },
      {
        path: "recipes/:id",
        element: (
          <PrivateRoute>
            <RecipesLayout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4200/chefs/${params.id}`),
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export default router;
