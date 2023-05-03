import React from "react";
import { FaMailBulk } from "react-icons/fa";
const SubNewsLetter = () => {
  return (
    <div className="py-10 md:w-[80%] rounded-md mx-auto px-10 bg-[#e21b70]">
      <form>
        <h3 className="text-center text-white font-extrabold text-xl mb-5">
          Subscribe to our newsLetter
        </h3>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaMailBulk className="primary-text text-xl" />
          </div>
          <input
            type="email"
            className="block w-full p-4 pl-10 text-sm text-black  rounded-lg bg-white placeholder:text-black placeholder:opacity-80 focus:ring-blue-500  outline-none focus:border-blue-500 dark:border-gray-600  dark:focus:ring-red-500"
            placeholder="example@gmail.com"
            required
          />
          <button
            type="submit"
            className="text-white  absolute outline-none right-2.5 bottom-2.5 secondary-btn hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubNewsLetter;
