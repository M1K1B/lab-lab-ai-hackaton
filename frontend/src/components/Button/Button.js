import React from "react";
import "./styles.css";

import { RiSendPlaneFill } from "react-icons/ri";

const Button = ({ content, onClick }) => {
  return (
    <button onClick={onClick}>
      {content ?? <RiSendPlaneFill className="icon" />}
    </button>
  );
};

export default Button;
