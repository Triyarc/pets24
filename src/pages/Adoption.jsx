import React from "react";
import Banner from "../components/common/Banner";
import AdoptionPetsArea from "../components/adoption/AdoptionPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";

function Adoption() {
  var pageName = "Adoption";
  return (
    <div>
      {/* <Banner pageName={pageName} /> */}
      <AdoptionPetsArea/>
      <SubscribeArea/>
    </div>
  );
}

export default Adoption;
