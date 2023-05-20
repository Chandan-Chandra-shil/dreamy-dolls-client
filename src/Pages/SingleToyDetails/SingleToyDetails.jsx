import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log("........toy", toyDetails);

  const {
    name,
    description,
    photo,
    price,
    quantity,
    rating,
    sellerName,
    sellerEmail,
  } = toyDetails;

  return (
    <div className="min-h-screen">
      <div className="card mt-10  ">
        <figure>
          <img  className="img-fluid border-8 w-96 border-purple-400" src={photo} alt="Album" />
        </figure>
        <div className="card-body text-center ">
          <h2 className="text-3xl font-bold">Name : {name}</h2>
          <h2 className=" text-2xt font-semibold">Price : ${price}</h2>
          <h2 className="text-2xt font-semibold">Quantity : {quantity}</h2>

          {sellerName ? (
            <h2 className="text-2xt font-semibold">
              Seller Name :{sellerName?.sellerName}
            </h2>
          ) : (
            ""
          )}
          <h2 className="text-2xt font-semibold">
            Seller Email : {sellerEmail}
            <h2>{rating}</h2>
          </h2>
          <p>
            <span className="text-2xl font-bold">Description </span> 
            <span className="text-lg">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
