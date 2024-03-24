import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../../Context/AuthProvider";
import { Fade } from "react-reveal";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  //   handle user logout
  const handleLogout = () => {
    userLogout();
    navigate("/login", { state: { from: location } });
  };
  // handle close
  const handleClose = () => {
    setOpen(false);
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex z-50 shadow flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center default-container md:mt-0 ">
      <div
        className={`flex justify-between md:pb-0 items-center ${
          user && "mb-4 md:mb-0"
        }`}
      >
        <h3 className="font-extrabold">
          <span style={{ fontFamily: `'Pacifico', cursive` }}>
            <Link className="text-xl ps-5 md:ps-0 md:text-2xl" to="/">
              Spice<span className="primary-text">Palate</span>
            </Link>
          </span>
        </h3>
        <span className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </span>
      </div>
      <Fade right>
        <ul
          onClick={handleClose}
          className={`flex h-80 md:h-auto absolute z-50 md:static gap-4 flex-col md:flex-row bg-red-50 p-8 md:bg-transparent md:text-black font-bold text-base ${
            isOpen
              ? "top-20 mt-1 z-50 duration-700 left-0"
              : "-left-60 top-20 overflow-hidden duration-700"
          }`}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/events"
          >
            Events
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/favorite"
          >
            Favorite Recipes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/about"
          >
            About us
          </NavLink>
          {user ? (
            <span className="md:hidden flex flex-col gap-4">
              <div
                onClick={handleDashboard}
                title={user ? user.displayName : ""}
                className="avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="userPhoto" />
                </div>
              </div>
              <button onClick={handleLogout} className="primary-btn  md:hidden">
                Logout
              </button>
            </span>
          ) : (
            <Link to="/Login">
              <button className="primary-btn md:hidden">Login</button>
            </Link>
          )}
        </ul>
      </Fade>
      {user ? (
        <span className="hidden md:flex  gap-5">
          <span
            onClick={handleDashboard}
            title={user ? user.displayName : ""}
            className="avatar"
          >
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="userPhoto" />
            </div>
          </span>
          <button
            onClick={handleLogout}
            className="primary-btn hidden md:inline-block"
          >
            Logout
          </button>
        </span>
      ) : (
        <Link to="/Login">
          <button className="primary-btn hidden md:inline-block">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
