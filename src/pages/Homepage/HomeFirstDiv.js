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
          <div>
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
          <div>
            <button className="first-div-button" onClick={onGetStarted}>
              Get Started
            </button>
          </div>
        </div>
        <div className="first-div-right">
          <div className="top-background">
            <div>
              <img
                className="top-image1"
                src={`${path}main-circle.svg`}
                alt="image"
              ></img>
            </div>
            <div>
              <img
                className="top-image2"
                src={`${path}top-right.svg`}
                alt="image"
              ></img>

              <img
                className="top-image3"
                src={`${path}mid-right.svg`}
                alt="image"
              ></img>

              <img
                className="top-image4"
                src={`${path}buttom-right.svg`}
                alt="image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFirstDiv;
