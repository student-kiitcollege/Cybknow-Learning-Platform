import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-purple-200 px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="max-w-xl lg:w-1/2 text-center lg:text-left animate-fadeSlideIn">
        <h1 className="text-5xl font-bold text-gray-800">
          Skill<span className="text-purple-600">Up</span>Now
        </h1>
        <p className="mt-4 text-2xl text-purple-700 font-semibold">
          India's No.1 Virtual Internship Platform
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Learn today for a better tomorrow
        </p>
        <button className="mt-6 bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg hover:shadow-purple-400/50">
          REGISTER NOW
        </button>
      </div>

      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center h-full perspective">
        <div
          className="w-full h-[80vh] animate-zoomFloat"
          style={{
            transformStyle: "preserve-3d",
            animation: "zoomFloat 8s ease-in-out infinite",
          }}
        >
          <img
            src="/Hero.jpg"
            alt="Hero Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomFloat {
          0%, 100% {
            transform: scale(1) rotateY(0deg) rotateX(0deg) translateY(0px);
          }
          25% {
            transform: scale(1.02) rotateY(3deg) rotateX(1deg) translateY(-10px);
          }
          50% {
            transform: scale(1.04) rotateY(0deg) rotateX(0deg) translateY(0px);
          }
          75% {
            transform: scale(1.02) rotateY(-3deg) rotateX(-1deg) translateY(10px);
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 1.2s ease-out forwards;
        }

        .animate-zoomFloat {
          animation: zoomFloat 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
