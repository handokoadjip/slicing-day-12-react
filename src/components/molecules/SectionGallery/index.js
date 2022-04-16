import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
} from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  const lists = [
    {
      image: Gallery1,
    },
    {
      image: Gallery2,
    },
    {
      image: Gallery3,
    },
    {
      image: Gallery4,
    },
    {
      image: Gallery5,
    },
    {
      image: Gallery6,
    },
    {
      image: Gallery7,
    },
  ];

  return (
    <section className="min-vh-100">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center h-100">
          {lists.map((list, index) => {
            return (
              <div className="col-6 col-lg-3 p-0" key={`image${index}`}>
                <figure className="m-0">
                  <img
                    className="w-100"
                    src={list.image}
                    alt={`gallery-${index}`}
                  />
                </figure>
              </div>
            );
          })}

          <div className={`col-6 p-0 ${lists ? "col-lg-3 " : "col-lg-12"}`}>
            <div className="position-relative">
              <figure className="m-0">
                <img
                  className="w-100 v-invisible"
                  src={Gallery8}
                  alt="gallery-8"
                />
              </figure>
              <div
                className="position-absolute top-50 start-50 translate-middle w-100 h-100 last-gallery d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: `url(${Gallery8})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-center position-relative z-999">
                  <p className="h3 fw-bold">#</p>
                  <h5 className="fs-4 text-uppercase fw-bolder text-white mb-4">
                    triumph <br /> classics
                  </h5>
                  <p className="m-0 text-fade-1">
                    Become A legend. <br />
                    Hastag your instagram or <br />
                    facebook photo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
