import React from "react";
import Banner from "../components/common/Banner";
import ProductArea from "../components/productShop/ProductArea";
import SubscribeArea from "../components/common/SubscribeArea";

function ProductShop() {
  var pageName = "Shop"
  return (
    <div>
      {/* <Banner pageName={pageName}/> */}
      
      <ProductArea />
      <SubscribeArea />
    </div>
  );
}

export default ProductShop;
