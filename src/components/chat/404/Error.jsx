import React, { Component } from "react";
import { Link } from "react-router-dom";

import NotFound from "../../../assets/error/notfound.svg";
import "./Error.css";

export default class Error extends Component {
  componentDidMount() {
    document.title = "404 Not Found";
  }
  render() {
    return (
      <React.Fragment>
        <div className="first_content">
          <div className="div_img">
            <img src={NotFound} className="img_error" alt="" />
          </div>
          <div className="div_text">
            <h1>404</h1>
          </div>
          <p>Page Not Found !</p>
          <div className="space-30"></div>
          <div className="back">
            <Link to="/" className="link">
              <i className="fa fa-sign-out-alt" />
              &nbsp; Back to Home
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
