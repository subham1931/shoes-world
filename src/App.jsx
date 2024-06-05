import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import SIdebar from "./components/SIdebar";
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Recommended/>
      <Products />
      {/* <SIdebar/> */}
      <Footer/>
    </div>
  );
};

export default App;
