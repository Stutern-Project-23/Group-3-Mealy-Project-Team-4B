// import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";
import money from "../assets/money.svg";
import power from "../assets/power.svg";

const UserProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [userData, setUserData] = useState("");
  const { setIsShowModal, setActiveModal, userData } =
    useContext(GlobalContext);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenEditName = () => {
    setIsShowModal(true);
    setActiveModal("editNameModal");
  };

  const handleOpenEditPassword = () => {
    setIsShowModal(true);
    setActiveModal("editPasswordModal");
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div>
        <NavLink onClick={handleDropdown}>
          <img
            className="profile-image"
            src="../images/login-logo.svg"
            alt="profile"
          />
        </NavLink>
      </div>
      {isOpen && (
        <div className="profile-dropdown">
          <h2>{`Hello: ${userData?.userName}`}</h2>
          <div>
            <div className="profile-edit">
              <h4> name</h4>
              <Link onClick={handleOpenEditName}>Edit</Link>
            </div>

            <p>{userData.userName}</p>
          </div>
          <div>
            <h4>Email </h4>
            <p>{userData?.email}</p>
          </div>
          <hr />
          <div>
            <div className="profile-edit">
              <h4>Password </h4>
              <Link onClick={handleOpenEditPassword}>Edit</Link>
            </div>

            <p></p>
          </div>
          <hr />
          <div>
            <h3>Payment method </h3>
            <p>
              <span>
                <img src={money} alt="money" />
              </span>
              Add a new card
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src={money} alt="money" />
              </span>
              Wallet
            </p>
          </div>
          <div>
            <button onClick={handleLogout}>
              <img src={power} alt="power-button" />
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
