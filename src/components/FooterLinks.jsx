import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = (props) => {
  return (
    <footer className="land-page-footer">
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <div>
        <h3>{props.header}</h3>
        <ul className="footer-links">
          <li>
            <Link to={props.link1props}>{props.link1}</Link>
          </li>
          <li>
            <Link to={props.link2props}>{props.link2}</Link>
          </li>
          <li>
            <Link to={props.link3props}>{props.link3}</Link>
          </li>
          <li>
            <Link to={props.link4props}>{props.link4}</Link>
          </li>
          <li>
            <Link to={props.link5props}>{props.link5}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterLinks;
