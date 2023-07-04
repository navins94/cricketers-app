import { useState, useEffect } from "react";
import { TPlayer } from "../types";

interface UsePaginationResult {
  paginatedPlayers: TPlayer[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const usePagination = (
  players: TPlayer[],
  pageSize: number,
  initialPage = 1
): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [paginatedPlayers, setPaginatedPlayers] = useState<TPlayer[]>([]);

  useEffect(() => {
    const totalPages = Math.ceil(players.length / pageSize);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setPaginatedPlayers(players.slice(start, end));
  }, [players, currentPage, pageSize]);

  const totalPages = Math.ceil(players.length / pageSize);

  return { paginatedPlayers, currentPage, totalPages, setCurrentPage };
};

export default usePagination;
