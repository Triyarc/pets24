import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import CategoryCard from "../components/home/CategoryCard";
import ClientReview from "../components/home/ClientReview";
import Gallery from "../components/home/Gallery";
import GroomerCard from "../components/common/GroomersCard";
import PricingCard from "../components/home/PricingCard";
import ServiceCard from "../components/common/ServiceCard";
import SubscribeArea from "../components/common/SubscribeArea";

function Home() {
  const isAuthenticated = document.cookie.includes("loggedIn=true");

  useEffect(() => {
  
  }, [isAuthenticated]);

  return (
    <div>
      <Banner />
      <CategoryCard />
      <ServiceCard />
      <GroomerCard />
      <PricingCard />
      <Gallery />
      <ClientReview />
      <SubscribeArea />
    </div>
  );
}

export default Home;
