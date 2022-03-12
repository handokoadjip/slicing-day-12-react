import { Jacket1, Jacket2, Jacket3 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  const lists = [
    {
      image: Jacket1,
      name: "manchaster",
      price: "$ 340",
      href: "#",
    },
    {
      image: Jacket2,
      name: "kate jacket",
      price: "$ 340",
      href: "#",
    },
    {
      image: Jacket3,
      name: "rockville",
      price: "$ 340",
      href: "#",
    },
  ];

  return (
    <section className="min-vh-100 bg-image-6 position-relative py-5">
      <div className="container position-relative z-999">
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="wrapper text-center">
              <h2 className="display-6 fw-bolder text-uppercase ls-5px">
                shop classics
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-3">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-2 mb-3 mb-lg-0">
                <div className="wrapper text-center">
                  <a
                    className="fw-bold text-border-bottom active position-relative text-uppercase text-decoration-none products"
                    href="#"
                  >
                    leather jacket
                  </a>
                </div>
              </div>
              <div className="col-lg-2 mb-3 mb-lg-0">
                <div className="wrapper text-center">
                  <a
                    className="fw-bold position-relative text-uppercase position-relative text-decoration-none products"
                    href="#"
                  >
                    gloves
                  </a>
                </div>
              </div>
              <div className="col-lg-2 mb-3 mb-lg-0">
                <div className="wrapper text-center">
                  <a
                    className="fw-bold position-relative text-uppercase position-relative text-decoration-none products"
                    href="#"
                  >
                    heans
                  </a>
                </div>
              </div>
              <div className="col-lg-2 mb-3 mb-lg-0">
                <div className="wrapper text-center">
                  <a
                    className="fw-bold position-relative text-uppercase position-relative text-decoration-none products"
                    href="#"
                  >
                    boots
                  </a>
                </div>
              </div>
              <div className="col-lg-2 mb-3 mb-lg-0">
                <div className="wrapper text-center">
                  <a
                    className="fw-bold position-relative text-uppercase position-relative text-decoration-none products"
                    href="#"
                  >
                    accesories
                  </a>
                </div>
              </div>
              <div className="col-lg-2 mb-3 mb-lg-0">
                <div className="wrapper text-center">
                  <a
                    className="fw-bold text-fade-1 text-uppercase text-decoration-none"
                    href="#"
                  >
                    gifts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="row">
            <div className="col-1 mt-5">
              <div className="position-relative h-100 customPrevBtn">
                <div className="position-absolute top-50 start-50 translate-middle h1 pointer">
                  <i className="fas fa-arrow-left"></i>
                </div>
              </div>
            </div>

            <div className="col-10 mt-5">
              <div className="owl-carousel owl-theme" id="products">
                {lists ? (
                  lists.map((list, index) => {
                    return (
                      <div className="item" key={`image-${index}`}>
                        <div className="card bg-transparent p-3 text-center h-100">
                          <div className="card-body">
                            <figure className="m-0">
                              <img src={list.image} alt={list.name} />
                              <figcaption>
                                <h3 className="h5 text-center text-uppercase ls-5px">
                                  {list.name}
                                </h3>
                              </figcaption>
                            </figure>
                            <p className="m-0 text-fade-1 mb-3">{list.price}</p>
                            <Link to={list.href}>
                              <i className="fas fa-plus-circle icon-button"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2 className="text-center">No Item in this section</h2>
                )}
              </div>
            </div>

            <div className="col-1 mt-5">
              <div className="position-relative h-100 customNextBtn">
                <div className="position-absolute top-50 start-50 translate-middle h1 pointer">
                  <i className="fas fa-arrow-right"></i>
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
