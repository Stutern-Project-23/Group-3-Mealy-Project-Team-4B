import axios from "axios";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import takeAway from "../../assets/take-away.png";
import nameIcon from "../../assets/name-vector.png";
import pwordIcon from "../../assets/pword-Vector.png";
import emailIcon from "../../assets/email-Vector.png";
import eyeIcon from "../../assets/eye-Vector.png";
import { GlobalContext } from "../../context";

import "./SignupModal.css";

const SignupModal = ({ handleCloseSignup }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const { setIsShowModal, setActiveModal } = useContext(GlobalContext);

  const handleLoginClick = () => {
    setIsShowModal(true);
    setActiveModal("loginModal");
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: `${firstName} ${lastName}`,
      email: email,
      password: password,
      userAddress: "69, bamaka street",
    };

    try {
      await axios
        .post(
          "https://mealyapp-bdev.onrender.com/api/v1/user/Signup",
          payload,
          {
            mode: "no-cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            credentials: "same-origin",
          }
        )
        .then(function (response) {
          console.log(response, "this is response");
          if (response) {
            // setIsSignUpSuccessful(true);
            console.log("signup successful", response);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setIsShowModal(true);
            setActiveModal("addDeliveryModal");
          } else {
            const errorData = response.json();
            setSignUpError(errorData.message);
            console.log(errorData.response.data.message);
          }
          console.log(response);
        })
        .catch(function (error) {
          setSignUpError(error.response.data.message);
          // console.log(error.response.data.message, "this catch error");
        });
    } catch (error) {
      console.error("An error occurred:", error);
      setSignUpError(error.message);
    }
  };
  return (
    <div className="outer--div">
      <div className="signup-overlay">
        <div className="signup--wrapper">
          <div className="formlink-div">
            <Link onClick={() => handleCloseSignup()}>x</Link>
          </div>

          <h2 className="signup--h2">Sign Up to Mealy</h2>

          <p className="signup--p">
            Already have an account?{" "}
            <Link onClick={handleLoginClick}>Login</Link>
          </p>
          <img
            className="signup--img"
            src={takeAway}
            alt="dispatch rider with takeout"
          ></img>

          <form onSubmit={handleSubmit}>
            <div className="signup--form">
              <div className="signup--input--wrapper">
                <img
                  src={nameIcon}
                  alt="nameicon"
                  className="signup--vectors"
                />
                <input
                  className="signup--input"
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="signup--input--wrapper">
                <img
                  src={nameIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                <input
                  className="signup--input"
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>

              <div className="signup--input--wrapper">
                <img
                  src={emailIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                <input
                  className="signup--input"
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="signup--input--wrapper">
                <img
                  src={pwordIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                <input
                  className="signup--input"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <img
                  src={eyeIcon}
                  alt="eye icon"
                  className="password--toggle"
                  onClick={toggleShowPassword}
                />
              </div>
            </div>
            <div>
              <button className="signup--submit" type="submit">
                SIGNUP
              </button>
              {signUpError && <p className="signup--error">{signUpError}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
