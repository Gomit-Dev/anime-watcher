import React from 'react';

export default function BoxOfficeCard() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white px-4 mt-6">
      <div className="border-r-5 border-b-5 border-gray-200 w-[90vw] h-[70%] flex flex-col sm:flex-row items-center justify-between w-[95%] sm:w-[85%] lg:w-[80%] max-w-6xl p-6 sm:p-10 bg-gradient-to-r from-[#d66ed4] to-[#f1e795] shadow-lg gap-4 sm:gap-8">
        {/* Left Arrow */}
        <button className="hidden sm:flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
          ⭠
        </button>

        {/* Image and Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
            alt="Spiderman"
            className="w-44 h-60 sm:w-52 sm:h-72 object-cover rounded-xl shadow-md"
          />

          {/* Content */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold text-black mb-3">Box Office News!</h2>
            <p className="text-gray-700 max-w-xl mb-4 text-sm sm:text-base">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg px-5 py-2 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="hidden sm:flex p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
          ⭢
        </button>
      </div>
    </div>
  );
}