import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { BiCart, BiMenu } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Cart from "./Cart";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <footer className="flex justify-between py-4 items-center px-3 md:px-20">
        <div className="flex items-center gap-5">
          <h2 className="text-brandmain text-2xl font-medium">Mealy</h2>
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <p>32, Kingston Street</p>
            <BsChevronDown />
          </div>
        </div>
        <div
          onClick={() => {
            setHidden(!hidden);
          }}
          className="md:hidden text-2xl"
        >
          <BiCart />
        </div>
        <div className="hidden md:flex text-2xl">
          <BiMenu />
          <AiOutlineUser />
        </div>
      </footer>
      <div className="md:hidden">
        <Cart shown={hidden} setHidden={setHidden} />
      </div>
    </>
  );
};

export default Header;
