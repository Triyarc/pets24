import React from "react";
import SubscribeArea from "../components/common/SubscribeArea";
import CartArea from "../components/cart/CartArea";
import Banner from "../components/common/Banner";
import '../style/product.css'

function Cart() {
    var pageName="Cart"
  return (
    <div>
      <Banner pageName={pageName} /> 
      <CartArea />
      <SubscribeArea />
    </div>
  );
}

export default Cart;
