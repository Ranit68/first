import React, { useState, useRef, useEffect } from "react";
import { FaTasks, FaBell, FaEnvelope, FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userProfileRef = useRef(null);
  const userName = "John Doe";
  const userBalance = "$1,234.56";
  const userProfileImage = "https://via.placeholder.com/150";

  const location = useLocation();

  const getSearchPlaceholder = () => {
    switch (location.pathname) {
      case "/projects":
        return "Search for Project";
      case "/freelancer":
        return "Search for Freelancer";
      case "/contest":
        return "Search for Contest";
      case "/List":
        return "Search for List";
      default:
        return "Search...";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black shadow-lg mb-0">
      <div className="container mx-auto px-4 py-3 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-blue-600 hidden md:block">
            Freelancer Clone
          </h1>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 flex items-center space-x-1"
            >
              <FaTasks />
              <span>Manage</span>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              Browse
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 flex items-center space-x-1"
            >
              <FaUsers />
              <span>Groups</span>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 flex items-center space-x-1"
            >
              <FaBell />
              <span>Notifications</span>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 flex items-center space-x-1"
            >
              <FaEnvelope />
              <span>Messaging</span>
            </a>
            <div className="relative flex items-center space-x-3">
              <img
                className="w-8 h-8 rounded-full cursor-pointer"
                src={userProfileImage}
                alt="User Profile"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                ref={userProfileRef}
              />
              <div className="flex flex-col text-gray-800">
                <span className="text-sm">{userName}</span>
                <span className="text-xs text-gray-600">{userBalance}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-2">
          <p className="text-sm text-gray-700 font-bold mb-2">
            {getSearchPlaceholder()}
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder={getSearchPlaceholder()}
              className="w-full p-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center border-t border-gray-200 pt-4">
          <Link
            to="/projects"
            className={`px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold ${
              location.pathname === "/projects" ? "border-b-4 border-white" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/freelancer"
            className={`px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold ${
              location.pathname === "/freelancer"
                ? "border-b-4 border-white"
                : ""
            }`}
          >
            Freelancer
          </Link>
          <Link
            to="/contest"
            className={`px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold ${
              location.pathname === "/contest" ? "border-b-4 border-white" : ""
            }`}
          >
            Contest
          </Link>
          <Link
            to="/list"
            className={`px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold ${
              location.pathname === "/list" ? "border-b-4 border-white" : ""
            }`}
          >
            List
          </Link>
          <Link
            to="/myproject"
            className={`px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold ${
              location.pathname === "/myproject"
                ? "border-b-4 border-white"
                : ""
            }`}
          >
            MyProject
          </Link>
        </div>
      </div>

      <div className="md:hidden absolute top-2 right-2 p-2">
        <img
          className="w-8 h-8 rounded-full cursor-pointer"
          src={userProfileImage}
          alt="User Profile"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={userProfileRef}
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 top-14 mt-2 w-full bg-white shadow-lg z-50">
          <div className="relative">
            <div className="flex flex-col p-4">
              <Link
                to="/projects"
                className={`py-2 px-4 font-semibold ${
                  location.pathname === "/projects"
                    ? "text-gray-800 border-b-4 border-white"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/freelancer"
                className={`py-2 px-4 font-semibold ${
                  location.pathname === "/freelancer"
                    ? "text-gray-800 border-b-4 border-white"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Freelancer
              </Link>
              <Link
                to="/contest"
                className={`py-2 px-4 font-semibold ${
                  location.pathname === "/contest"
                    ? "text-gray-800 border-b-4 border-white"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contest
              </Link>
              <Link
                to="/list"
                className={`py-2 px-4 font-semibold ${
                  location.pathname === "/list"
                    ? "text-gray-800 border-b-4 border-white"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                List
              </Link>
              <Link
                to="/myproject"
                className={`px-4 py-2 text-gray-800 hover:text-blue-600 font-semibold ${
                  location.pathname === "/myproject"
                    ? "border-b-4 border-white"
                    : ""
                }`}
              >
                MyProject
              </Link>
              <a
                href="#"
                className="py-2 px-4 text-gray-800 hover:text-blue-600 flex items-center space-x-1"
              >
                <FaTasks />
                <span>Manage</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 text-gray-800 hover:text-blue-600"
              >
                Browse
              </a>
              <a
                href="#"
                className="py-2 px-4 text-gray-800 hover:text-blue-600 flex items-center space-x-1"
              >
                <FaUsers />
                <span>Groups</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 text-gray-800 hover:text-blue-600 flex items-center space-x-1"
              >
                <FaBell />
                <span>Notifications</span>
              </a>
              <a
                href="#"
                className="py-2 px-4 text-gray-800 hover:text-blue-600 flex items-center space-x-1"
              >
                <FaEnvelope />
                <span>Messaging</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
