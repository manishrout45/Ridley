import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h3 className="text-green-600 tracking-widest text-sm mb-2 uppercase">
          Contact Us
        </h3>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Get in Touch
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Have questions or looking to make a reservation?  
          We're here to help you anytime.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info Card */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Reach Us At</h2>

          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-xl"></i>
              <span>+91 98765 43210</span>
            </p>

            <p className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-xl"></i>
              <span>support@yourwebsite.com</span>
            </p>

            <p className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-xl"></i>
              <span>123 Pub Street, Bangalore, India</span>
            </p>
          </div>

          <div className="pt-5">
            <h3 className="text-lg font-medium mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white text-2xl hover:text-green-300">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" className="text-white text-2xl hover:text-green-300">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="text-white text-2xl hover:text-green-300">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#" className="text-white text-2xl hover:text-green-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-600 outline-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
