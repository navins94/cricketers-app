import { useState, useMemo } from "react";
import { TPlayer } from "../types";

interface UsePlayerTypeFilterResult {
  filteredPlayers: TPlayer[];
  playerType: string;
  setPlayerType: (type: string) => void;
}

const usePlayerTypeFilter = (
  players: TPlayer[],
  initialPlayerType: string
): UsePlayerTypeFilterResult => {
  const [playerType, setPlayerType] = useState<string>(initialPlayerType);

  const filteredPlayers = useMemo(() => {
    return players.filter((player) =>
      playerType === "all" ? true : playerType === player.type
    );
  }, [players, playerType]);

  return { filteredPlayers, playerType, setPlayerType };
};

export default usePlayerTypeFilter;
