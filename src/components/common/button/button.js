import React from "react";

import "./button.css";

const Button = ({ onClick, children, dataAttributes = {} }) => {
  return (
    <button onClick={onClick} {...dataAttributes}>
      {children}
    </button>
  );
};

export default Button;
