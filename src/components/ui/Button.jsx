// import React from 'react'

// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button


import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center bg-gray-200">
      {/* Logo and Brand */}
      <div className="flex items-center justify-center md:w-1/4 py-2 md:py-0">
        <img src="./logo.svg" alt="logo" className="w-10 md:w-12 h-full" />
        <h1 className="font-bold md:text-2xl text-lg ml-2">Shoes World</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center md:w-1/2 py-2 md:py-0">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your search shoes"
          className="outline-none rounded-lg p-2 w-full md:w-3/4"
        />
        <button className="bg-blue-500 rounded-full p-3 ml-2"><GrSearch /></button>
      </div>

      {/* Icons */}
      <div className="flex justify-center md:w-1/4 py-2 md:py-0">
        <a href="#" className="text-gray-500 text-xl md:text-3xl font-extrabold mx-2">
          <FiHeart />
        </a>
        <a href="#" className="text-gray-500 text-xl md:text-3xl font-extrabold mx-2">
          <AiOutlineShoppingCart />
        </a>
        <a href="#" className="text-gray-500 text-xl md:text-3xl font-extrabold mx-2">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
