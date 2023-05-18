import React from "react";
import error from "../../assets/errors.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container mx-auto w-[100vh]">
      <div className=" text-center mt-10 ">
        <Link
          to="/"
          className="text-5xl font-bold underline hover:text-primary px-10 rounded"
        >
          Back to Home
        </Link>
        <img className=" w-full" src={error} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
