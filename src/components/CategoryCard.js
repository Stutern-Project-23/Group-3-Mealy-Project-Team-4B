import React from "react";

const CategoryCard = (props) => {
  return (
    <div onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
      <p>{props.name}</p>
    </div>
  );
};

export default CategoryCard;
