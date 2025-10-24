import React from "react";
import useGames from "../hooks/useGames";

const Category = () => {
  const { games } = useGames();

  // Extract unique categories
  const gameCategory = [];
  games.forEach((game) => {
    if (!gameCategory.includes(game.category)) {
      gameCategory.push(game.category);
    }
  });

  // Count games in each category
  const categoryCounts = {};
  gameCategory.forEach((category) => {
    const count = games.filter((game) => game.category === category).length;
    categoryCounts[category] = count;
  });

  return (
    <section className="relative mt-[30px] py-16 bg-[#0f0f1a] text-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Game Categories
        </h2>
        <p className="text-gray-400 mt-2">
          Explore your favorite genres — from action to racing.
        </p>
      </div>

      {/* Category Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
        {gameCategory.map((category, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-[#1a1a2e] to-[#241b3a] hover:from-purple-700 hover:to-pink-700 transition-all duration-300 rounded-2xl shadow-lg p-5 cursor-pointer relative overflow-hidden border border-transparent hover:border-purple-500"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2 capitalize">{category}</h3>
              <p className="text-gray-400 text-sm">
                {categoryCounts[category]} Games
              </p>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-3 right-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
