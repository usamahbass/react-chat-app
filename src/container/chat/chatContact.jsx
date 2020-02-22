import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import NavbarContact from "../../components/chat/NavbarContact/NavbarContact";
import BoxContact from "../../components/chat/BoxContact/BoxContact";
import Search from "../../components/chat/Search/Search";

import "./css/chatContact.css";
export default class chatContact extends Component {
  constructor() {
    super();
    this.state = {
      alldata: [],
      search: "",
      loading: false
    };
  }

  // tampil allUser
  componentDidMount() {
    this.getAllData();
    this.setState({
      loading: true
    });
  }

  componentDidUpdate() {
    this.getAllData();
  }

  // last data

  getAllData = () => {
    axios
      .get("https://calm-mesa-84057.herokuapp.com/tampil")
      .then(res => {
        this.setState({
          alldata: res.data
        });
        this.setState({
          loading: false
        });
      })
      .catch(err => {
        // swal({
        //   icon: "error",
        //   title: "Gagal memuat data , periksa koneksi Anda !"
        // });
        console.log(err);
        this.setState({
          loading: false
        });
      });
  };

  // search

  handleSearch = e => {
    e.preventDefault();
    this.setState({
      search: e.target.value.substr(0, 20)
    });
  };

  render() {
    let filter = this.state.alldata.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <React.Fragment>
        <div className="container" style={{ paddingRight: "0" }}>
          <NavbarContact
            imgNav={this.props.imgNav}
            nameNav={this.props.nameNav}
          />

          <Contact>
            <div className="space-20"></div>
            {/* Search */}
            <Search
              // submitSearch={submitSearch}
              handleSearch={this.handleSearch.bind(this)}
              searchValue={this.state.search}
              submitSearch={this.handleSearch}
            />
            {/* End */}

            <div className="space-20"></div>

            <ContactList>
              <ScrollChat>
                {filter.map((item, index) => {
                  return (
                    <div key={index}>
                      <BoxContact
                        className="active"
                        contactImg={item.avatar}
                        contactName={item.name}
                        clickChat={this.props.clickChat.bind(this, item)}
                      />
                    </div>
                  );
                })}
              </ScrollChat>
            </ContactList>
          </Contact>
        </div>
      </React.Fragment>
    );
  }
}

const Contact = styled.div`
  background: #fff;
`;

const ContactList = styled.div`
  max-width: 450px;
  height: 76.4vh;
`;

const ScrollChat = styled.div`
  height: 100%;
  overflow: auto;
`;
