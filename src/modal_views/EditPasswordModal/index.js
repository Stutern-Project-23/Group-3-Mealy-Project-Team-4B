import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../EditNameModal/Edit.css";
import { GlobalContext } from "../../context";

const EditPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassord, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");
  const { setShowIsShowModal, setActiveModal } = useContext(GlobalContext);

  const handleCloseEditPassword = () => {
    setActiveModal("");
    setShowIsShowModal(false);
  };

  const handleOldPassword = (e) => {
    const oldPasswordValue = e.target.value;
    setOldPassword(oldPasswordValue);
  };

  const handleNewPassword = (e) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);
  };

  const handleReEnterNewPassword = (e) => {
    const reNewPasswordValue = e.target.value;
    setReEnterNewPassword(reNewPasswordValue);
  };

  return (
    <div className="edit-wrapper">
      <div className="edit-container">
        <div className="edit-close">
          <Link onClick={handleCloseEditPassword}>x</Link>
        </div>
        <div>
          <h3>Edit Password</h3>
        </div>
        <div>
          <form>
            <div className="edit-form">
              <input
                type="password"
                placeholder="Old password"
                value={oldPassword}
                onChange={handleOldPassword}
              />
            </div>
            <hr className="hr-separator" />
            <div className="edit-form">
              <input
                type="password"
                placeholder="New password"
                value={newPassord}
                onChange={handleNewPassword}
              />
            </div>
            <hr className="hr-separator" />
            <div className="edit-form">
              <input
                type="password"
                placeholder="Re-enter New password"
                value={reEnterNewPassword}
                onChange={handleReEnterNewPassword}
              />
            </div>
            <hr className="hr-separator" />
            <div className="button-container">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
