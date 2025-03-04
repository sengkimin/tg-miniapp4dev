import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../Gym_12.23-19.webp";

const Promotion: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center px-5 py-6">
      <div
        className="absolute inset-0 bg-white z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 60%)" }}
      ></div>

      <div className="relative z-20 flex flex-col min-h-screen w-full">
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

        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">NEW</h1>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">PROMOTIONS</h1>
        </div>

        <div className="w-full max-w-md mt-8 space-y-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-[#625F5F] rounded-xl overflow-hidden shadow-lg transition duration-300 hover:scale-[1.02]"
            >
              <img
                src={img}
                alt="Gym"
                className="w-full p-1.5 h-56 object-cover rounded-2xl"
              />
              <div className="p-3 text-white">
                <p className="text-md font-semibold flex items-start">🔥 LIMITED TIME OFFER! 🔥</p>
                <p className="text-lg font-bold mt-2">
                  Get <span className="text-yellow-400">50% OFF</span> on all membership plans! 🏋️
                </p>
                <button 
                                onClick={() => navigate("/detail")}

                className="mt-4 ml-44 bg-purple-600 text-white py-3 px-7 rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;


