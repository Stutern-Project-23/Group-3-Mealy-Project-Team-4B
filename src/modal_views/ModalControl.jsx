import { useContext } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import AddDeliveryModal from "./AddDeliveryModal";
import ForgotPasswordModal from "../components/ForgotPasswordModal";

import { GlobalContext } from "../context";

const ModalControl = () => {
  const { setIsShowModal, setActiveModal, activeModal } =
    useContext(GlobalContext);

  const handleModalClose = () => {
    setIsShowModal(false);
    setActiveModal("");
  };

  const renderModal = () => {
    const loginModal = <LoginModal handleCloseLogin={handleModalClose} />;
    const singupModal = <SignupModal handleCloseSignup={handleModalClose} />;
    const addDeliveryModal = (
      <AddDeliveryModal handleCloseAddDelivery={handleModalClose} />
    );
    const forgotPasswordModal = (
      <ForgotPasswordModal handleCloseForgotPassword={handleModalClose} />
    );

    switch (activeModal) {
      case "signupModal":
        return singupModal;
      case "loginModal":
        return loginModal;
      case "addDeliveryModal":
        return addDeliveryModal;
      case "forgotPasswordModal":
        return forgotPasswordModal;
      default:
        return null;
    }
  };

  return renderModal();
};

export default ModalControl;
