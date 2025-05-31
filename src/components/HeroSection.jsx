import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-green-50 px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-between">
      <div className="max-w-xl lg:w-1/2 text-center lg:text-left">
        

        <h1 className="text-5xl font-bold text-gray-800">
          Skill<span className="text-purple-600">Up</span>Now
        </h1>
        <p className="mt-4 text-2xl text-purple-700 font-semibold">
          India's No.1 Virtual Internship Platform
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Learn today for a better tomorrow
        </p>
        <button className="mt-6 bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700">
          REGISTER NOW
        </button>
      </div>

      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center h-full perspective">
        <div
          className="w-full h-[80vh]"
          style={{
            transformStyle: "preserve-3d",
            animation: "tiltFloat 6s ease-in-out infinite",
          }}
        >
          <img
            src="https://www.echelonedge.com/wp-content/uploads/2023/03/Cyber-security.png"
            alt="Hero Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes tiltFloat {
          0% {
            transform: rotateY(0deg) rotateX(0deg) translateY(0px);
          }
          25% {
            transform: rotateY(3deg) rotateX(1deg) translateY(-5px);
          }
          50% {
            transform: rotateY(0deg) rotateX(0deg) translateY(0px);
          }
          75% {
            transform: rotateY(-3deg) rotateX(-1deg) translateY(5px);
          }
          100% {
            transform: rotateY(0deg) rotateX(0deg) translateY(0px);
          }
        }

        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
