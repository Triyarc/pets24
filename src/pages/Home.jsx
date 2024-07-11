import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import CategoryCard from "../components/home/CategoryCard";
import ClientReview from "../components/home/ClientReview";
import GroomerCard from "../components/common/GroomersCard";
import PricingCard from "../components/home/PricingCard";
import ServiceCard from "../components/common/ServiceCard";
import SubscribeArea from "../components/common/SubscribeArea";
import MainGallery from "../components/home/MainGallery";
import "../style/home.css";
import WhatWeDo from "../components/home/WhatWeDo";

function Home() {
  const [reload, setReload] = useState(false);
  const isAuthenticated = document.cookie.includes("loggedIn=true");

  useEffect(() => {}, [isAuthenticated]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

 

  return (
    <div>
      <Banner />
      <CategoryCard />
      <ServiceCard />
      {/* <GroomerCard /> */} <WhatWeDo />
      <PricingCard />
      <MainGallery />
      <ClientReview />
      <SubscribeArea />
      <div className='go-top' onClick={scrollToTop}>
        <i className='fas fa-chevron-up'></i>
        <i className='fas fa-chevron-up'></i>
      </div>
    </div>
  );
}

export default Home;
