import React from "react";
import styled from "styled-components";
import Raksye from "../../../assets/login_register/raksye.png";

import "./css/About.css";
const About = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="about"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <p className="modal-title">Tentang</p>
              <p
                className="text-white"
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
              >
                Tutup
              </p>
            </div>
            <div className="modal-body">
              <AboutFoto>
                <div className="row justify-content-center">
                  <img src={Raksye} className="img-about" alt="" />
                </div>
                <div className="space-30"></div>
                <div className="center-text-about">
                  <h4>RaksyeChat Web</h4>
                  <p className="text-muted">version 0.0.1</p>
                </div>
                <div className="space-10"></div>
                <div className="about-box-account">
                  <a href="https://github.com/usamahbass/RaskyeChat">
                    <i className="fab fa-github "></i>
                  </a>
                </div>
              </AboutFoto>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const AboutFoto = styled.div`
  padding: 35px 2px 0;
`;
