import React from "react";

import GameCard from "../components/GameCard";
import useGames from "../hooks/useGames";
import Container from "../components/Container";
import LoadingAnim from "../components/LoadingAnim";

const PremiumGames = () => {
  const { games, loading } = useGames();

  if (loading || games.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10 flex justify-center items-center h-screen bg-[#0b0b15]">
        <LoadingAnim />
      </div>
    );
  }

  const premiumGames = games.filter((game) => game.category === "Premium");

  return (
    <div className="pt-[50px]">
      <title>GameHub - Premium games</title>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-15">
          {premiumGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PremiumGames;
