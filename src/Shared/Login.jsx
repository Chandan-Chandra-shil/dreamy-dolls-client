import React from "react";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" container min-h-screen mx-auto  rounded-sm">
      <div className="shadow mt-20 gap-4">
        <form className="  ">
          <div className="card-body  ">
            <h1 className="text-3xl text-primary font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>

          <p className="text-center pb-8">
            Dream Dolls New ? <Link to="/register" className="text-primary">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
