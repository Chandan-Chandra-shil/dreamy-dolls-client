import React from 'react';
import {
  FaShoppingBag,
  FaShippingFast,
  FaFortAwesomeAlt,

} from "react-icons/fa";
const Services = () => {
  return (
    <div className="bg-purple-100">
      <div className="grid sm:grid-cols-1  md:grid-cols-3 gap-4   lg:grid-cols-3 container mx-auto md:py-12 items-center">
        <div className="space-y-6 mx-auto ">
          <FaShoppingBag className="mx-auto w-8 h-8 mb-2 text-purple-500"></FaShoppingBag>
          Pay with credit card, transfer,
          <br /> Paypal or cash on delivery,
          <br /> depending on the destination.
        </div>
        <div className="space-y-6 mx-auto">
          <FaShippingFast className="mx-auto w-8 h-8 mb-2 text-purple-500"></FaShippingFast>
          Express shipping in the
          <br /> Peninsula and shipments
          <br /> worldwide.
        </div>
        <div className="space-y-6 mx-auto">
          <FaFortAwesomeAlt className="mx-auto w-8 h-8 mb-2 text-purple-500"></FaFortAwesomeAlt>
          The largest specialized <br />
          catalog of collectible
          <br /> dolls.
        </div>
       
      </div>
    </div>
  );
};

export default Services;