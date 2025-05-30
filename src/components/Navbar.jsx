import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-6" /> 
        <span className="text-xl font-semibold text-green-600">Learning</span>
        <span className="text-xl font-semibold text-black">Hub</span>
      </div>

      <ul className="flex space-x-6 text-[#1c1c3b] font-medium">
        <li className="hover:text-green-600 cursor-pointer">Home</li>
        <li className="relative group cursor-pointer">
          <span className="hover:text-green-600">Internships ▾</span>
          <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-40">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Dev</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">AI/ML</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Marketing</li>
          </ul>
        </li>
        <li className="hover:text-green-600 cursor-pointer">About</li>
        <li className="hover:text-green-600 cursor-pointer">Contact</li>
      </ul>

      <div className="flex gap-3">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Register
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Login
        </button>
      </div>
    </nav>
  );
}
