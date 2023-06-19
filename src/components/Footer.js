import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const footerLinks = [
    { src: "images/MEALY.svg" },
    {
      header: "Links of interest",
      link1: "About us",
      link2: "FAQ",
      link3: "Blog",
      link4: "Contact us",
      link5: "Security",
    },
    {
      header: "Legal",
      link1: "Privacy Policy",
      link2: "Terms of use",
    },
    {
      header: "Services",
      link1: "24/7 delivery",
      link2: "sevices",
    },
  ];

  return (
    <div className="footer-container">
      {footerLinks.map((link, index) => {
        return (
          <FooterLinks
            key={index}
            id={index}
            src={link.src}
            header={link.header}
            link1={link.link1}
            link2={link.link2}
            link3={link.link3}
            link4={link.link4}
            link5={link.link5}
          />
        );
      })}
    </div>
  );
};

export default Footer;
