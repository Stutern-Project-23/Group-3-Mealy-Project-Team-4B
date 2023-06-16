import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import { LoginContext } from './LoginContext';

const HomeFirstDiv = () => {
    const {showLogin, openLogin, closeLogin} = useContext(LoginContext)
    const path = 'images/homepage/top/'

    const handleShowLogin = () =>{
        openLogin()
    }
  return (
    <div className='first-div-container'>
       
        <div className='first-div-left' >
            <div>
                <h3>Delightful Eats Deliveres with <span>Ease!</span></h3>
            </div>
            <div>
                <p>Enjoy a hassle free dining experience as we bring the best restaurants and dishes right to your doorstep.  
                </p>
            </div>
            <div>
                    <button onClick={handleShowLogin} >Get Started</button> 
            </div>
            
            
            
        </div>
        <div className='first-div-right'>
            <div className='top-background'  >
            
                    <img className='top-image1' src={`${path}main-circle.svg`} alt='image'></img>
                
                
                    <img className='top-image2' src={`${path}top-right.svg`} alt='image'></img>
                
                
                    <img className='top-image3' src={`${path}mid-right.svg`} alt='image'></img>
                
                
                    <img className='top-image4' src={`${path}buttom-right.svg`} alt='image'></img>
            
            </div>
           

        </div>
        {showLogin && <Login/> }
        
    </div>
  )
}

export default HomeFirstDiv