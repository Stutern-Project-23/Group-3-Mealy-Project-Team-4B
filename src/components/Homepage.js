import React from "react";
import Footer from "./Footer";
import HomeNav from "./HomeNav";
import HomeFirstDiv from "./HomeFirstDiv";
import HomeSecondDiv from "./HomeSecondDiv";
import HomeThirdDiv from "./HomeThirdDiv";
import HomeForthDiv from "./HomeForthDiv";

import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <HomeNav />
      <HomeFirstDiv />
      <HomeSecondDiv />
      <HomeThirdDiv />
      <HomeForthDiv />
      <Footer />
    </div>
  );
};

export default Homepage;
