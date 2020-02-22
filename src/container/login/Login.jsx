import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import $ from "jquery";

import Loading from "../../components/chat/Loading/Loading";
import Logo from "../../assets/login_register/raksye.png";
import Bg from "../../assets/login_register/img.svg";
import StartUp from "../../assets/login_register/startup.svg";

import "./css/index.css";
export default class Login extends Component {
  componentDidMount() {
    document.title = "Login | RaksyeChat";

    $(".input_div ").on("click", function() {
      $(this).addClass("focus");
    });

    $(".input_div ").on("blur", function() {
      if ($(this).val() === "") {
        $(this).removeClass("focus");
      }
    });
  }

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      token: ""
    };
  }

  // showPassword

  showPassword = () => {
    var x = document.getElementById("inputPassword");
    var y = document.getElementById("inputIcons");

    if (x.type === "password") {
      x.type = "text";
      y.classList.add("fa-eye");
      y.classList.remove("fa-eye-slash");
    } else {
      x.type = "password";
      y.classList.remove("fa-eye");
      y.classList.add("fa-eye-slash");
    }
  };

  // Handle
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();

    // LOGIC USERNAME PASSWORD
    if (this.state.username.length <= 0) {
      swal({
        icon: "warning",
        title: "Masukkan Username !"
      });
    } else if (this.state.password.length <= 0) {
      swal({
        icon: "warning",
        title: "Masukkan Password !"
      });
    } else {
      this.setState({
        loadingPage: true
      });
    }

    const dataLogin = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("https://calm-mesa-84057.herokuapp.com/login", dataLogin)

      .then(res => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("data", JSON.stringify(res.data.user));

        console.log(res);
        this.setState({
          loadingPage: false
        });
      })

      .catch(err => {
        swal({
          err,
          icon: "error",
          title: "Opps!",
          text: "Phone / Passwordmu salah silahkan coba lagi !"
        });
        document.querySelectorAll(".input").value = null;
        this.setState({
          loadingPage: false
        });
      });
  };

  render() {
    // REDIRECT
    const { loadingPage } = this.state;
    if (localStorage.getItem("token")) {
      return <Redirect to="/home" />;
    } else if (loadingPage) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <div>
          <div className="content_login_register" data-backdrop="false">
            <div
              className="img wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div
                style={{ background: "none" }}
                id="carouselExampleInterval"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" style={{ background: "none" }}>
                  <div className="carousel-item" style={{ background: "none" }}>
                    <img src={Bg} alt="img" />{" "}
                  </div>
                  <div
                    className="carousel-item active"
                    style={{ background: "none" }}
                  >
                    <img src={StartUp} alt="img" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="login_container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <form onSubmit={this.logIn}>
                <img className="logo" src={Logo} alt="logo" />
                <div className="input_div div_one" id="input_user">
                  <div className="i">
                    <i className="far fa-user-circle"></i>
                  </div>
                  <div className="input_form">
                    <h5>Username</h5>
                    <input
                      name="username"
                      id="input_login"
                      className="input"
                      type="text"
                      onChange={this.onChange}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="input_div div_two" id="input_pass">
                  <div className="i">
                    <i className="fa fa-lock lock"></i>
                    <div className="eye">
                      <i
                        onClick={this.showPassword}
                        className="fa fa-eye-slash"
                        id="inputIcons"
                      ></i>
                    </div>
                  </div>

                  <div>
                    <h5>Password</h5>
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      className="input"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="space-30"></div>
                <input
                  className="btn_login"
                  type="submit"
                  value="Masuk"
                  onClick={this.logIn}
                />
                <div className="space-20"></div>
                <p className="btn_separator">atau</p>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <input className="btn_login" type="submit" value="Daftar" />
                </Link>
              </form>
            </div>
          </div>

          {/* <footer
            className="footer wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <p>&copy;2020 RaksyeChat</p>
          </footer> */}
        </div>
      </React.Fragment>
    );
  }
}
