import React from "react";
import CopyNPM from "./CopyNPM/CopyNPM";
import "./Intro.css";

function Intro(props) {
  return (
    <div className="intro">
      <div className="intro-hero" />
      <div className="title-wrapper">
        <h1 className="intro-title header">Avalanche</h1>
        <h2 className="intro-description header-description">
          Efficient updates for any database.
        </h2>
        <div className="links">
          <div className="npm-copy-wrapper">
            <CopyNPM />
          </div>
          <a className="intro-link" href="/">
            DOCS
          </a>
          <a className="intro-link" href="/" style={{ paddingLeft: "20px" }}>
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {};

export default Intro;
