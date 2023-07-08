import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GlobalContext } from "../context";
import Cart from "./Cart";
import dish from "../assets/dish.svg";
// import "../pages/RestaurantMenu/RestaurantMenu.css";
// import cartModal from "../modal_views/CartModal";

const SideSec = () => {
  const { setActiveModal, restaurantData, setCartModalData, setIsShowModal } =
    useContext(GlobalContext);
  const [active, setActive] = useState("Specials");

  const handleCartModalName = (menu) => {
    setIsShowModal(true);
    setActiveModal("cartModal");
    setCartModalData(menu);
    console.log(menu);
  };

  if (!restaurantData) {
    return <p>Loading...</p>;
  }

  return (
    <main className="sidesec-main">
      <section>
        <div className="sidesec-header">
          <h3>{restaurantData.name}</h3>
          <p>Good food to start your day right</p>
          <p>
            <span>⭐⭐⭐⭐⭐</span> 4.6 Excellent (70+)
          </p>
        </div>
        <div className="sidesec-search">
          <input type="search" placeholder="Search menu items" />
          <BsSearch />
        </div>
        <hr />
        <div className="sidesec-note">
          <p>Note: Bulk order takes 24hours</p>
        </div>
        <div className="sidesec-button">
          <button
            onClick={() => setActive("Specials")}
            className={`${active === "Specials" && "active"}`}
          >
            Specials
          </button>
          <button
            onClick={() => setActive("Quick Fixes")}
            className={`${active === "Quick Fixes" && "active"}`}
          >
            Quick Fixes
          </button>
          <button
            onClick={() => setActive("Extras & Sides")}
            className={`${active === "Extras & Sides" && "active"}`}
          >
            Extras & Sides
          </button>
        </div>
        <article>
          <div className="sidesec-active">
            <h2>{active}</h2>
          </div>
          {restaurantData.menu.map((menuItem, index) => (
            <div className="sidesec-menu-item" key={index}>
              <div className="sidesec-right">
                <div>
                  <h3 onClick={() => handleCartModalName(menuItem)}>
                    {menuItem}
                  </h3>
                </div>
                <div>
                  <p>{menuItem} and bread serving 15 people</p>
                </div>
                <div>$ 5000</div>
              </div>
              <div className="sidesec-left">
                <img src={dish} alt="dish" />
              </div>
            </div>
          ))}
        </article>
      </section>
      <div className="left-cart">
        <Cart />
      </div>
    </main>
  );
};

export default SideSec;
