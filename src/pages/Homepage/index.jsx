import React from "react";
import Footer from "../../components/Footer";
import HomeNav from "./HomeNav";
import HomeFirstDiv from "./HomeFirstDiv";
import HomeSecondDiv from "./HomeSecondDiv";
import HomeThirdDiv from "./HomeThirdDiv";
import HomeForthDiv from "./HomeForthDiv";
import ModalControl from "../../modal_views/ModalControl";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <ModalControl />
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
