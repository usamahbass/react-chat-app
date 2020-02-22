import React, { Component } from "react";

import axios from "axios";

import Logo from "../../assets/login_register/raksye.png";
import Bg from "../../assets/login_register/img.svg";
import StartUp from "../../assets/login_register/startup.svg";
import swal from "sweetalert";
import Loading from "../../components/chat/Loading/Loading";

export default class Register extends Component {
  componentDidMount() {
    document.title = "Register | RaksyeChat";
  }

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      no_telp: ""
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

  signIn = e => {
    e.preventDefault();

    const dataRegister = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      no_telp: this.state.no_telp
    };

    this.setState({
      loadingPage: true
    });

    // Fethcing data with axios

    axios
      .post("https://calm-mesa-84057.herokuapp.com/register", dataRegister)

      .then(res => {
        console.log(res);
        this.setState({
          loadingPage: false
        });
        swal({
          icon: "success",
          title: "Register Berhasil !",
          text: "Silahkan Login"
        });
        window.location.replace("/login");
      })

      .catch(err => {
        console.log(err);
      });
  };

  // Input focus

  focusFuncUser = () => {
    let x = document.getElementById("input_user");
    x.classList.add("focus");
  };

  focusFuncName = () => {
    let x = document.getElementById("input_name");
    x.classList.add("focus");
  };

  focusFuncEmail = () => {
    let x = document.getElementById("input_email");
    x.classList.add("focus");
  };

  focusFuncPhone = () => {
    let x = document.getElementById("input_phone");
    x.classList.add("focus");
  };

  focusFuncPass = () => {
    let y = document.getElementById("input_pass");

    y.classList.add("focus");
  };

  render() {
    const { loadingPage } = this.state;
    if (loadingPage) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <div onClick={this.blurFunc}>
          {/* <img className="wave" src={Wave} alt="wave" /> */}
          <div className="content_login_register">
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
                  <div
                    className="carousel-item active"
                    style={{ background: "none" }}
                  >
                    <img src={Bg} alt="img" />{" "}
                  </div>
                  <div className="carousel-item" style={{ background: "none" }}>
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
                  <div>
                    <h5>Username</h5>
                    <input
                      name="username"
                      id="input_user"
                      className="input"
                      type="text"
                      onClick={this.focusFuncUser}
                      value={this.state.username}
                      onChange={this.onChange}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="input_div div_one" id="input_name">
                  <div className="i">
                    <i className="far fa-user"></i>
                  </div>
                  <div>
                    <h5>Name</h5>
                    <input
                      name="name"
                      id="input_name"
                      className="input"
                      type="text"
                      onClick={this.focusFuncName}
                      value={this.state.name}
                      onChange={this.onChange}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="input_div div_one" id="input_email">
                  <div className="i">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <input
                      name="email"
                      id="input_email"
                      className="input"
                      type="text"
                      onClick={this.focusFuncEmail}
                      value={this.state.email}
                      onChange={this.onChange}
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="input_div div_one" id="input_phone">
                  <div className="i">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <input
                      name="no_telp"
                      id="input_telp"
                      className="input"
                      type="text"
                      onClick={this.focusFuncPhone}
                      value={this.state.no_telp}
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
                      onClick={this.focusFuncPass}
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="space-30"></div>
                <input
                  className="btn_login_register"
                  type="submit"
                  value="Daftar"
                  onClick={this.signIn}
                />
              </form>
            </div>
          </div>

          {/* <footer
            className="footer_register wow fadeIn"
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
