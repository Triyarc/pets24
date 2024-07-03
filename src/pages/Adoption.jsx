import React, { useState } from "react";
import AdoptionPetsArea from "../components/adoption/AdoptionPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";
import AddPostBtn from "../components/common/AddPostBtn";

function Adoption() {
  return (
    <div>
      <AddPostBtn
        navigationPath={"adoption-post"}
        tooltipContent={"Adoption Post"}
      />
      <AdoptionPetsArea />
      <SubscribeArea />
    </div>
  );
}

export default Adoption;
