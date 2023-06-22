import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="nav-links nav-link-container">
        <ul>
          <li>
            <NavLink
              to="/landing-page/all-restaurants"
              onClick={() => handleClick("delivery")}
              // className={activeLink === 'delivery' ? 'active' : ''}
            >
              Delivery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/landing-page/pick-up"
              onClick={() => handleClick("pickup")}
              // className={activeLink === 'pickup' ? 'active' : ''}
            >
              Pickup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/landing-page/bulk-order"
              onClick={() => handleClick("bulk-order")}
            >
              Bulk Order
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavLinks;
