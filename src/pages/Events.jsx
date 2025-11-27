import React from "react";

const eventsData = [
  {
    title: "DJ Night - Live EDM",
    date: "Friday, 8:00 PM",
    img: "/assets/events/event1.jpg",
    description: "Experience a high-energy EDM night with top DJs and stunning lights."
  },
  {
    title: "Bollywood Fusion Night",
    date: "Saturday, 9:00 PM",
    img: "/assets/events/event2.jpg",
    description: "Dance to the best Bollywood & Punjabi mixes all night long."
  },
  {
    title: "Ladies Night Specials",
    date: "Thursday, 7:30 PM",
    img: "/assets/events/event3.jpg",
    description: "Free drinks for ladies and a live DJ to keep the vibes energetic."
  },
  {
    title: "Live Band Evening",
    date: "Sunday, 7:00 PM",
    img: "/assets/events/event4.jpg",
    description: "Relax with soulful live music from top local and international bands."
  }
];

const Events = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 sm:px-10">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-green-500 tracking-widest text-sm mb-2 uppercase">
          Upcoming Events
        </h3>

        <h1 className="text-4xl sm:text-5xl font-bold">
          Experience the Nightlife
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Join us for electrifying music, stunning performances, and unforgettable nights.
        </p>
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Event Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/90 opacity-80"></div>

            {/* Event Content */}
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-semibold mb-1 group-hover:text-green-400 transition">
                {event.title}
              </h2>

              <p className="text-sm text-gray-300 mb-2">{event.date}</p>

              <p className="text-gray-400 text-sm leading-5">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Events;
