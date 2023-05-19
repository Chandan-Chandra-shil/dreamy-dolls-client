import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const AllToyCard = ({ toy }) => {
  const {user} = useContext(AuthContext)
  
  const { _id, name, photo, price, quantity, category } = toy;
  
  return (
    <div className="card w-96 bg-purple-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>

        <h2 className="text-lg font-semibold">Price : {price}</h2>
        <h2 className="text-lg font-semibold">Quantity : {quantity}</h2>
        <h2 className="text-lg font-semibold">Category : {category}</h2>

        <div className="card-actions justify-end">
          <Link to={`/singleToyDetail/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllToyCard;