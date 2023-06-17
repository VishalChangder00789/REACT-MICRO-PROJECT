import React from "react";
import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="Button">
      {title}
    </div>
  );
};

export default Button;
