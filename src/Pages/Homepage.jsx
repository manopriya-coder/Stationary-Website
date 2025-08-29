import React from "react";
import HomeBanner from "../Components/Home/HomeBanner/HomeBanner";
import Category from "../Components/Home/Category/Category";
import Products from "../Components/Home/Products/Products";
import Dealtimer from "../Components/Home/Dealtimer/Dealtimer";
import Latestblog from "../Components/Home/Latestblog/Latestblog";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import Followinsta from "../Components/Home/Followinsta/Followinsta";

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <Category />
      <Products />
      <Dealtimer />
      <Latestblog/>
      <Testimonials/>
      <Followinsta/>
    </>
  );
};

export default Homepage;
