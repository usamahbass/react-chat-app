import React, { Component } from "react";

import styled from "styled-components";

import ChatContact from "./chatContact";
import ChatRoom from "./chatRoom";
import Sent from "../../components/chat/MessageSent/Sent";
import SendInput from "../../components/chat/SendInput/SendInput";
import Received from "../../components/chat/MessageReceived/Received";
import Information from "../../components/chat/TextInformation/Information";

import "./css/chatRoom.css";
import swal from "sweetalert";
import Axios from "axios";

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      idpesan: "",
      chat: [],
      data: "",
      id: "",
      name: "",
      avatar: null,
      email: "",
      no_telp: "",
      join: "",
      isifiles: null,
      isichat: "",
      searchpesan: ""
    };
  }

  componentDidMount() {
    const state = localStorage.getItem("data");
    const dataUser = JSON.parse(state);

    this.setState({
      data: dataUser
    });

    this.getSend();
  }

  componentDidUpdate() {
    this.getUser();
  }

  componentWillUnmount() {
    clearInterval(this.intervalTimer);
  }

  // clicktoChat
  clickChat = item => {
    this.setState({
      id: item.id,
      name: item.name,
      avatar: item.avatar,
      email: item.email,
      no_telp: item.no_telp,
      join: item.created_at
    });

    // -- block display -- //
    document.getElementById("idBio").style.display = "block";
    document.getElementById("idImageFriends").style.display = "block";
    document.getElementById("idFriends").style.display = "block";
    document.getElementById("idNavbar").style.display = "block";
    document.getElementById("sendinput").style.display = "block";

    // -- none display -- //
    document.getElementById("information").style.display = "none";
    this.intervalTimer = setTimeout(this.getSend.bind(this), 5000);
  };

  getUser = () => {
    const id = this.state.data.id;

    Axios.get(`https://calm-mesa-84057.herokuapp.com/tampil/${id}`).then(
      res => {
        localStorage.setItem("data", JSON.stringify(res.data));

        this.setState({
          data: res.data
        });
      }
    );
  };

  //  menampilkan pesan

  getSend = () => {
    const sender_id = this.state.data.id;
    const receiver_id = this.state.id;
    Axios.get(
      `https://calm-mesa-84057.herokuapp.com/message/${sender_id}/${receiver_id}`
    ).then(res => {
      clearTimeout(this.intervalTimer);
      this.setState(
        {
          chat: res.data.message
        },
        () => console.log(this.state.chat)
      );
    });
  };

  // handleSend
  handleSend = e => {
    e.preventDefault();

    this.setState({
      isichat: e.target.value
    });
  };

  // handleSendImg

  handlesendImage = e => {
    e.preventDefault();

    const files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = () => {
      this.setState({
        isifiles: files,
        base64: reader.result
      });
    };
  };

  // search pesan

  handleSearchText = e => {
    e.preventDefault();
    this.setState({
      searchpesan: e.target.value.substr(0, 20)
    });
  };

  // click ---> send
  clickSend = e => {
    e.preventDefault();
    const sender_id = this.state.data.id;
    const receiver_id = this.state.id;
    const text = this.state.isichat;

    Axios.post("https://calm-mesa-84057.herokuapp.com/message/send", {
      sender_id,
      receiver_id,
      text
    })
      .then(res => {
        console.log(res);
        document.getElementById("inputid").value = "";
        this.getSend();
      })
      .catch(err => {
        console.log(err);
      });
  };

  clickEmoji = () => {
    swal({
      icon: "warning",
      title: "Maaf fitur ini belum tersedia , coba lagi nanti !"
    });
  };

  render() {
    let filterpesan = this.state.chat.filter(message => {
      return (
        message.text
          .toLowerCase()
          .indexOf(this.state.searchpesan.toLowerCase()) !== -1
      );
    });
    return (
      <React.Fragment>
        <ContentArea className="raksye_content">
          <div className="row" style={{ padding: "unset" }}>
            <div className="col-4" style={{ padding: "unset" }}>
              <ChatContact
                imgNav={this.state.data.avatar}
                nameNav={this.state.data.name}
                clickChat={this.clickChat}
                idBox="boxid"
              />
            </div>
            <div className="col-8" style={{ padding: "unset" }}>
              <ChatRoom
                // Bio & Navbar
                idBio="idBio"
                idImageFriends="idImageFriends"
                idFriends="idFriends"
                idNavbar="idNavbar"
                idSearch="idSearch"
                // Friends
                ChatImage={this.state.avatar}
                ChatUsername={this.state.name}
                // -- Modal -- //
                srcUserFriends={this.state.avatar}
                modalUsernameFriends={this.state.name}
                modalBioFriends="Hi, I using Raksye Chat"
                modalEmailFriends={this.state.email}
                modalPhoneFriends={this.state.no_telp}
                modalJoinFriends={this.state.join}
                handleSearchText={this.handleSearchText}
              />

              {/* Chat */}
              <RoomChat>
                <ChatView>
                  <div className="full-message" id="chat">
                    <div className="space-message" id="top">
                      {filterpesan.map((message, index) => {
                        return (
                          <div key={index}>
                            {this.state.data.id === message.sender_id ? (
                              <Sent
                                textSent={message.text}
                                timeSent={message.updated_at}
                                imgSent={message.files}
                                imageSent={this.state.data.avatar}
                                deletePesan={() =>
                                  Axios.delete(
                                    `https://calm-mesa-84057.herokuapp.com/message/delete/${message.id}`
                                  )
                                    .then(res => {
                                      swal({
                                        icon: "success",
                                        title: "Pesan berhasil dihapus !"
                                      });
                                      this.getSend();
                                    })
                                    .catch(err => {
                                      swal({
                                        icon: "error",
                                        title: "Pesan gagal dihapus !"
                                      });
                                      console.log(err);
                                    })
                                }
                              />
                            ) : (
                              <Received
                                textReceiver={message.text}
                                timeReceived={message.updated_at}
                                imageReceiver={this.state.avatar}
                              />
                            )}
                          </div>
                        );
                      })}
                      <Information idInformation="information" />
                    </div>
                    <SendInput
                      clickEmoji={this.clickEmoji}
                      submitSend={this.clickSend}
                      handleSend={this.handleSend}
                      handlesendImage={this.handlesendImage}
                      sendFiles={this.sendFiles}
                      clickSend={this.clickSend}
                      SendInputId="sendinput"
                      idValue="inputid"
                    />
                  </div>
                </ChatView>
              </RoomChat>

              {/* End */}
            </div>
          </div>
        </ContentArea>
      </React.Fragment>
    );
  }
}

export default Chat;

const ContentArea = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/chat.jpeg");
  z-index: -1;
`;

const RoomChat = styled.div`
  width: 100%;
  background: #fff;
`;

const ChatView = styled.div`
  height: 91.6vh;
`;
