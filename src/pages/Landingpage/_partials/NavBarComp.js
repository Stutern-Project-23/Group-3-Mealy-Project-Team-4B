import React, { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import UserProfile from "../../../components/UserProfile";
// import SignUp from './SignUp';
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../../context";

const NavBarComp = ({ showSearchInput }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { logout } = useContext(GlobalContext);

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
      <div className="mealy-address">
        <div className="mealy-logo">
          <img src="images/mealy-logo.svg" alt="mealy-log" />
        </div>

        <div className="dropdown">
          <img src="images/location-pin.svg" alt="location-pin" />
          <p>address</p>
          <img src="images/dropdown.svg" alt="dropdown" />
        </div>
      </div>

      <div>
        <div className="form-div">
          {showSearchInput && (
            <div className="nav-form">
              <form onSubmit={handleSearch}>
                <input
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                  type="search"
                  value={search}
                  placeholder="search"
                />
              </form>
            </div>
          )}
          <div className="profile-div">
            <Dropdown
              img="profile.svg"
              className="authentication-dropdown dropdown-link"
            />
            <UserProfile handleLoggout={handleLoggout} />
          </div>
        </div>
        <ul>
          {searchResults.map((result) => {
            return <li key={result.id}>{result.name}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComp;
