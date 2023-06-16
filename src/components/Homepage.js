import { Link } from "react-router-dom";
import React from "react";
import "../styles/Homepage.css";
import Footer from '../components/Footer';
import HomeNav from "./HomeNav";
import HomeFirstDiv from "./HomeFirstDiv";
import HomeSecondDiv from "./HomeSecondDiv";
import HomeThirdDiv from "./HomeThirdDiv";
import HomeForthDiv from "./HomeForthDiv";

const Homepage = () => {
  return (
    <div>
      <HomeNav/>
      <HomeFirstDiv/>
      <HomeSecondDiv/>
      <HomeThirdDiv/>
      <HomeForthDiv/>
       
      
      <Footer/>
    </div>
  );
};

export default Homepage;
