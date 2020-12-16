import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";
import "./Creator.css";

function Creator(props) {
  return (
    <div className="word-from-creator">
      <Wrapper size="full">
        <div className="creator-title header-description">
          A few words from the creator:
        </div>
      </Wrapper>
    </div>
  );
}

Creator.propTypes = {};

export default Creator;
