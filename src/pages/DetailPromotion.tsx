import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import img from "../Gym_12.23-19.webp";

const Detail: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center px-5 py-6">
      <div
        className="absolute inset-0 bg-white z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 60%)" }}
      ></div>

      <div className="relative z-20 flex flex-col min-h-screen w-full">
        <header className="flex justify-between items-center p-6 w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <button
            className="text-[#9747FF] z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Exclusive Promotion</h1>
        </header>

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

        {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} />}

        <div className="mt-24 text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold text-gray-900">LIMITED-TIME OFFER</h1>
          <p className="text-lg text-gray-700 mt-3">Unlock exclusive rewards and discounts. Don’t miss out!</p>
        </div>

        <div className="w-full max-w-3xl mt-12 space-y-8">
          <div className="bg-[#625F5F] rounded-2xl overflow-hidden shadow-2xl transition duration-300 hover:scale-[1.05]">
            <img
              src={img}
              alt="Detail Image"
              className="w-full p-2 h-96 object-cover rounded-2xl"
            />
            <div className="p-6 text-white text-center">
              <p className="text-xl font-semibold">🎉 Special Promotion</p>
              <p className="text-3xl font-bold mt-2">Exclusive Offer Just for You!</p>
              <p className="text-lg mt-4 leading-relaxed">
                Get access to premium features and amazing benefits. Limited slots available, claim your spot today!
              </p>
              <button className="bg-[#9747FF] hover:bg-[#8A3DFF] text-white font-bold rounded-full px-6 py-3 mt-6 text-lg tracking-wide transition-colors duration-300 shadow-lg">
              CLAIM NOW
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
