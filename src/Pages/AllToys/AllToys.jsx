import  { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";

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


  console.log(toys)

  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then(res => res.json())
    .then(data=>setToys(data))

  }, []);
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-primary bg-purple-200 text-4xl py-10 ">
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {toys.map((toy) => (
          <AllToyCard key={toy._id} toy={toy}></AllToyCard>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
