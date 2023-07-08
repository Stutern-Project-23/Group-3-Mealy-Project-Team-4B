
import React from 'react';
import NavBarComp from './NavBarComp';
import Category from './Category';
import NavLinks from './NavLinks';
import Footer from '../Footer';
import './landing-page.css'

const LandingPage = () => {
  return (
    <div className='landing-page-container' >
        <NavBarComp showSearchInput={true} /> 
        <Category/>
        <NavLinks/>
        <Footer/>
    </div>
  )
}

export default LandingPage
