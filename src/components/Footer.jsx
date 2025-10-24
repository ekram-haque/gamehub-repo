import React from "react";
import { Link } from "react-router";
import img from "../assets/Gamehub.jpg";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-white py-10 ">
      <Container>
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
          {/* Top Section - Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Info */}
            <div className="space-y-6">
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
              <p className="text-sm text-purple-200 leading-relaxed">
                Explore the world of gaming! Discover, play, and stay updated
                with the latest and top-rated games across all genres.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 border-b border-purple-400 inline-block pb-1">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 border-b border-purple-400 inline-block pb-1">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start gap-4 mt-3">
                {/* Twitter */}
                <a href="#" className="hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white hover:text-purple-300"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white hover:text-purple-300"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white hover:text-purple-300"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-purple-500 pt-6 text-sm text-purple-200 text-center">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold">GameHub Ltd</span> — All rights
              reserved.
            </p>
          </div>
        </div>{" "}
      </Container>
    </footer>
  );
};

export default Footer;
