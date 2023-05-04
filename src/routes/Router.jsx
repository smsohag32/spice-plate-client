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
import Update from "../pages/Dashboard.jsx/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () =>
      fetch(
        `https://spice-palate-backend-server-g30xbxb23-smsohag32.vercel.app/chefs`
      ),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            `https://spice-palate-backend-server-g30xbxb23-smsohag32.vercel.app/chefs`
          ),
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
        loader: () =>
          fetch(
            `https://spice-palate-backend-server-g30xbxb23-smsohag32.vercel.app/faqs`
          ),
      },
      {
        path: "recipes/:id",
        element: (
          <PrivateRoute>
            <RecipesLayout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://spice-palate-backend-server-g30xbxb23-smsohag32.vercel.app/chefs${params.id}`
          ),
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
    children: [
      {
        path: "update",
        element: <Update />,
      },
    ],
  },
]);

export default router;
