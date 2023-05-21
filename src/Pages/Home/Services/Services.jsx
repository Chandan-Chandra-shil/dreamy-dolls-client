import React from 'react';
import Marquee from "react-fast-marquee";
import {
  FaShoppingBag,
  FaShippingFast,
  FaFortAwesomeAlt,

} from "react-icons/fa";
const Services = () => {
  return (
    <div className="bg-purple-100">
      <div className="grid sm:grid-cols-1  py-8 md:grid-cols-3 gap-4   lg:grid-cols-3 container mx-auto md:py-12 items-center">
        <div className="space-y-6 mx-auto ">
          <Marquee>
            <FaShoppingBag className="mx-auto w-8 h-8 mb-2 text-purple-500"></FaShoppingBag>
          </Marquee>
          Pay with credit card, transfer,
          <br /> Paypal or cash on delivery,
          <br /> depending on the destination.
        </div>

        <div className="space-y-6 mx-auto">
          <Marquee>
            <FaShippingFast className="mx-auto w-8 h-8 mb-2 text-purple-500"></FaShippingFast>
          </Marquee>
          Express shipping in the
          <br /> Peninsula and shipments
          <br /> worldwide.
        </div>

        <div className="space-y-6 mx-auto">
          <Marquee>
            <FaFortAwesomeAlt className="mx-auto w-8 h-8 mb-2 text-purple-500"></FaFortAwesomeAlt>
          </Marquee>
          The largest specialized <br />
          catalog of collectible
          <br /> dolls.
        </div>
      </div>
    </div>
  );
};

export default Services;