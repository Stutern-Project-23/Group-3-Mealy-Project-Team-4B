import React, { useContext, useState } from "react";
import { GlobalContext } from "../context";
import food1 from "../assets/food1.png";

const Cart = () => {
  const { checkoutModalData } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(checkoutModalData.map(() => 0));

  const handleAddToCart = (index) => {
    setQuantity((prevQuantity) => {
      const updateQuantity = [...prevQuantity];
      updateQuantity[index] += 1;
      return updateQuantity;
    });
  };

  const handleRemoveFromCart = (index) => {
    setQuantity((prevQuantity) => {
      const updateQuantity = [...prevQuantity];
      if (updateQuantity[index] > 0) {
        updateQuantity[index] -= 1;
      }
      return updateQuantity;
    });
  };

  return (
    <div>
      <div>
        <h3>Your Cart</h3>
      </div>
      {checkoutModalData.map((item, index) => {
        return (
          <div key={index} id={index}>
            <div>
              <img src={food1} alt="food" />
            </div>
            <div>
              {" "}
              <p>{item.food}</p>
            </div>
            <div>
              <div>
                <button onClick={() => handleAddToCart(index)}>-</button>
              </div>
              <div>
                {" "}
                <p>{quantity[index]}</p>
              </div>
              <div>
                <button onClick={() => handleRemoveFromCart(index)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
