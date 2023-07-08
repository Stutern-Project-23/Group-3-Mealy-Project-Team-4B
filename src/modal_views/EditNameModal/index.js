import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Edit.css";
import { GlobalContext } from "../../context";
import axios from "axios";

const EditName = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setIsShowModal, setActiveModal } = useContext(GlobalContext);
  const { userData, setUserData } = useContext(GlobalContext);

  const userId = userData._id;

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const payLoad = {
      userName: name,
      email: email,
    };

    axios
      .post(`https://mealyapp-bdev.onrender.com/api/v1/user/${userId}`, payLoad)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => console.error(error));
  };

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
        <form onSubmit={handleEditSubmit}>
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
