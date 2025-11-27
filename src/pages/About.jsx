import React from "react";

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

      {/* ====== COMBINED SINGLE SECTION ====== */}
      <section className="relative w-full pb-20">

        {/* Background Image */}
        <div className="w-full h-[330px] md:h-[380px] relative">
          <img
            src="/assets/images/Ridley03.jpeg"
            alt="Services"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-teal-700/70"></div>

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Services</h2>
            <p className="text-white text-lg mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>

        {/* ====== SERVICES CARDS BELOW IMAGE ====== */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mt-24">

          {/* CARD TEMPLATE */}
          {[
            { icon: "fa-chart-line", color: "teal-600", title: "Service Name" },
            { icon: "fa-landmark", color: "gray-800", title: "Service Name" },
            { icon: "fa-money-bill-wave", color: "teal-600", title: "Service Name" },
            { icon: "fa-chart-pie", color: "gray-800", title: "Service Name" },
          ].map((item, i) => (
            <div key={i} className="text-center relative pt-16">

              {/* Floating icon overlapping image & card */}
              <div
                className={`
                  absolute left-1/2 -top-12 -translate-x-1/2 
                  w-24 h-24 rounded-full bg-white flex items-center justify-center
                  shadow-lg border-4 border-${item.color}
                `}
              >
                <i className={`fas ${item.icon} text-3xl text-${item.color}`}></i>
              </div>

              <h3 className={`text-xl font-bold text-${item.color}`}>
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 px-3">
                Dolor sit amet, consectetur adipiscing elit, sed diam nonummy
                nibh euismod tincidunt.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-green-400 tracking-widest text-sm mb-2">OUR TEAM</h3>
          <h2 className="main-heading text-3xl md:text-4xl font-bold mb-12">
            Meet the Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-black/40 p-6 rounded-xl border border-white/10">
              <img
                src="/assets/images/Ridley03.jpeg"
                className="w-full h-64 rounded-lg object-cover mb-6"
                alt="John Doe"
              />
              <h4 className="text-xl font-semibold">John Doe</h4>
              <p className="text-green-400">Head Mixologist</p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10">
              <img
                src="/assets/images/Ridley03.jpeg"
                className="w-full h-64 rounded-lg object-cover mb-6"
                alt="Sarah Jones"
              />
              <h4 className="text-xl font-semibold">Sarah Jones</h4>
              <p className="text-green-400">Event Manager</p>
            </div>

            <div className="bg-black/40 p-6 rounded-xl border border-white/10">
              <img
                src="/assets/images/Ridley03.jpeg"
                className="w-full h-64 rounded-lg object-cover mb-6"
                alt="Michael Smith"
              />
              <h4 className="text-xl font-semibold">Michael Smith</h4>
              <p className="text-green-400">Executive Chef</p>
            </div>
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
