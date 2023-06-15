import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import google from "../assets/google.png";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    // Prepare the data payload
    const data = {
      email,
      password,
    };

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
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <div className="form-content">
        <div className="cancel-button">
          <Link onClick={props.handleCloseLogin}>x</Link>
        </div>
        <header className="header">Login to Mealy</header>
        <div className="form-link">
          <span>
            Don't have an account? <Link to="/signup">Signup</Link>
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
            <button>Login</button>
          </div>
        </form>
        <div className="">
          <Link onClick={()=>navigate('forgot-password')}  className="forgot-pass">
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
    </div>
  );
}

export default Login;
