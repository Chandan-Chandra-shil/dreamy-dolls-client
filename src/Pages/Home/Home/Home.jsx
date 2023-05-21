import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import OurCollection from "../OurCollection/OurCollection";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Services></Services>
      <OurCollection></OurCollection>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
