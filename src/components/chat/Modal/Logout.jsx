import React from "react";
import styled from "styled-components";

const Logout = ({ logOut }) => {
  return (
    <div>
      <div
        className="modal fade"
        id="logout"
        tabIndex="-1"
        role="dialog"
        data-backdrop="false"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Keluar</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <Icon className="fa fa-close" />
              </button>
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
                data-backdrop="false"
                className="btn btn-primary"
                onClick={logOut}
              >
                Keluar <Icon className="fas fa-sign-out-alt" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;

const Icon = styled.i`
  color: #fff;
  cursor: pointer;
`;
