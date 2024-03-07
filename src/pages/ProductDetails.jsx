import React from "react";
import RelatedProduct from "../components/productShopDetails/RelatedProduct";
import Details from "../components/productShopDetails/Details";
import SubscribeArea from "../components/common/SubscribeArea";

function ProductDetails() {
  return (
    <div>
      <Details />
      <RelatedProduct />
      <SubscribeArea/>
    </div>
  );
}

export default ProductDetails;
