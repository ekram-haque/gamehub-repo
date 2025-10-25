import React from "react";

import GameCard from "./GameCard";
import useGames from "../hooks/useGames";
import { Link } from "react-router";
import LoadingAnim from "./LoadingAnim";

const TopGames = () => {
  const { games, loading } = useGames();
  if (loading || games.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10  flex justify-center items-center h-screen bg-[#0b0b15]">
        <LoadingAnim />
      </div>
    );
  }

  const topGames = [...games].sort((a, b) => b.ratingAvg - a.ratingAvg).slice(0, 7);

  return (
    <section className="bg-[#0f0f1a] py-16 text-white">
 
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Top Rated Games
        </h2>
        <p className="text-gray-400 mt-2">
          Discover the most loved games — handpicked by rating & popularity.
        </p>
      </div>

      

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8 px-6">
        {topGames.map((game) => (
          <Link to={`/games/${game.id}`}>
            <div className="group flex items-center gap-4 bg-[#181826] rounded-2xl p-4 border border-transparent hover:border-purple-500 hover:shadow-purple-700/30 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Image */}
              <div className="shrink-0 overflow-hidden rounded-xl">
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-20 h-20 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 truncate">
                  {game.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                  {game.description.slice(0, 60)}...
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-400 font-semibold text-sm">
                    ⭐ {game.ratingAvg}
                  </span>

                  <button className="bg-linear-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-md text-xs font-medium hover:opacity-90 transition duration-300">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopGames;
