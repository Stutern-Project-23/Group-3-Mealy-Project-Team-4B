import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./AddDeliveryModal.css";

const AddDeliveryModal = ({ handleCloseAddDelivery }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handlelocationSearch = (e) => {
    setLocationSearch(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Perform API request to Google Maps Geocoding API using Axios
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: locationSearch,
          key: "YOUR_GOOGLE_MAPS_API_KEY",
        },
      })
      .then((response) => {
        // Handle the geocoding API response data
        const results = response.data.results;
        if (results && results.length > 0) {
          const formattedAddress = results[0].formatted_address;
          setAddress(formattedAddress);
        } else {
          setError("No results found for the provided address.");
        }
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        setError(
          "An error occurred while fetching the location. Please try again later."
        );
        console.error("Error:", error);
      });
  };

  const handleCurrentLocationClick = () => {
    // Check if the Geolocation API is supported by the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Perform API request to Google Maps Geocoding API using Axios
          axios
            .get("https://maps.googleapis.com/maps/api/geocode/json", {
              params: {
                latlng: `${latitude},${longitude}`,
                key: "YOUR_GOOGLE_MAPS_API_KEY",
              },
            })
            .then((response) => {
              // Handle the geocoding API response data
              const results = response.data.results;
              if (results && results.length > 0) {
                const formattedAddress = results[0].formatted_address;
                setAddress(formattedAddress);
              } else {
                setError("No results found for the current location.");
              }
            })
            .catch((error) => {
              // Handle any error that occurred during the API request
              setError(
                "An error occurred while fetching the location. Please try again later."
              );
              console.error("Error:", error);
            });
        },
        (error) => {
          setError("Failed to retrieve your current location.");
          console.error("Error:", error);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

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
                <img src="images/location/search.svg" alt="search" />
                <input
                  onChange={handlelocationSearch}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Search street, city, district..."
                  value={locationSearch}
                />
              </div>
            </form>
          </div>
          <div className="location">
            <img src="images/location/location-icon.svg" alt="location" />
            <Link onClick={handleCurrentLocationClick}>
              Use current location
            </Link>
          </div>
          <div>
            <p>Or set your location on the map</p>
          </div>
        </div>
        <div className="right-div">
          <img src="images/location/side-img.svg" alt="side" />
        </div>
      </div>
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
      {address && (
        <div>
          <p>Address: {address}</p>
        </div>
      )}
    </div>
  );
};

export default AddDeliveryModal;
