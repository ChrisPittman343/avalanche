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
          just a landing page I thought up to practice designing clean,
          responsive websites.
          <br />
          <br />
          However, if you had any thoughts on the website, any feedback would be
          greatly appreciated. You can contact me by sending an email to EMAIL,
          or by filling out THIS form.
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

Creator.propTypes = {};

export default Creator;
