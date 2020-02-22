import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Phone from "../../../assets/home/picture-1.svg";

import "./Header.css";
export default class Header extends Component {
  componentDidMount() {
    $(document).on("click", "ul li", function() {
      $(this)
        .addClass("nav-active")
        .siblings()
        .removeClass("nav-active");
    });
  }
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-gradient">
          <a
            className="navbar-brand text-white text-uppercase mr-2 text-title"
            data-wow-duration="3s"
            data-wow-delay="1s"
            href="#"
          >
            RaksyeChat
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-expanded="false"
            style={{ border: "1px solid #fff", outline: "none" }}
          >
            <i className="fa fa-bars" style={{ color: "#fff" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ml-auto"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              data-wow-duration="3s"
              data-wow-delay="1s"
              id="ul-navbar"
            >
              <li className="nav-item nav-active mr-5">
                <a className="nav-link text-white" href="#">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link text-white" href="#about">
                  Tentang
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link text-white" href="#feature">
                  Fitur
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link text-white" href="#contactus">
                  Hubungi Developer
                </a>
              </li>
              <div className="nav-item nav-sign">
                <Link to="/login" className="link">
                  Masuk
                </Link>
              </div>
            </ul>
          </div>
        </nav>
        {/* Header Jumbotron */}
        <div className="space-50"></div>
        <div className="start_content">
          <div
            className="jumbotron bg-gradient"
            style={{
              height: "625px",
              fontFamily: "'Nunito', sans-serif"
            }}
          >
            <div className="container">
              {/* Dekstop */}
              <div className="row" data-wow-duration="3s" data-wow-delay="1s">
                <div className="col-xs-12 col-md-6 wow fadeInUp">
                  <figure className="figure-img">
                    <img src={Phone} alt="mobile" />
                  </figure>
                </div>
                <div
                  className="col-xs-12 col-md-6 wow fadeIn"
                  data-wow-duration="3s"
                  data-wow-delay="1s"
                >
                  <h1 className="text-white">
                    Mudah. Cepat. Mengirim Pesan dengan Aman.
                  </h1>
                  <div className="space-50"></div>
                  <p className="text-white" style={{ fontSize: "1.2rem" }}>
                    dengan Raksye, Anda akan mendapatkan pesan yang cepat,
                    sederhana, dan aman pastinya .
                  </p>
                  <div className="space-30"></div>
                  <div className="get-started">
                    <Link to="/register" className="link text-uppercase">
                      Mulai Sekarang
                    </Link>
                  </div>
                  {/* Scroll Down */}
                  <a href="#about">
                    <div className="scroll_down">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                  {/* End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
