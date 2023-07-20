import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context";
import combo from "../assets/combo.svg";

const Pickup = () => {
  const [pickupRestaurants, setPickupRestaurants] = useState([]);
  const { setRestaurantData } = useContext(GlobalContext);
  // const { restaurantId } = useParams();

  useEffect(() => {
    fetch(
      "https://mealyapp-bdev.onrender.com/api/v1/restaurant/keyword/?restaurants=PickUp"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          const pickUp = data.data.restaurants.filter(
            (restaurant) =>
              restaurant.deliveryCategory === "Pickup Restaurant" ||
              restaurant.deliveryCategory === "Pickup"
          );
          setPickupRestaurants(pickUp);
          // setRestaurantData(pickUp);
          console.log("this is pickup", pickUp);
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
        {pickupRestaurants.map((restaurant) => (
          <div
            onClick={() => setRestaurantData(restaurant)}
            key={restaurant._id}
            className="all-category-container"
          >
            <Link to={`/restaurant-menu/${restaurant.name}`}>
              <div className="category-item-container">
                <img src={combo} alt="african" />
                <h3> {restaurant.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pickup;
