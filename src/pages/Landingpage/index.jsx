import React from "react";
import NavBarComp from "./_partials/NavBarComp";
import Category from "./_partials/Category";
import NavLinks from "./_partials/NavLinks";
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
