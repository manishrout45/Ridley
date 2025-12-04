import AboutSection from "../components/AboutSection";
import Booking from "../components/Booking";
import Discover from "../components/Discover";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import HeroVideoSection from "../components/HeroVideoSection";
import ScrollPromo from "../components/ScrollPromo";
import Testimonial from "../components/Testimonial";
import useScrollFade from "../hooks/useScrollFade";

const Home = () => {
  useScrollFade(); // default class "fade-up"

  return (
    <>
      <HeroSection className="fade-up" />
      <Discover className="fade-left" />
      <AboutSection className="fade-right" />
      <ScrollPromo className="zoom-in" />
<section className="w-full py-16 bg-[#f8f6f3]">
  <div className="fade-up px-4 md:px-6 max-w-7xl mx-auto">

    {/* Title */}
    <div className="text-center mb-14">
      <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[1px] leading-snug">
        TIMELESS AMBIANCE,
        <br />
        <span className="text-green-700">UNFORGETTABLE MOMENTS</span>
      </h2>

      <div className="w-16 h-[3px] bg-gradient-to-r from-green-700 to-green-500 mx-auto mt-3 rounded-full"></div>

      <p className="text-gray-600 mt-4 max-w-md mx-auto text-sm leading-relaxed">
        A curated luxury dining experience blending elegance and modern interiors.
      </p>
    </div>

    {/* TOP GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Left Image */}
      <div className="rounded-2xl overflow-hidden shadow-xl h-full flex transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src="/assets/images/OrgImg/Ridley_Img3.jpeg"
          className="w-full h-52 md:h-full object-cover transition-all duration-700 hover:scale-110"
        />
      </div>

     {/* Center Card */}
<div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-xl p-6 text-center h-full flex flex-col justify-center 
                transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ">

  <h2 className="
        text-xl 
        md:text-2xl 
        lg:text-4xl          /* BIG SIZE ONLY ON DESKTOP */
        font-extrabold text-gray-900 mb-3 leading-snug
      ">
    EXPERIENCE THE  
    <span className="text-green-700"> NEXT ERA </span>
    <br /> OF DINING
  </h2>

  <p className="
        text-gray-700 
        text-sm 
        md:text-base         /* Slightly bigger on tablet */
        lg:text-lg           /* Bigger on desktop */
        leading-relaxed
      ">
    Crafted with premium ingredients and refined techniques.
  </p>

<button
  className="
    mt-4 bg-green-700 hover:bg-green-800 text-white
    px-4 py-2 rounded-full 
    text-xs md:text-sm 
    tracking-normal md:tracking-wide lg:tracking-normal 
    transition-all duration-500 shadow-md hover:shadow-lg
    lg:px-2 w-[22vh] 
    mx-auto                /* 🔥 CENTER THE BUTTON */
  "
>
  EXPLORE MORE
</button>
</div>

      {/* Right Card */}
      <div className="rounded-2xl overflow-hidden bg-white shadow-xl h-full flex flex-col transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src="/assets/images/RidleyImg/RidleyIMG-04.jpeg"
          className="w-full h-44 md:h-full object-cover transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <div className="w-12 h-[2px] bg-green-600 mb-2"></div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Exclusive lounges designed for private dining and celebrations.
          </p>
        </div>
      </div>

    </div>

    {/* BOTTOM GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

      {/* Left Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl h-full flex transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src="/assets/images/OrgImg/Ridley_Img2.jpeg"
          className="w-full h-52 md:h-full object-cover transition-all duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70"></div>

        <h2 className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold leading-snug drop-shadow-xl">
          SOPHISTICATED<br />INTERIOR DESIGN
        </h2>
      </div>

      {/* Center Card */}
      <div className="bg-gradient-to-b from-white to-[#fff8f2] rounded-2xl shadow-xl p-8 text-center border border-green-200 h-full flex flex-col justify-center 
                      transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">

        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md mx-auto mb-4 ring-2 ring-green-100">
          <img
            src="/assets/images/OrgImg/Ridley_Img4.jpeg"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="text-green-700 font-bold">
            Signature Gourmet Touch
          </span>
          <br />
          Crafted with passion and world-class precision.
        </p>
      </div>

      {/* Right Image */}
      <div className="rounded-2xl overflow-hidden shadow-xl h-full flex transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src="/assets/images/OrgImg/Ridley_Img1.jpeg"
          className="w-full h-52 md:h-full object-cover transition-all duration-700 hover:scale-110"
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
    <HeroVideoSection className="zoom-in" />

      {/* Private Dining Section */}
<section className="fade-left py-16 px-6 bg-white">
  
  {/* Content Wrapper (max-width applied here) */}
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

    {/* Left: Image Grid */}
    <div className="grid grid-cols-2 gap-4">
      <img src="/assets/images/OrgImg/Ridley_Img1.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
      <img src="/assets/images/OrgImg/Ridley_Img2.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
      <img src="/assets/images/OrgImg/Ridley_Img4.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
      <img src="/assets/images/OrgImg/Ridley_Img3.jpeg" alt="" className="rounded-md object-cover w-full h-48" />
    </div>

    {/* Right: Text */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">
        Private dining<br />& events
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
There are four private spaces available for lunch, dinner, or any time you need from receptions and presentations to team meetings or celebrations. Each room offers a welcoming atmosphere with customizable setups to perfectly match your event requirements and preferences, ensuring comfort throughout.

The restaurant is also available for breakfast and can be hired exclusively for private events. All other spaces can be booked as well, providing flexible layouts and attentive service for any occasion or special gathering, ensuring a memorable and seamless experience.
      </p>

      <button
        onClick={() => alert("Reservation button clicked!")}
        className="shine-btn bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
      >
        RESERVATION
      </button>
    </div>

  </div>
</section>


<Booking />


    </>
  );
};

export default Home;
