import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="min-vh-100 bg-image-4 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="position-absolute top-50 start-0 translate-middle-y p-5 p-xl-8">
                <small className="text-uppercase text-sub-title"></small>
                <h2 className="display-2 fw-bolder text-uppercase ls-xl-10px mb-3">
                  more <br />
                  than just <br />a lifestyle.
                </h2>
                <Link
                  className="d-flex align-items-center text-white text-decoration-none"
                  to="#"
                >
                  <i className="fas fa-play-circle icon-button me-3"></i>
                  Watch Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
