import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = location.pathname.replace("/", "").replace(".html", "") || "index";

  // Lock/unlock scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header id="navbar" className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent">

      {/* Top Contact Bar */}
      <div className="w-full fixed top-0 left-0 z-50">
        <div className="bg-black bg-opacity-40 text-white text-sm px-4 py-2 flex justify-between items-center">

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
            <a href="#" className="hover:text-green-400"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fa-brands fa-twitter"></i></a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 mt-6 flex justify-between items-center">
        <Link to="/index.html" className="text-2xl font-bold text-green-500">
          Ridley
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center bg-white bg-opacity-90 rounded-full px-4 py-2 space-x-2">
          {["index", "about", "events", "gallery", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}.html`}
              className={`nav-item ${path === item ? "active-item" : ""}`}
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
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 bg-opacity-95 text-white 
        transform transition-transform duration-300 md:hidden px-6 py-6 space-y-6 z-50
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold tracking-wider">MENU</h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-2xl focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Links */}
        {["index", "about", "events", "gallery", "contact"].map((item) => (
          <Link
            key={item}
            to={`/${item}.html`}
            className={`nav-item block text-white hover:text-green-400 ${
              path === item ? "active-item" : ""
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </nav>

    </header>
  );
};

export default Navbar;
