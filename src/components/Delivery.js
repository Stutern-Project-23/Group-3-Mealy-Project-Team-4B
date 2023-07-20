import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context";
import chinese from "../assets/chinese.svg";

const Delivery = () => {
  const [deliveryRestaurants, setDeliveryRestaurants] = useState([]);
  const { setRestaurantData } = useContext(GlobalContext);
  // const { restaurantId } = useParams();

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
          console.log("this data is:", delivery);
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
        {deliveryRestaurants.map((restaurant) => (
          <div
            onClick={() => setRestaurantData(restaurant)}
            key={restaurant._id}
            className="all-category-container"
          >
            <Link to={`/restaurant-menu/${restaurant.name}`}>
              <div className="category-item-container">
                <img src={chinese} alt="african" />
                <h3>{restaurant.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Delivery;
