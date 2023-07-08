import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import "./cartModal.css";

const CartModal = ({ handleCartModalClose }) => {
  const { cartModalData } = useContext(GlobalContext);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="cart-modal-wrapper">
      <div className="cart-modal-container" onClick={handleCartModalClose}>
        <Link>X</Link>
        <div>
          <img src="cartmodal.svg" alt="cartmodal" />
        </div>
        <div>
          <h3>{cartModalData}</h3>
        </div>
        <div>
          <p>
            120g of yam, potatoes and plantain, served with sauteed vegetables,
            egg sauce & sausage
          </p>
        </div>
        <div>$ 3,000</div>
        <div>
          <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
