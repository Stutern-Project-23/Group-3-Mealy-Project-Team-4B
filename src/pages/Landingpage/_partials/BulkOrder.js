import React, { useEffect, useState } from "react";

const BulkOrder = () => {
  const [bulkOrderRestaurants, setBulkOrderRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Bulk"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          const { restaurants } = data.data;
          setBulkOrderRestaurants(restaurants);
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
      <h3>Bulk Order Restaurants:</h3>
      <ul>
        {bulkOrderRestaurants.map((restaurant) => (
          <li key={restaurant._id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulkOrder;
