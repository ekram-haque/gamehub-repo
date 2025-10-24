import React from "react";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  console.log(game);
  return (
    <Link to={`/games/${game.id}`}>
      <div
        key={game.id}
        className="group relative bg-[#181826] rounded-2xl shadow-lg overflow-hidden border border-transparent hover:border-purple-500 hover:shadow-purple-700/30 transition-all duration-300"
      >
        {/* Game Image */}
        <div className="overflow-hidden">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between h-[130px]">
          <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors duration-300">
            {game.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {game.description.slice(0, 60)}...
          </p>

          {/* Ratings */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-yellow-400 font-bold">
              ⭐ {game.ratingAvg}
            </span>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-lg text-sm font-medium hover:opacity-90 transition duration-300">
              View Details
            </button>
          </div>
        </div>

        {/* Hover Overlay (optional fancy effect) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
    </Link>
  );
};

export default GameCard;
