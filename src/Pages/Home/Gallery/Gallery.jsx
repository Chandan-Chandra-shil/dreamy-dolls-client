import React from 'react';
import dolls from "../../../assets/bdOne .jpg"

import "./Gallery.css"
const Gallery = () => {
  return (
    <div className="container mx-auto py-12">
      <div className=" text-center">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <p>Our latest Dolls </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 1" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 1</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Cute dolls</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow ">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;