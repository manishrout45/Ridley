const HeroSection = ({ className = "" }) => {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center bg-cover bg-center ${className}`}
      style={{ backgroundImage: "url('/assets/images/img2.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 md:px-8">

        {/* Subheading */}
        <p
          className="text-green-400 tracking-[0.3em] 
                     text-[10px] sm:text-sm 
                     mb-2 sm:mb-4 uppercase"
        >
          Premium Pub & Nightlife Experience
        </p>

        {/* Main Heading */}
        <h1
          className="main-heading text-white font-extrabold drop-shadow-md 
                     text-3xl sm:text-5xl md:text-6xl 
                     leading-snug sm:leading-tight 
                     mb-3 md:mb-6"
        >
          Where Good Drinks
          <br className="hidden sm:block" />
          Meet Great Company
        </h1>

        {/* Description */}
        <p
          className="text-gray-300 
                     text-sm sm:text-lg md:text-xl 
                     mb-5 md:mb-8 max-w-2xl mx-auto"
        >
          Step into an unforgettable night of craft beers, signature cocktails,
          live music, and unmatched ambiance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">

          {/* Book Table Button */}
          <a
            href="#reservation"
            className="shine-btn bg-green-600 hover:bg-green-700 text-white 
                       px-4 sm:px-8 py-2 sm:py-3 
                       rounded-full 
                       text-sm sm:text-lg 
                       shadow-md transition 
                       w-auto"
          >
            Book a Table
          </a>

          {/* Menu Button */}
          <a
            href="#menu"
            className="shine-btn bg-white/10 backdrop-blur-lg hover:bg-white/20 
                       border border-white/30 text-white 
                       px-4 sm:px-8 py-2 sm:py-3 
                       rounded-full 
                       text-sm sm:text-lg 
                       transition 
                       w-auto"
          >
            View Menu
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
