import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";

const UserProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState("");
  const { setIsShowModal, setActiveModal } = useContext(GlobalContext);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const url = "";
    try {
      const res = await axios.get(url);
      const data = res.data;
      setUserData(data);
    } catch (err) {
      console.log("Error fetching user data", err);
    }
  };

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
  const handleLoggout = () => {
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
          <h2>{`hello ${userData.name}`}</h2>
          <div>
            <div className="profile-edit">
              <h4>Name </h4>
              <Link onClick={handleOpenEditName}>Edit</Link>
            </div>

            <p>{userData.name}</p>
          </div>
          <div>
            <h4>Email </h4>
            <p>{userData.email}</p>
          </div>
          <hr />
          <div>
            <div className="profile-edit">
              <h4>Password </h4>
              <Link onClick={handleOpenEditPassword}>Edit</Link>
            </div>

            <p>{userData.password}</p>
          </div>
          <hr />
          <div>
            <h3>Payment method </h3>
            <p>
              <span>
                <img src="images/money.svg" alt="money" />
              </span>
              Add a new card
            </p>
          </div>
          <div>
            <p>
              <span>
                <img src="images/money.svg" alt="money" />
              </span>
              Wallet
            </p>
          </div>
          <div>
            <button onClick={handleLoggout}>
              <img src="images/power.svg" alt="power-button" />
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
