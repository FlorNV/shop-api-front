import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart3, BsListTask, BsHeadphones } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeLink = "text-cyan-400";
  const noActiveLink = "text-gray-400 hover:text-black";

  return (
    <nav className="bg-gray-50 p-4 border-b">
      <div className="flex flex-wrap items-center space-x-4 lg:space-x-10">
        <div className="text-2xl font-semibold">
          <Link to="/">ShopApp</Link>
        </div>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 shadow-sm rounded-md"
          />
        </div>

        <div
          className="lg:hidden cursor-pointer hover:text-gray-400"
          onClick={() => setOpen(!open)}
        >
          {!open ? <FaBars /> : <FaTimes />}
        </div>

        <div
          className={`w-full lg:flex lg:w-auto flex flex-col lg:flex-row lg:flex-[2] justify-between ${
            !open ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + " mt-4 lg:mt-0"
              }
            >
              <HiOutlineHome className="inline text-2xl align-top mr-4 lg:hidden" />
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + " mt-4 lg:mt-0"
              }
            >
              <BsListTask className="inline text-2xl align-top mr-4 lg:hidden" />
              Categories
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + " mt-4 lg:mt-0"
              }
            >
              <BsHeadphones className="inline text-2xl align-top mr-4 lg:hidden" />
              Help
            </NavLink>
          </div>

          <div className="flex flex-wrap items-center order-first lg:order-last">
            <p className="lg:hidden w-full text-sm mr-2 text-center my-4">
              Welcome.{" "}
              <span className="text-gray-400">
                Sign into your account to see your orders, favorites, etc.
              </span>
            </p>
            <NavLink
              to="/login"
              className="flex-auto border border-gray-400 text-center text-gray-400 hover:border-black hover:text-black transition-colors duration-100 rounded-md 
              px-6 py-2 mr-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="flex-auto bg-cyan-400 text-center text-white hover:bg-cyan-500 transition-colors duration-100 rounded-md px-6 py-2 mr-4"
            >
              Register
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                (isActive ? activeLink : noActiveLink) + " px-2 py-2 text-xl"
              }
            >
              <BsCart3 />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
