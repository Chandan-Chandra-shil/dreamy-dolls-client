import React from 'react';

const AddAToys = () => {
  return (
    <div className="container mx-auto my-10">
      <form>
        <div className=" border shadow-md p-10 rounded-sm">
          <h1 className="text-4xl text-primary font-bold underline text-center">
            Add A Toy
          </h1>
          <div className="card-body md:grid sm:grid-cols-1 md:grid-cols-2  gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Picture URL</span>
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                name="sellerEmail"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category</span>
              </label>
              <input
                type="text"
                name="category"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <input
                type="text"
                name="description"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Add Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddAToys;