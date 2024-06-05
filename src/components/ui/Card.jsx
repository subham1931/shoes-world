import React from "react";

const Card = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-xl p-4 relative overflow-hidden">
          <div className="relative overflow-hidden group">
            <img
              src="https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg"
              alt="logo"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white p-2">
              4.6⭐ | 376
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">name</h2>
            <p className="text-gray-600">description</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">
                <del>300</del>200
              </span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
