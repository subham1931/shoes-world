import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import SIdebar from "./components/SIdebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
      <Recommended/>
      <SIdebar/>
    </div>
  );
};

export default App;
