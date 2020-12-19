import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <Wrapper size="full">
        <a href="https://github.com/ChrisPittman343/avalanche">Github</a>{" "}
      </Wrapper>
    </div>
  );
}

export default Footer;
