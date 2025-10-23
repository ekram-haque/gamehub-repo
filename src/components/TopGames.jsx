import React from "react";
import useGames from "../hooks/usegames";

const TopGames = () => {
  const { games } = useGames();

  const topGames = [...games].sort((a, b) => b.ratings - a.ratings).slice(0, 7);
  console.log(topGames);

  return (
    <div className="py-[50px]  ">
      {/* games header section here  */}
      <div className=" text-center ">
        <h2 className="font-bold text-2xl ">Top Games </h2>
        <p>top games by ratings will show here.</p>
      </div>

      {/* games card show here  */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {topGames.map((game) => (
          <div
            key={game.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-32 h-32 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-bold">{game.title}</h2>
            <p className="text-gray-600">Rating: {game.ratings}</p>
            <p className="text-gray-500 text-sm">{game.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGames;
