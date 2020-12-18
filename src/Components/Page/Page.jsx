import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "./Page.css";
import Intro from "../Intro/Intro";
import Reasons from "../Reasons/Reasons";
import Footer from "../Footer/Footer";
import Description from "../Description/Description";
import Creator from "../Creator/Creator";
import GetStarted from "../GetStarted/GetStarted";
import Feedback from "../Feedback/Feedback";

export default function Page() {
  const [usingForm, setUsingForm] = useState(true);
  const scrollLockClass = usingForm ? "scroll-lock" : "";

  //The scroll bar pushing content over is really terrible looking. Probably just have to deal with it or remove scroll locking entirely.

  // if (scrollLockClass.length > 0)
  //   document.getElementsByTagName("body")[0].classList.add("scroll-lock");
  // else document.getElementsByTagName("body")[0].classList.remove("scroll-lock");

  const toggleFormUsage = (bool) => {
    //const root = document.getElementById("root");
    //bool ? disableBodyScroll(root) : enableBodyScroll(root);
    setUsingForm(bool);
  };

  return (
    <div className="page">
      <div className={`main-content ${scrollLockClass}`}>
        <Intro />
        <Description />
        <Reasons />
        <GetStarted />
        <Creator toggleModal={toggleFormUsage} />
        <Footer toggleModal={toggleFormUsage} />
      </div>
      {usingForm ? <Feedback toggleModal={toggleFormUsage} /> : <></>}
    </div>
  );
}
