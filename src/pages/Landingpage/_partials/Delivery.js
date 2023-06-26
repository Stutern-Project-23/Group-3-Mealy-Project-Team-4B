import React, { useEffect, useState } from "react";

const Delivery = () => {
  const [deliveryRestaurants, setDeliveryRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Delivery"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          const { restaurants } = data.data;
          const delivery = restaurants.filter(
            (restaurant) =>
              restaurant.deliveryCategory === "Delivery Restaurant" ||
              restaurant.deliveryCategory === "Delivery"
          );
          setDeliveryRestaurants(delivery);
        } else {
          console.error("API request failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h3>Restaurants offering Delivery:</h3>
      <ul>
        {deliveryRestaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Delivery;
