import React from "react";
import "./CopyNPM.css";
import copyLogo from "../../../Images/copy.svg";

export default function CopyNPM(props) {
  /**
   * Copies the dummy text to the clipboard, then calls a function
   * in a parent component to display the success.
   * @param {function} resolve
   * @param {function} reject
   */
  async function copyToClipboard(e) {
    e.preventDefault();
    navigator.clipboard
      .writeText("don't actually run this!")
      .then(() => {
        successfulCopy();
      })
      .catch(() => failedCopy());
  }

  const successfulCopy = () => {
    const btn = document.getElementById("copy-btn");
    btn.classList.add("successful-copy");
    setTimeout(() => {
      btn.classList.remove("successful-copy");
    }, 1000);
  };

  const failedCopy = () => {
    const btn = document.getElementById("copy-btn");
    btn.classList.add("failed-copy");
    setTimeout(() => {
      btn.classList.remove("failed-copy");
    }, 1000);
  };

  return (
    <div className="copy-npm">
      <button id="copy-btn" onClick={(e) => copyToClipboard(e)}>
        <div className="install-text-wrapper">
          $ npm (don't) install avalanche
        </div>
        <div className="copy-icon-wrapper">
          <img id="copy-icon" alt="Copy" src={copyLogo} />
        </div>
      </button>
    </div>
  );
}
//
