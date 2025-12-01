import React from "react";
  const services = [
    { icon: "fa-chart-line", color: "teal-600", title: "Service Name" },
    { icon: "fa-landmark", color: "gray-700", title: "Service Name" },
    { icon: "fa-money-bill-wave", color: "teal-600", title: "Service Name" },
    { icon: "fa-chart-pie", color: "gray-700", title: "Service Name" },
  ];
const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[70vh] bg-cover bg-center flex items-center justify-center px-6"
        style={{ backgroundImage: "url('/assets/images/img1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center max-w-3xl">
          <h3 className="text-green-400 tracking-widest text-sm mb-3">
            ABOUT OUR PUB & EXPERIENCE
          </h3>

          <h1 className="main-heading text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            A Place Where Nights Come Alive
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Premium drinks, live entertainment, great company — everything you
            need for the perfect nightlife experience.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <img
            src="/assets/images/img2.jpg"
            className="w-full rounded-xl shadow-lg object-cover"
            alt="About Pub"
          />

          {/* Right Content */}
          <div>
            <h3 className="text-green-400 tracking-widest text-sm mb-2">
              OUR STORY
            </h3>

            <h2 className="main-heading text-3xl md:text-4xl font-bold mb-6 leading-snug">
              The Perfect Blend of Drinks, Music & Atmosphere
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Since the beginning, our mission has been to create a place where
              everyone feels welcome—a destination for nightlife lovers, music
              fans, foodies, and craft drink enthusiasts.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you're unwinding after a long day or celebrating with
              friends, we offer an experience designed to elevate your night.
            </p>

            <a
              href="/reservation"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </section>

          <section className="relative w-full pb-24">

      {/* Background Section */}
      <div className="relative w-full h-[340px] md:h-[380px]">
        <img
          src="/assets/images/Ridley03.jpeg"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-700/70"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-white text-lg mt-3 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      {/* SERVICE CARDS */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mt-[-70px]">

  {services.map((item, index) => (
    <div
      key={index}
      className="
        group bg-white rounded-lg shadow-md pt-16 pb-6 px-4 text-center relative
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
      "
    >

      {/* ICON CIRCLE (hover effects included) */}
      <div
        className={`
          absolute left-1/2 -top-12 -translate-x-1/2 
          w-24 h-24 rounded-full bg-white border-4 shadow-xl flex items-center justify-center
          border-${item.color}
          transition-all duration-300
          group-hover:border-teal-500 group-hover:scale-110
        `}
      >
        <i
          className={`
            fas ${item.icon} text-3xl text-${item.color}
            transition-all duration-300 group-hover:text-teal-500
          `}
        ></i>
      </div>

      {/* TITLE */}
      <h3
        className={`
          text-xl font-bold text-${item.color} mt-2
          transition-colors duration-300 group-hover:text-teal-500
        `}
      >
        {item.title}
      </h3>

      {/* PARAGRAPH */}
      <p className="text-gray-600 mt-2 text-sm">
        Dolor sit amet, consectetur adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
    </div>
  ))}

</div>

    </section>

<section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h3 className="text-green-400 tracking-widest text-sm mb-2">
          OUR TEAM
        </h3>
        <h2 className="main-heading text-3xl md:text-4xl font-bold">
          Meet the Experts
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center">

        {/* Card 1 (UP) */}
        <div className="flex flex-col items-center -mt-6">
          <div className="border-4 border-teal-500 p-1">
            <img src="/assets/team1.jpg" className="w-40 h-40 object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-teal-600 mt-4">Anita Smith</h3>
          <p className="font-bold text-gray-900">Marketing Manager</p>
          <p className="text-sm mt-2 text-gray-600 w-48">
            This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
          </p>
        </div>

        {/* Card 2 (DOWN) */}
        <div className="flex flex-col items-center mt-6">
          <div className="border-4 border-purple-500 p-1">
            <img src="/assets/team2.jpg" className="w-40 h-40 object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-purple-600 mt-4">Tom Parker</h3>
          <p className="font-bold text-gray-900">Product Marketing Manager</p>
          <p className="text-sm mt-2 text-gray-600 w-48">
            This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
          </p>
        </div>

        {/* Card 3 (UP) */}
        <div className="flex flex-col items-center -mt-6">
          <div className="border-4 border-teal-500 p-1">
            <img src="/assets/team3.jpg" className="w-40 h-40 object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-teal-600 mt-4">Mary Smith</h3>
          <p className="font-bold text-gray-900">Marketing Director</p>
          <p className="text-sm mt-2 text-gray-600 w-48">
            This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
          </p>
        </div>

        {/* Card 4 (DOWN) */}
        <div className="flex flex-col items-center mt-6">
          <div className="border-4 border-purple-500 p-1">
            <img src="/assets/team4.jpg" className="w-40 h-40 object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-purple-600 mt-4">John Doe</h3>
          <p className="font-bold text-gray-900">Digital Marketing Manager</p>
          <p className="text-sm mt-2 text-gray-600 w-48">
            This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
          </p>
        </div>

        {/* Card 5 (UP) */}
        <div className="flex flex-col items-center -mt-6">
          <div className="border-4 border-teal-500 p-1">
            <img src="/assets/team5.jpg" className="w-40 h-40 object-cover" />
          </div>
          <h3 className="text-lg font-semibold text-teal-600 mt-4">Carol Smith</h3>
          <p className="font-bold text-gray-900">Sales Manager</p>
          <p className="text-sm mt-2 text-gray-600 w-48">
            This slide is 100% editable. Adapt it to your needs and capture your audience's attention.
          </p>
        </div>

      </div>
    </section>

      
      {/* CTA */}
      <section className="py-16 bg-gray-200 text-gray-900 text-center">
        <h2 className="main-heading text-3xl md:text-4xl font-bold mb-4">
          Ready for an Amazing Night?
        </h2>
        <p className="text-black/90 mb-8 text-lg max-w-2xl mx-auto">
          Book a table today and experience the best nightlife atmosphere in town.
        </p>

        <a
          href="/reservation"
          className="shine-btn inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Book Now
        </a>
      </section>
    </>
  );
};

export default About;
