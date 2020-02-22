import React, { useEffect } from "react";
import $ from "jquery";

import "./NavbarContact.css";
const NavbarContact = ({ imgNav, nameNav }) => {
  useEffect(() => {
    $(document).on("click", "ul li", function() {
      $(this)
        .addClass("profile-active")
        .siblings()
        .removeClass("profile-active");
    });
  });

  return (
    <React.Fragment>
      <nav className="navbar bg-primary">
        <i
          id="toggle-bars"
          className="fa fa-bars"
          onClick={() =>
            (document.getElementById("mySidenav").style.width = "300px")
          }
        />

        <div id="mySidenav" className="sidenav">
          <div className="row profile">
            <div className="profile-sidebar" id="sidebar">
              <div className="profile-user">
                <a
                  className="closebtn"
                  onClick={() =>
                    (document.getElementById("mySidenav").style.width = "0")
                  }
                >
                  &times;
                </a>
                <div className="profile-userpic">
                  <img src={imgNav} className="responsive-img" alt="" />
                </div>

                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">{nameNav}</div>
                </div>
              </div>

              <div className="profile-usermenu">
                <ul className="profile-item">
                  <li
                    className="profile-active"
                    data-toggle="modal"
                    data-target="#accountsettings"
                  >
                    <a href="#">
                      <i className="fas fa-cog"></i>
                      Pengaturan{" "}
                    </a>
                  </li>

                  <li data-toggle="modal" data-target="#about">
                    <a href="#">
                      <i className="fas fa-info-circle"></i>
                      Tentang{" "}
                    </a>
                  </li>

                  <li data-toggle="modal" data-target="#logout">
                    <a href="#">
                      <i className="fas fa-sign-out-alt"></i>
                      Keluar{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Brand */}
        <a className="navbar-brand-chat" style={{ color: "#fff" }}>
          RaksyeChat
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavbarContact;
