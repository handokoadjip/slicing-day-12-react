import React from "react";

const index = (props) => {
  return (
    <header className="min-vh-100 bg-image-1 position-relative">
      {props.children}
    </header>
  );
};

export default index;
