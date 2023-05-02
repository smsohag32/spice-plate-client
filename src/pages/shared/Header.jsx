import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="flex z-50 flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center default-container mt-4 md:mt-0 ">
        <div className="flex justify-between items-center">
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
        <ul
          className={`flex absolute md:static gap-4 flex-col md:flex-row bg-blue-50 p-8 md:bg-transparent md:text-black font-bold text-base ${
            isOpen
              ? "top-16 mt-1 z-20 duration-700 left-0"
              : "-left-60 top-16 overflow-hidden duration-700"
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
            to="/recipes"
          >
            Recipes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "primary-text" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
          <span className="md:hidden">
            <Link to="/login">
              <button className="primary-btn ">Login</button>
            </Link>
          </span>
        </ul>
        <Link to="/Login">
          <button className="primary-btn hidden md:inline-block">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
