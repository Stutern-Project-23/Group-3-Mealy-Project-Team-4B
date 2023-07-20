import React, { useContext, useState } from "react";
import axios from "axios";
import "./activationModal.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";

const ActivationModal = () => {
  const [activationCode, setActivationCode] = useState("");
  const { setIsShowModal, setActiveModal } = useContext(GlobalContext);

  const handleCloseOtpModal = () => {
    setActiveModal("");
    setIsShowModal(false);
    console.log("activemodal closed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://mealyapp-bdev.onrender.com/api/v1/user/otpActivation", {
        activationCode,
      })
      .then((response) => {
        setActiveModal("addDeliveryModal");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    const newActivationCode = [...activationCode];
    newActivationCode[index] = value;
    setActivationCode(newActivationCode.join(""));
    console.log(newActivationCode);
  };

  return (
    <div className="activation-wrapper">
      <div className="activation-container">
        <div onClick={handleCloseOtpModal} className="activation-close">
          <Link>X</Link>
        </div>
        <div className="activation-image">
          <img src="../../../images/activation.svg" alt="activation" />
        </div>
        <div className="activation-h3p">
          <h3>Activation code</h3>
          <p>An email was sent to ****@gmail.com with an activation code</p>
          <div className="activation-form">
            <form onSubmit={handleSubmit}>
              <div className="activation-inputs">
                <input
                  className="activation-code-input"
                  type="text"
                  name="digit-1"
                  maxLength="1"
                  required
                  placeholder="-"
                  value={activationCode[0] || ""}
                  onChange={(e) => handleInputChange(e, 0)}
                />
                <input
                  className="activation-code-input"
                  type="text"
                  name="digit-2"
                  maxLength="1"
                  required
                  placeholder="-"
                  value={activationCode[1] || ""}
                  onChange={(e) => handleInputChange(e, 1)}
                />
                <input
                  className="activation-code-input"
                  type="text"
                  name="digit-3"
                  maxLength="1"
                  required
                  placeholder="-"
                  value={activationCode[2] || ""}
                  onChange={(e) => handleInputChange(e, 2)}
                />
                <input
                  className="activation-code-input"
                  type="text"
                  name="digit-4"
                  maxLength="1"
                  required
                  placeholder="-"
                  value={activationCode[3] || ""}
                  onChange={(e) => handleInputChange(e, 3)}
                />
              </div>
              <div>
                <p>
                  Did not receive the code?{" "}
                  <span>
                    <a href="https://mealy-app.netlify.app/">re-send</a>
                  </span>{" "}
                </p>
              </div>
              <div className="activation-button">
                <button type="submit">VERIFY AND PROCEED</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationModal;
