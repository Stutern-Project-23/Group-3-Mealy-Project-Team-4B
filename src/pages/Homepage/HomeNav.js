import React from "react";
import { Link } from "react-router-dom";
import mealyLogo from "../../assets/mealy-logo.svg";

const HomeNav = () => {
  return (
    <nav className="home-nav">
      <div className="logo">
        <img src={mealyLogo} alt="mealy-logo" />
      </div>
      <div className="nav-divs">
        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src="images/homepage/cart.svg" alt="cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
