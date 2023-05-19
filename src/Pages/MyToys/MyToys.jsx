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
      <div>
        <h1 className="text-center text-5xl py-6 mb-5   bg-purple-100 text-purple-500 font-bold ">
          My Toys
        </h1>
      </div>
      <div className="overflow-x-auto container mx-auto  w-full ">
        <table className="table  w-full">
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
              <th>Action</th>

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
                <tb className=" flex gap-5">
                  <span>
                    <button className="btn btn-primary  btn-sm">Update</button>
                  </span>
                  <span>
                    <button className="btn btn-error  btn-sm">Delete</button>
                  </span>
                </tb>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
