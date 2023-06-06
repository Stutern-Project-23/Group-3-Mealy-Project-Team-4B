import { Link } from "react-router-dom";
import React from "react";
import "../styles/Homepage.css";
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <div className="hp--container">
        <h1 className="hp--h1">MEALY</h1>

        <Link to="/signup">
          <button className="hp--btn">Get Started</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
