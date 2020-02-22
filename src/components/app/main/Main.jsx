import React, { Component } from "react";

import Dev from "../../../assets/home/aboutdev.jpg";
import Fast from "../../../assets/home/picture-2.svg";
import Easy from "../../../assets/home/picture-3.svg";
import Safe from "../../../assets/home/picture-4.svg";

import "./Main.css";
export default class Main extends Component {
  render() {
    return (
      <div>
        {/* Fixed */}

        <a
          id="scrollTop"
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title="backTop"
        >
          <i className="fas fa-arrow-up" />
        </a>
        {/* Content */}

        {/* about Content */}
        <div className="start_content">
          <section className="section-padding" id="about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xs-12 col-md-10 col-md-offet-1">
                  <div
                    className="page-title text-center wow fadeInDown"
                    data-wow-duration="3s"
                    data-wow-delay="1s"
                  >
                    <h5 className="title">Tentang Raksye</h5>
                    <div className="space-30"></div>
                    <h3 className="blue-color">
                      Sebuah aplikasi yang di program untuk melakukan kirim dan
                      menerima pesan dari dua user
                    </h3>
                    <div className="space-20"></div>
                    <p className="gray-color">
                      Anda dapat memulainya sekarang, dengan melakukan
                      registrasi pada halaman registrasi kemudian login , lalu
                      anda akan mendapatkan akses untuk melalukan chat ke sesama
                      user yang telah terdaftar di database.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-500"></div>
          </section>

          {/* feature Content */}

          {/* mudah */}
          <section className="area bg-gray" id="feature">
            <div className="container">
              <div
                className="row wow fadeIn"
                data-wow-duration="3s"
                data-wow-delay="1s"
              >
                <div className="col-xs-12 col-md-6">
                  <div className="page-title section-padding">
                    <h5 className="title">Fitur</h5>
                    <div className="space-20"></div>
                    <h3 className="dark-color">Mudah</h3>
                    <div className="space-20"></div>
                    <p className="gray-color">
                      Mudah, hanya dengan daftar anda dapat melakukan chatting
                      sepuasnya sesama teman anda.
                    </p>
                    <div className="space-50"></div>
                    <button className="btnlearn-more">
                      <i className="fas fa-comment-alt" />
                    </button>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <figure className="figure-img">
                    <img src={Easy} alt="Fast" />
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* cepat */}
          <section className="area bg-gray">
            <div className="container">
              <div
                className="row wow fadeIn"
                data-wow-duration="3s"
                data-wow-delay="1s"
              >
                <div className="col-xs-12 col-md-6">
                  <figure className="figure-img">
                    <img src={Fast} alt="Fast" />
                  </figure>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className="page-title section-padding">
                    <h5 className="title">Fitur</h5>
                    <div className="space-20"></div>
                    <h3 className="dark-color">Cepat</h3>
                    <div className="space-20"></div>
                    <p className="gray-color">
                      Anda dapat melakukan chat dengan cepat pastinya sesama
                      teman chatting anda.
                    </p>
                    <div className="space-50"></div>
                    <button className="btnlearn-more">
                      <i className="fas fa-bolt" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* aman */}
          <section className="area bg-gray">
            <div className="container">
              <div
                className="row wow fadeIn"
                data-wow-duration="3s"
                data-wow-delay="1s"
              >
                <div className="col-xs-12 col-md-6">
                  <div className="page-title section-padding">
                    <h5 className="title" id="feature">
                      Fitur
                    </h5>
                    <div className="space-20"></div>
                    <h3 className="dark-color">Aman</h3>
                    <div className="space-20"></div>
                    <p className="gray-color">
                      Data anda akan tersimpan di database dan jangan khawatir
                      kami akan mensupport data anda agar menjadi lebih aman
                      nantinya.
                    </p>
                    <div className="space-50"></div>
                    <button className="btnlearn-more">
                      <i className="fas fa-lock" />
                    </button>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <figure className="figure-img">
                    <img src={Safe} alt="Safe" />
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section className="build-with section-padding-top">
            <div
              className="container wow fadeInUp"
              data-wow-duration="3s"
              data-wow-delay="1s"
            >
              <div className="row  justify-content-center">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                  <div className="page_title center-text">
                    <h5 className="title">Dibuat dengan</h5>
                    <div className="space-10"></div>
                  </div>
                  <div className="space-60"></div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="service-box">
                    <div className="box-icon">
                      <i className="fab fa-css3-alt"></i>
                    </div>
                    <h4>CSS</h4>
                    <p>
                      merupakan aturan untuk mengatur beberapa komponen dalam
                      sebuah web sehingga akan lebih terstruktur dan seragam.
                    </p>
                  </div>
                  <div className="space-60"></div>
                  <div className="service-box">
                    <div className="box-icon">
                      <i className="fab fa-js"></i>
                    </div>
                    <h4>Javascript</h4>
                    <p>
                      Javascript adalah bahasa pemrograman tingkat tinggi dan
                      dinamis. JavaScript membantu membuat halaman web
                      interaktif dan merupakan bagian aplikasi web yang
                      esensial.
                    </p>
                  </div>
                  <div className="space-60"></div>
                  <div className="service-box">
                    <div className="box-icon">
                      <i className="fab fa-php"></i>
                    </div>
                    <h4>PHP</h4>
                    <p>
                      PHP adalah adalah bahasa skrip yang dapat ditanamkan atau
                      disisipkan ke dalam HTML . PHP banyak dipakai untuk
                      memprogram situs web dinamis. PHP dapat digunakan untuk
                      membangun sebuah CMS.
                    </p>
                  </div>
                  <div className="space-60"></div>
                </div>
                <div className="hidden-xs hidden-sm col-md-4"></div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="service-box">
                    <div className="box-icon">
                      <i className="fab fa-bootstrap"></i>
                    </div>
                    <h4>Bootstrap</h4>
                    <p>
                      Bootstrap adalah open-source framework (kerangka kerja )
                      front-end yang gratis untuk merancang situs dan aplikasi
                      web .
                    </p>
                  </div>
                  <div className="space-60"></div>
                  <div className="service-box">
                    <div className="box-icon">
                      <i className="fab fa-react"></i>
                    </div>
                    <h4>React Js</h4>
                    <p>
                      React adalah pustaka JavaScript untuk membangun antarmuka
                      pengguna. React dikelola oleh Facebook dan komunitas
                      pengembang dan perusahaan individu.
                    </p>
                  </div>
                  <div className="space-60"></div>
                  <div className="service-box">
                    <div className="box-icon">
                      <i className="fab fa-laravel"></i>
                    </div>
                    <h4>Laravel</h4>
                    <p>
                      Laravel adalah framework PHP open-source, untuk
                      pengembangan aplikasi web dengan model-view-controller
                      (MVC) .
                    </p>
                  </div>
                  <div className="space-60"></div>
                </div>
              </div>
            </div>
          </section>

          {/* contact */}
          <section className="section-padding" id="contactus">
            <div
              className="container wow fadeInDown"
              data-wow-duration="3s"
              data-wow-delay="1s"
            >
              <div className="row justify-content-center">
                <div className="col-xs-12">
                  <div className="page-title text-center">
                    <h5 className="title">Hubungi Developer</h5>
                    <div className="space-50"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="service-icons">
                    <div className="contact-icons">
                      <i className="fa fa-map-marker-alt" />
                      <div className="space-30"></div>
                    </div>
                    <p className="text-muted">
                      Pondok Programmer <br />
                      Bantul, Yogyakarta
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="service-icons">
                    <div className="contact-icons">
                      <i className="fa fa-phone-alt" />
                      <div className="space-30"></div>
                    </div>
                    <p className="text-muted">+6281214673968</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="service-icons">
                    <div className="contact-icons">
                      <i className="fa fa-envelope" />
                      <div className="space-30"></div>
                    </div>
                    <p className="text-muted">basalamahusamah7@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-60"></div>
              <div className="row justify-content-center">
                <button
                  className="about-dev"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Tentang Developer
                </button>
              </div>
            </div>

            {/* Modal Dev */}

            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row justify-content-center">
                      <img src={Dev} alt="" className="rounded-image img-dev" />
                    </div>
                    <div className="space-30"></div>
                    <div className="center-text">
                      <h4 className="text-dark">
                        <b>Usamah Basalamah</b>
                      </h4>
                      <div className="space-20"></div>
                      <p className="text-dark">Front End Developer</p>
                      <div className="space-10"></div>
                      <div className="box-account">
                        <a href="https://facebook.com/usamahbasalamah9">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/usamah_bass">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/usamahbass">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-500"></div>
          </section>
        </div>
      </div>
    );
  }
}
