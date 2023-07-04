import { TPlayer, SortKey } from "../types";
import useSearch from "./useSearch";
import useSort from "./useSort";
import usePagination from "./usePagination";
import usePlayerTypeFilter from "./usePlayerTypeFilter";

export const useCricketersData = (
  players: TPlayer[],
  initialSearchName: string,
  initialPlayerType: string,
  initialSortKey: SortKey,
  initialPage: number,
  itemsPerPage: number
) => {
  const { filteredPlayers, playerType, setPlayerType } = usePlayerTypeFilter(
    players,
    initialPlayerType
  );
  const { searchResult, searchName, setSearchName } = useSearch(
    filteredPlayers,
    initialSearchName
  );
  const { sortedPlayers, sortKey, setSortKey } = useSort(
    searchResult,
    initialSortKey
  );
  const { paginatedPlayers, currentPage, totalPages, setCurrentPage } =
    usePagination(sortedPlayers, initialPage, itemsPerPage);

  return {
    paginatedPlayers,
    currentPage,
    totalPages,
    setCurrentPage,
    playerType,
    setPlayerType,
    searchName,
    setSearchName,
    sortKey,
    setSortKey,
  };
};
