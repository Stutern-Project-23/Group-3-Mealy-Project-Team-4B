
import React from 'react';
import NavBarComp from './NavBarComp';
import Category from './Category';
import NavLinks from './NavLinks';
import Restaurants from './Restaurants';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className='landing-page-container' >
        <NavBarComp/> 
        <Category/>
        <NavLinks/>
        <Restaurants/>
        <Footer/>
    </div>
  )
}

export default LandingPage
