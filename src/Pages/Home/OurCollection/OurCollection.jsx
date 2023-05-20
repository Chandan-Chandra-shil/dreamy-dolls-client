import { useEffect } from "react";
import like1 from "../../../assets/collection1.jpg";
import like2 from "../../../assets/collection2.jpg";
import like3 from "../../../assets/collection3.jpg";
import like4 from "../../../assets/collection4.jpg";
import like5 from "../../../assets/collection5.jpg";
import like6 from "../../../assets/collection6.jpg";
import like7 from "../../../assets/collection7.jpg";
import like8 from "../../../assets/collection8.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const OurCollection = () => {

  useEffect(() => {
    AOS.init();
  },[])
  
  return (
    <div className="my-12 container mx-auto">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-5xl font-bold text-purple-600">
          Your online store of collectible dolls
        </h1>
        <p>
          Find your dream doll in the largest catalog of collectible dolls.
          Discover the most exclusive limited series,
          <br /> the classic and modern dolls, the most tender and realistic
          reborn babies, the most adorable
          <br />
          fabric dolls, all the accessories you can imagine and much more.
        </p>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:item-center gap-5 mb-5 ">
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <img className="w-96 px-5" src={like1} alt="photo" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <img className="w-96 px-5" src={like2} alt="photo" />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <img className="w-96 px-5" src={like3} alt="photo" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <img className="w-96 px-5" src={like4} alt="photo" />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <img className="w-96 px-5" src={like5} alt="photo" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <img className="w-96 px-5" src={like6} alt="photo" />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <img className="w-96 px-5" src={like7} alt="photo" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className=""
        >
          <img className="w-96 px-5" src={like8} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
