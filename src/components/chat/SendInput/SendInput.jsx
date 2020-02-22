import React from "react";

import "./SendInput.css";

const SendInput = ({
  submitSend,
  clickSend,
  clickEmoji,
  handleSend,
  SendInputId,
  idValue
}) => {
  return (
    <React.Fragment>
      <form onSubmit={submitSend} className="input-form" id={SendInputId}>
        <div className="input-content">
          <div className="input-message-write">
            <i className="far fa-grin btn-upload" onClick={clickEmoji} />
            <input
              id={idValue}
              type="text"
              className="form-send"
              placeholder="Masukan pesan"
              onChange={handleSend}
              autoComplete="off"
            />
            <i className="fa fa-paper-plane btn-send" onClick={clickSend} />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SendInput;
