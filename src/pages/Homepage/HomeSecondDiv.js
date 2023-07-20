import React from "react";

const HomeSecondDiv = () => {
  const path = "images/homepage/mid/";
  return (
    <div className="second-div-container">
      <div className="second-div-left">
        <div className="second-background">
          <div className="second-div-main-image">
            <img src={`${path}mid-main.svg`} alt="image"></img>
          </div>
        </div>
      </div>
      <div className="second-div-right">
        <div>
          <h3>
            About<span> Us</span>
          </h3>
        </div>
        <div>
          <p>
            Our food delivery app brings your favoritedishes to your doorstep.
            From local to popular restaurants, we connect you witha wide
            selection of delicious meals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondDiv;
