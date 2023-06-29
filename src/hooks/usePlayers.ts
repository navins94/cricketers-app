import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getPlayers from "../api/get-players";
import { sortPlayers } from "../utils";
import { TPlayer, SortKey } from "../types";

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
  sortKey: SortKey;
  setSortKey: (key: SortKey) => void;
  playerType: string;
  setPlayerType: (type: string) => void;
}

const usePlayers = (pageSize = 10): UsePlayersResult => {
  const location = useLocation();
  const history = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [playerType, setPlayerType] = useState<string>(
    () => searchParams.get("type") || "all"
  );
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
    if (playerType !== "all") {
      newSearchParams.set("type", playerType);
    }
    if (searchName !== "") {
      newSearchParams.set("q", searchName);
    }

    const options = {
      search: newSearchParams.toString(),
    };
    history(options, { replace: true });
  }, [playerType, searchName]);

  const filteredPlayers = players
    .filter((player) =>
      playerType === "all" ? true : playerType === player.type
    )
    .filter((player) =>
      searchName === ""
        ? true
        : player?.name?.toLowerCase().includes(searchName.toLowerCase())
    );

  const sortedPlayers = sortPlayers(filteredPlayers, sortKey);

  const totalPages = Math.ceil((sortedPlayers?.length || 0) / pageSize);
  const paginatedPlayers = sortedPlayers?.slice(
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
    sortKey,
    setSortKey,
    playerType,
    setPlayerType,
  };
};

export default usePlayers;
