import React from "react";
import { FaMartiniGlassCitrus } from "react-icons/fa6";

const AboutSection = ({ className = "" }) => {
  return (
    <section className="relative overflow-hidden  py-16 bg-gray-900 ">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20 z-0 animate-bgBounce"
    style={{ backgroundImage: "url('/assets/images/1039136_96772-OKJH1U-272.png')" }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-green-900/70 z-10"></div>

  {/* Main Content */}
  <div className={`relative grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-6 gap-10 items-center z-20 ${className}`}>

    {/* LEFT TEXT SECTION */}
    <div>
      <p className="text-green-500 text-xl font-semibold mb-2 flex items-center gap-2">
        About Us
        <span className="h-[2px] w-14 bg-green-500 inline-block"></span>
      </p>

      <h2 className="main-heading text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-4">
        Welcome to Ridley
        <FaMartiniGlassCitrus className="text-6xl text-white" />
      </h2>

      <p className="text-gray-300 leading-relaxed mb-4">
        Ridley Pub in Bhubaneswar is a cozy and welcoming spot known for its lively atmosphere, good food and refreshing drinks. 
        It’s a great place to relax with friends, enjoy music and unwind after a long day. 
        With a warm ambiance and friendly service, Ridley Pub offers the perfect setting for a fun and enjoyable evening.
      </p>

     

      <button className="shine-btn bg-green-500 text-white px-8 py-3 mt-8 rounded-md shadow hover:bg-green-600">
        READ MORE
      </button>
    </div>

    {/* RIGHT IMAGES SECTION */}
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">

      <img
        src="/assets/images/nightlife-people-having-fun-bars-clubs.jpg"
        className="rounded-xl shadow-md w-full h-48 sm:h-56 lg:h-64 object-cover"
        alt="Nightlife"
      />

      <img
        src="/assets/images/OrgImg/Ridley_Img2.jpeg"
        className="rounded-xl shadow-md w-full h-44 sm:h-52 lg:h-56 object-cover"
        alt="Interior"
      />

      <img
        src="/assets/images/OrgImg/Ridley_Img1.jpeg"
        className="rounded-xl shadow-md w-full h-44 sm:h-52 lg:h-56 object-cover"
        alt="Interior 2"
      />

      <img
        src="/assets/images/shish-kebab-with-colorful-bell-peppers-served-with-ketchup-fresh-vegetables.jpg"
        className="rounded-xl shadow-md w-full h-48 sm:h-56 lg:h-64 object-cover"
        alt="Food"
      />

    </div>

  </div>

</section>

  );
};

export default AboutSection;
