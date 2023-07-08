import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPasswordModal = ({ handleCloseForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    const mail = e.target.value;
    setEmail(mail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://mealyapp-bdev.onrender.com/api/v1/user/forgotPassword";

    axios
      .post(url, { email })
      .then((res) => {
        console.log(res.data);
        setSuccessMessage(res.data);
        if (res.data.status === "success") {
          navigate("/create-new-password");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });

    setEmail("");
  };

  return (
    <div className="form">
      <div className="form-wrapper">
        <div className="formlink-div">
          <Link onClick={handleCloseForgotPassword}>x</Link>
        </div>
        <h3 className="form-title">Forgot Password</h3>
        <div>
          <img
            className="form-image"
            src="/images/forgot-password.png"
            alt="Privacy Policy"
          />
        </div>

        <div className="form-description">
          <p>Please enter your email address to receive a verification code</p>
        </div>
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              className="line-input"
              placeholder="Email address"
              type="email"
              onChange={handleEmail}
              value={email}
              required
            />
          </div>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
