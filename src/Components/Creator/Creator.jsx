import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../Wrapper/Wrapper";
import "./Creator.css";

function Creator(props) {
  return (
    <div className="word-from-creator">
      <Wrapper size="full">
        <div className="creator-title header">A word from the designer:</div>
        <div className="creator-body header-description">
          Hi there!
          <br />
          <br />
          If you came here looking for some cool software to help in a project,
          I regret to inform you that there is nothing here for you. This is
          just a landing page I thought up to practice designing simple,
          responsive websites (Hence all the empty buzzwords I used to fill
          space).
          <br />
          <br />
          However, if you had any suggestions on the website, feedback would be
          greatly appreciated. You can contact me by filling out{" "}
          <span className="text-btn" onClick={(e) => props.toggleModal(true)}>
            this form
          </span>
          .
          <br />
          <br />
          Thanks for stopping by!
          <br />
          -Chris
        </div>
      </Wrapper>
    </div>
  );
}

Creator.propTypes = {
  toggleModal: PropTypes.func,
};

export default Creator;
