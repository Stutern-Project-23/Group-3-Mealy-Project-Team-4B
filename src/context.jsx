import { createContext, useState } from "react";

const GlobalContext = createContext({
  isShowModal: false,
  setIsShowModal: () => {},
  activeModal: "",
  setActiveModal: () => {},
  isLoggedin: false,
  setIsLoggedin: () => {},
});

const GlobalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isShowModal,
        setIsShowModal,
        activeModal,
        setActiveModal,
        isLoggedin,
        setIsLoggedin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
