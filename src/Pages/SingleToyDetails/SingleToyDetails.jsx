import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
  
  const toyDetails = useLoaderData()
  console.log("77777777777777777",toyDetails)
  return (
    <div>
      <h1>
        hello
      </h1>
      
    </div>
  );
};

export default SingleToyDetails;