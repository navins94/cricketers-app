import { useState, useMemo } from "react";
import { TPlayer } from "../types";

interface UsePaginationResult {
  paginatedPlayers: TPlayer[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const usePagination = (
  players: TPlayer[],
  initialPage: number,
  pageSize: number
): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const totalPages = useMemo(
    () => Math.ceil(players.length / pageSize),
    [players, pageSize]
  );
  const paginatedPlayers = useMemo(
    () => players.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [players, currentPage, pageSize]
  );

  return { paginatedPlayers, currentPage, totalPages, setCurrentPage };
};

export default usePagination;
