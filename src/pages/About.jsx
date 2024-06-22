import React from "react";
import AboutArea from "../components/about/AboutArea";
import ConsultantArea from "../components/about/ConsultantArea";
import CounterArea from "../components/about/CounterArea";
import VideoArea from "../components/about/VideoArea";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";
import GroomersCard from "../components/common/GroomersCard";
function About() {
  var pageName= "About"
  return (
    <div>
      <Banner pageName={pageName}/>
      <AboutArea />
      <ConsultantArea />
      <GroomersCard />
      <CounterArea />
      <VideoArea />
      <SubscribeArea />
    </div>
  );
}

export default About;
