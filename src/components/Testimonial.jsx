import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Mahbub Uddin",
    role: "Teacher, Alampur",
    image: "/assets/testimonials/user1.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Sophia Arman",
    role: "HR Manager",
    image: "/assets/testimonials/user2.png",
    text:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Aute irure dolor in reprehenderit.",
  },
  {
    name: "Jackson Lee",
    role: "Project Supervisor",
    image:
      "/assets/testimonials/user3.png",
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Laura Fernandez",
    role: "Product Designer",
    image:
      "/assets/testimonials/user4.png",
    text:
      "Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full py-20 px-6 bg-white overflow-hidden">

      {/* Background decorative circles */}
      <div className="absolute top-[-120px] right-[-200px] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-[-140px] left-[-180px] w-[450px] h-[450px] rounded-full bg-white/10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-10">
          What our customers said
        </h2>

        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="
              absolute left-[-70px] 
              bg-white/20 hover:bg-gray-600/30 
              border border-white/30 
              w-12 h-12 rounded-full 
              flex items-center justify-center 
              text-green-700 text-xl 
              transition-all z-20
            "
          >
            <FaArrowLeft />
          </button>

          {/* CARD */}
          <div
            className="
              bg-white/10 backdrop-blur-xl 
              p-10 rounded-3xl shadow-xl 
              border border-white/20 
              transition-all duration-700 ease-in-out 
              w-full
            "
          >
            <p className="text-lg text-green/90 leading-relaxed mb-6 min-h-[120px]">
              {testimonials[active].text}
            </p>

            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-300" />
              ))}
            </div>

            <p className="text-xl font-semibold text-green-700">
              — {testimonials[active].name}
            </p>
            <p className="text-sm text-green/80">{testimonials[active].role}</p>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="
              absolute right-[-70px] 
              bg-white/20 hover:bg-gray-600/30 
              border border-white/30 
              w-12 h-12 rounded-full 
              flex items-center justify-center 
              text-green-700 text-xl 
              transition-all z-20
            "
          >
            <FaArrowRight />
          </button>
        </div>

        {/* AVATARS */}
        <div className="flex justify-center gap-6 mt-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="cursor-pointer transition-all"
            >
              <img
                src={item.image}
                className={`w-16 h-16 rounded-full object-cover transition-all duration-500 ${
                  active === i
                    ? "ring-4 ring-green-700 scale-110"
                    : "opacity-40 hover:opacity-70"
                }`}
                alt=""
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
