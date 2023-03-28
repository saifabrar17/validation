import React from "react";

const Button = ({ type, title = "", onClick, onSubmit }) => {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      className="bg-green-500 p-3 rounded-md text-white"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
