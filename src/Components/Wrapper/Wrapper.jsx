import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <div
      className={`wrapper ${props.size === "full" ? "full" : "medium"}-wrapper`}
    >
      {props.children}
    </div>
  );
}

export default Wrapper;
