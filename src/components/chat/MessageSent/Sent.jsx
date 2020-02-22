import React from "react";
import "./Sent.css";

const Sent = ({ textSent, imgSent, imageSent, timeSent, deletePesan }) => {
  return (
    <React.Fragment>
      <div className="message-out">
        <div className="sent-message">
          <div
            className="message-sent"
            data-toggle="modal"
            data-target="#deletepesan"
            data-backdrop="false"
          >
            <p>{textSent}</p>
            <span className="time-send">{timeSent}</span>
            <img src={imgSent} alt="" />
          </div>
        </div>
        <div className="message-out-img">
          <img src={imageSent} alt="" />
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="deletepesan"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <p className="modal-title" id="exampleModalCenterTitle">
                Hapus Pesan
              </p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ color: "#fff" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body text-center">
              Apakah anda ingin menghapus pesan ini ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={deletePesan}
              >
                Hapus Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sent;
