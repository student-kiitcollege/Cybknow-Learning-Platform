import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-1xl font-bold text-gray-800">
          WHY <span className="text-purple-600">CHOOSE US</span>
        </h2>
        <div className="h-0.5 w-22 bg-purple-400 mx-auto mt-1 mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300">
            <img src="https://inmakeslh.in/assets/ast/One-to-one.png" alt="Professional Mentoring" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Professional Mentoring</h3>
            <p className="mt-2 text-gray-600">One-to-one mentorship from Experts</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300">
            <img src="https://inmakeslh.in/assets/ast/Challenge.png" alt="Gain Work-Experience" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Gain work-experience</h3>
            <p className="mt-2 text-gray-600">Challenge and Task-based learning</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300">
            <img src="https://inmakeslh.in/assets/ast/Placement.png" alt="Great Career" className="h-20 w-20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Great Career</h3>
            <p className="mt-2 text-gray-600">100% Life-long Placement Assistance</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300">
            <img
              src="https://inmakeslh.in/assets/ast/Time.png"
              alt="Quality Classes"
              className="h-20 w-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Quality Classes</h3>
            <p className="mt-2 text-gray-600">Live Online sessions & flexible timing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
