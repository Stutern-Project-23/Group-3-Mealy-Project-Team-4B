import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const HomeFirstDiv = () => {
  const { setIsShowModal, setActiveModal } = useContext(GlobalContext);
  const path = "images/homepage/top/";

  const onGetStarted = () => {
    setIsShowModal(true);
    setActiveModal("signupModal");
  };

  return (
    <>
      <div className="first-div-container">
        <div className="first-div-left">
          <div className="h3">
            <h3>
              Delightful Eats Deliveres with <span>Ease!</span>
            </h3>
          </div>
          <div>
            <p>
              Enjoy a hassle free dining experience as we bring the best
              restaurants and dishes right to your doorstep.
            </p>
          </div>
          <div className="first-div-left-button">
            <button className="first-div-button" onClick={onGetStarted}>
              Get Started
            </button>
          </div>
        </div>
        <div className="first-div-right">
          <div className="top-background">
            <div className="top-image1">
              <img src={`${path}main-circle.svg`} alt="top"></img>
            </div>
            <div>
              <div className="top-image2">
                {" "}
                <img src={`${path}top-right.svg`} alt="top"></img>
              </div>
              <div className="top-image3">
                <img src={`${path}mid-right.svg`} alt="top"></img>
              </div>
              <div className="top-image4">
                {" "}
                <img src={`${path}buttom-right.svg`} alt="top"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFirstDiv;
