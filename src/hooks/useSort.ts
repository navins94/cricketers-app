import { useState, useMemo } from "react";
import { sortPlayers } from "../utils";
import { TPlayer, SortKey } from "../types";

interface UseSortResult {
  sortedPlayers: TPlayer[];
  sortKey: SortKey;
  setSortKey: (key: SortKey) => void;
}

const useSort = (
  players: TPlayer[],
  initialSortKey: SortKey = "name"
): UseSortResult => {
  const [sortKey, setSortKey] = useState<SortKey>(initialSortKey);

  const sortedPlayers = useMemo(() => {
    return sortPlayers(players, sortKey);
  }, [players, sortKey]);

  return { sortedPlayers, sortKey, setSortKey };
};

export default useSort;
