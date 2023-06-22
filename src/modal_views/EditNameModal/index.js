import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Edit.css";
import { GlobalContext } from "../../context";

const EditName = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setIsShowModal, setActiveModal } = useContext(GlobalContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleCloseEditName = () => {
    setActiveModal("");
    setIsShowModal(false);
  };

  return (
    <div className="edit-wrapper">
      <div className="edit-container">
        <div className="edit-close">
          <Link onClick={handleCloseEditName}>x</Link>
        </div>
        <div>
          <h3>Your detail </h3>
        </div>
        <form>
          <div className="edit-form">
            <img src="../images/edit-name.svg" alt="edit-name" />
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                onChange={handleNameChange}
                type="text"
                placeholder="Account holder name"
                value={name}
              />
            </div>
          </div>
          <hr className="hr-separator" />

          <div className="edit-form">
            <img src="../images/email.svg" alt="email" />
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                onChange={handleEmailChange}
                type="email"
                placeholder="Account holder email"
                value={email}
              />
            </div>
          </div>
          <hr className="hr-separator" />
          <div className="button-container">
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditName;
