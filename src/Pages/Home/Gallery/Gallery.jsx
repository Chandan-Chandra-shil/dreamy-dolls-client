import React from "react";


import img1 from "../../../assets/gellary1.jpg";
import img2 from "../../../assets/gellary2.jpg";
import dolls from "../../../assets/bdOne .jpg";
import img4 from "../../../assets/gellary4.jpg";
import img5 from "../../../assets/gellary5.jpg";
import img6 from "../../../assets/gellary6.jpg";
import img7 from "../../../assets/gellary7.jpg";
import img8 from "../../../assets/gellary8.jpg";

import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="container mx-auto py-12 ">
      <div className=" text-center py-8 mx-4">
        <h2 className="text-4xl font-bold mb-4 font-mono text-purple-500 ">Gallery</h2>
        <p className="text-lg border-b-8 pb-4 mb-5 text-justify md:text-center   ">
          Explore our gallery of charming toy dolls that will capture your heart<br/> 
          with their delightful  designs and vibrant colors.
        </p>
      </div>
      <div className="grid grid-cols-1 mx-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative   ">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={img1} alt="Image 1" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-100 bg-opacity-75 opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={img2} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 e opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-100 bg-opacity-75 opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={img4} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={img5} className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-100 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={img6} className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={img7} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-100 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow ">
            <img src={img8} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center text-lg font-bold  text-purple-500">
              Upcoming Product ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
