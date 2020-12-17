import React, { Component } from "react";
import "./CopyNPM.css";
import copyLogo from "../../../Images/copy.svg";

export default class CopyNPM extends Component {
  render() {
    return (
      <div className="copy-npm">
        <div className="clipboard-text-wrapper">
          <div id="install-text">npm (don't) install avalanche</div>
        </div>
        <div className="copy-btn-wrapper">
          <button
            className="copy-btn"
            onClick={(e) => copyToClipboard(console.log, console.log)}
          >
            <img id="copy-icon" alt="Copy" src={copyLogo} />
          </button>
        </div>
      </div>
    );
  }
}

/**
 * Copies the dummy text to the clipboard, then calls a function
 * in a parent component to display the success.
 * @param {function} resolve
 * @param {function} reject
 */
async function copyToClipboard(resolve, reject) {
  navigator.clipboard
    .writeText("don't actually run this!")
    .then(() => {
      resolve();
    })
    .catch(() => reject());
}
