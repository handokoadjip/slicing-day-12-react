import { Logo } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center h-vh-50 py-5">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="social-media mb-5">
                <figure className="m-0">
                  <img
                    className="navbar-image d-block mx-auto mb-5"
                    src={Logo}
                    alt="Logo"
                  />
                </figure>
                <div className="d-flex justify-content-center align-items-center">
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-pinterest"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    className="text-decoration-none mx-3 text-fade-1"
                    to="#"
                  >
                    <i className="fas fa-envelope"></i>
                  </Link>
                </div>
              </div>
              <div className="copyright d-block d-lg-flex justify-content-center align-items-center text-center">
                <p className="mp-0 text-fade-1">
                  &copy; 2021 Triump Motorcycle
                </p>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="px-4 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      test ride
                    </Link>
                  </li>
                  <li className="px-4 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      dealer
                    </Link>
                  </li>
                  <li className="px-4 d-inline">
                    <Link
                      className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-1"
                      to="#"
                    >
                      brochures
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
