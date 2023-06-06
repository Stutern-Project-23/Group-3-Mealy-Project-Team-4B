import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    const [activeLink, setActiveLink] = useState('');
  
    const handleClick = (link) => {
      setActiveLink(link);
    };
  
    return (
      <nav className='nav-links nav-link-container'>
        <ul>
          <li>
            <NavLink
              to='/landing-page'
              onClick={() => handleClick('delivery')}
              className={activeLink === 'delivery' ? 'active' : ''}
            >
              Delivery
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/landing-page'
              onClick={() => handleClick('pickup')}
              className={activeLink === 'pickup' ? 'active' : ''}
            >
              Pickup
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/landing-page'
              onClick={() => handleClick('bulk-order')}
              className={activeLink === 'bulk-order' ? 'active' : ''}
            >
              Bulk Order
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavLinks;
  