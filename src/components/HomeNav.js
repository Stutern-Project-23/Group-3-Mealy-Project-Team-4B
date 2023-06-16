import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <nav className='home-nav'>
      <div className='logo'>
        <img src='images/mealy-logo.svg' alt='mealy-logo' />
      </div>
      <div className='nav-divs'>
        <div className='nav-links'>
          <Link to='/home'>Home</Link>
          <Link to='/about-us'>About Us</Link>
          <Link to='/contact-us'>Contact</Link>
        </div>
        <div className='cart'>
          <Link to='/cart'>
            <img src='images/homepage/cart.svg' alt='cart' />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
