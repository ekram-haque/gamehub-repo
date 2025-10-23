import React from "react";
import useGames from "../hooks/usegames";

const Category = () => {
  const { games } = useGames();

  const gameCategory = [];
  games.forEach((game) => {
    if (!gameCategory.includes(game.category)) {
      gameCategory.push(game.category);
    }
  });
  console.log(gameCategory);
  const categoryCounts = {};
gameCategory.forEach(category => {
  const count = games.filter(game => game.category === category).length;
  categoryCounts[category] = count;
});

console.log(categoryCounts);

  return (
    <div className="relative  px-6 py-5">
      <div className="relative  rounded-xl p-6 pt-12 bg-purple-700 shadow-sm">
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <div className="bg-purple-300 px-4 py-2 rounded-md shadow-md border text-center">
            <h3 className="text-sm font-semibold">Categories</h3>
          </div>
        </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {gameCategory.map(category => (
        <div
          key={category}
          className="bg-purple-500 shadow-md rounded-lg p-4 flex justify-between items-center"
        >
          <h2 className="text-lg font-bold text-white">{category}</h2>
          <p className="text-gray-300">{categoryCounts[category]} Games</p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Category;
