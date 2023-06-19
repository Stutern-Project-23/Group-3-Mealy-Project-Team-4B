import React from "react";
import Footer from "../../components/Footer";
import HomeNav from "../../components/HomeNav";
import HomeFirstDiv from "../../components/HomeFirstDiv";
import HomeSecondDiv from "../../components/HomeSecondDiv";
import HomeThirdDiv from "../../components/HomeThirdDiv";
import HomeForthDiv from "../../components/HomeForthDiv";

import "./Homepage.css";

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
