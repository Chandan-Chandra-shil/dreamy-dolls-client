import React from 'react';

const ShopByCategoryCard = ({ doll }) => {
  const {photo,name,price,rating } = doll;
  return (
    <div className="card w-96  hover:bg-purple-200  shadow-xl">
      <figure className='border-8'>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title"> Price : $ {price}</h2>
        <h2 className="card-title">{rating}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategoryCard;