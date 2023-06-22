import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./AddDeliveryModal.css";

const AddDeliveryModal = ({ handleCloseAddDelivery }) => {
  const [locationSearch, setLocationSearch] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handleLocationSearch = (e) => {
    setLocationSearch(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Submit the location information to another API
    const data = {
      address: address,
    };

    axios
      .post("https://example.com/submit-location", data)
      .then((response) => {
        // Handle the response from the submit location API
        console.log("Location submitted successfully:", response.data);
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        setError(
          "An error occurred while submitting the location. Please try again later."
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
          // Perform API request to Geoapify Geocoding API using Axios
          const apiKey = "bb980446e4d641e78055b76a60acc293";
          axios
            .get(
              `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
            )
            .then((response) => {
              // Handle the geocoding API response data
              const result = response.data.features[0];
              if (result) {
                const addressDetails = result.properties;
                const houseNumber = addressDetails.housenumber || "";
                const street = addressDetails.street || "";
                const formattedAddress = `${houseNumber} ${street}`;
                setAddress(formattedAddress);
                // Call the handleLocationSubmit function to submit the location
                handleLocationSubmit();
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
            <img src="images/location/location-icon.svg" alt="location" />
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
          <img src="images/location/side-img.svg" alt="side" />
        </div>
      </div>
    </div>
  );
};

export default AddDeliveryModal;
