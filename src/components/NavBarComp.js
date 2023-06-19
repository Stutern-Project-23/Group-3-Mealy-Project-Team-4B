import React, { useState } from "react";
import Dropdown from "./Dropdown";
import UserProfile from "./UserProfile";
// import SignUp from './SignUp';
import axios from "axios";
import LoginModal from "../modal_views/LoginModal";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";

const NavBarComp = ({ showSearchInput }) => {
  const [search, setSearch] = useState("");
  // const [isLoggedIn, setIsloggedIn] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  // const [signUpOpen, setSignupOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { isLoggedIn, login, logout } = useContext(LoginContext);

  // const handleSignUpClick = () =>{
  //   setSignupOpen(true)
  // }

  // const handleCloseSignUp = () =>{
  //   setSignupOpen(false)
  // }

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };
  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      const url = `https://mealyapp-bdev.onrender.com/api/v1/restaurant/category?category=${search}`;

      axios
        .get(url, {
          params: {
            query: search,
          },
        })
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((err) => {
          console.log(err);
          setSearchResults([]);
        });
    }
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handleLoggout = () => {
    logout();
  };

  return (
    <nav className="land-page-nav">
      <div className="mealy-n-dropdown">
        <div className="mealy-logo">
          <img src="images/mealy-logo.svg" alt="mealy-log" />
        </div>
        <div className="dropdown">
          <div>
            <img src="images/location-pin.svg" alt="location-pin" />
          </div>
          <div>
            <Dropdown
              name="Add Address"
              item1="My Location"
              item2="Set Address"
              img="dropdown.svg"
              className="address-dropdown dropdown-link"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="form-div">
          {showSearchInput && (
            <form onSubmit={handleSearch}>
              <input
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                type="search"
                value={search}
                placeholder="search"
              />
            </form>
          )}
          {isLoggedIn && <UserProfile handleLoggout={handleLoggout} />}
          <div>
            <Dropdown
              onClick1={handleLoginClick}
              // onClick2= {handleSignUpClick}
              // droplink1='/login'
              // droplink2= '/signup'
              img="login-logo.svg"
              src1="images/login-logo.svg"
              item1="Login"
              className="authentication-dropdown dropdown-link"
            />
          </div>
        </div>
        <ul>
          {searchResults.map((result) => {
            return <li key={result.id}>{result.name}</li>;
          })}
        </ul>
        {loginOpen && <LoginModal handleCloseLogin={handleCloseLogin} />}
      </div>
    </nav>
  );
};

export default NavBarComp;
