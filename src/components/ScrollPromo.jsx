import React, { useEffect } from "react";

const ScrollPromo = () => {
  useEffect(() => {
    const section = document.getElementById("scrollSection");
    const textBox = document.getElementById("scrollText");

    const handleScroll = () => {
      if (!section || !textBox) return;

      let rect = section.getBoundingClientRect();
      let sectionHeight = rect.height;

      // Activate only when section is in viewport
      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight) {
        let progress = Math.abs(rect.top) / sectionHeight;

        // Move text upward based on scroll
        textBox.style.transform = `translateY(-${progress * 50}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<section id="scrollSection" className="relative h-[80vh] overflow-hidden">

  {/* Fixed Background Layer */}
  <div
    className="fixed inset-0 bg-center bg-cover -z-10"
    style={{
      backgroundImage: "url('/assets/images/img1.jpeg')"
    }}
  ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative h-full flex items-center justify-center overflow-hidden">

        {/* Moving Text */}
        <div id="scrollText" className="space-y-4 sm:space-y-6 text-center">

          <h2 className="main-heading text-white text-3xl sm:text-5xl font-bold leading-snug sm:leading-tight">
            Special Promotion <br /> For This Month!
          </h2>

          <p className="text-white text-sm sm:text-lg font-semibold tracking-wide max-w-2xl mx-auto">
            COME WITH MORE THAN 8 PEOPLE GET 20% OFF. BRING ALL YOUR FRIENDS HERE!
          </p>

          <button
            className="shine-btn mt-4 sm:mt-6 bg-white text-gray-900 font-semibold 
                       px-4 sm:px-6 py-2 sm:py-3 shadow-sm hover:bg-gray-200 transition"
          >
            RESERVATION
          </button>

        </div>
      </div>
    </section>
  );
};

export default ScrollPromo;
