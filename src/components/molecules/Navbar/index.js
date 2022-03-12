import { Logo } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark px-5 pb-0">
        <div className="container-fluid">
          <Link className="navbar-brand me-5 v-invisible" to="#">
            <figure className="m-0">
              <img className="navbar-image" src={Logo} alt="Logo" />
            </figure>
          </Link>
          <div className="collapse navbar-collapse">
            <div className="d-flex flex-column flex-lg-row justify-content-between w-100">
              <ul className="navbar-nav text-uppercase">
                <li className="nav-item px-4">
                  <Link className="nav-link nav-link-sub fs-7 fw-bold" to="#">
                    test ride
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link className="nav-link nav-link-sub fs-7 fw-bold" to="#">
                    dealer
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link className="nav-link nav-link-sub fs-7 fw-bold" to="#">
                    brochures
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark px-5 pb-5 pt-0">
        <div className="container-fluid">
          <Link className="navbar-brand me-5" to="#">
            <img className="navbar-image" src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex flex-column flex-lg-row justify-content-between w-100">
              <ul className="navbar-nav text-uppercase">
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link fw-bold" aria-current="page" to="#">
                    motorcycles
                  </Link>
                </li>
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link fw-bold" to="#">
                    accesories
                  </Link>
                </li>
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link fw-bold" to="#">
                    clothing
                  </Link>
                </li>
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link fw-bold" to="#">
                    offers & services
                  </Link>
                </li>
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link fw-bold" to="#">
                    inside triumph
                  </Link>
                </li>
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link fw-bold" to="#">
                    news & event
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav text-uppercase">
                <li className="nav-item px-0 px-lg-4">
                  <Link className="nav-link active fs-5" to="#">
                    <i className="fas fa-search"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default index;
