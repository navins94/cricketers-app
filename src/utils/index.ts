import { TPlayer, SortKey } from "../types";

export const calculateAge = (dob: number | null | undefined) => {
  if (dob) {
    const ageDifMs = Date.now() - dob;
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return 0;
};

export const formatDate = (timestamp: number | null | undefined) => {
  if (timestamp) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }
  return 0;
};

export const sortPlayers = (players: TPlayer[], sortBy: SortKey): TPlayer[] => {
  let sortedPlayers: TPlayer[];
  switch (sortBy) {
    case "name":
      sortedPlayers = [...players].sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );
      break;
    case "rank":
      sortedPlayers = [...players].sort(
        (a, b) => (a.rank || 0) - (b.rank || 0)
      );
      break;
    case "age":
      sortedPlayers = [...players].sort(
        (a, b) => calculateAge(a.dob) - calculateAge(b.dob)
      );
      break;
    default:
      sortedPlayers = players;
  }
  return sortedPlayers;
};
