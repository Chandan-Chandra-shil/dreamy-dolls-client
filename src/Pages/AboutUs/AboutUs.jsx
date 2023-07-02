import React, { useEffect } from 'react';
import about from "../../assets/about.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-3 items-center my-12 gap-10">
        <div data-aos="fade-right">
          <img
            className=" w-full md:border-8 p-5  "
            src={about}
            alt=""
          />
        </div>
        <div data-aos="fade-left" className="md:col-span-2 space-y-6 ">
          <h2 className="text-4xl px-5 text-purple-500 text-center md:text-left mb-5 font-mono font-bold">
            About US
          </h2>
          <p className="px-5 text-justify">
            At Dreamy Dolls, we are passionate about providing a delightful
            collection of exquisitely crafted dolls, enchanting accessories, and
            captivating toys that inspire boundless creativity and bring
            immeasurable joy to children s lives. Our carefully curated
            selection showcases a diverse range of dolls, embracing the beauty
            of individuality, while upholding uncompromising standards of
            quality and safety. We believe in fostering inclusivity and ensuring
            that every child can find a doll that resonates with their unique
            personality and dreams. At Dreamy Dolls, we offer a delightful
            collection of dolls, accessories, and toys that inspire creativity
            and bring joy to children s lives. We curate a diverse range of
            dolls, focusing on quality, safety, and inclusivity. Our mission is
            to provide a memorable and enchanting play experience while ensuring
            exceptional customer service. Join us on this magical journey of
            imagination and discovery at Dreamy Dolls!
          </p>
          <p className="px-5">
            Join us on this enchanting journey of play and discovery. Whether
            you are looking for a new friend for your little one or searching
            for the perfect gift, we are here to help you find that dreamy doll
            that will ignite their imagination and become a cherished companion
            for years to come.
          </p>

          <p className="px-5">
            Thank you for choosing Dreamy Dolls, where dreams come to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;