import React from "react";
import { useParams } from "react-router";
import useGames from "../hooks/useGames";
import LoadingAnim from "../components/LoadingAnim";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaDownload, FaStar } from "react-icons/fa";

const GameDetails = () => {
  const { id } = useParams();
  const { games, loading } = useGames();

  if (loading || games.length === 0)
    return (
      <div className="text-center text-gray-400 mt-10 flex justify-center items-center h-screen bg-[#0b0b15]">
        <LoadingAnim />
      </div>
    );

  const game = games.find((g) => g.id == id);
  if (!game)
    return <p className="text-center text-gray-400 mt-10">Game not found 😔</p>;

  const sizeFormat = (size) => {
    if (size > 1000) {
      return (size / 1000).toFixed(1) + " GB";
    } else {
      return size + " MB";
    }
  };

  const downloadFormat = (download) => {
    if (download >= 1000000000) {
      return (download / 1000000000).toFixed(1) + " B";
    }
    if (download >= 1000000) {
      return (download / 1000000).toFixed(1) + " M";
    }
    if (download >= 1000) {
      return (download / 1000).toFixed(1) + " K";
    } else {
      return download;
    }
  };

  return (
    <div className=" bg-[#0b0b15] text-gray-200 py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-[#121225] p-8 rounded-2xl shadow-xl border border-gray-700">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Game Cover */}
          <img
            className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] object-cover rounded-xl shadow-md"
            src={game.coverPhoto}
            alt={game.title}
          />

          {/* Game Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-pink-400 mb-1">
              {game.title}
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              Developed by{" "}
              <span className="text-pink-300 font-medium">
                {game.developer}
              </span>
            </p>
            <div>
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-70 transition duration-300 shadow-md"
              >
                Download {sizeFormat(game.size)}
              </a>
            </div>

            <hr className="my-4 border-gray-700" />

            {/* Game Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
              <div className="bg-[#1b1b2f] p-4 rounded-xl text-center flex flex-col justify-center items-center space-y-3">
                <FaDownload size={40} color="#9C27B0" />

                <p className="text-lg font-bold text-white mt-1">
                  {downloadFormat(game.downloads) || "N/A"}
                </p>
              </div>
              <div className="bg-[#1b1b2f] p-4 rounded-xl text-center flex flex-col justify-center items-center space-y-3">
                <FaStar size={40} color="#9C27B0" />
                <p className="text-gray-400 text-sm"></p>
                <p className="text-lg font-bold text-white mt-1">
                  {game.ratingAvg}
                </p>
              </div>
              <div className="bg-[#1b1b2f] p-4 rounded-xl text-center flex flex-col justify-center items-center space-y-3">
                <FcMoneyTransfer size={40} color="#9C27B0" />

                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-lg font-bold text-white mt-1">
                  {game.category === "Premium" ? `${game.price}` : `Free`}
                </p>
              </div>
            </div>

            {/* Game Description */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                About this Game
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {game.description ||
                  "No description available for this game at the moment."}
              </p>
            </div>
            {/* Game tags */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-2">Tags</h3>

              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
                {game.tags.map((tag) => (
                  <p className=" bg-linear-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-md font-semibold transition duration-300 shadow-md text-center">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
