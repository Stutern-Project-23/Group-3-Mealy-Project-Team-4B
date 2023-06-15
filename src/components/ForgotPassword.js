import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmail = (e) => {
    const mail = e.target.value;
    setEmail(mail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://mealyapp-bdev.onrender.com/api/v1/user/forgotPassword';

    axios
      .post(url, { email })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred. Please try again.');
      });

    setEmail('');
  };

  const navigate = useNavigate();

  return (
    <div className="form">
      <div className="form-wrapper">
        <div className="formlink-div">
          <Link onClick={() => navigate(-1)}>x</Link>
        </div>
        <h3 className="form-title">Forgot Password</h3>
        <div  >
            <img className='form-image' src="/images/forgot-password.png" alt="Privacy Policy" />
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
            {error && <p className="error-message">{error}</p>}
          </div>

          <div className="form-field">
            <button className="submit-button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
