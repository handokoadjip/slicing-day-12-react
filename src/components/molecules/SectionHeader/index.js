import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="position-absolute top-50 end-0 translate-middle-y pe-5 d-none d-lg-block">
        <div className="d-flex flex-column justify-content-center align-items-center me-5">
          <div className="text-rotate circle-bullet my-3"></div>
          <div className="text-rotate circle-bullet my-3"></div>
          <div className="text-rotate circle-bullet-color my-3"></div>
          <div className="text-rotate circle-bullet my-3"></div>
          <div className="text-rotate circle-bullet my-3"></div>
        </div>
      </div>
      <div className="position-absolute top-50 end-0 translate-middle-y pe-6 d-none d-lg-block">
        <div className="d-flex flex-column justify-content-center align-items-center me-5 text-fade-1">
          Truxton
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper d-flex justify-content-start">
              <div className="position-absolute bottom-0 start-0 p-5 p-xl-8">
                <small className="text-uppercase text-sub-title">
                  trumph speed trpile
                </small>
                <h1 className="display-2 fw-bolder text-uppercase ls-xl-10px">
                  the icon. <br />
                  redefinded.
                </h1>
                <p className="my-4 text-fade-1">
                  Real poise, Real power, Real performance.
                </p>
                <Link to="#">
                  <i className="fas fa-arrow-alt-circle-down icon-button"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
