import React from "react";
import NavBarComp from "./_partials/NavBarComp";
import Category from "./_partials/Category";
import NavLinks from "./_partials/NavLinks";
import Footer from "../../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <NavBarComp showSearchInput={true} />
      <Category />
      <NavLinks />
      <Footer />
    </div>
  );
};

export default LandingPage;
