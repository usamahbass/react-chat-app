import React from "react";
import styled from "styled-components";
import "./css/Settings.css";

const Friends = ({
  id,
  srcUserFriends,
  modalUsernameFriends,
  modalBioFriends,
  modalEmailFriends,
  modalPhoneFriends,
  modalJoinFriends
}) => {
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <p id="exampleModalScrollableTitle">Tentang Akun</p>
            </div>
            <div className="modal-body">
              {/* User */}

              {/* Img and Name */}
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <UserModalImg src={srcUserFriends} />
                </div>
                <div className="col-xs-12 col-md-6 friends">
                  <UserModalDetail>{modalUsernameFriends}</UserModalDetail>
                  <UserModalDetail className="text-muted">
                    {modalBioFriends}{" "}
                  </UserModalDetail>
                  <div className="space-30"></div>
                </div>
              </div>

              {/* Email */}

              <div className="row">
                <div className="col">
                  <IconModal className="fa fa-envelope fa-3x" />
                </div>
                <div className="col">
                  <UserModalDetail>{modalEmailFriends}</UserModalDetail>
                  <UserModalDetail className="text-muted">
                    Email
                  </UserModalDetail>
                </div>
              </div>
              <div className="space-50"></div>

              {/* Phone */}

              <div className="row">
                <div className="col">
                  <IconModal className="fa fa-phone-alt fa-3x" />
                </div>
                <div className="col">
                  <UserModalDetail>{modalPhoneFriends}</UserModalDetail>
                  <UserModalDetail className="text-muted">
                    Phone
                  </UserModalDetail>
                </div>
              </div>
              <div className="space-50"></div>

              {/* Other */}
              <div className="row">
                <div className="col">
                  <IconModal className="fa fa-sign-in-alt fa-3x" />
                </div>
                <div className="col">
                  <UserModalDetail>{modalJoinFriends}</UserModalDetail>
                  <UserModalDetail className="text-muted">
                    Join on
                  </UserModalDetail>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

const UserModalImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const UserModalDetail = styled.p`
  position: relative;
  top: 30px;
  right: 30px;
`;

const IconModal = styled.i`
  position: relative;
  top: 30px;
  left: 50px;
  color: #0072ff;
`;
