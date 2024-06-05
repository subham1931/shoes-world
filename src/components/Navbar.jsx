import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="w-full h-12 md:h-16 flex bg-gray-200 items-center">
        <div className="basis-1/4 flex justify-center items-center">
            <img src="./logo.svg" alt="logo" className="w-10 md:w-12 h-full"/>
            <h1 className="font-bold md:text-2xl sm:text-lg text-xs text-center ">Shoes World</h1>
        </div>


      <div className="basis-1/2 flex justify-center">
        <input
          type="search"
          name=""
          id=""
          placeholder="Enter your search shoes"
          className="outline-none rounded-lg p-2 md:w-3/4"
        />
        <button className="bg-blue-500 rounded-full p-3"><GrSearch  /></button>
      </div>


      <div className="basis-1/4 flex justify-center gap-2 text-gray-500 text-xl md:text-3xl font-extrabold">
        <a href="">
          <FiHeart className=""/>
        </a>
        <a href="" className="">
          <AiOutlineShoppingCart />
        </a>
        <a href="" className="">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
