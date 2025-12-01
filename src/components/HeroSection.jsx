import { useState, useEffect } from "react";

const slides = [
  {
    type: "image",
    src: "/assets/images/img2.jpg",
    subheading: "Experience the Vibe",
    heading: "Cheers & Memories\nTogether",
    description:
      "Immerse yourself in our lively atmosphere with signature cocktails and craft beers.",
  },
  {
    type: "image",
    src: "/assets/images/Ridley03.jpeg",
    subheading: "Live Music Every Weekend",
    heading: "Dance & Chill\nAll Night Long",
    description:
      "Feel the energy with live bands and DJs that keep your night unforgettable.",
  },
  {
    type: "video",
    src: "/assets/videos/1112500_Cocktail_Gen_z_1920x1080.mp4",
    subheading: "Premium Pub & Nightlife Experience",
    heading: "Where Good Drinks\nMeet Great Company",
    description:
      "Step into an unforgettable night of craft beers, signature cocktails, live music, and unmatched ambiance.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-10 animate-kenburns" : "opacity-0 z-0"}`}
        >
          {s.type === "image" ? (
            <img src={s.src} alt="hero" className="w-full h-full object-cover" />
          ) : (
            <video
              src={s.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-20"></div>

      {/* Text Content */}
      <div className="relative z-30 text-center max-w-3xl px-4 sm:px-6 md:px-8">
        <p
          key={current + "-sub"}
          className="text-green-400 tracking-[0.3em] text-[10px] sm:text-sm mb-2 sm:mb-4 uppercase opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          {slide.subheading}
        </p>

        <h1
          key={current + "-head"}
          className="text-white font-extrabold drop-shadow-md text-3xl sm:text-5xl md:text-6xl leading-snug sm:leading-tight mb-3 md:mb-6 opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.6s", whiteSpace: "pre-line" }}
        >
          {slide.heading}
        </h1>

        <p
          key={current + "-desc"}
          className="text-gray-300 text-sm sm:text-lg md:text-xl mb-5 md:mb-8 max-w-2xl mx-auto opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.9s" }}
        >
          {slide.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 opacity-0 animate-fadeIn" style={{ animationDelay: "1.2s" }}>
          <a
            href="#reservation"
            className="shine-btn bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg shadow-md transition w-auto"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="shine-btn bg-white/10 backdrop-blur-lg hover:bg-white/20 border border-white/30 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg transition w-auto"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                : "bg-white/40 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
        /* Text Fade In */
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }

        /* Ken Burns Effect (Subtle Zoom) */
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-kenburns {
          animation: kenburns 6s ease-in-out forwards;
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
