import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "btn",
    "btn-custom-1",
    "text-uppercase",
    "text-center",
    "px-4",
    "mb-3",
  ];

  className.push(props.className);

  return (
    <Link className={className.join(" ")} to={props.href}>
      {props.children}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  to: propTypes.string,
};

export default index;
