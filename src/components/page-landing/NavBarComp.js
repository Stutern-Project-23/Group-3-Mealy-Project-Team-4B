import React, { useState } from 'react'
import UserProfile from './UserProfile';
import axios from 'axios';
import { useContext } from 'react';
import { LoginContext } from '../LoginContext';
import { Link } from 'react-router-dom';

const NavBarComp = ({showSearchInput}) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const {isLoggedIn, logout} = useContext(LoginContext);

  

 

  const handleChange =(e)=>{
    const searchQuery = e.target.value
    setSearch(searchQuery)
  }


  const handleSearch = (e)=>{
    e.preventDefault();
      if(search.trim() !== ''){
        const url = `https://mealyapp-bdev.onrender.com/api/v1/restaurant/category?category=${search}`;

        axios
        .get(url,{params:{
          query: search
        },})
        .then((res)=>{
          setSearchResults(res.data)
        })
        .catch((err)=>{
          console.log(err);
          setSearchResults([])
        })
      }
      setSearch('')
  }

  const handleKeyDown = (e)=>{
    if(e.key=== 'Enter'){
        handleSearch(e)
    }
  }

  const handleLoggout = () =>{
    logout()
  }

  return (
    <nav className='land-page-nav' >
      <div className='righ-nav' >
        <div className='mealy-logo' >
          <img src='images/mealy-logo.svg' alt='mealy-log'/>
        </div>
        <div className='dropdown'>
          <div >
            <Link className='address-link' >
              <img src='images/location-pin.svg' alt='location-pin'/>
               Add address
               <img src='images/dropdown.svg'/>
            </Link>

          </div>
          
          
        </div>
      </div>
      
      <div>
      <div className='form-div' >
        <div className='nav-form'>
          <form onSubmit={handleSearch} >
            <input 
              onKeyDown={handleKeyDown}
              onChange={handleChange} 
              type='search' 
              value={search} 
              placeholder='search' 
              />
          </form>
        </div>
        
        <div className='nav-profile'>
        <Link>
          <img className='img1' src='../images/profile.svg' alt='' />
          </Link>   
          <UserProfile handleLoggout={handleLoggout} />
          
        </div>

        </div>
        <ul>
          {searchResults.map((result)=>{
            return(
              <li key={result.id}>{result.name}</li>
            )
          })}
        </ul>
       
        
      </div>
      
    </nav>
  )
}

export default NavBarComp
