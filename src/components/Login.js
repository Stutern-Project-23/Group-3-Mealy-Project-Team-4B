import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import google from "../assets/google.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const {isLoggedin, login, closeLogin, showForgotPw, showFPW, showSignUp, openSignup } = useContext(LoginContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleCloseLogin = () =>{
      closeLogin()
  }

  const handleShowForgotPassword =()=> {
    showFPW()
  }

  const handleOpenSignUp =() =>{
    openSignup()
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    // Prepare the data payload
    const data = {
      email,
      password,
    };

  

    setIsLoading(true);

    // Make a POST request to the API endpoint using Axios
    axios
      .post("https://mealyapp-bdev.onrender.com/api/v1/user/login", data)
      .then((response) => {
        // Handle the API response
        console.log("API response:", response.data);
        // Redirect to a different page after successful login
        navigate("/landing-page");
      })

      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error("API error:", error);
      })
      .finally(()=>{
        setIsLoading(false)
      });

    setEmail("");
    setPassword("");
    
  };

    if (isLoggedin){
      navigate('landing-page');
      login();
      return null
    }

  return (
    <div className="form">
      <div className="form-content">
        <div className="cancel-button">
          <Link onClick={handleCloseLogin}>x</Link>
        </div>
        <header className="header">Login to Mealy</header>
        <div className="form-link">
          <span>
            Don't have an account? <Link onClick={handleOpenSignUp}>Signup</Link>
          </span>
        </div>
        <div>
          <img className="form-img" src="images/login-img.png" alt="" />
        </div>
        <form onSubmit={handleSubmit} className="login-form" action="#">
          <div className="field input-field">
            <input
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
              className="input"
              value={email}
            />
          </div>

          <div className="field input-field">
            <input
              onChange={handlePasswordChange}
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className="password"
              value={password}
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div className="field button-field">
            <button type="submit" disabled={isLoading} >{isLoading ? "...Loading" : "Submit"}</button>
          </div>
        </form>
        <div className="">
          <Link onClick={handleShowForgotPassword}  className="forgot-pass">
            Forgot password?
          </Link>
        </div>

        <div className="media-options">
          <Link className="field google">
            <img src={google} alt="" className="google-img" />
            <span>Continue with Google</span>
          </Link>
        </div>
      </div>
      {showForgotPw && <ForgotPassword/>}
      {showSignUp && <SignUp/>}
    </div>
  );
}

export default Login;
