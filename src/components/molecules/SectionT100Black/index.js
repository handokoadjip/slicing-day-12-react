import { Button } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="min-vh-100 bg-image-2 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="position-absolute top-50 end-0 translate-middle-y p-5 p-xl-8">
                <small className="text-uppercase">bonneville</small>
                <h2 className="display-2 fw-bolder text-uppercase ls-xl-10px text-sub-title">
                  t100 black
                </h2>
                <p className="my-4 text-fade-1 ps-3">
                  If the easy-going style of the regular
                  <br /> Bonneville T100 is a bit too tame for you,
                  <br /> we've created the mean 'n' moody
                  <br /> Bonneville T100 Black.
                </p>
                <Button href="#">explore</Button>
                <Link
                  className="text-fade-1 text-capitalize d-block ps-3 text-decoration-none"
                  to="#"
                >
                  visit official website
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
