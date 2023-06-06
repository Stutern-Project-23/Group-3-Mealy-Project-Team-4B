// import React, { useState } from "react";
import React from "react";
// import SignUp from "../components/SignUp";
import "../styles/Homepage.css";

const Homepage = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleGetStartedClick = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

  return (
    <div>
      <div className="container">
        <h1>MEALY</h1>
        <button >Get Started</button>
        {/* <button onClick={handleGetStartedClick}>Get Started</button> */}
      </div>
      {/* {showPopup && <SignUp onClose={handleClosePopup} />} */}
    </div>
  );
};

export default Homepage;
