import React from "react";
import "./Description.css";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";

function Description(props) {
  return (
    <div className="description">
      <Wrapper>
        <div className="description-title header">
          SQL got you feeling buried?
        </div>
        <div className="description-header header-description">
          Whether it's an enterprise application or a personal project, the
          feeling of having unnecessary database queries on every request is
          something well understood by developers everywhere.
          <br />
          <br />
          That's why Avalanche strives to optimize every query that you do.
          <br />
          <br />
          With minimal work on your end, Avalanche can understand your schema
          and clean up the queries necessary to make your app as performant as
          possible.
        </div>
      </Wrapper>
    </div>
  );
}

Description.propTypes = {};

export default Description;
