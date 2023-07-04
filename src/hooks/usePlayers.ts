import { useState, useEffect } from "react";
import getPlayers from "../api/get-players";
import { TPlayer } from "../types";

interface UsePlayersResult {
  players: TPlayer[];
  loading: boolean;
  error: Error | null;
}

const usePlayers = (): UsePlayersResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [players, setPlayers] = useState<TPlayer[]>([]);

  useEffect(() => {
    setLoading(true);
    getPlayers()
      .then((players) => {
        setPlayers(players);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { players, loading, error };
};

export default usePlayers;
