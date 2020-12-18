import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <Wrapper size="full">
        <a href="https://github.com/ChrisPittman343/avalanche">Github</a>{" "}
        <span
          className="text-btn"
          style={{ marginLeft: "25px" }}
          onClick={(e) => props.toggleModal(true)}
        >
          Contact
        </span>
      </Wrapper>
    </div>
  );
}

Footer.propTypes = {
  toggleModal: PropTypes.func,
};

export default Footer;
