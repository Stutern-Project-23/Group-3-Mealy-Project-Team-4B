import { useContext } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import AddDeliveryModal from "./AddDeliveryModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import CreateNewPasswordModal from "./CreateNewPasswordModal";
import EditNameModal from "./EditNameModal";
import OtpActivationModal from "../modal_views/OtpActivationModal";

import { GlobalContext } from "../context";
import EditPassword from "./EditPasswordModal";
import CartModal from "./CartModal";

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
    const createNewPasswordModal = (
      <CreateNewPasswordModal handleCreateNewPassword={handleModalClose} />
    );

    const otpActivationModal = (
      <OtpActivationModal handleCloseOtpModal={handleModalClose} />
    );
    const cartModal = <CartModal handleCartModalClose={handleModalClose} />;
    const editNameModal = <EditNameModal />;
    const editPasswordModal = <EditPassword />;

    switch (activeModal) {
      case "signupModal":
        return singupModal;
      case "loginModal":
        return loginModal;
      case "addDeliveryModal":
        return addDeliveryModal;
      case "forgotPasswordModal":
        return forgotPasswordModal;
      case "createNewPasswordModal":
        return createNewPasswordModal;
      case "editNameModal":
        return editNameModal;
      case "editPasswordModal":
        return editPasswordModal;
      case "otpActivationModal":
        return otpActivationModal;
      case "cartModal":
        return cartModal;

      default:
        return null;
    }
  };

  return renderModal();
};

export default ModalControl;
