import { Link } from "react-router-dom";
import React, { useState } from "react";
import takeAway from "../assets/take-away.png";
import nameIcon from "../assets/name-vector.png";
import pwordIcon from "../assets/pword-Vector.png";
import emailIcon from "../assets/email-Vector.png";
import eyeIcon from "../assets/eye-Vector.png";
// import closeIcon from "../assets/close-vector.png";
import "../styles/SignUp.css";

const SignUp = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [signUpError, setSignUpError] = useState(null);

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
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://mealyapp-benita-branch.onrender.com/api/v1/user/signUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsSignUpSuccessful(true);
      } else {
        const errorData = await response.json();
        setSignUpError(errorData.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setSignUpError('An error occurred during sign-up.');
    }
  };

  return (
    <div>
      {isSignUpSuccessful ? (
        <div>
          <p>
            Sign-up successful! Please check your email for the verification
            code.
          </p>
          <Link to="/verification">Verify Your Account</Link>
        </div>
      ) : (
        <div className="wrapper">
          {/* <button className="close-button" onClick={onClose}>
          <img src={closeIcon} alt="close icon" className="fa--close" />
          </button> */}

          <h2>Sign Up to Mealy</h2>
          {signUpError && <p>{signUpError}</p>}
          <p className="signup--p">
            Already have an account? <a href="#">Login</a>
          </p>
          <img
            className="signup--img"
            src={takeAway}
            alt="dispatch rider with takeout"
          ></img>

          <form onSubmit={handleSubmit}>
            <div className="signup--form">
              <div>
                <img
                  src={nameIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                {/* <label htmlFor="firstName">First Name</label> */}
                <input
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                <hr />
              </div>
              <div>
                <img
                  src={nameIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
                <hr />
              </div>

              <div>
                <img
                  src={emailIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                {/* <label htmlFor="email">Email</label> */}
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <hr />
              </div>
              <div>
                <img
                  src={pwordIcon}
                  alt="name icon"
                  className="signup--vectors"
                />
                {/* <label htmlFor="password">Password</label> */}
                <input
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
                <hr />
              </div>
            </div>
            <div>
              <button className="signup--submit" type="submit">
                SIGNUP
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
