import React from "react";

const LoadingAnim = () => {
  const letters = ["G", "a", "m", "e", "H", "u", "b"];
  return (
    <div className="fixed inset-0 bg-[#0f0f1a] flex flex-col justify-center items-center z-50">
      <div className="flex space-x-2 text-4xl md:text-6xl font-extrabold text-white">
        {letters.map((letter, idx) => (
          <span
            key={idx}
            className="animate-bounce"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <p className="mt-6 text-gray-400 text-lg md:text-xl">Loading...</p>
    </div>
  );
};

export default LoadingAnim;
