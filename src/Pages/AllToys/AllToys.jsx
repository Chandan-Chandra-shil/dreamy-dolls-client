import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search operation with searchTerm



    // Reset the search input field
    setSearchTerm("");
  };

 

  useEffect(() => {
    fetch("https://dreamy-dolls-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="container mx-auto min-h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-purple-500 font-mono font-bold text-4xl py-4 ">
          Search Your favorite Toys
        </h1>
        <div className="text-center my-10 w-full ">
          <input
            className=" py-3 px-12 border border-purple-400 rounded "
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button
            type="submit "
            className="border py-3 px-4 font-semibold bg-purple-600  text-white"
          >
            Search
          </button>
        </div>
      </form>

      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price </th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {toys?.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/singleToyDetail/${toy._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          
          
        </table>
      </div>
    </div>
  );
};

export default AllToys;
