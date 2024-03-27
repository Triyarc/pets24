import React from "react";
import ServiceCard from "../components/common/ServiceCard";
import ServicesAndPrice from "../components/service/ServicesAndPrice";
import GroomersCard from "../components/common/GroomersCard";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";

function Service() {
  var pageName = "Service"
  return (
    <div>
      <Banner pageName={pageName}/>
      {/* <ServiceCard /> */}
      <ServicesAndPrice />
      {/* <GroomersCard /> */}
      <SubscribeArea />
    </div>
  );
}

export default Service;
