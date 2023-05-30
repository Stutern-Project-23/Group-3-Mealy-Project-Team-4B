import { Link } from "react-router-dom";
import React from "react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <h1>MEALY</h1>

        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
