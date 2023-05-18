import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
      
    </div>
  );
};

export default Home;