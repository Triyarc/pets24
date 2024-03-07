import React from "react";
import ContactBy from "../components/contact/ContactBy";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";

function Contact() {
  var pageName = "Contact";
  return (
    <div>
      <Banner pageName={pageName} />
      <ContactBy />
      <SubscribeArea />
    </div>
  );
}

export default Contact;
