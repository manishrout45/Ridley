import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    timeSlot: "",
    adults: "",
    kids: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbykEG4kaV5Lp6yQq1Q7CmVL9xeE0lY7Tz7A7ymW1vF4WC1Wart8lv3TL2tnvJBeS1F5Rg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    setSuccess("Booking submitted successfully!");
    setFormData({
      name: "",
      email: "",
      date: "",
      timeSlot: "",
      adults: "",
      kids: "",
    });

  } catch (err) {
    setError("Something went wrong! Try again.");
  }

  setLoading(false);
};


  return (
    <section className="relative w-full py-12 px-4 sm:px-8 flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/OrgImg/Ridley_Img2.jpeg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <h3 className="text-green-300 text-sm mb-2 text-center tracking-widest">BOOK YOUR TABLE</h3>
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6 text-center leading-snug">
          GROUSE DINNER AT FRENCH<br />RESTAURANT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <img src="/assets/images/OrgImg/Ridley_Img3.jpeg" alt="Dining Area" className="rounded-xl shadow-lg w-full h-64 sm:h-80 md:h-full object-cover bounce-hover" />

          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 md:p-6">
            <div className="flex flex-col items-center justify-center mb-6 border-b pb-4 gap-3 text-sm">

  <div className="text-center">
    <p className="text-gray-500">CALL US</p>
    <p className="text-green-600 font-semibold">+91 9777 220 660</p>
  </div>

  {/* OR + Book Now as heading */}
  <div className="flex items-center gap-2 text-gray-600 font-semibold">
    <span>OR</span>
  
  </div>

</div>


            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="*Full Name" required className="border p-3 rounded-md w-full text-gray-700" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="*Email Address" required className="border p-3 rounded-md w-full text-gray-700" />
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="border p-3 rounded-md w-full text-gray-700" />
              <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required className="border p-3 rounded-md w-full text-gray-700">
                <option value="">Select Time Slot</option>
                <option>Morning (10 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (5 PM – 8 PM)</option>
                <option>Night (8 PM – 11 PM)</option>
                <option>Late Night (11 PM – 1 AM)</option>
              </select>
              <select name="adults" value={formData.adults} onChange={handleChange} required className="border p-3 rounded-md w-full text-gray-700">
                <option value="">Select Adults</option>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
                <option>5 Adults</option>
                <option>6+ Adults</option>
              </select>
              <select name="kids" value={formData.kids} onChange={handleChange} required className="border p-3 rounded-md w-full text-gray-700">
                <option value="">Select Kids</option>
                <option>No Kids</option>
                <option>1 Kid</option>
                <option>2 Kids</option>
                <option>3 Kids</option>
                <option>4 Kids</option>
              </select>

              <button type="submit" disabled={loading} className="shine-btn bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-md md:col-span-2 mt-2">
                {loading ? "Submitting..." : "RESERVE YOUR TABLE NOW"}
              </button>

              {success && <p className="text-green-600 font-semibold mt-2 md:col-span-2 text-center">{success}</p>}
              {error && <p className="text-red-600 font-semibold mt-2 md:col-span-2 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
