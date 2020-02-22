import React, { Component } from "react";
import Logo from "../../../assets/login_register/raksye.png";

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div
          className="d-flex justify-content-center"
          style={{ position: "relative", top: "325px" }}
        >
          <img
            src={Logo}
            style={{ width: 150, position: "absolute", bottom: 0 }}
            alt=""
          />

          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h2 style={{ position: "absolute", color: "#0072ff", top: 75 }}>
            Harap tunggu ...
          </h2>
        </div>
      </div>
    );
  }
}
