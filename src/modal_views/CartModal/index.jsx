import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import cartModal from "./cartmodal.svg";
import "./cartModal.css";

const CartModal = ({ handleCartModalClose }) => {
  const { cartModalData, setCheckoutModalData } = useContext(GlobalContext);
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

  const handleAddToCart = (food) => {
    const data = { food, count };
    setCheckoutModalData((prevData) => [...prevData, data]);
    console.log(data);
    console.log(data.food);
    console.log(data.count);
  };

  return (
    <div className="cart-modal-wrapper">
      <div className="cart-modal-container">
        <div className="cart-modal-link">
          <Link onClick={handleCartModalClose}>X</Link>
        </div>
        <div className="cart-modal-image">
          <img src={cartModal} alt="cart-modal" />
        </div>
        <div className="cart-modal-bottom">
          <div className="cart-modal-botom-wrapper">
            <div className="cart-modal-h1">
              <h3>{cartModalData}</h3>
            </div>
            <div className="cart-modal-p">
              <p>
                120g of yam, potatoes and plantain, served with sauteed
                vegetables, egg sauce & sausage
              </p>
            </div>
            <div>$ 3,000</div>
            <div className="cart-modal-buttons">
              <div className="cart-modal-add-remove">
                <button className="cart-add" onClick={handleDecrement}>
                  -
                </button>
                <span>{count}</span>
                <button className="cart-remove" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <div className="cart-modal-add-to-cart">
                <button onClick={() => handleAddToCart(cartModalData)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
