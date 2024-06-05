import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Products = () => {
  return (
    <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* <div className="grid grid-cols-3 justify-items-center">
        <section className="rounded-lg bg-red-500 shadow-2xl flex flex-col">
          <img
            src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg"
            alt="shoe"
            className="w-60 h-full"
          />
          <div>
            <h1>Shoe name</h1>
            <section className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>5</span>
            </section>

            <section>
                <del>300</del>200
                <BsFillBagHeartFill/>
            </section>
          </div>
        </section>
      </div> */}

      <div className="bg-white rounded-lg shadow-xl p-4">
        <img
          src="https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg"
          alt="logo"
          className="w-full h-auto object-cover mb-4"
        />
        <h2 className="text-lg font-semibold">name</h2>
        <p className="text-gray-600">description</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">
            <del>300</del>200
            <BsFillBagHeartFill />
          </span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Products;
