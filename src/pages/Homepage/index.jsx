import React from "react";
import Footer from "../../components/Footer";
import HomeNav from "./HomeNav";
import HomeFirstDiv from "./HomeFirstDiv";
import HomeSecondDiv from "./HomeSecondDiv";
import HomeThirdDiv from "./HomeThirdDiv";
import HomeForthDiv from "./HomeForthDiv";
import ModalControl from "../../modal_views/ModalControl";
import "./Homepage.css";
import "./HomePageMobile.css";

const Homepage = () => {
  return (
    <div>
      <ModalControl />
      <HomeNav />
      <div className="home-page-wrapper">
        <HomeFirstDiv />
        <HomeSecondDiv />
        <HomeThirdDiv />
        <HomeForthDiv />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
