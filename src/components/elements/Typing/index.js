import React from "react";
import "./Typing.scss";

const Typing = ({ visible }) => {
  return (
    <p
      className="typing-wrapper"
      style={{
        display: visible ? "block" : "none",
      }}
    >
      is typing<span className="typing">....</span>
    </p>
  );
};

export default Typing;
