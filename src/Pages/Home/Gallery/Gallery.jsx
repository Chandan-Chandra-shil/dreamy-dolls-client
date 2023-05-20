import React from 'react';
import dolls from "../../../assets/bdOne .jpg"

import "./Gallery.css"
const Gallery = () => {
  return (
    <div className="container mx-auto py-12">
      <div className=" text-center py-8">
        <h2 className="text-5xl font-bold mb-4 ">Gallery</h2>
        <p className="text-2xl border-b-8 pb-4  ">Our latest Dolls </p>
      </div>
      <div className="grid grid-cols-1 b sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="relative   ">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://i5.walmartimages.com/asr/bd059b25-d700-4e55-a4cf-74243e56da3a.86293b77e0b1d8ee521c5b2b4bec45dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 1"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 bg-neutral-200 bg-opacity-75 opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center font-bold ">Upcoming ...</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://i5.walmartimages.com/asr/1acaa216-81d7-4297-9bba-42013dbaa6eb.113474c93174c014be4a0f4a9fea87a4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 2"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 e opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img src={dolls} alt="Image 2" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://i5.walmartimages.com/asr/59013642-4764-4226-baf2-cdccf3911bb6.7a22a41e696f7ef3bcb05b59d52bdb31.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 2"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Cute dolls</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://i5.walmartimages.com/asr/ef2d2df9-8ceb-4be8-9f0b-23c88fcf9334.823168bb645073d608e6f790d79d2405.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 2"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://i5.walmartimages.com/asr/79585fb2-e3a4-4637-a976-aeac6d4a3219.a18b733d8c4de0680f10d50ae02529bc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 2"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://i5.walmartimages.com/asr/7b21ac37-c627-49ba-8b7e-94438275bffd.9b1c2228f93e77f8b3515df784ccc31d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 2"
              className="w-full"
            />
          </div>
          <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white opacity-0 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-center">Some Text 2</p>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow ">
            <img
              src="https://i5.walmartimages.com/asr/1df7fc65-890a-4b3b-8aea-20b3fd98f23f.fb61035c3fbd5bcbf8096105b5684500.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
              alt="Image 2"
              className="w-full"
            />
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