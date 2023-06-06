import React, { useState } from 'react'
import Dropdown from './Dropdown';
import UserProfile from './UserProfile';

const NavBarComp = () => {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsloggedIn] = useState(true);



  const handleChange =(e)=>{
    const searchQuery = e.target.value
    setSearch(searchQuery)
  }


  const handleSearch = (e)=>{
    e.preventDefault();
      const Query = e.target.value;
      console.log(Query)
      setSearch('')
  }

  const handleKeyDown = (e)=>{
    if(e.key=== 'Enter'){
        handleSearch(e)
    }
  }

  const handleLoggout = () =>{
    setIsloggedIn(false)
  }

  return (
    <nav className='land-page-nav' >
      <div className='mealy-n-dropdown' >
        <div className='mealy-logo' >
          <img src='images/mealy-logo.svg' alt='mealy-log'/>
        </div>
        <div className='dropdown'>
          <div>
            <img src='images/location-pin.svg' alt='location-pin'/>
          </div>
          <div>
            <Dropdown
            name = 'Add Address'
            item1 = 'My Location'
            item2 = 'Set Address'
            img = 'dropdown.svg'
            className= 'address-dropdown dropdown-link'
            />
          </div>
          
        </div>
      </div>
      
      <div>
      <div className='form-div' >
        <form onSubmit={handleSearch} >
          <input onKeyDown={handleKeyDown} onChange={handleChange} type='search' value={search} placeholder='search' />
        </form>
        { isLoggedIn &&
        <UserProfile handleLoggout={handleLoggout} />
        }
        <div>
          <Dropdown
          droplink1='login'
          droplink2= 'signup'
          img = 'login-logo.svg'
          item1 = "Login"
          item2 = "Signup"
          className= 'authentication-dropdown dropdown-link'
          />
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBarComp
