import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SingleToyDetails = () => {
  
  const toyDetails = useLoaderData()
  console.log("........toy",toyDetails)

  const { name, description ,photo,price ,quantity,rating ,sellerName,sellerEmail} = toyDetails;
  

  return (
    <div className="  min-h-screen bg-purple-100 ">
      <div className="   sm:flex flex justify-center items-center ">
        <div className=" border p-12">
          <img src={photo} className=" w-full " />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <h1 className="text-2xl font-bold">Price :{price}</h1>
          <h1 className="text-2xl font-bold">Quantity :{quantity}</h1>
          <h1 className="text-2xl font-bold">{rating}</h1>
          <h1 className="text-2xl font-semibold">Seller Name : {sellerName}</h1>
          <h1 className="text-2xl font-semibold">
            Seller Email : {sellerEmail}
          </h1>
          <p className="py-6">{description}</p>
          <button className="btn btn-primary">Back Home Page</button>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;