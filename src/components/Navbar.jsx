import React from "react";
import { Link } from "react-router";
import Container from "./Container";
import img from "../assets/Gamehub.jpg";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-[#0f0f1a] shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Left - Mobile Menu + Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <div className="md:hidden dropdown dropdown-start">
              <button tabIndex={0} className="btn btn-ghost text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#181826] rounded-lg w-52"
              >
                <li>
                  <MyLink to="/home">Home</MyLink>
                </li>
                <li>
                  <MyLink to="/games">Games</MyLink>
                </li>
                <li>
                  <MyLink to="/premium">Premium</MyLink>
                </li>
                <li>
                  <MyLink to="/my-profile">My Profile</MyLink>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <Link to="/home" className="flex items-center gap-2">
              <img
                src={img}
                alt="GameHub Logo"
                className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-lg"
              />
              <span className="text-xl font-extrabold text-white">
                Game<span className="text-purple-500">Hub</span>
              </span>
            </Link>
          </div>

          {/* Center - Menu (Desktop Only) */}
          <div className="hidden md:flex gap-8">
            <MyLink to="/home" className="text-gray-300 hover:text-purple-400">
              Home
            </MyLink>
            <MyLink to="/games" className="text-gray-300 hover:text-purple-400">
              Games
            </MyLink>
            <MyLink
              to="/premium"
              className="text-gray-300 hover:text-purple-400"
            >
              Premium
            </MyLink>
            <MyLink
              to="/my-profile"
              className="text-gray-300 hover:text-purple-400"
            >
              My Profile
            </MyLink>
          </div>

          {/* Right - Login/Signup Button */}
          <div className="">
            <a
              href="#"
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-md font-semibold hover:opacity-70 transition duration-300 shadow-md"
            >
              Register
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
