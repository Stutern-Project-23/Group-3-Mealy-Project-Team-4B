import React, { useEffect, useState } from "react";

const Pickup = () => {
  const [pickupRestaurants, setPickupRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=PickUp"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          const restaurants = data.data.restaurants.filter(
            (restaurant) =>
              restaurant.deliveryCategory === "Pickup Restaurant" ||
              restaurant.deliveryCategory === "Pickup"
          );
          setPickupRestaurants(restaurants);
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
      <h3>Restaurants offering Pickup:</h3>
      <ul>
        {pickupRestaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pickup;
