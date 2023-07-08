import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NavLinks = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (path) => {
    navigate(`/landing-page/${path}`);
    setActiveLink(path);
  };

  return (
    <div>
      <nav className="nav-links nav-link-container">
        <ul>
          <li>
            <Link
              to="delivery"
              onClick={() => handleNavLinkClick("delivery")}
              className={`${activeLink === "delivery" ? "active" : ""}`}
            >
              Delivery
            </Link>
          </li>
          <li>
            <Link
              to="pick-up"
              onClick={() => handleNavLinkClick("pick-up")}
              className={`${activeLink === "pick-up" ? "active" : ""}`}
            >
              Pickup
            </Link>
          </li>
          <li>
            <Link
              to="bulk-order"
              onClick={() => handleNavLinkClick("bulk-order")}
              className={`${activeLink === "bulk-order" ? "active" : ""}`}
            >
              Bulk Order
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavLinks;
