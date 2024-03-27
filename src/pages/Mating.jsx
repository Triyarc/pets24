import React from "react";
import Banner from "../components/common/Banner";
import MatingPetsArea from "../components/mating/MatingPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";

function Mating() {
  var pageName = "Mating";
  return (
    <div>
      <Banner pageName={pageName} />
      <MatingPetsArea />
      <SubscribeArea />
    </div>
  );
}

export default Mating;
