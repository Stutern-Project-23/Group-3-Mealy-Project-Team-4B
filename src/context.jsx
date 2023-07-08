import { createContext, useState } from "react";

const GlobalContext = createContext({
  isShowModal: false,
  setIsShowModal: () => {},
  activeModal: "",
  setActiveModal: () => {},
  isLoggedin: false,
  setIsLoggedin: () => {},
  userData: {},
  setUserData: () => {},
  deliveryRestaurantData: {},
  setDeliveryRestaurantData: () => {},
  cartModalData: {},
  setCartModalData: () => {},
});

const GlobalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [userData, setUserData] = useState(null);
  const [restaurantData, setRestaurantData] = useState([]);
  const [cartModalData, setCartModalData] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        isShowModal,
        setIsShowModal,
        activeModal,
        setActiveModal,
        isLoggedin,
        setIsLoggedin,
        showSearchInput,
        setShowSearchInput,
        userData,
        setUserData,
        restaurantData,
        setRestaurantData,
        cartModalData,
        setCartModalData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
