import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavLinks = () => {
  
    return (
      <div>
      <nav className='nav-links nav-link-container'>
        <ul>
          <li>
            <NavLink
              to='/landing-page/all-restaurants'            
            >
              Delivery
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/landing-page/pick-up'            
            >
              Pickup
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/landing-page/bulk-order'
            >
              Bulk Order
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
      </div>


    );
  };
  
  export default NavLinks;
  