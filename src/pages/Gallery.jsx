import React, { useState } from "react";

const galleryImages = [
  "/assets/gallery/img1.jpg",
  "/assets/gallery/img2.jpg",
  "/assets/gallery/img3.jpg",
  "/assets/gallery/img4.jpg",
  "/assets/gallery/img5.jpg",
  "/assets/gallery/img6.jpg",
  "/assets/gallery/img7.jpg",
  "/assets/gallery/img8.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-black text-white py-16 px-6 sm:px-10">

      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-green-500 tracking-widest text-sm mb-2 uppercase">
          Our Gallery
        </h3>
        <h1 className="text-4xl sm:text-5xl font-bold">Nightlife Moments</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Explore the vibrant atmosphere, events, music nights, and unforgettable nightlife experience.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              className="w-full h-48 sm:h-56 object-cover rounded-xl transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl border border-white/20"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
