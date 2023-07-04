import { useState, useMemo } from "react";
import { TPlayer } from "../types";

interface UseSearchResult {
  searchResult: TPlayer[];
  searchName: string;
  setSearchName: (type: string) => void;
}

const useSearch = (
  players: TPlayer[],
  initialSearchName: string
): UseSearchResult => {
  const [searchName, setSearchName] = useState<string>(initialSearchName);

  const searchResult = useMemo(() => {
    return players.filter((player) =>
      searchName === ""
        ? true
        : player?.name?.toLowerCase().includes(searchName.toLowerCase())
    );
  }, [players, searchName]);

  return { searchResult, searchName, setSearchName };
};

export default useSearch;
