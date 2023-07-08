import React, { useState } from "react";
import "../styles/yourOrder.css";
import YourOderCompleted from "./YourOrderCompleted";
import YourOrderOutgoing from "./YourOrderOutgoing";

const YourOrder = () => {
  const [activeDisplay, setActiveDisplay] = useState("outgoing");
  const handleOutgoingClick = () => {
    setActiveDisplay("outgoing");
  };
  const handleCompletedClick = () => {
    setActiveDisplay("completed");
  };

  return (
    <div className="your-order-wrapper">
      <div className="your-order-container">
        <div>
          <h2>Your Orders</h2>
        </div>
        <nav className="your-order-nav">
          <div
            className={`your-order-link ${
              activeDisplay === "outgoing" ? "active-link" : ""
            }`}
          >
            <button onClick={handleOutgoingClick}>Outgoing</button>
          </div>
          <div
            className={`your-order-link ${
              activeDisplay === "completed" ? "active-link" : ""
            }`}
          >
            <button onClick={handleCompletedClick}>Completed</button>
          </div>
        </nav>
        {activeDisplay === "outgoing" && <YourOrderOutgoing />}
        {activeDisplay === "completed" && <YourOderCompleted />}
      </div>
    </div>
  );
};

export default YourOrder;
