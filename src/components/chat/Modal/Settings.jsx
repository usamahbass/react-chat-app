import React from "react";

import styled from "styled-components";
import "./css/Settings.css";
const Settings = ({
  id,
  modalonChangeImage,
  srcUser,
  modalUsername,
  modalBio,
  modalEmail,
  modalPhone,
  modalJoin,
  handleUserPhone,
  nameUser,
  valueUser,
  nameEmail,
  valueEmail,
  numberPhone,
  valuePhone,
  nameBio,
  valueBio,
  saveEditUser,
  saveEditUserBio,
  nameUsername,
  valueUsername,
  namePassword,
  valuePassword,
  saveEditUserPassword
}) => {
  return (
    <React.Fragment>
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
              <p id="exampleModalScrollableTitle">Pengaturan</p>
              <EditAkun
                className="text-white"
                data-toggle="modal"
                data-target="#modalgedit"
              >
                Ubah
              </EditAkun>
            </div>
            <div className="modal-body">
              {/* User */}

              {/* Img and Name */}
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <UserModal src={srcUser} />
                  <div className="img-upload">
                    <label htmlFor="input">
                      <IconModal
                        className="fa fa-camera fa-2x"
                        style={{ cursor: "pointer" }}
                      />
                    </label>

                    <input
                      type="file"
                      onChange={modalonChangeImage}
                      id="input"
                    />
                  </div>
                  <div className="space-30"></div>
                </div>
                <div className="col-xs-12 col-md-6 user">
                  <UserModalDetail>{modalUsername}</UserModalDetail>
                  <UserModalDetail className="text-muted">
                    {modalBio}{" "}
                    <IconEdit
                      className="fa fa-edit"
                      data-toggle="modal"
                      data-target="#modaleditbio"
                    />
                  </UserModalDetail>
                </div>
              </div>

              {/* Email */}

              <div className="row">
                <div className="col">
                  <IconModal className="fa fa-envelope fa-3x" />
                </div>
                <div className="col">
                  <UserModalDetail>{modalEmail}</UserModalDetail>
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
                  <UserModalDetail>{modalPhone}</UserModalDetail>
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
                  <UserModalDetail>{modalJoin}</UserModalDetail>
                  <UserModalDetail className="text-muted">
                    Join on
                  </UserModalDetail>
                </div>
              </div>
              <div className="space-50"></div>

              <div className="row">
                <div className="col">
                  <IconModal className="fa fa-lock fa-3x" />
                </div>
                <div className="col">
                  <UserModalDetail>
                    <button
                      className="btn btn-primary btn-block"
                      data-toggle="modal"
                      data-target="#modaleditprivacy"
                    >
                      Ubah Privasi
                    </button>
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

      {/* MODAL */}

      {/* Akun Gedit User & Phone */}

      <div
        className="modal fade"
        id="modalgedit"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalgedit"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Akun
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form">
                  <input
                    type="text"
                    name={nameUser}
                    autoComplete="off"
                    onChange={handleUserPhone}
                    value={valueUser}
                    className="modal_input"
                    required
                  />
                  <label className="modal_label" htmlFor="name">
                    <span className="modal_span">Name</span>
                  </label>
                </div>

                <br />

                <div className="form">
                  <input
                    type="email"
                    name={nameEmail}
                    onChange={handleUserPhone}
                    value={valueEmail}
                    className="modal_input"
                    required
                  />
                  <label className="modal_label" htmlFor="email">
                    <span className="modal_span">Email</span>
                  </label>
                </div>

                <br />

                <div className="form">
                  <input
                    type="number"
                    name={numberPhone}
                    onChange={handleUserPhone}
                    value={valuePhone}
                    className="modal_input"
                    required
                  />
                  <label className="modal_label">
                    <span className="modal_span">Phone</span>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={saveEditUser}
                className="btn btn-outline-primary"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* edit bio */}

      <div
        className="modal fade"
        id="modaleditbio"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modaleditbio"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Bio
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={saveEditUserBio}>
                <div className="form">
                  <input
                    type="text"
                    name={nameBio}
                    onChange={handleUserPhone}
                    value={valueBio}
                    className="modal_input"
                    required
                  />
                  <label className="modal_label">
                    <span className="modal_span">Bio</span>
                  </label>
                  <small>*comingsoon ~</small>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={saveEditUserBio}
                className="btn btn-outline-primary"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Privacy */}

      <div
        className="modal fade"
        id="modaleditprivacy"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modaleditprivacy"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                Ubah Privasi
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form">
                  <input
                    type="text"
                    name={nameUsername}
                    onChange={handleUserPhone}
                    value={valueUsername}
                    className="modal_input"
                    required
                  />
                  <label className="modal_label">
                    <span className="modal_span">Username Baru</span>
                  </label>
                </div>

                <br />

                <div className="form">
                  <input
                    type="password"
                    name={namePassword}
                    onChange={handleUserPhone}
                    value={valuePassword}
                    className="modal_input"
                    required
                  />
                  <label className="modal_label">
                    <span className="modal_span">Password Baru</span>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={saveEditUserPassword}
                className="btn btn-outline-primary"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Settings;

const EditAkun = styled.p`
  cursor: pointer;
`;

const UserModal = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const UserModalDetail = styled.p`
  position: relative;
  top: 30px;
  right: 30px;
`;

const IconEdit = styled.i`
  color: black;
  cursor: pointer;
`;

const IconModal = styled.i`
  position: relative;
  top: 30px;
  left: 50px;
  color: #0072ff;
`;
