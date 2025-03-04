"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import img from "../Gym_12.23-19.webp";

export default function FitnessClub() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    
    <div className="relative min-h-screen w-full bg-white font-sans">
      {/* Header with Menu Button */}
      <header className="flex justify-between items-center p-4 w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <button
          className="text-[#9747FF] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="rounded-full border-2 border-[#9747FF] p-1">
          <div className="rounded-full bg-[#9747FF] p-2">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 7H5C3.89543 7 3 7.89543 3 9V11C3 12.1046 3.89543 13 5 13H6.5M6.5 7V13M6.5 7H17.5M17.5 7H19C20.1046 7 21 7.89543 21 9V11C21 12.1046 20.1046 20.1046 21 19 13H17.5M17.5 7V13M17.5 13H6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <nav>
            <ul className="space-y-6 text-lg font-semibold text-gray-800">
              {[
                { name: "Home", path: "/" },
                { name: "Promotion", path: "/promotion" },
                { name: "Branch & Contact", path: "/branch-contact" },
                { name: "Workout", path: "/workout" },
                { name: "Member", path: "/member" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`block transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-[#9747FF] font-bold"
                        : "hover:text-[#9747FF]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Close menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-8 pt-24 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">FITNESS CLUB.</h1>
        <p className="text-[#9747FF] font-semibold text-xl tracking-wide mt-2">
          NO PAIN... NO GAIN
        </p>
        <p className="text-xl text-gray-700 max-w-[400px] mx-auto leading-relaxed mt-4">
          Hulk Gym is where strength meets motivation—train with the best, push your limits, and unlock your full
          potential!
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#9747FF] hover:bg-[#8A3DFF] text-white font-semibold rounded-full px-10 py-4 text-lg tracking-wide transition-colors duration-300">
            JOIN US NOW
          </button>
        </div>
      </main>

      {/* Gym Image */}
      <div className="mt-10">
        <img
          src={img}
          alt="gym"
          className="w-full h-[500px] object-cover object-center rounded-se-full"
        />
      </div>
    </div>
  );
}
