import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/all-toys?sort=${user?.email}&${
        isAscending ? "ascending" : "descending"
      }`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, isAscending]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dreamy-dolls-server.vercel.app/all-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete....", data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen ">
      <div>
        <h1 className="text-center text-5xl py-6 mb-5   bg-purple-100 text-purple-500 font-bold ">
          My Toys
        </h1>
      </div>
      <div className="text-center my-8">
        <h2 className="text-3xl mb-4  font-mon font-semibold text-purple-600">
          Sort By Price
        </h2>
       {/*  <select
          onClick={() => setIsAscending(!isAscending)}
          className=" shadow-md border-2  py-2 px-8  text-lg font-semibold"
        >
          <option value="Ascending" className="text-lg ">
            Ascending
          </option>

          <option value="Descending" className="text-lg">
            Descending
          </option>
        </select> */}
        <button className="btn btn-secondary" onClick={()=>setIsAscending(!isAscending)}>
          {
            isAscending? "Ascending" : "Descending"
          }
        </button>
      </div>
      <div className="overflow-x-auto container mx-auto  w-full ">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Toy photo </th>
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
                <td>
                  <img
                    className="w-16 h-16 rounded border border-purple-500"
                    src={myToy?.photo}
                    alt=""
                  />
                </td>
                <td>{myToy.name}</td>
                <td>{myToy.category}</td>
                <td>{myToy.price}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.quantity}</td>
                <tb className=" flex gap-5">
                  <span>
                    <Link to={`/updateToy/${myToy._id}`}>
                      <button className="btn btn-primary  btn-sm">
                        Updated
                      </button>
                    </Link>
                  </span>
                  <span>
                    <button
                      onClick={() => handleDelete(myToy._id)}
                      className="btn btn-error  btn-sm"
                    >
                      Delete
                    </button>
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
