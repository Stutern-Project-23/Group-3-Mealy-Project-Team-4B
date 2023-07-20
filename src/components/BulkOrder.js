import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context";
import african from "../assets/african.svg";

const BulkOrder = () => {
  const [bulkOrderRestaurants, setBulkOrderRestaurants] = useState([]);
  const { setRestaurantData } = useContext(GlobalContext);
  // const { restaurantId } = useParams();

  useEffect(() => {
    fetch(
      "https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=Bulk"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          const { restaurants } = data.data;
          setBulkOrderRestaurants(restaurants);
          // setBulkOrderRestaurantData(restaurants);
          console.log("this is bulk order:", restaurants);
        } else {
          console.error("API request failed:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="category-delivery-container">
      <ul>
        {bulkOrderRestaurants.map((restaurant) => (
          <div
            onClick={() => setRestaurantData(restaurant)}
            key={restaurant._id}
            className="all-category-container"
          >
            <Link to={`/restaurant-menu/${restaurant.name}`}>
              <div className="category-item-container">
                <img src={african} alt="african" />
                <h3>{restaurant.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BulkOrder;
