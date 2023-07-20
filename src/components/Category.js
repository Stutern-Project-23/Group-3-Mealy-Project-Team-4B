import React from "react";
import CategoryCard from "./CategoryCard";
import chinese from "../assets/chinese.svg";
import combo from "../assets/combo.svg";
import african from "../assets/african.svg";
import dinner from "../assets/dinner.svg";
import lunch from "../assets/lunch.svg";
import breakfast from "../assets/breakfast.svg";

const Category = () => {
  const cards = [
    {
      name: "Chinese",
      src: chinese,
    },
    {
      name: "African",
      src: african,
    },
    {
      name: "Breakfast",
      src: breakfast,
    },
    {
      name: "Lunch",
      src: lunch,
    },
    {
      name: "Dinner",
      src: dinner,
    },
    {
      name: "Combo",
      src: combo,
    },
  ];

  return (
    <div className="category-container">
      <div className="category-container-header">
        <h3>All Categories</h3>
      </div>
      <div className="category-div">
        {cards.map((card, index) => {
          return (
            <CategoryCard
              key={index}
              id={index}
              name={card.name}
              src={card.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
