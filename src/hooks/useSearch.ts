import { useState, useEffect } from "react";
import { TPlayer } from "../types";

const useSearch = (players: TPlayer[], initialSearchName = "") => {
  const [searchName, setSearchName] = useState<string>(initialSearchName);
  const [searchedPlayers, setSearchedPlayers] = useState<TPlayer[]>([]);

  useEffect(() => {
    if (searchName === "") {
      setSearchedPlayers(players);
    } else {
      setSearchedPlayers(
        players.filter((player) =>
          player?.name?.toLowerCase().includes(searchName.toLowerCase())
        )
      );
    }
  }, [players, searchName]);

  return { searchedPlayers, searchName, setSearchName };
};

export default useSearch;
