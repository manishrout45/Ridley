import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const path =
    location.pathname.replace("/", "").replace(".html", "") || "index";

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/unlock body scroll on mobile sidebar
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header
      id="navbar"
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-black/90 " : "bg-transparent"}
      `}
    >
      {/* Top Contact Bar */}
      <div className="w-full">
        <div className="bg-black bg-opacity-0 text-white text-sm px-4 py-2 flex justify-between items-center">

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <i className="fa-solid fa-phone"></i>
              <span>+91 9876543210</span>
            </span>

            <span className="hidden md:flex items-center space-x-2">
              <i className="fa-solid fa-envelope"></i>
              <span>info@example.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-green-400">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-green-400">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-green-400">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/index.html" className="flex items-center">
          <img
            src="/assets/images/logo/TurtleMascotPNG-01.png"
            alt="Ridley Logo"
            className="h-24 sm:h-18 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center bg-white bg-opacity-90 rounded-full px-4 py-2 space-x-2 shadow-lg">
          {["index", "about", "events", "gallery", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}.html`}
              className={`nav-item ${
                path === item ? "active-item" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-2xl text-white focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
<nav
  id="mobile-menu"
  className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-95 text-white 
  transform transition-transform duration-300 md:hidden px-6 py-6 space-y-6 z-50
  ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
>
  {/* Sidebar Header */}
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold tracking-wider">MENU</h2>
    <button
      onClick={() => setMobileOpen(false)}
      className="text-2xl focus:outline-none"
    >
      &times;
    </button>
  </div>

  {/* Sidebar Links */}
  <div className="space-y-4">
    {["index", "about", "events", "gallery", "contact"].map((item) => (
      <Link
        key={item}
        to={`/${item}.html`}
        className={`nav-item block text-white hover:text-green-400 capitalize 
        ${path === item ? "active-item" : ""}`}
        onClick={() => setMobileOpen(false)} // close menu on click
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Link>
    ))}
  </div>

  {/* Divider */}
  <hr className="border-gray-700" />
    {/* Contact Us Header */}
<h3 className="text-white font-semibold text-lg">Contact Us</h3>
  {/* Contact Info */}
  <div className="space-y-2 text-sm">
    <div className="flex items-center space-x-2">
      <i className="fa-solid fa-phone"></i>
      <span>+91 9876543210</span>
    </div>
    <div className="flex items-center space-x-2">
      <i className="fa-solid fa-envelope"></i>
      <span>info@example.com</span>
    </div>
  </div>

  {/* Social Media Links */}
  <div className="flex items-center space-x-4 mt-4">
    <a href="#" className="hover:text-green-400">
      <i className="fa-brands fa-facebook-f"></i>
    </a>
    <a href="#" className="hover:text-green-400">
      <i className="fa-brands fa-instagram"></i>
    </a>
    <a href="#" className="hover:text-green-400">
      <i className="fa-brands fa-twitter"></i>
    </a>
  </div>
</nav>


    </header>
  );
};

export default Navbar;
