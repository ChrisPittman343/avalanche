import React from "react";
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
          If you came here looking for some cool software to help in a project
          of yours, I regret to inform you that this site has none. This is just
          a landing page I thought up to practice designing simple, responsive
          websites (Hence all the empty buzzwords I used to fill space).
          <br />
          <br />
          Thanks for stopping by!
          <br />
          <br />
          -Chris
        </div>
      </Wrapper>
    </div>
  );
}

export default Creator;
