import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../container/home/Home";
import Login from "../container/login/Login";
import Register from "../container/login/Register";
import Chat from "../container/chat/Chat";
import Error from "../components/chat/404/Error";

export default class Routes extends Component {
  componentDidMount() {
     // remove load big package

    const load = document.getElementById("starting-loader");
    window.onload = () => {
      if (load) {
        load.remove();
      }
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Chat} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}
