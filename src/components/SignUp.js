import React, { useState } from "react";
import takeAway from "../assets/take-away.png";
import nameIcon from "../assets/name-vector.png";
import pwordIcon from "../assets/pword-Vector.png";
import emailIcon from "../assets/email-Vector.png";
import eyeIcon from "../assets/eye-Vector.png";
import closeIcon from "../assets/close-vector.png";
import "../styles/SignUp.css";

const SignUp = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

    // Create a payload object with form data
    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Make an API request to the backend endpoint
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Request successful, proceed with further actions
        console.log("Sign-up successful!");
        // Redirect to a verification page or show a success message
      } else {
        // Request failed, handle error
        console.error("Sign-up failed");
        // Display an error message to the user
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle network or server error
    }
  };

  return (
    <div className="wrapper">
      <button className="close-button" onClick={onClose}>
        <img src={closeIcon} alt="close icon" className="fa--close" />
      </button>
      <h2>Sign Up to Mealy</h2>
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
            <img src={nameIcon} alt="name icon" className="signup--vectors" />
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
            <img src={nameIcon} alt="name icon" className="signup--vectors" />
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
            <img src={emailIcon} alt="name icon" className="signup--vectors" />
            {/* <label htmlFor="email">Email</label> */}
            <input
              Placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <hr />
          </div>
          <div>
            <img src={pwordIcon} alt="name icon" className="signup--vectors" />
            {/* <label htmlFor="password">Password</label> */}
            <input
              Placeholder="Password"
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
  );
};

export default SignUp;
