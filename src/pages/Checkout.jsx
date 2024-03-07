import React from "react";
import CheckoutArea from "../components/checkout/CheckoutArea";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";

function Checkout() {
    var pageName = "Checkout"
  return (
    <div>
      <Banner pageName={pageName} />
      <CheckoutArea />
      <SubscribeArea />
    </div>
  );
}

export default Checkout;
