import React from "react";

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card" onClick={props.onRestaurantClick}>
      <div>
        <h3>
          <span>
            <img src={props.logoSrc} alt={props.logoAlt} />
          </span>
          {props.name}
        </h3>
      </div>
      <div>
        <img
          src={`
        images/restaurants/breakfast-hub.svg`}
          alt={props.mealAlt}
        />
      </div>
      <div className="restaurant-card-span">
        {/* <span>⭐</span> */}
        <span>{props.rating}</span>
        {/* <span>Excellent</span>
        <span>Delivery: {props.price}</span> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
