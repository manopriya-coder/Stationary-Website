import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Navbar from "../Navbar/Navbar";
import Shoppage from "../Pages/Shoppage";
import Footer from "../Footer/Footer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shoppage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routing;
