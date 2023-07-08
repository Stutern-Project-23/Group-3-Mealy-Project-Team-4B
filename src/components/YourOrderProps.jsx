import React from "react";
import { Link } from "react-router-dom";
import "../styles/yourOrder.css";

const YourOrderProps = (props) => {
  return (
    <div>
      <div>
        <div className="order">
          <div>
            <h3>Full Breakfast</h3>
            <p>date1</p>
          </div>
          <div>
            <Link to="re-order">{props.action}</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="order">
          <div>
            <h3>French Toast</h3>
            <p>date2</p>
          </div>
          <div>
            <Link to="re-order">{props.action}</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="order">
          <div>
            <h3>Full Pancakes</h3>
            <p>date3</p>
          </div>
          <div>
            <Link to="re-order">{props.action}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrderProps;
