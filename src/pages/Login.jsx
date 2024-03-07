import React from "react";
import AccountArea from "../components/Login/AccountArea";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";

function Login() {
    var pageName = "My-Account"
  return (
    <div>
      <Banner pageName={pageName}/>
      <AccountArea />
      <SubscribeArea />
    </div>
  );
}

export default Login;
