const Footer = () => {
  return (
<footer className="w-full bg-gradient-to-r from-green-800 to-green-900 text-white py-12 px-6">

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* About */}
    <div>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-green-400">●</span> About
      </h2>

      <p className="text-sm opacity-80 leading-relaxed">
        Ward 63, South west zone, 3rd Floor, Above Hotel Hillside Aqua, NH16, Bhubaneswar, Odisha 751030
      </p>

      <p className="mt-3 text-sm opacity-90 hover:text-green-300 transition">+2 392 3929 210</p>
      <p className="mt-2 text-sm opacity-90 hover:text-green-300 transition">info@yourdomain.com</p>

      <div className="mt-4 flex">
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

    {/* Latest News */}
    <div>
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-green-400">●</span> Latest News
      </h2>

      <div className="space-y-4">
        <div className="flex gap-3">
          <img src="/assets/images/img1.jpeg" className="w-16 h-16 rounded-lg object-cover" alt="" />
          <div>
            <p className="text-sm opacity-90">Even the all-powerful Pointing has no control about…</p>
            <p className="text-xs opacity-60 mt-1">Oct 15, 2020 &nbsp; Admin</p>
          </div>
        </div>

        <div className="flex gap-3">
          <img src="/assets/images/img2.jpg" className="w-16 h-16 rounded-lg object-cover" alt="" />
          <div>
            <p className="text-sm opacity-90">Even the all-powerful Pointing has no control about…</p>
            <p className="text-xs opacity-60 mt-1">Oct 15, 2020 &nbsp; Admin</p>
          </div>
        </div>
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
        <img src="/assets/images/restaurant-interior(1).jpg" className="w-full h-20 object-cover rounded" alt="" />
        <img src="/assets/images/restaurant-interior.jpg" className="w-full h-20 object-cover rounded" alt="" />
        <img src="/assets/images/shish-kebab-with-colorful-bell-peppers-served-with-ketchup-fresh-vegetables.jpg" className="w-full h-20 object-cover rounded" alt="" />
        <img src="/assets/images/Ridley03.jpeg" className="w-full h-20 object-cover rounded" alt="" />
        <img src="/assets/images/OriginalDrinks.jpeg" className="w-full h-20 object-cover rounded" alt="" />
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
