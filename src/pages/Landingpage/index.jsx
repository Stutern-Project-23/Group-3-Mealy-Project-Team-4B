import React from "react";
import NavBarComp from "../../components/NavBarComp";
import Category from "../../components/Category";
import NavLinks from "../../components/NavLinks";
import Footer from "../../components/Footer";
import ModalControl from "../../modal_views/ModalControl";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <ModalControl />
      <NavBarComp showSearchInput={true} />
      <Category />
      <NavLinks />
      <Footer />
    </div>
  );
};

export default LandingPage;
