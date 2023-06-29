import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getPlayers from "../api/get-players";
import { TPlayer } from "../types";

interface UsePlayersResult {
  allPlayers: TPlayer[];
  players: TPlayer[];
  loading: boolean;
  error: Error | null;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  searchName: string;
  setSearchName: (type: string) => void;
}

const usePlayers = (pageSize = 10): UsePlayersResult => {
  const location = useLocation();
  const history = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState<string>(
    () => searchParams.get("q") || ""
  );

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

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (searchName !== "") {
      newSearchParams.set("q", searchName);
    }

    const options = {
      search: newSearchParams.toString(),
    };
    history(options, { replace: true });
  }, [searchName]);

  const filteredPlayers = players.filter((player) =>
    searchName === ""
      ? true
      : player?.name?.toLowerCase().includes(searchName.toLowerCase())
  );

  const totalPages = Math.ceil((filteredPlayers?.length || 0) / pageSize);
  const paginatedPlayers = filteredPlayers?.slice(
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
    setCurrentPage,
    searchName,
    setSearchName,
  };
};

export default usePlayers;
