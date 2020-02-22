import React from "react";
import "./Received.css";

const Received = ({ textReceiver, imageReceiver, timeReceived }) => {
  return (
    <React.Fragment>
      <div className="message-in">
        <div className="message-in-img">
          <img src={imageReceiver} alt="" />
        </div>
        <div className="received-message">
          <div className="message-received-text">
            <p>{textReceiver}</p>
            <span className="time-received">{timeReceived}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Received;
