import React from "react";

import { Link } from "react-router-dom";
const Login = () => {

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
  }

  return (
    <div className=" container md:w-[100vh] mx-auto  rounded-sm">
      <div className="shadow mt-20 gap-4">
        <form onSubmit={handleLogin}>
          <div className="card-body  ">
            <h1 className="text-3xl text-primary font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                  name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
               name="password"
                className="input input-bordered"
              />
              <label className="label">
               
              </label>
            </div>
            <div className="form-control mt-6">
              
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </div>

          <p className="text-center pb-8">
            Dream Dolls New ?
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
