import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

import Settings from "../../components/chat/Modal/Settings";
import NavbarRoom from "../../components/chat/NavbarRoom/NavbarRoom";

import "./css/chatRoom.css";
import Friends from "../../components/chat/Modal/Friends";
import About from "../../components/chat/Modal/About";
import Logout from "../../components/chat/Modal/Logout";
export default class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      alldata: [],
      data: "",
      image: null,
      username: "",
      password: "",
      name: "",
      email: "",
      no_telp: ""
    };
  }

  componentDidMount() {
    // title
    document.title = "RaksyeChat Web";
    this.getUser();

    const state = localStorage.getItem("data");
    const dataUser = JSON.parse(state);

    this.setState({
      data: dataUser
    });
  }

  // tampil User
  getUser = () => {
    const id = this.state.data.id;

    axios
      .get(`https://calm-mesa-84057.herokuapp.com/tampil/${id}`)
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data));

        this.setState({
          data: res.data
        });
      });
  };

  // upload & handle image

  handleImage = e => {
    e.preventDefault();
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      this.setState({
        image: image,
        base64: reader.result
      });
      this.uploadImage();
    };
  };

  uploadImage = () => {
    const id = this.state.data.id;
    const avatar = this.state.base64;
    this.setState({
      loading: true
    });
    axios
      .put("https://calm-mesa-84057.herokuapp.com/avatar/edit", {
        id,
        avatar
      })
      .then(res => {
        swal({
          icon: "success",
          title: "Update Completed!"
        });
        this.getUser();
      })

      .catch(err => {
        swal({
          err,
          icon: "error",
          title: "Error !"
        });
      });
  };

  // update name, email, no_telp
  updateHandleUser = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateUser = () => {
    const id = this.state.data.id;
    const name = this.state.name;
    const email = this.state.email;
    const no_telp = this.state.no_telp;

    axios
      .put("https://calm-mesa-84057.herokuapp.com/user/edit", {
        id,
        name,
        email,
        no_telp
      })
      .then(res => {
        swal({
          icon: "success",
          title: "Update Success!"
        });
        this.getUser();
      })
      .catch(err => {
        swal({
          icon: "error",
          title: "Error!"
        });
        console.log(err);
      });
  };

  // update username & password
  updadePrivacy = () => {
    const id = this.state.data.id;
    const username = this.state.username;
    const password = this.state.password;

    axios
      .put("https://calm-mesa-84057.herokuapp.com/private/edit", {
        id,
        username,
        password
      })
      .then(res => {
        swal({
          icon: "success",
          title: "Update Success!"
        });

        this.getUser();
      })
      .catch(err => {
        swal({
          icon: "error",
          title: "Error!"
        });
        this.setState({
          loading: false
        });
        console.log(err);
      });
  };

  // bio
  updateBio = e => {
    e.preventDefault();
    swal({
      icon: "warning",
      title: "Maaf fitur ini belum tersedia, coba lagi nanti !"
    });
  };

  logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data");
  };

  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/login" />;
    } else if (localStorage.getItem("data") === null) {
      return window.location.reload();
    }
    return (
      <React.Fragment>
        <NavbarRoom
          idBio={this.props.idBio}
          idImageFriends={this.props.idImageFriends}
          idFriends={this.props.idFriends}
          idNavbar={this.props.idNavbar}
          ChatImage={this.props.ChatImage}
          ChatUsername={this.props.ChatUsername}
          handleSearchText={this.props.handleSearchText}
        />
        {/* Modal View Settings Profile*/}

        <Settings
          id="accountsettings"
          // view
          srcUser={this.state.data.avatar}
          modalUsername={this.state.data.name}
          modalBio="Hi, Iam using RaksyeChat!"
          modalEmail={this.state.data.email}
          modalPhone={this.state.data.no_telp}
          modalJoin={this.state.data.created_at}
          // function
          // updateFoto
          modalonChangeImage={this.handleImage}
          // handle user edit
          handleUserPhone={this.updateHandleUser}
          // update name, email, telp
          nameUser="name"
          valueUser={this.state.name}
          nameEmail="email"
          valueEmail={this.state.email}
          numberPhone="no_telp"
          valuePhone={this.state.no_telp}
          saveEditUser={this.updateUser}
          saveEditUserBio={this.updateBio}
          // privacy
          nameUsername="username"
          valueUsername={this.state.username}
          namePassword="password"
          valuePassword={this.state.password}
          saveEditUserPassword={this.updadePrivacy}
        />

        {/* Modal View Settings */}

        {/* <Contact id="contact" /> */}

        {/* Modal Friends */}

        <Friends
          id="friendssettings"
          srcUserFriends={this.props.srcUserFriends}
          modalUsernameFriends={this.props.modalUsernameFriends}
          modalBioFriends={this.props.modalBioFriends}
          modalEmailFriends={this.props.modalEmailFriends}
          modalPhoneFriends={this.props.modalPhoneFriends}
          modalJoinFriends={this.props.modalJoinFriends}
        />

        {/* Modal About */}

        <About />

        {/* Modal Logout */}

        <Logout logOut={this.logOut} />

        {/* End Modal */}

        {/* Chat Display */}
      </React.Fragment>
    );
  }
}
