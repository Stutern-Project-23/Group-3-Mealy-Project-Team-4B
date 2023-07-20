import React from "react";

const HomeThirdDiv = () => {
  const cards = [
    {
      id: 1,
      name: "Breakfast Hub",
      icon: "images/homepage/card/left-icon.svg",
      image: "images/homepage/card/left-image.svg",
    },
    {
      id: 2,
      name: "Gory Home",
      icon: "images/homepage/card/mid-icon.svg",
      image: "images/homepage/card/mid-image.svg",
    },
    {
      id: 3,
      name: "Breakfast Hub",
      icon: "images/homepage/card/right-icon.svg",
      image: "images/homepage/card/right-image.svg",
    },
  ];

  return (
    <div className="third-div-container">
      <div className="third-div-h3">
        <h3>
          Most Popular <span>Restaurants</span>
        </h3>
      </div>
      <div className="third-div-wrapper">
        {cards.map((card) => (
          <div className="third-card-wrapper" key={card.id}>
            <div id={card.id}>
              <div className="img-h3">
                <img src={card.icon} alt="Icon" />
                <h4>{card.name}</h4>
              </div>
              <div>
                <img className="main-image" src={card.image} alt="Restaurant" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeThirdDiv;
