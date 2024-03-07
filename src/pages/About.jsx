import React from "react";
import AboutArea from "../components/about/AboutArea";
import ConsultantArea from "../components/about/ConsultantArea";
import GroomersArea from "../components/common/GroomersArea";
import CounterArea from "../components/about/CounterArea";
import VideoArea from "../components/about/VideoArea";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";
function About() {
  var pageName= "About"
  return (
    <div>
      <Banner pageName={pageName}/>
      <AboutArea />
      <ConsultantArea />
      <GroomersArea />
      <CounterArea />
      <VideoArea />
      <SubscribeArea />
    </div>
  );
}

export default About;
