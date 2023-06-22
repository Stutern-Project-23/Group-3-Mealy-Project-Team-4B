import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="dropdown-btn" onClick={toggleDropDown}>
        {props.name}
        <img src={`../images/${props.img}`} alt={props.alt} />
      </button>
      {isOpen && (
        <div className={props.className}>
          <Link to={props.droplink1} onClick={props.onClick1}>
            <img src={props.src1} alt={props.alt1} />
            {props.item1}
            <img src={props.src11} alt={props.alt11} />
          </Link>
          <br />
          <Link to={props.droplink2} onClick={props.onClick2}>
            <img src={props.src2} alt={props.alt2} />
            {props.item2}
            <img src={props.src22} alt={props.alt22} />
          </Link>
          <br />
          <Link to={props.droplink3} onClick={props.onClick3}>
            <img src={props.src3} alt={props.alt3} />
            {props.item3}
            <img src={props.src33} alt={props.alt33} />
          </Link>
          <br />
          <Link to={props.droplink4} onClick={props.onClick4}>
            <img src={props.src4} alt={props.alt4} />
            {props.item4}
            <img src={props.src44} alt={props.alt44} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
