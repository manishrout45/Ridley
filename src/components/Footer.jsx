const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-green-700 to-green-950 text-white py-12 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-green-400">●</span> About
          </h2>

          <p className="text-sm opacity-80 leading-relaxed">
            Ward 63, South west zone, 3rd Floor, Above Hotel Hillside Aqua,
            NH16, Bhubaneswar, Odisha 751030
          </p>

          {/* Phone */}
          <p className="mt-3 text-sm opacity-90 hover:text-green-300 transition flex items-center gap-2">
            <i className="fa-solid fa-phone text-green-400"></i>
            +2 392 3929 210
          </p>

          {/* Email */}
          <p className="mt-2 text-sm opacity-90 hover:text-green-300 transition flex items-center gap-2">
            <i className="fa-solid fa-envelope text-green-400"></i>
            info@yourdomain.com
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition transform hover:scale-110">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition transform hover:scale-110">
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition transform hover:scale-110">
              <i className="fa-brands fa-twitter text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition transform hover:scale-110">
              <i className="fa-brands fa-youtube text-lg"></i>
            </a>
          </div>
        </div>


        {/* Latest News */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-green-400">●</span> Latest News
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <img src="/assets/images/OrgImg/Ridley_Img2.jpeg" className="w-16 h-16 rounded-lg object-cover" alt="" />
              <div>
                <p className="text-sm opacity-90">Even the all-powerful Pointing has no control about…</p>
                <p className="text-xs opacity-60 mt-1">Oct 15, 2020 &nbsp; Admin</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="/assets/images/OrgImg/Ridley_Img1.jpeg" className="w-16 h-16 rounded-lg object-cover" alt="" />
              <div>
                <p className="text-sm opacity-90">Even the all-powerful Pointing has no control about…</p>
                <p className="text-xs opacity-60 mt-1">Oct 15, 2020 &nbsp; Admin</p>
              </div>
            </div>
          </div>

          {/* Email Subscription MOVED HERE */}
          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 rounded-l-lg text-gray-800 text-sm focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-lg text-white">
              ➤
            </button>
          </div>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-green-400">●</span> Information
          </h2>

          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="/about.html" className="hover:text-green-300">About</a></li>
            <li><a href="/events.html" className="hover:text-green-300">Events</a></li>
            <li><a href="/gallery.html" className="hover:text-green-300">Gallery</a></li>
            <li><a href="/contact.html" className="hover:text-green-300">Contact</a></li>
            <li><a href="#" className="hover:text-green-300">Help & Support</a></li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-green-400">●</span> Instagram
          </h2>

          <div className="grid grid-cols-3 gap-2">
            <img src="/assets/images/nightlife-people-having-fun-bars-clubs.jpg" className="w-full h-20 object-cover rounded" alt="" />
            <img src="/assets/images/OrgImg/Ridley_Img3.jpeg" className="w-full h-20 object-cover rounded" alt="" />
            <img src="/assets/images/OrgImg/Ridley_Img2.jpeg" className="w-full h-20 object-cover rounded" alt="" />
            <img src="/assets/images/shish-kebab-with-colorful-bell-peppers-served-with-ketchup-fresh-vegetables.jpg" className="w-full h-20 object-cover rounded" alt="" />
            <img src="/assets/images/OrgImg/Ridley_Img4.jpeg" className="w-full h-20 object-cover rounded" alt="" />
            <img src="/assets/images/OrgImg/Ridley_Img1.jpeg" className="w-full h-20 object-cover rounded" alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
        Copyright ©2021 All rights reserved.
        <span className="ml-2">Developed with ❤️ by <a href="https://marcadspro.com/">Marcadspro Media</a></span>
      </div>

    </footer>
  );
};

export default Footer;
