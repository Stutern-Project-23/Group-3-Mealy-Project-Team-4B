import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>MEALY</h1>
      </div>
      <div>
        <h2>Links of Interest</h2>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Security</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Legal</h2>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Services</h2>
        <ul>
          <li>
            <a href="#">24/7 Delivery Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
