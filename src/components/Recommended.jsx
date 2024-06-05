import React from "react";

const Recommended = () => {
  return (
    <div className="container mx-auto my-2 sm:flex sm:flex-col sm:items-center sm:gap-2">
      <h1 className="text-xl font-semibold">Recomended</h1>
      <div className="flex flex-wrap gap-2">
        <button className="outline outline-2 py-1 px-3 rounded-lg">
          All Products
        </button>
        <button className="outline outline-2 py-1 px-3 rounded-lg">Nike</button>
        <button className="outline outline-2 py-1 px-3 rounded-lg">
          Addidas
        </button>
        <button className="outline outline-2 py-1 px-3 rounded-lg">Puma</button>
        <button className="outline outline-2 py-1 px-3 rounded-lg">Vans</button>
      </div>
    </div>
  );
};

export default Recommended;
