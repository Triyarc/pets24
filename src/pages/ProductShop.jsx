import React from "react";
import Banner from "../components/common/Banner";
import ProductArea from "../components/productShop/ProductArea";
import SubscribeArea from "../components/common/SubscribeArea";

function ProductShop({ addToCart }) {
  // var pageName = "Shop"
  return (
    <div>
      {/* <Banner pageName={pageName}/> */}

      <ProductArea  addToCart={addToCart} />
      <SubscribeArea />
    </div>
  );
}

export default ProductShop;
