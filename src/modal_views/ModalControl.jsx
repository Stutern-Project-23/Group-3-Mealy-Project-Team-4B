import { useContext } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import AddDeliveryModal from "./AddDeliveryModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import CreateNewPasswordModal from "./CreateNewPasswordModal";
import EditNameModal from "./EditNameModal";

import { GlobalContext } from "../context";
import EditPassword from "./EditPasswordModal";

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

      default:
        return null;
    }
  };

  return renderModal();
};

export default ModalControl;
