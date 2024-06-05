import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row bg-gray-200 items-center">
      <div className="md:basis-1/4 flex justify-center items-center py-2 ">
        <img src="./logo.svg" alt="logo" className="w-10 md:w-12 h-full" />
        <h1 className="font-bold md:text-2xl text-lg  text-center ml-2">
          Shoes World
        </h1>
      </div>

      <div className="md:basis-1/2 flex justify-center py-2">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your search shoes"
          className="outline-none rounded-lg p-2 md:w-3/4"
        />
        <button className="bg-blue-500 rounded-full p-3 ml-2">
          <GrSearch />
        </button>
      </div>

      <div className="md:w-1/4 py-2 flex justify-center gap-2 text-gray-500 text-xl md:text-3xl font-extrabold">
        <a
          href="#"
          className="text-gray-500 text-xl md:text-3xl font-extrabold mx-2"
        >
          <FiHeart />
        </a>
        <a
          href="#"
          className="text-gray-500 text-xl md:text-3xl font-extrabold mx-2"
        >
          <AiOutlineShoppingCart />
        </a>
        <a
          href="#"
          className="text-gray-500 text-xl md:text-3xl font-extrabold mx-2"
        >
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
