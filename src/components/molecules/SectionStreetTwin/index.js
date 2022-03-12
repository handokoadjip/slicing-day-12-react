import { Button } from "components/atoms";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="min-vh-100 bg-image-3 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper text-black">
              <div className="position-absolute top-50 start-0 translate-middle-y p-5 p-xl-8">
                <small className="text-uppercase">bonneville</small>
                <h2 className="display-2 fw-bolder text-uppercase ls-xl-10px text-sub-title">
                  street twin
                </h2>
                <p className="my-4 text-fade-black-1 ps-3">
                  If the easy-going style of the regular
                  <br /> Bonneville T100 is a bit too tame for you,
                  <br /> we've created the mean 'n' moody
                  <br /> Bonneville T100 Black.
                </p>
                <Button className="text-black" href="#">
                  explore
                </Button>
                <Link
                  className="text-fade-black-1 text-capitalize d-block ps-3 text-decoration-none"
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
