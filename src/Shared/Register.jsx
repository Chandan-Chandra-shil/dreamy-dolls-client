import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name,email,password,photo)
    
    }

  return (
    <div className=" container min-h-screen mx-auto  rounded-sm">
      <div className="shadow mt-20 gap-4">
        <form onSubmit={handleRegister}>
          <div className="card-body  ">
            <h1 className="text-3xl text-primary font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
             
              <input type="submit" className="btn btn-primary"  value="Register" />
            </div>
          </div>

          <p className="text-center pb-8">
            Already Have an Account ?
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;