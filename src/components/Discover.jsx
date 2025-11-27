const Discover = ({ className = "" }) => {
  return (
    <section className="bg-[#f2f0ed] py-16 px-4 z-50 ">
      <div className={`max-w-5xl mx-auto text-center ${className}`}>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">Discover</h2>
        <p className="text-sm tracking-[4px] font-semibold text-gray-600 mt-2">
          TRADITION & QUALITY
        </p>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-6 text-gray-700 leading-relaxed font-medium">
          Ridley Pub offers many versatile settings so whatever mood you're in, you can 
          find comfort at either location. We have televisions propped at all angles at 
          the pub and many craft beer selections.
        </p>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

          {/* Card 1 */}
          <div className="text-center card-hover transition-all duration-700">
            <img
              src="/assets/images/OriginalDrinks.jpeg"
              alt="Original Drinks"
              className="w-full h-80 object-cover shadow-md"
            />
            <h3 className="mt-4 font-bold tracking-wide text-gray-800">
              ORIGINAL DRINKS
            </h3>
          </div>

          {/* Card 2 */}
          <div className="text-center card-hover transition-all duration-700">
            <img
              src="/assets/images/shish-kebab-with-colorful-bell-peppers-served-with-ketchup-fresh-vegetables.jpg"
              alt="Delicious Food"
              className="w-full h-80 object-cover shadow-md"
            />
            <h3 className="mt-4 font-bold tracking-wide text-gray-800">
              DELICIOUS FOOD
            </h3>
          </div>

          {/* Card 3 */}
          <div className="text-center card-hover transition-all duration-700">
            <img
              src="/assets/images/nightlife-people-having-fun-bars-clubs.jpg"
              alt="Great Atmosphere"
              className="w-full h-80 object-cover shadow-md"
            />
            <h3 className="mt-4 font-bold tracking-wide text-gray-800">
              GREAT ATMOSPHERE
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Discover;
