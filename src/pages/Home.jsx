import AboutSection from "../components/AboutSection";
import Discover from "../components/Discover";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import ScrollPromo from "../components/ScrollPromo";
import useScrollFade from "../hooks/useScrollFade";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <Discover className="fade-left" />
      <AboutSection className="fade-right" />
      <ScrollPromo className="zoom-in" />
<section className=" w-full py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#f8f6f3]">
<div className="fade-up">
  {/* Title */}
  <div className="text-center mb-20 ">
    <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[2px] leading-tight">
      TIMELESS AMBIANCE,
      <br />
      <span className="text-green-700">UNFORGETTABLE MOMENTS</span>
    </h2>

    <div className="w-20 h-[3px] bg-gradient-to-r from-green-700 to-green-500 mx-auto mt-4 rounded-full"></div>

    <p className="text-gray-600 mt-5 max-w-xl mx-auto leading-relaxed">
      A curated luxury dining atmosphere blending refinement, craftsmanship,
      and immersive modern interiors.
    </p>
  </div>

  {/* TOP GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    {/* Left Image */}
    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-700">
      <img 
        src="/assets/images/img1.jpeg"
        className="w-full h-72 md:h-full object-cover transition-all duration-700"
        alt="Dining Interior"
      />
    </div>

    {/* Center Glass Card */}
    <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-3xl shadow-2xl p-10 text-center
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-700">

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-wide leading-tight">
        EXPERIENCE THE  
        <span className="text-green-700"> NEXT ERA </span>
        <br /> OF DINING
      </h2>

      <p className="text-gray-700 leading-relaxed font-medium">
        Where premium seasonal ingredients meet refined craftsmanship  
        to create remarkable culinary moments.
      </p>

      <button
        className="shine-btn mt-6 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 shadow-lg hover:shadow-red-300">
        EXPLORE MORE
      </button>

    </div>

    {/* Right Card */}
    <div className="rounded-3xl overflow-hidden bg-white shadow-2xl 
                    hover:-translate-y-2 hover:shadow-xl transition-all duration-700">
      <img 
        src="/assets/images/restaurant-interior.jpg"
        className="w-full h-52 md:h-64 object-cover transition duration-700"
        alt="Restaurant Interior"
      />
      <div className="p-6">
        <div className="w-16 h-[2px] bg-green-600 mb-3"></div>
        <p className="text-gray-700 text-base leading-relaxed">
          Exclusive private lounges crafted for intimate gatherings,
          elite business dinners, and special celebrations.
        </p>
      </div>
    </div>

  </div>

  {/* BOTTOM GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

    {/* Left Image with Modern Overlay */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      <img 
        src="/assets/images/restaurant-interior(1).jpg"
        className="w-full h-72 md:h-full object-cover transition-all duration-700"
        alt="Modern Interior"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>

      <h2 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-bold leading-snug drop-shadow-xl">
        SOPHISTICATED<br />INTERIOR DESIGN
      </h2>
    </div>

    {/* Center Premium White-Gold Card */}
    <div className="bg-gradient-to-b from-white to-[#fff8f2] rounded-3xl shadow-2xl p-12 text-center 
                    border border-green-200 hover:-translate-y-2 transition duration-700">

      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl mx-auto mb-6 ring-4 ring-red-100">
        <img 
          src="/assets/images/Ridley03.jpeg"
          className="w-full h-full object-cover"
          alt="Chef"
        />
      </div>

      <p className="text-gray-700 text-base leading-relaxed font-medium">
        <span className="text-green-700 font-bold tracking-wide">
          Signature Gourmet Craftsmanship
        </span>
        <br />
        Created with precision, passion, and world-class culinary mastery.
      </p>
    </div>

    {/* Right Image */}
    <div className="rounded-3xl overflow-hidden shadow-2xl">
      <img 
        src="/assets/images/OriginalDrinks.jpeg"
        className="w-full h-72 md:h-full object-cover hover:scale-110 transition duration-700"
        alt="Original Drinks"
      />
    </div>

  </div>
</div>
</section>


<section className=" relative bg-[#1a001f] py-12 sm:py-16 lg:py-20">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url('/assets/images/OriginalDrinks.jpeg')" }}
  ></div>

  {/* Green Transparent Overlay */}
  <div className="absolute inset-0 bg-green-900/70"></div>

  {/* Content */}
  <div
    className="relative max-w-6xl mx-auto 
               grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
               gap-6 sm:gap-10 text-center text-white px-4"
  >

    {/* Item 1 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-martini-glass-citrus text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Drinks & Cocktails</p>
    </div>

    {/* Item 2 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-burger text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Delicious Food</p>
    </div>

    {/* Item 3 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-music text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Live Music</p>
    </div>

    {/* Item 4 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-people-line text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Dance Floor</p>
    </div>

    {/* Item 5 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-lightbulb text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Club Lighting</p>
    </div>

    {/* Item 6 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-headphones text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">DJ Booth</p>
    </div>

    {/* Item 7 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-microphone text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Wireless Microphones</p>
    </div>

    {/* Item 8 */}
    <div
      className="feature-item 
                 flex flex-col items-center gap-2 sm:gap-3
                 transition-all duration-300 ease-out
                 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
    >
      <i className="fa-solid fa-bars-staggered text-3xl sm:text-4xl"></i>
      <p className="text-xs sm:text-sm md:text-base">Bar Menu</p>
    </div>

  </div>
</section>


    <GallerySection className="zoom-in" />

      {/* Private Dining Section */}
<section className="fade-left max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center bg-white">
  {/* Left: Image Grid */}
  <div className="grid grid-cols-2 gap-4">
    <img src="/assets/images/OriginalDrinks.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
    <img src="/assets/images/Ridley03.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
    <img src="/assets/images/shish-kebab-with-colorful-bell-peppers-served-with-ketchup-fresh-vegetables.jpg" alt="" className="rounded-md object-cover w-full h-48" />
    <img src="/assets/images/img1.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
  </div>

  {/* Right: Text */}
  <div className="text-center md:text-left">
    <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">
      Private dining<br />& events
    </h2>

    <p className="text-gray-600 leading-relaxed mb-6">
      There are four private spaces available for lunch, dinner or indeed at any
      other time like receptions, presentations or brainstorms. In addition the
      restaurant is available for breakfast & private hire as are all the other
      spaces.
    </p>

    <button
      onClick={() => alert("Reservation button clicked!")}
      className="shine-btn bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
    >
      RESERVATION
    </button>
  </div>

</section>

      {/* Contact Section With Background Image + Black Overlay */}
<section
  className="fade-up relative w-full bg-cover bg-center bg-no-repeat py-12 sm:py-16 px-4 sm:px-8 flex flex-col items-center"
  style={{ backgroundImage: "url('/assets/images/img1.jpeg')" }}
>

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 w-full flex flex-col items-center">

    {/* Subheading */}
    <h3 className="text-center text-xs sm:text-sm tracking-widest text-green-300 mb-2">
      BOOK YOUR TABLE
    </h3>

    {/* Heading */}
    <h2 className="main-heading text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10 leading-snug">
      GROUSE DINNER AT FRENCH<br />RESTAURANT
    </h2>

    {/* Layout Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-6xl">

      {/* Left Image */}
      <img
        src="/assets/images/Ridley03.jpeg"
        className="bounce-hover rounded-xl shadow-lg w-full h-64 sm:h-80 md:h-full object-cover"
        alt="Dining Area"
      />

      {/* Right Form Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">

        {/* Contact Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm mb-6 border-b pb-4 gap-4">

          {/* Call */}
          <div className="text-center sm:text-left">
            <p className="text-gray-500">CALL US</p>
            <p className="font-semibold text-lg text-green-600">+123 456 789 00</p>
          </div>

          <div className="text-gray-400 font-semibold hidden sm:block">OR</div>

          {/* Email */}
          <div className="text-center sm:text-right">
            <p className="text-gray-500">EMAIL US</p>
            <p className="font-semibold text-lg text-green-600">INFO@RIDLEY.COM</p>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          <input
            type="text"
            placeholder="*Full Name"
            className="border p-3 rounded-md w-full text-sm text-gray-700"
          />

          <input
            type="text"
            placeholder="*Email Address"
            className="border p-3 rounded-md w-full text-sm text-gray-700"
          />

          <input
            type="text"
            placeholder="DD-MM-YYYY"
            className="border p-3 rounded-md w-full text-sm text-gray-700"
          />

          <select className="border p-3 rounded-md w-full text-sm text-gray-700">
            <option>Evening</option>
          </select>

          <select className="border p-3 rounded-md w-full text-sm text-gray-700">
            <option>1 Person</option>
          </select>

          <select className="border p-3 rounded-md w-full text-sm text-gray-700">
            <option>1 Kid</option>
          </select>

        </form>

        {/* Button */}
        <button
          className="shine-btn w-full bg-red-700 hover:bg-red-800 transition text-white font-semibold py-3 sm:py-4 rounded-md mt-6 sm:mt-8 text-sm sm:text-base"
        >
          RESERVE YOUR TABLE NOW
        </button>

      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Home;
