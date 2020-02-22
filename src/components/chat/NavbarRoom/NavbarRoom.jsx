import React from "react";
import styled from "styled-components";

import "./NavbarRoom.css";

const NavbarRoom = ({
  ChatImage,
  ChatUsername,
  idBio,
  idImageFriends,
  idFriends,
  idNavbar,
  handleSearchText
}) => {
  return (
    <React.Fragment>
      <nav className="navbar bg-primary" style={{ height: "56px" }}>
        <UserImage id={idImageFriends}>
          <img src={ChatImage} className="user-img" alt="" />
        </UserImage>
        <div
          className="user_chat"
          data-toggle="modal"
          data-target="#friendssettings"
          style={{ display: "none" }}
          id={idFriends}
        >
          <h5>{ChatUsername}</h5>
          <small id={idBio}>Hi, I using RaksyeChat</small>
        </div>
        {/* Search Pesan */}
        <div
          id={idNavbar}
          className="navbar-brand ml-auto search-pesan-box"
          style={{ position: "relative", bottom: "53.5px" }}
        >
          <input
            type="text"
            onChange={handleSearchText}
            className="search-pesan"
            placeholder="Cari pesan"
          />
          <a href="#" className="search-icon">
            <i className="fas fa-search" />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarRoom;

const UserImage = styled.div`
  display: none;
  cursor: pointer;
  position: relative;
  bottom: 5px;
  width: 5%;
  margin: 0px 10px;
`;
