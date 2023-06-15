import React, { useState } from "react";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";

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
    <div className="grid grid-cols-3 gap-3 mb-5 border-2 px-2 py-4 place-items-center">
      <img src={img} className="rounded-xl" />
      <div>
        <p className="text-lg font-medium">{heading}</p>
        <p>${price.toLocaleString()}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            if (amount <= 1) {
              return;
            }
            setAmount((prev) => prev - 1);
          }}
          className="px-2 text-lg font-semibold border-2 rounded-full"
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
    <aside
      className={`absolute md:max-w-xs lg:max-w-[400px] md:relative md:top-0 top-[4rem] ${
        !props.shown && "hidden md:block"
      } left-0 py-5 px-3 shadow-xl rounded-2xl bg-white w-full `}
    >
      <h1 className="text-2xl mb-5 font-medium text-center">Your Cart</h1>
      <section>
        {CartData.map((item) => {
          return <CartDiv {...item} key={item.id} />;
        })}
      </section>
      <button
        onClick={() => {
          props.setHidden(!props.shown);
        }}
        className="mt-5 w-full bg-brandmain text-white py-3 rounded-lg"
      >
        CHECKOUT
      </button>
    </aside>
  );
};

export default Cart;
