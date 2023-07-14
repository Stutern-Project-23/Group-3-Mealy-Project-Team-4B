import React, { useContext, useState } from "react";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import { GlobalContext } from "../context";

const CartData = [
  {
    id: 1,
    heading: "Full Breakfast",
    price: 3000,
    text: "Yam, potatoes and plantain, served with sauteed vegetables..",
    img: food1,
  },
  {
    id: 2,
    heading: "Full Breakfast",
    price: 3000,
    text: "Bread, potatoes and plantain, served with sauteed vegetables..",
    img: food2,
  },
  {
    id: 3,
    heading: "French Toast",
    price: 3000,
    text: "Toast, egg, avocado and mayo served with sauteed vegetables..",
    img: food3,
  },
];

const CartDiv = ({ img, heading, price }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="your-cart-item-wrapper">
      <div className="your-cart-image">
        <img src={img} className="" />
      </div>
      <div>
        <p className="">{heading}</p>
        <p>${price.toLocaleString()}</p>
      </div>
      <div className="your-cart-button">
        <button
          onClick={() => {
            if (amount <= 1) {
              return;
            }
            setAmount((prev) => prev - 1);
          }}
          className=""
        >
          -
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            setAmount((prev) => prev + 1);
          }}
          className="px-2 text-lg font-semibold border-2 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <div className="sidebar-aside-container">
      <div className="sidebar-h1">
        <h1>Your Cart</h1>
      </div>
      <section>
        {CartData.map((item) => {
          return <CartDiv {...item} key={item.id} />;
        })}
      </section>
      <div className="checkout-div">
        <button
          onClick={() => {
            props.setHidden(!props.shown);
          }}
          className="your-cart-checkout-button"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
