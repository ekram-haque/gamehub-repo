import axios from "axios";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("/games.json")
      .then((data) => setGames(data.data))
      .finally(() => setLoading(false));
  }, []);
  return { games, loading };
};
export default useGames;
