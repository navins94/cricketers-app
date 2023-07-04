import { useState, useEffect } from "react";
import { sortPlayers } from "../utils";
import { TPlayer, SortKey } from "../types";

interface UseSortResult {
  sortedPlayers: TPlayer[];
  sortKey: SortKey;
  setSortKey: (key: SortKey) => void;
}

interface UseSortParams {
  players: TPlayer[];
  initialSortKey: SortKey;
}

const useSort = ({ players, initialSortKey }: UseSortParams): UseSortResult => {
  const [sortKey, setSortKey] = useState<SortKey>(initialSortKey);
  const [sortedPlayers, setSortedPlayers] = useState<TPlayer[]>([]);

  useEffect(() => {
    setSortedPlayers(sortPlayers(players, sortKey));
  }, [players, sortKey]);

  return { sortedPlayers, sortKey, setSortKey };
};

export default useSort;
