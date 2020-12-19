import React from "react";
import "./Page.css";
import Intro from "../Intro/Intro";
import Reasons from "../Reasons/Reasons";
import Footer from "../Footer/Footer";
import Description from "../Description/Description";
import Creator from "../Creator/Creator";
import GetStarted from "../GetStarted/GetStarted";

export default function Page() {
  return (
    <div className="page">
      <Intro />
      <Description />
      <Reasons />
      <GetStarted />
      <Creator />
      <Footer />
      {/*{usingForm ? <Feedback toggleModal={setUsingForm} /> : <></>}*/}
    </div>
  );
}
