import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  return (
    <div className="min-h-screen ">
      <h1 className="text-center text-5xl text-purple-500 font-bold ">
        My Toys
      </h1>
      <div className="overflow-x-auto  w-full ">
        <table className="table  w-[100%">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Toy photo url</th>
              <th>Toy name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>

              <th>SellerName</th>
              <th>SellerEmail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys?.map((myToy, index) => (
              <tr key={myToy._id}>
                <td>{index + 1}</td>
                <td>{myToy.photo}</td>
                <td>{myToy.name}</td>
                <td>{myToy.category}</td>
                <td>{myToy.price}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.quantity}</td>
                <td>{myToy.description}</td>
                <td>{myToy.sellerName}</td>
                <td>{myToy.sellerEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
