import React from "react";
import { Link } from "react-router";

const RouteError = () => {
  return (
   
      
      <div className="min-h-screen bg-[#060616] text-gray-200 flex items-center  justify-center px-6">
        <title>Error - 404</title>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Glowing circle */}
            <div className="absolute w-64 h-64 bg-linear-to-r from-purple-700 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            {/* Floating 404 box */}
            <div className="relative z-1 flex flex-col items-center gap-4 p-8 rounded-2xl bg-[#0f1117] border border-gray-800 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="bg-[#11131a] border border-gray-700 w-20 h-20 rounded-lg flex items-center justify-center text-4xl font-bold text-white drop-shadow-[0_10px_30px_rgba(128,90,213,0.15)]">
                  404
                </div>
                <div className="text-left">
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white">
                    Page not found
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 max-w-xs">
                   we couldn't find the page you're looking for. Maybe it
                    moved or the link is broken.
                  </p>
                </div>
              </div>

              {/* small action buttons */}
              <div className="mt-2 flex gap-3">
                <Link
                  to="/home"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
                  aria-label="Go to homepage"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default RouteError;
