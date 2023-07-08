import React, { useState } from "react";
import UserProfile from "./UserProfile";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context";
import YourOrder from "./YourOrder";
import mealyLogo from "../assets/mealy-logo.svg";
import locationPin from "../assets/location-pin.svg";
import dropDown from "../assets/dropdown.svg";
import profile from "../assets/profile.svg";

const NavBarComp = ({ showSearchInput }) => {
  const [search, setSearch] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { logout, setActiveModal, setIsShowModal, userData } =
    useContext(GlobalContext);

  const toggleShowAddress = () => {
    setIsShowModal(true);
    setActiveModal("addDeliveryModal");
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

  const handleLogout = () => {
    logout();
  };
  const handleHanburgerClick = () => {
    setShowOrder(!showOrder);
  };

  const address = userData?.userAddress;

  return (
    <nav className="land-page-nav">
      <div className="mealy-address">
        <div className="mealy-logo">
          <img src={mealyLogo} alt="mealy-log" />
        </div>

        <div>
          <button className="dropdown" onClick={toggleShowAddress}>
            <img src={locationPin} alt="location-pin" />
            <p>{address}</p>
            <img src={dropDown} alt="dropdown" />
          </button>
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
            <div className="hanburger">
              <button onClick={handleHanburgerClick}>
                <img src={profile} alt="hamburger" />
              </button>
            </div>

            <UserProfile handleLogout={handleLogout} />
          </div>
        </div>
        <ul>
          {searchResults.map((result) => {
            return <li key={result.id}>{result.name}</li>;
          })}
        </ul>
      </div>
      {showOrder && <YourOrder />}
    </nav>
  );
};

export default NavBarComp;
