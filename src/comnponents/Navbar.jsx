import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="h-16 bg-navbarColor  flex items-center sticky top-0 ">
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-3xl text-btnColor italic">Bitly</h1>
        </Link>
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center text-slate-800 sm:static absolute left-0 top-16 sm:shadow-none shadow-md ${
            navbarOpen ? "h-48" : "h-0 overflow-hidden"
          }  transition-all duration-100 sm:h-fit bg-navbarColor sm:bg-transparent sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${path === "/" ? "text-btnColor font-semibold" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/about" ? "text-btnColor font-semibold" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="hover:text-btnColor font-[500]  transition-all duration-150">
            <Link
              className={`${
                path === "/dashboard" ? "text-btnColor font-semibold" : ""
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li className="bg-btnColor text-white  cursor-pointer w-24 text-center font-semibold px-2 py-2 rounded-md  hover:text-slate-300   transition-all duration-150">
            <Link to="/register">SignUp</Link>
          </li>
        </ul>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex"
        >
          <IoIosMenu className="text-slate-800 text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
