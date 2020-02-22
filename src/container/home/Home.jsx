import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/app/header/Header";
import Main from "../../components/app/main/Main";
import Footer from "../../components/app/footer/Footer";

export default class Home extends Component {
  componentDidMount() {
    document.title = "RaksyeChat";
  }
  render() {
    return (
      <Raksye>
        <Header />
        <Main />
        <Footer />
      </Raksye>
    );
  }
}

const Raksye = styled.div`
  @media (prefers-color-scheme: dark) {
    body {
      background: black;
    }
  }
  @media (prefers-color-scheme: light) {
    body {
      background: white;
      color: black;
    }
  }
`;
