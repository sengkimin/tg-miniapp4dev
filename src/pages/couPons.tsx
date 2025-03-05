import React from "react";
import { FaBars } from "react-icons/fa"; // For Hamburger Menu

const coupons = [
  {
    id: 1,
    title: "Special Coupon",
    subtitle: "3 Days of Free Access",
    validUntil: "31 Mar 2025",
    terms: "New members only. One-time use per person.",
    description: "Claim your free trial now & kickstart your fitness journey!",
    image: "https://source.unsplash.com/100x100/?gym,fitness", // Replace with actual image
  },
  {
    id: 2,
    title: "Special Coupon",
    subtitle: "3 Days of Free Access",
    validUntil: "31 Mar 2025",
    terms: "New members only. One-time use per person.",
    description: "Claim your free trial now & kickstart your fitness journey!",
    image: "https://source.unsplash.com/100x100/?gym,fitness",
  },
  {
    id: 3,
    title: "Special Coupon",
    subtitle: "3 Days of Free Access",
    validUntil: "31 Mar 2025",
    terms: "New members only. One-time use per person.",
    description: "Claim your free trial now & kickstart your fitness journey!",
    image: "https://source.unsplash.com/100x100/?gym,fitness",
  },
  {
    id: 4,
    title: "Special Coupon",
    subtitle: "3 Days of Free Access",
    validUntil: "31 Mar 2025",
    terms: "New members only. One-time use per person.",
    description: "Claim your free trial now & kickstart your fitness journey!",
    image: "https://source.unsplash.com/100x100/?gym,fitness",
  },
];

const Coupons = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full flex items-center justify-between px-4 py-3 border-b-2 border-blue-300">
        <FaBars className="text-2xl text-purple-800 cursor-pointer" />
        <h1 className="text-xl font-bold text-black">Hot Coupons</h1>
        <div className="w-10 h-10 border rounded-full flex items-center justify-center">
          <img
            src="https://source.unsplash.com/50x50/?gym,dumbbell"
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
      </div>

      {/* Coupons Section */}
      <div className="w-full max-w-md mt-4 space-y-4">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="bg-gray-100 p-4 rounded-xl shadow-md flex items-center space-x-4">
            {/* Image */}
            <img src={coupon.image} alt="Coupon" className="w-16 h-16 rounded-full object-cover" />

            {/* Coupon Details */}
            <div className="flex-1">
              <h2 className="text-md font-bold">{coupon.title}</h2>
              <p className="text-sm text-gray-600">{coupon.subtitle}</p>
              <p className="text-xs font-semibold">Valid Until: <span className="text-gray-600">{coupon.validUntil}</span></p>
              <p className="text-xs font-semibold">Terms: <span className="text-gray-600">{coupon.terms}</span></p>
              <p className="text-xs text-gray-600">{coupon.description}</p>
            </div>

            {/* Button */}
            <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full hover:bg-purple-700">
              JOIN US NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
