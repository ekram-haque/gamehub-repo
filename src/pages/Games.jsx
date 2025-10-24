import React from "react";
import GameCard from "../components/GameCard";

import Container from "../components/Container";
import useGames from "../hooks/useGames";
import LoadingAnim from "../components/LoadingAnim";

const Games = () => {
  const { games, loading } = useGames();

  if (loading || games.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10 flex justify-center items-center h-screen bg-[#0b0b15]">
        <LoadingAnim />
      </div>
    );
  }

  // Filter out premium games
  const nonPremium = games?.filter((game) => game.category !== "Premium") || [];

  return (
    <div className="pt-[60px] pb-[100px] bg-[#0b0b15] min-h-screen text-white">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-400 mb-2">
            🎮 Top Rated Games
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Discover the most loved games — handpicked by rating & popularity.
          </p>
        </div>

        {/* Games Grid */}
        {nonPremium.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nonPremium.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10 font-semibold">
            No games available 😔
          </p>
        )}
      </Container>
    </div>
  );
};

export default Games;
