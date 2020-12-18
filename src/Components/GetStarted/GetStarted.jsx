import React from "react";
import PropTypes from "prop-types";
import "./GetStarted.css";
import Wrapper from "../Wrapper/Wrapper";

function GetStarted(props) {
  return (
    <div className="get-started">
      <Wrapper>
        <div className="get-started-title header">Interested?</div>
        <div className="get-started-body header-description">
          Integrate Avalanche into your project in no time by checking out our
          starting documentation.
          <div className="get-started-btn-container">
            <a href="https://github.com/ChrisPittman343/avalanche">
              <button className="get-started-btn">Get Started</button>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

GetStarted.propTypes = {};

export default GetStarted;
