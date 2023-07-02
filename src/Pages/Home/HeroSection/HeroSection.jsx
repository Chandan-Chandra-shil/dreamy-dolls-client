import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://assets.change.org/photos/0/wp/di/yEwpDIdCZKErHtC-1600x900-noPad.jpg?1662745359")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl  text-purple-200 font-bold">Dreamy Dolls Stores</h1>
          <p className="mb-5 text-lg ">
            Ready to make memories together you’ll always treasure? Discover all
            the experiences our stores offer for a day full of fun!
          </p>
          <button className="btn btn-primary bg-purple-600">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;