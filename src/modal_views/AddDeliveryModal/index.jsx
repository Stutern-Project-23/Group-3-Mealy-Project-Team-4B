import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import search from "../../assets/search.svg";
import locationIcon from "../../assets/location-icon.svg";
import sideImg from "../../assets/side-img.svg";

import "./AddDeliveryModal.css";

const AddDeliveryModal = ({ handleCloseAddDelivery }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const handleLocationSearch = (e) => {
    setLocationSearch(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Submit the location information to another API
    const data = {
      userAddress: address,
    };

    axios
      .post("https://mealyapp-bdev.onrender.com/api/v1/user/Signup", data)
      .then((response) => {
        console.log("Location submitted successfully:", response.data);
      })
      .catch((error) => {
        setError(
          "An error occurred while submitting the location. Please try again later."
        );
        console.error("Error:", error);
      });
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.log("Error:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  };

  useEffect(() => {
    if (coordinates) {
      const { lat, lon } = coordinates;
      const reverseGeocodeUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=bb980446e4d641e78055b76a60acc293`;

      axios
        .get(reverseGeocodeUrl)
        .then((response) => {
          const formattedAddress =
            response.data.features[0].properties.formatted;
          setAddress(formattedAddress);
          setLocationSearch(formattedAddress);
          // handleLocationSubmit();
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  }, [coordinates]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLocationSubmit(e);
    }
  };

  return (
    <div className="delivery-wrapper">
      <div className="delivery-container">
        <div className="left-div">
          <div>
            <div className="x-div">
              <Link onClick={handleCloseAddDelivery}>x</Link>
            </div>
            <h2> Add a delivery address </h2>
          </div>
          <div className="address">
            <form onSubmit={handleLocationSubmit}>
              <div className="delivery-search">
                <img src={search} alt="search" />
                <input
                  onChange={handleLocationSearch}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Search street, city, district..."
                  value={locationSearch}
                />
              </div>
            </form>
          </div>
          <div className="location">
            <img src={locationIcon} alt="location" />
            <Link onClick={handleCurrentLocationClick}>
              Use current location
            </Link>
          </div>
          {error && (
            <div className="error-address">
              <p>Error: {error}</p>
            </div>
          )}
          {address && (
            <div className="valid-address">
              <p>Address: {address}</p>
            </div>
          )}
          <div>
            <p>Or set your location on the map</p>
          </div>
        </div>
        <div className="right-div">
          <img src={sideImg} alt="side" />
        </div>
      </div>
    </div>
  );
};

export default AddDeliveryModal;
