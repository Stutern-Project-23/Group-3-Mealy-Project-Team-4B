import React from "react";

const Footer = () => {
  return (
    <div className="bg-brandmain px-3 md:px-20 py-10 grid  gap-5 text-white">
      <h1 className="text-2xl font-semibold text-center">Mealy</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-5">
        <ul>
          <h3 className="text-xl font-medium mb-3">Links of Interest</h3>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Security</li>
        </ul>
        <ul>
          <h3 className="text-xl font-medium mb-3">Legal</h3>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
        </ul>
        <ul>
          <h3 className="text-xl font-medium mb-3">Services</h3>
          <li>24/7 delivery services</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
