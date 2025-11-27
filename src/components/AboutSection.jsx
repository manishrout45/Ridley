import React from "react";
import { FaMartiniGlassCitrus } from "react-icons/fa6";

const AboutSection = ({ className = "" }) => {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-16 bg-gray-900 ">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20 z-0 animate-bgBounce"
    style={{ backgroundImage: "url('/assets/images/1039136_96772-OKJH1U-272.png')" }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-green-900/70 z-10"></div>

  {/* Main Content */}
  <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-20 ${className}`}>

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
        A culinary haven offering a tantalizing array of flavorful dishes...
      </p>

      <p className="text-gray-300 leading-relaxed mb-8">
        A gastronomic delight, serving a tantalizing array of savory dishes...
      </p>

      {/* Stats */}
      <div className="flex items-center gap-12 mb-10">
        <div>
          <p className="text-5xl font-bold text-green-500">15</p>
          <p className="text-white font-medium">
            Years of<br />
            <span className="font-bold">EXPERIENCE</span>
          </p>
        </div>

        <div className="border-l-2 border-green-500 h-14"></div>

        <div>
          <p className="text-5xl font-bold text-green-500">8</p>
          <p className="text-white font-medium">
            Popular<br />
            <span className="font-bold">MASTER CHEFS</span>
          </p>
        </div>
      </div>

      <button className="shine-btn bg-green-500 text-white px-8 py-3 rounded-md shadow hover:bg-green-600">
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
        src="/assets/images/restaurant-interior.jpg"
        className="rounded-xl shadow-md w-full h-44 sm:h-52 lg:h-56 object-cover"
        alt="Interior"
      />

      <img
        src="/assets/images/restaurant-interior(1).jpg"
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
