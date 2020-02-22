import React from "react";
import "./BoxContact.css";

const BoxContact = ({ contactImg, contactName, clickChat, notifChat }) => {
  return (
    <div className="inbox-chat" onClick={clickChat} href="#chat">
      <div className="chat-list">
        <span className="float-right badge badge-primary rounded-circle">
          {notifChat}
        </span>
        <div className="chat-people">
          <div className="chat-img">
            {" "}
            <img src={contactImg} alt="" />
          </div>
          <div className="chat-mini">
            <h5>{contactName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxContact;
