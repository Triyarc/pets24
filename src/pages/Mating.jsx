import React, { useState } from "react";
import Banner from "../components/common/Banner";
import MatingPetsArea from "../components/mating/MatingPetsArea";
import SubscribeArea from "../components/common/SubscribeArea";
import "../style/fabStyle.css";
import AddPostBtn from "../components/common/AddPostBtn";

function Mating() {
  return (
    <div>
      <AddPostBtn navigationPath={"mating-post"} tooltipContent={"Mating Post"}/>
      <MatingPetsArea />
      <SubscribeArea />
    </div>
  );
}

export default Mating;
