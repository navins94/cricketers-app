import { useState, useEffect } from "react";
import getPlayers from "../api/get-players";
import { TPlayer } from "../types";

interface UsePlayersResult {
  allPlayers: TPlayer[];
  players: TPlayer[];
  loading: boolean;
  error: Error | null;
  currentPage: number;
  totalPages: number;
}

const usePlayers = (pageSize = 10): UsePlayersResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil((players?.length || 0) / pageSize);
  const paginatedPlayers = players?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return {
    players: paginatedPlayers,
    allPlayers: players,
    loading,
    error,
    currentPage,
    totalPages,
  };
};

export default usePlayers;
