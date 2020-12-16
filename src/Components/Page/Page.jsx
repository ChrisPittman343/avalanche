import React from "react";
import "./Page.css";
import Intro from "../Intro/Intro";
import Reasons from "../Reasons/Reasons";
import Footer from "../Footer/Footer";
import Description from "../Description/Description";
import Creator from "../Creator/Creator";

export default function Page() {
  return (
    <div>
      <Intro />
      <Description />
      <Reasons />
      <Creator />
      <Footer />
    </div>
  );
}
